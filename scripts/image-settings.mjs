import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const IMAGES_ROOT = path.join(REPO_ROOT, "Images");
export const GENERATED_IMAGES_ROOT = path.join(REPO_ROOT, "generated", "images");
export const IMAGE_VARIANTS = [
  { suffix: "small", width: 480, quality: 78 },
  { suffix: "large", width: 1600, quality: 82 },
];

export function variantsForWidth(width) {
  // Small originals only need one output; never create two identical sizes.
  return IMAGE_VARIANTS.filter((variant, index) => index === 0 || width > IMAGE_VARIANTS[index - 1].width);
}

export function orientedDimensions(metadata) {
  const rotated = [5, 6, 7, 8].includes(metadata.orientation);
  return { width: rotated ? metadata.height : metadata.width, height: rotated ? metadata.width : metadata.height };
}

export async function listOriginalPhotos() {
  const directories = await fs.readdir(IMAGES_ROOT, { withFileTypes: true });
  const photos = [];
  for (const directory of directories.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const names = (await fs.readdir(path.join(IMAGES_ROOT, directory.name)))
      .filter((name) => /^\d+\.(jpe?g|png)$/i.test(name))
      .sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
    const indexes = new Set();
    for (const name of names) {
      const index = Number.parseInt(name);
      if (indexes.has(index)) throw new Error("Duplicate photo number " + index + " in Images/" + directory.name);
      indexes.add(index);
      photos.push({ folder: directory.name, name, index, input: path.join(IMAGES_ROOT, directory.name, name) });
    }
  }
  return photos;
}
