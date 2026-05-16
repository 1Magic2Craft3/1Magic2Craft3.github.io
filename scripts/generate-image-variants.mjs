/**
 * Builds responsive WebP + JPEG derivatives next to original files under Images/<folder>/.
 * Numeric originals like 1.jpg become 1-thumb.webp, 1-thumb.jpg, and similar card/hero sizes.
 */
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const IMAGES_ROOT = path.join(REPO_ROOT, "Images");

const VARIANTS = [
  { suffix: "thumb", width: 520 },
  { suffix: "card", width: 1040 },
  { suffix: "hero", width: 1920 },
];

const ORIGINAL_RE = /^(\d+)\.(jpe?g|png)$/i;

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function processOriginal(filePath, baseNameWithoutExt) {
  const dir = path.dirname(filePath);
  const stemPath = path.join(dir, baseNameWithoutExt);

  let metaWidth;
  try {
    const meta = await sharp(filePath).rotate().metadata();
    metaWidth = meta.width ?? 1;
  } catch (err) {
    console.warn(`Skipping (unreadable): ${filePath}`, err.message);
    return;
  }

  for (const { suffix, width: maxWidth } of VARIANTS) {
    const outWebp = `${stemPath}-${suffix}.webp`;
    const outJpg = `${stemPath}-${suffix}.jpg`;

    if ((await exists(outWebp)) && (await exists(outJpg))) {
      console.log(`SKIP ${baseNameWithoutExt}-${suffix}: already exists`);
      continue;
    }

    try {
      const pipelineBase = sharp(filePath).rotate();
      let resize = pipelineBase;
      if (metaWidth > maxWidth) {
        resize = pipelineBase.resize({ width: maxWidth, fit: "inside", withoutEnlargement: true });
      }

      await resize
        .clone()
        .webp({ quality: 78, effort: 5 })
        .toFile(outWebp);

      await resize
        .clone()
        .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" })
        .toFile(outJpg);

      console.log(`OK ${baseNameWithoutExt}-${suffix}: ${path.relative(REPO_ROOT, outWebp)}`);
    } catch (err) {
      console.warn(`Failed variant ${suffix} for ${filePath}:`, err.message);
    }
  }
}

async function walkImagesDir(dirPath) {
  let entries;
  try {
    entries = await fs.readdir(dirPath, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await walkImagesDir(full);
      continue;
    }
    const match = ORIGINAL_RE.exec(entry.name);
    if (!match) continue;

    const baseNameWithoutExt = path.basename(entry.name, path.extname(entry.name));

    await processOriginal(full, baseNameWithoutExt);
  }
}

async function main() {
  if (!(await exists(IMAGES_ROOT))) {
    console.error(`Missing Images folder: ${IMAGES_ROOT}`);
    process.exitCode = 1;
    return;
  }

  await walkImagesDir(IMAGES_ROOT);
  console.log("Image variants generation finished.");
}

main();
