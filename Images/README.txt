Keep only original bird photos in these folders:
  Images/Australian_Magpie/1.jpg

After adding or changing photos:
  npm install
  npm run build:images

The build keeps your originals unchanged and writes WebP copies separately:
  generated/images/Australian_Magpie/1-small.webp  (up to 480px wide)
  generated/images/Australian_Magpie/1-large.webp  (up to 1600px wide)

Small originals need only one generated size. Unchanged, valid outputs are reused.
The old thumb/card/hero JPEG and WebP copies are removed only after the new
images and image-manifest.js have been validated. Originals are never removed.

Commit/upload generated/ and image-manifest.js along with the site. GitHub Pages
serves these files directly; visitors do not need an image service or build step.

The site uses responsive images, native lazy loading and recorded dimensions.
The viewer displays the WebP copy; its Original link opens the untouched photo.
To re-index already-generated photos without resizing:
  npm run build:manifest

To choose which photos appear in Photo Album, edit album-picks.js. Each entry
uses a species name from birds-data.js and the numeric photo filename.
