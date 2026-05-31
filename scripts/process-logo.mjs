import sharp from 'sharp';

const SRC = 'scripts/assets/source-logo.jpg';
const BG_LUMA = 78; // luma below this (and bluish/neutral) = navy background

const luma = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height, c = info.channels;

// ---- Flood-fill the navy background from the borders ----
const isBg = (i) => {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  return luma(r, g, b) < BG_LUMA && b + 12 >= r;
};
const vis = new Uint8Array(w * h);
const st = [];
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return;
  const p = y * w + x;
  if (vis[p] || !isBg(p * c)) return;
  vis[p] = 1; st.push(p);
};
for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
while (st.length) { const p = st.pop(); const x = p % w, y = (p / w) | 0; push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1); }

// mask: 255 = keep (logo), 0 = transparent (bg)
const mask = Buffer.alloc(w * h);
for (let p = 0; p < w * h; p++) mask[p] = vis[p] ? 0 : 255;

// ---- Column/row content profiles for bounding boxes ----
const col = new Int32Array(w), row = new Int32Array(h);
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (mask[y * w + x]) { col[x]++; row[y]++; }
const firstIdx = (arr, from, to, step = 1) => { for (let i = from; i !== to; i += step) if (arr[i] > 2) return i; return from; };
const left = firstIdx(col, 0, w), right = firstIdx(col, w - 1, -1, -1);
const top = firstIdx(row, 0, h), bottom = firstIdx(row, h - 1, -1, -1);

// Detect the gap between the V mark and the "Vedixx" wordmark.
let gapStart = right;
{
  let inContent = false, emptyRun = 0;
  for (let x = left; x <= right; x++) {
    if (col[x] > 2) { inContent = true; emptyRun = 0; }
    else if (inContent) { if (++emptyRun > Math.round(w * 0.012)) { gapStart = x - emptyRun; break; } }
  }
}
// V's vertical extent within [left, gapStart]
let vTop = h, vBottom = 0;
for (let y = 0; y < h; y++) for (let x = left; x <= gapStart; x++) if (mask[y * w + x]) { if (y < vTop) vTop = y; if (y > vBottom) vBottom = y; break; }

console.log('logo bbox', { left, top, right, bottom });
console.log('V mark bbox', { left, vTop, gapStart, vBottom });

// ---- Build feathered RGBA and write the transparent wordmark ----
// NB: sharp expands a 1-channel raw input to 3 channels on output, so step by 3.
const blurred = await sharp(mask, { raw: { width: w, height: h, channels: 1 } }).blur(1.4).raw().toBuffer();
const aStep = Math.round(blurred.length / (w * h)); // 1 or 3
const rgba = Buffer.alloc(w * h * 4);
for (let p = 0; p < w * h; p++) {
  rgba[p * 4] = data[p * c]; rgba[p * 4 + 1] = data[p * c + 1]; rgba[p * 4 + 2] = data[p * c + 2]; rgba[p * 4 + 3] = blurred[p * aStep];
}
const base = sharp(rgba, { raw: { width: w, height: h, channels: 4 } });

const PAD = 6;
const ex = (l, t, r, b) => ({ left: Math.max(0, l - PAD), top: Math.max(0, t - PAD), width: Math.min(w, r + PAD) - Math.max(0, l - PAD), height: Math.min(h, b + PAD) - Math.max(0, t - PAD) });

await base.clone().extract(ex(left, top, right, bottom)).png().toFile('public/logo.png');
const lm = await sharp('public/logo.png').metadata();
console.log('wrote public/logo.png', lm.width + 'x' + lm.height);

// ---- Favicon: V mark centered on a dark rounded tile ----
const markBuf = await base.clone().extract(ex(left, vTop, gapStart, vBottom)).png().toBuffer();
const mm = await sharp(markBuf).metadata();
const S = 512, pad = 70, inner = S - pad * 2;
const scale = Math.min(inner / mm.width, inner / mm.height);
const rw = Math.round(mm.width * scale), rh = Math.round(mm.height * scale);
const resized = await sharp(markBuf).resize(rw, rh).toBuffer();
const tile = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}"><rect width="${S}" height="${S}" rx="112" fill="#0a0a0a"/></svg>`);
await sharp(tile).composite([{ input: resized, left: Math.round((S - rw) / 2), top: Math.round((S - rh) / 2) }]).png().toFile('app/icon.png');
console.log('wrote app/icon.png', S + 'x' + S, '(mark', mm.width + 'x' + mm.height + ')');
