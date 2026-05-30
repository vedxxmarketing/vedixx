import type { MetadataRoute } from 'next';
import { SITE_URL } from './site.config';

// Required for `output: 'export'` (static hosting like Hostinger).
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
