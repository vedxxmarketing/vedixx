import type { Metadata } from 'next';
import CMSSolutionsContent from '../../components/services/CMSSolutionsContent';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../lib/schema';
import { cmsFaqs } from '../../lib/faqs';

const PATH = '/services/cms-solutions';
const TITLE = 'E-Commerce & CMS Solutions — Stores That Sell';
const DESCRIPTION =
  'Vedixx builds high-converting e-commerce stores on Shopify and WooCommerce: optimized checkout, smart upsells, abandoned-cart recovery, and automated post-purchase flows.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ecommerce development',
    'Shopify development',
    'Shopify Plus',
    'WooCommerce development',
    'WordPress ecommerce',
    'online store design',
    'checkout optimization',
    'conversion rate optimization',
    'abandoned cart recovery',
    'CMS solutions',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | Vedixx`,
    description: 'Conversion-optimized Shopify and WooCommerce stores engineered to grow revenue.',
    url: PATH,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'E-Commerce & CMS Solutions',
            description: DESCRIPTION,
            path: PATH,
            serviceType: 'E-Commerce Development (Shopify & WooCommerce)',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'E-Commerce & CMS Solutions', path: PATH },
          ]),
          faqSchema(cmsFaqs),
        ]}
      />
      <CMSSolutionsContent />
    </>
  );
}
