# Vedixx — Next.js Website

Marketing site for Vedixx, migrated from Vite + React to **Next.js (App Router)** with
TypeScript, Tailwind CSS, and Framer Motion. Configured for **static export** so it can be
hosted on Hostinger shared hosting (or any static host).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build (static export)

```bash
npm run build
```

This generates a static site in the **`out/`** folder — plain HTML, CSS, and JS.

## Deploy to Hostinger

1. Set your real domain in [`app/site.config.ts`](app/site.config.ts) (`SITE_URL`). This is
   used for SEO canonical URLs, the sitemap, and Open Graph tags.
2. Run `npm run build`.
3. Upload **the contents of the `out/` folder** (not the folder itself) to your Hostinger
   `public_html` directory — via hPanel File Manager or FTP.
4. Done. Because of `trailingSlash: true`, deep links like `/services/automation/` resolve to
   their `index.html` correctly on Apache.

> Tip: zip the `out/` contents, upload the zip in hPanel File Manager, then "Extract" inside
> `public_html`.

## What's configured for SEO

- Per-page `<title>` and meta descriptions (home + 4 service pages)
- Open Graph / Twitter card tags
- Canonical URLs
- `sitemap.xml` and `robots.txt` (auto-generated at build)
- JSON-LD structured data (ProfessionalService) in the root layout
- Semantic, server-rendered HTML (real content in the page source — great for crawlers)
- `next/font` for Inter + Outfit (no layout shift)

## Notes

- Contact form posts client-side to FormSubmit (`formsubmit.co`) — no server needed. The
  destination email lives in `app/site.config.ts`.
- Google Tag Manager (`GTM-TS86R2K4`) is loaded via `next/script`; change `GTM_ID` in
  `app/site.config.ts` if needed.
- The original Vite project is untouched in the sibling `IRFAN298/` folder as a fallback.
