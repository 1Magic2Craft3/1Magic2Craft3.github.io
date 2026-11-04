import fs from "node:fs/promises";
import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";
import { generateImageManifest } from "./generate-image-manifest.mjs";
import { REPO_ROOT, IMAGES_ROOT, GENERATED_IMAGES_ROOT, IMAGE_VARIANTS, listOriginalPhotos, orientedDimensions, variantsForWidth } from "./image-settings.mjs";

const settingsFile = path.join(REPO_ROOT, "generated", "image-settings.json");
const sourcesFile = path.join(REPO_ROOT, "generated", "image-sources.json");
const settings = { version: 1, format: "webp", effort: 4, variants: IMAGE_VARIANTS };
// Cache validation reads files we may replace; release them before Windows rename.
sharp.cache(false);
sharp.concurrency(2);

async function hashPhoto(input) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(input)) hash.update(chunk);
  return hash.digest("hex");
}

async function readSourceHashes() {
  try {
    const previous = JSON.parse(await fs.readFile(sourcesFile, "utf8"));
    return previous?.version === 1 && previous.sources && typeof previous.sources === "object" ? previous.sources : {};
  } catch (error) {
    if (error.code === "ENOENT" || error instanceof SyntaxError) return {};
    throw error;
  }
}

async function validCachedImage(output, expectedWidth) {
  try {
    const metadata = await sharp(output).metadata();
    return metadata.format === "webp" && metadata.width === expectedWidth && metadata.height > 0;
  } catch {
    return false;
  }
}

async function buildImages(photos, settingsUnchanged, previousSources) {
  const wanted = new Set();
  const sources = {};
  let cursor = 0, completed = 0, built = 0, reused = 0;
  async function worker() {
    while (cursor < photos.length) {
      const photo = photos[cursor++];
      const sourceKey = "Images/" + photo.folder + "/" + photo.name;
      // Copied or renumbered photos can keep old dates; compare their contents.
      const sourceHash = await hashPhoto(photo.input);
      const sourceUnchanged = previousSources[sourceKey] === sourceHash;
      sources[sourceKey] = sourceHash;
      const metadata = await sharp(photo.input).metadata();
      const { width } = orientedDimensions(metadata);
      if (!width) throw new Error("Cannot read photo dimensions: " + photo.input);
      const outputFolder = path.join(GENERATED_IMAGES_ROOT, photo.folder);
      await fs.mkdir(outputFolder, { recursive: true });
      for (const variant of variantsForWidth(width)) {
        const output = path.join(outputFolder, photo.index + "-" + variant.suffix + ".webp");
        wanted.add(output);
        if (settingsUnchanged && sourceUnchanged && await validCachedImage(output, Math.min(width, variant.width))) {
          reused += 1;
          continue;
        }
        const temporary = output + ".tmp-" + process.pid;
        try {
          await sharp(photo.input).rotate()
            .resize({ width: variant.width, withoutEnlargement: true })
            .webp({ quality: variant.quality, effort: settings.effort })
            .toFile(temporary);
          await fs.rename(temporary, output);
          built += 1;
        } finally {
          await fs.rm(temporary, { force: true });
        }
      }
      completed += 1;
      if (completed % 40 === 0 || completed === photos.length) console.log("Processed " + completed + "/" + photos.length + " photos.");
    }
  }
  // Bound memory and CPU use when decoding large camera originals.
  const results = await Promise.allSettled([worker(), worker()]);
  const failure = results.find((result) => result.status === "rejected");
  if (failure) throw failure.reason;
  return { wanted, built, reused, sources };
}

async function removeObsoleteImages(photos, wanted) {
  let removed = 0, removedBytes = 0;
  // Only remove known generated names backed by a retained original.
  const originals = new Map();
  for (const photo of photos) {
    if (!originals.has(photo.folder)) originals.set(photo.folder, new Set());
    originals.get(photo.folder).add(photo.index);
  }
  for (const [folder, indexes] of originals) {
    const directory = path.join(IMAGES_ROOT, folder);
    for (const name of await fs.readdir(directory)) {
      const match = /^(\d+)-(thumb|card|hero)\.(webp|jpe?g)$/i.exec(name);
      if (!match || !indexes.has(Number(match[1]))) continue;
      const file = path.join(directory, name);
      removedBytes += (await fs.stat(file)).size;
      await fs.unlink(file);
      removed += 1;
    }
  }
  for (const folder of await fs.readdir(GENERATED_IMAGES_ROOT, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    const directory = path.join(GENERATED_IMAGES_ROOT, folder.name);
    for (const name of await fs.readdir(directory)) {
      const file = path.join(directory, name);
      if (!/^\d+-(small|large)\.webp$/.test(name) || wanted.has(file)) continue;
      removedBytes += (await fs.stat(file)).size;
      await fs.unlink(file);
      removed += 1;
    }
    if (!(await fs.readdir(directory)).length) await fs.rmdir(directory);
  }
  return { removed, removedBytes };
}

async function main() {
  const photos = await listOriginalPhotos();
  if (!photos.length) throw new Error("No numeric original photos found in Images/<species>/.");
  const previousSettings = await fs.readFile(settingsFile, "utf8").catch(() => "");
  const previousSources = await readSourceHashes();
  const result = await buildImages(photos, previousSettings === JSON.stringify(settings), previousSources);
  // Validate every new image and atomically update the catalog before cleanup.
  await generateImageManifest();
  const cleanup = await removeObsoleteImages(photos, result.wanted);
  await fs.writeFile(settingsFile, JSON.stringify(settings));
  const temporarySources = sourcesFile + ".tmp-" + process.pid;
  try {
    const sources = Object.fromEntries(Object.entries(result.sources).sort(([a], [b]) => a.localeCompare(b)));
    await fs.writeFile(temporarySources, JSON.stringify({ version: 1, sources }));
    await fs.rename(temporarySources, sourcesFile);
  } finally {
    await fs.rm(temporarySources, { force: true });
  }
  console.log(JSON.stringify({ photos: photos.length, generatedFiles: result.wanted.size, built: result.built, reused: result.reused, ...cleanup }));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
