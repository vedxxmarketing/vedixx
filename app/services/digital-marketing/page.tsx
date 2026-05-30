import type { Metadata } from 'next';
import DigitalMarketingContent from '../../components/services/DigitalMarketingContent';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../lib/schema';
import { digitalMarketingFaqs } from '../../lib/faqs';

const PATH = '/services/digital-marketing';
const TITLE = 'Digital Marketing — SEO & Paid Ads That Drive Revenue';
const DESCRIPTION =
  'Vedixx builds integrated digital marketing systems: SEO that compounds, paid ads that scale, and tracking that ties every dollar to revenue. Google Ads, Meta Ads, GA4 and more.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'digital marketing agency',
    'SEO services',
    'paid advertising',
    'Google Ads management',
    'Meta Ads',
    'PPC management',
    'search engine optimization',
    'conversion tracking',
    'GA4',
    'revenue attribution',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | Vedixx`,
    description: 'Integrated SEO + paid acquisition systems built around revenue, not vanity metrics.',
    url: PATH,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Digital Marketing',
            description: DESCRIPTION,
            path: PATH,
            serviceType: 'Digital Marketing, SEO & Paid Advertising',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Digital Marketing', path: PATH },
          ]),
          faqSchema(digitalMarketingFaqs),
        ]}
      />
      <DigitalMarketingContent />
    </>
  );
}
