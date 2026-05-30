// Reusable JSON-LD structured-data builders. Schema markup helps search engines
// understand each page and can earn rich results — improving ranking potential.

import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT } from '../site.config';

const absolute = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

/** WebSite schema — used on the homepage. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

/** Service schema — used on each service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: absolute(opts.path),
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT.email,
      telephone: CONTACT.phone,
    },
  };
}

/** FAQPage schema — can earn an expandable FAQ rich result in Google. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/** BreadcrumbList schema — gives search results a navigable breadcrumb trail. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}
