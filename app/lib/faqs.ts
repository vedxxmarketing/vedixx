// FAQ content lives here (a plain module, NOT a client component) so it can be
// safely imported by both server pages (for FAQPage JSON-LD schema) and the
// client FAQ component (for rendering).

export type FaqItem = { q: string; a: string };

export const digitalMarketingFaqs: FaqItem[] = [
  {
    q: 'How is Vedixx different from a typical marketing agency?',
    a: 'Most agencies run SEO and paid ads in separate silos and report on clicks and impressions. We build one integrated growth system where paid traffic tests offers fast, SEO compounds long-term, and server-side tracking ties every channel back to actual revenue — so you always know your true cost per acquisition and return on ad spend.',
  },
  {
    q: 'How long before I see results from SEO and paid ads?',
    a: 'Paid advertising can generate qualified leads within the first 1–2 weeks once tracking and campaigns are live. SEO is a compounding asset — most clients see meaningful organic traffic gains within 3–6 months, with results accelerating over time as authority builds.',
  },
  {
    q: 'What budget do I need to work with you?',
    a: 'It depends on your market and goals. We scope a plan around your ad spend and management needs during a free strategy call, and we never recommend scaling spend until tracking proves a campaign is profitable.',
  },
  {
    q: 'Which platforms and tools do you work with?',
    a: 'Google Ads, Meta (Facebook & Instagram) Ads, GA4, Google Tag Manager, server-side tracking, Looker Studio dashboards, and leading SEO tooling. We choose the right channel mix for your audience and buying intent.',
  },
  {
    q: 'Do you provide transparent reporting?',
    a: 'Yes. You get a live dashboard showing leads, sales, revenue, and ROI in plain language — not vanity metrics. You always own your accounts, data, and reporting.',
  },
];

export const automationFaqs: FaqItem[] = [
  {
    q: 'What kind of tasks can you actually automate?',
    a: 'Almost any repetitive, rules-based task: capturing and routing leads, syncing data between your CRM and other tools, sending follow-up sequences across email/SMS/WhatsApp, onboarding new clients, generating reports, qualifying leads with AI scoring, and answering common support questions with AI chatbots.',
  },
  {
    q: 'Do I need to be technical to use the systems you build?',
    a: 'No. We design automations to run silently in the background and hand you simple controls. After launch we train your team and provide documentation, so you own and understand the system without needing to code.',
  },
  {
    q: 'Which automation platforms do you build on?',
    a: 'We use the best tool for the job — primarily n8n, Zapier, and Make for workflows, plus the OpenAI API for AI agents, Respond.io for messaging, Airtable/Google Sheets for data, and direct API integrations when needed.',
  },
  {
    q: 'Will automation replace my team?',
    a: 'No — it removes the busywork so your team can focus on the high-value work humans are best at: strategy, relationships, and closing. Your people think; the systems handle everything repetitive.',
  },
  {
    q: 'What happens if an automation breaks?',
    a: 'We stress-test every edge case before launch and build in error handling and alerts. If something needs attention, you (and we) are notified — and we offer ongoing support and monitoring plans to keep everything running.',
  },
];

export const webDevelopmentFaqs: FaqItem[] = [
  {
    q: 'What technologies do you build websites with?',
    a: 'We build modern, high-performance sites with React, Next.js, TypeScript, and Tailwind CSS, backed by headless CMS options like Sanity or Strapi. For content-driven or e-commerce sites we also work with WordPress and Shopify. The stack is chosen around your goals, not trends.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A focused marketing or landing site typically takes 2–4 weeks; larger multi-page or custom web apps take 6–12 weeks depending on scope. We share a clear timeline and milestones during the proposal so there are no surprises.',
  },
  {
    q: 'Will my website be fast and good for SEO?',
    a: 'Yes — performance and SEO are built in from day one. We ship semantic HTML, proper heading structure, schema markup, optimized images, and sub-2-second load targets, because speed and structure directly affect both rankings and conversions.',
  },
  {
    q: 'Is the website mobile-friendly?',
    a: 'Always. We design mobile-first because the majority of traffic is on phones. Every layout is tested across screen sizes to look and perform flawlessly on mobile, tablet, and desktop.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We deploy with analytics, error tracking, and performance monitoring, and offer ongoing maintenance and support plans. We do not disappear after launch.',
  },
];

export const cmsFaqs: FaqItem[] = [
  {
    q: 'Which e-commerce platforms do you build on?',
    a: 'Primarily Shopify and Shopify Plus for brands that want to scale fast, and WordPress + WooCommerce for those who need full control and customization. We recommend the right platform based on your products, budget, and growth plans.',
  },
  {
    q: 'Can you migrate my existing store to a new platform?',
    a: 'Yes. We handle zero-downtime migrations — products, customers, orders, SEO redirects, and design — from legacy platforms to Shopify or WooCommerce, so you keep your rankings and lose no data.',
  },
  {
    q: 'How do you actually increase my store’s sales?',
    a: 'We optimize the entire funnel: conversion-focused product pages, a frictionless one-page checkout, smart upsells and bundles that raise average order value, and automated abandoned-cart recovery to win back lost buyers.',
  },
  {
    q: 'Will my store be fast and SEO-friendly?',
    a: 'Yes. We build with performance and search visibility in mind — optimized images, clean structure, schema markup for products, and fast load times, which improve both rankings and conversion rates.',
  },
  {
    q: 'Do you offer ongoing store management?',
    a: 'We do. Beyond the build, we offer ongoing optimization, A/B testing, app integrations, and support to keep improving conversion rate and revenue over time.',
  },
];
