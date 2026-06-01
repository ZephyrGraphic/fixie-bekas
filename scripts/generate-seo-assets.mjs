import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const width = 1200;
const height = 630;

await fs.mkdir(publicDir, { recursive: true });

const heroBuffer = await sharp(path.join(process.cwd(), "assets/fixie-hero.jpg"))
  .resize(width, height, { fit: "cover", position: "center" })
  .modulate({ saturation: 1.08, brightness: 0.78 })
  .toBuffer();

const ogOverlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#14060b" stop-opacity="0.96"/>
        <stop offset="58%" stop-color="#14060b" stop-opacity="0.64"/>
        <stop offset="100%" stop-color="#0b0d10" stop-opacity="0.18"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#ff527c"/>
        <stop offset="100%" stop-color="#008ee6"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <path d="M0 504 L358 504 L284 630 L0 630 Z" fill="#ff527c" opacity="0.9"/>
    <path d="M910 0 L1200 0 L1200 210 L1004 210 Z" fill="#008ee6" opacity="0.84"/>
    <rect x="68" y="74" width="274" height="46" rx="23" fill="#0b0d10" stroke="#ff527c" stroke-width="3"/>
    <text x="92" y="104" fill="#ff527c" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="900">FIXIE BEKAS READY</text>
    <text x="66" y="226" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="900">KAI FIXIE</text>
    <text x="66" y="316" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900">MVNDV2 AERO/GEO</text>
    <text x="66" y="394" fill="#d9d8d1" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700">Rp 2 Juta | 700x25c | Cisaat Sukabumi</text>
    <rect x="66" y="456" width="276" height="58" rx="29" fill="url(#accent)" stroke="#0b0d10" stroke-width="4"/>
    <text x="96" y="494" fill="#0b0d10" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="900">CHAT WHATSAPP</text>
  </svg>
`);

await sharp(heroBuffer)
  .composite([{ input: ogOverlay, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(publicDir, "og-image.jpg"));

const iconSvg = Buffer.from(`
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect width="512" height="512" rx="104" fill="#0b0d10"/>
    <circle cx="256" cy="256" r="170" fill="none" stroke="#7f1d2f" stroke-width="46"/>
    <circle cx="256" cy="256" r="118" fill="none" stroke="#008ee6" stroke-width="18" stroke-dasharray="58 28"/>
    <text x="256" y="296" text-anchor="middle" fill="#ff527c" font-family="Arial, Helvetica, sans-serif" font-size="150" font-weight="900">KF</text>
    <circle cx="256" cy="256" r="18" fill="#d9d8d1"/>
  </svg>
`);

const icon = sharp(iconSvg).png();
await icon.resize(512, 512).toFile(path.join(publicDir, "icon.png"));
await sharp(iconSvg).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));

console.log("Generated public/og-image.jpg, public/icon.png, public/apple-touch-icon.png");
