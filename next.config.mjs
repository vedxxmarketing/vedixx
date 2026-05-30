/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — generates a plain `out/` folder you can upload to
  // Hostinger shared hosting (or any static host). No Node server required.
  output: 'export',

  // Required for static export: Next's image optimizer needs a server, so we
  // disable it and serve images as-is.
  images: {
    unoptimized: true,
  },

  // Emits each route as a folder with index.html (e.g. /services/automation/index.html),
  // which is what Apache on Hostinger expects so deep links resolve correctly.
  trailingSlash: true,
};

export default nextConfig;
