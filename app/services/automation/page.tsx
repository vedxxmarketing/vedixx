import type { Metadata } from 'next';
import AutomationContent from '../../components/services/AutomationContent';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../lib/schema';
import { automationFaqs } from '../../lib/faqs';

const PATH = '/services/automation';
const TITLE = 'Automation & AI — Self-Running Business Systems';
const DESCRIPTION =
  'Vedixx builds intelligent automation: instant lead routing, AI support agents, CRM sync, and end-to-end workflows with n8n, Zapier, Make and OpenAI. Run your operations 24/7.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'business automation',
    'marketing automation',
    'workflow automation',
    'n8n',
    'Zapier',
    'Make Integromat',
    'AI chatbots',
    'CRM integration',
    'lead automation',
    'OpenAI API',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} | Vedixx`,
    description: 'Lead velocity, AI chatbots, CRM synchronization, and custom workflow architecture.',
    url: PATH,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Automation & AI',
            description: DESCRIPTION,
            path: PATH,
            serviceType: 'Business Process Automation & AI Integration',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Automation & AI', path: PATH },
          ]),
          faqSchema(automationFaqs),
        ]}
      />
      <AutomationContent />
    </>
  );
}
