import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from './site.config';

// Required for `output: 'export'` (static hosting like Hostinger).
export const dynamic = 'force-static';

// Recursively walk the `app/` directory and collect every route that has a
// page file. This runs at build time, so adding a new page automatically adds
// it to the sitemap on the next `npm run build` — no manual editing needed.
function getRoutes(dir: string, baseRoute = ''): { route: string; lastModified: Date }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: { route: string; lastModified: Date }[] = [];

  // A directory is a route if it contains a page file.
  const pageFile = entries.find(
    (e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name)
  );
  if (pageFile) {
    const stat = fs.statSync(path.join(dir, pageFile.name));
    routes.push({ route: baseRoute === '' ? '/' : baseRoute, lastModified: stat.mtime });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;

    // Skip private folders (_), route groups ((group)), parallel/intercepting
    // routes (@, (.)), dynamic segments ([param]), and api routes.
    if (
      name.startsWith('_') ||
      name.startsWith('@') ||
      name.startsWith('(') ||
      name.startsWith('[') ||
      name === 'api' ||
      name === 'components'
    ) {
      continue;
    }

    routes.push(...getRoutes(path.join(dir, name), `${baseRoute}/${name}`));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app');
  const routes = getRoutes(appDir);

  return routes.map(({ route, lastModified }) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
