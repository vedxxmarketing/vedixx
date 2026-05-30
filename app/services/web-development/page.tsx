import type { Metadata } from 'next';
import WebDevelopmentContent from '../../components/services/WebDevelopmentContent';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../lib/schema';
import { webDevelopmentFaqs } from '../../lib/faqs';

const PATH = '/services/web-development';
const TITLE = 'Web Development — Fast, Conversion-Focused Websites';
const DESCRIPTION =
  'Vedixx builds blazing-fast, mobile-first, SEO-ready websites with React, Next.js and Tailwind CSS. Conversion-focused design engineered to turn visitors into customers.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'web development agency',
    'Next.js development',
    'React development',
    'custom website development',
    'conversion-focused web design',
    'mobile-first design',
    'fast websites',
    'SEO-ready websites',
    'Tailwind CSS',
    'frontend development',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | Vedixx`,
    description: 'Speed-obsessed, mobile-first, SEO-ready web experiences built on a modern stack.',
    url: PATH,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Web Development',
            description: DESCRIPTION,
            path: PATH,
            serviceType: 'Web Design & Development',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Web Development', path: PATH },
          ]),
          faqSchema(webDevelopmentFaqs),
        ]}
      />
      <WebDevelopmentContent />
    </>
  );
}
