<div align="center">

# Vedixx — Digital Growth Agency Website

Premium, SEO-optimized marketing website for **Vedixx**, a full-service digital growth agency.
Built with the Next.js App Router, TypeScript, and Tailwind CSS, and shipped as a fully static site.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-22C55E.svg)

</div>

---

## ✨ Overview

Vedixx is a conversion-focused agency site covering four service lines — Digital Marketing,
Automation & AI, Web Development, and E-Commerce. It’s engineered for **search visibility and
speed**: every page is server-rendered to static HTML with full SEO metadata and structured data,
then exported so it can be hosted anywhere — including low-cost shared hosting.

## 🚀 Features

- **Next.js 15 App Router** with a fully **static export** (`output: 'export'`) — no server required
- **SEO-first**: per-page titles, meta descriptions & keywords, canonical URLs, Open Graph/Twitter cards
- **Structured data (JSON-LD)**: `Organization`, `WebSite`, `Service`, `BreadcrumbList`, and `FAQPage`
- **Auto-generated `sitemap.xml` & `robots.txt`** (the sitemap discovers pages automatically at build time)
- **Responsive & mobile-first** across phone, tablet, and laptop
- **Smooth, modern UI** with Framer Motion animations and an interactive particle hero
- **Accessible FAQ accordions** on every service page (also powering FAQ rich-result schema)
- **Contact form** wired to FormSubmit (no backend needed)
- **Optimized fonts** via `next/font` (Inter + Outfit) for zero layout shift
- **Google Tag Manager** integrated via `next/script`

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Hosting | Static export — any static host (Hostinger, Netlify, Vercel, etc.) |

## 📦 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Build the static site
npm run build
# → output in the ./out folder
```

> Requires Node.js 18.18+.

## 🌐 Deployment (static hosting)

1. Set your production domain in [`app/site.config.ts`](app/site.config.ts) (`SITE_URL`) — used for
   canonical URLs, the sitemap, and Open Graph tags.
2. Run `npm run build` to generate the `out/` folder.
3. Upload the **contents of `out/`** to your host’s web root (e.g. `public_html` on Hostinger).

`trailingSlash` is enabled so deep links such as `/services/automation/` resolve correctly on Apache.

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout: metadata, fonts, GTM, navbar, footer
├── page.tsx                # Home page
├── globals.css             # Tailwind + base styles
├── sitemap.ts / robots.ts  # Auto-generated SEO files
├── site.config.ts          # Domain, brand & contact configuration
├── components/             # UI components (Hero, Services, FAQ, ...)
│   ├── icons/              # Custom SVG icons
│   └── services/           # Per-service page content
├── lib/                    # Schema (JSON-LD) + FAQ data
└── services/               # Service routes (digital-marketing, automation, ...)
```

## ⚙️ Configuration

All site-wide settings live in [`app/site.config.ts`](app/site.config.ts):

- `SITE_URL` — production domain (set before deploying)
- `SITE_NAME`, `SITE_DESCRIPTION` — branding & default meta
- `GTM_ID` — Google Tag Manager container
- `CONTACT` — email, phone, WhatsApp, and social links

## 📄 License

Released under the [MIT License](LICENSE).

---

<div align="center">

**Vedixx** — We build growth systems. · [vedixx.netlify.app](https://vedixx.netlify.app)

</div>
