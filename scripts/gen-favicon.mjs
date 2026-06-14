import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Vedixx V-mark on a dark rounded square (keeps the white blade visible on light tabs).
const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#0B0B0E"/>
  <g transform="translate(121.5,84) scale(5.38)">
    <polygon points="29,6 45,6 43.5,50" fill="#FF5A1F"/>
    <polygon points="5,6 20,6 42,58 27,58" fill="#F4F2EF"/>
  </g>
</svg>`;

const out = join(__dirname, '..', 'app', 'icon.png');
await sharp(Buffer.from(svg)).resize(512, 512).png().toFile(out);
console.log('Wrote', out);
