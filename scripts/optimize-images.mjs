import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  "assets/fixie-hero.jpg",
  "assets/fixie-angle-front.jpg",
  "assets/fixie-cockpit-close.jpg",
  "assets/fixie-seat-fork.jpg",
  "assets/fixie-rear-angle.jpg",
];

const maxWidth = 1800;
const quality = 82;

for (const imagePath of images) {
  const absolutePath = path.join(process.cwd(), imagePath);
  const original = await fs.stat(absolutePath);
  const source = sharp(absolutePath);
  const metadata = await source.metadata();
  const buffer = await source
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();

  const tempPath = `${absolutePath}.tmp`;
  await fs.writeFile(tempPath, buffer);
  await fs.rename(tempPath, absolutePath);

  const beforeKb = Math.round(original.size / 1024);
  const afterKb = Math.round(buffer.length / 1024);
  const dimensions = `${metadata.width ?? "?"}x${metadata.height ?? "?"}`;

  console.log(`${imagePath} ${dimensions}: ${beforeKb}KB -> ${afterKb}KB`);
}
