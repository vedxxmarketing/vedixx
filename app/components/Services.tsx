'use client';

import {
  BarChart3,
  Cpu,
  Code2,
  ArrowRight,
  Search,
  Globe,
  Target,
  MessageSquare,
  Smartphone,
  Megaphone,
  Bot,
  Monitor,
  Store,
  Workflow,
  ShoppingCart,
  CreditCard,
  Layers,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Digital Marketing',
    subtitle: 'Unified SEO + Paid systems that drive real revenue.',
    icon: <Megaphone className="w-8 h-8 text-green-400" />,
    link: '/services/digital-marketing',
    accent: 'green',
    items: [
      { icon: <Target className="w-5 h-5 text-red-400" />, text: 'Google & Meta Ads' },
      { icon: <Search className="w-5 h-5 text-blue-400" />, text: 'SEO Growth Systems' },
      { icon: <BarChart3 className="w-5 h-5 text-green-400" />, text: 'Revenue Attribution' },
    ],
  },
  {
    title: 'Automation & AI',
    subtitle: 'Your team thinks. We automate everything else.',
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    link: '/services/automation',
    accent: 'purple',
    items: [
      { icon: <Workflow className="w-5 h-5 text-orange-400" />, text: 'n8n & Zapier Workflows' },
      { icon: <MessageSquare className="w-5 h-5 text-blue-400" />, text: 'AI Chatbots & Support' },
      { icon: <Cpu className="w-5 h-5 text-purple-400" />, text: 'CRM & Lead Automation' },
    ],
  },
  {
    title: 'Web Development',
    subtitle: 'Sites that sell, not just sit there looking pretty.',
    icon: <Monitor className="w-8 h-8 text-cyan-400" />,
    link: '/services/web-development',
    accent: 'cyan',
    items: [
      { icon: <Globe className="w-5 h-5 text-cyan-400" />, text: 'Performance Websites' },
      { icon: <Code2 className="w-5 h-5 text-indigo-400" />, text: 'Custom Web Apps' },
      { icon: <Smartphone className="w-5 h-5 text-pink-400" />, text: 'Mobile-First Design' },
    ],
  },
  {
    title: 'E-Commerce Growth',
    subtitle: 'Stores that sell — not just open for business.',
    icon: <Store className="w-8 h-8 text-amber-400" />,
    link: '/services/cms-solutions',
    accent: 'amber',
    items: [
      { icon: <ShoppingCart className="w-5 h-5 text-amber-400" />, text: 'Shopify Development' },
      { icon: <Layers className="w-5 h-5 text-blue-400" />, text: 'WooCommerce Experts' },
      { icon: <CreditCard className="w-5 h-5 text-green-400" />, text: 'Checkout Optimization' },
    ],
  },
];

// Static class maps so Tailwind keeps the per-card accent colors.
const accentRing: Record<string, string> = {
  green: 'hover:border-green-500/40 hover:shadow-[0_0_40px_-5px_rgba(34,197,94,0.25)]',
  purple: 'hover:border-purple-500/40 hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.25)]',
  cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.25)]',
  amber: 'hover:border-amber-500/40 hover:shadow-[0_0_40px_-5px_rgba(251,191,36,0.25)]',
};
const accentText: Record<string, string> = {
  green: 'group-hover:text-green-400',
  purple: 'group-hover:text-purple-400',
  cyan: 'group-hover:text-cyan-400',
  amber: 'group-hover:text-amber-400',
};
const accentCta: Record<string, string> = {
  green: 'text-green-400 bg-green-500/10 group-hover:bg-green-500/20',
  purple: 'text-purple-400 bg-purple-500/10 group-hover:bg-purple-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 group-hover:bg-cyan-500/20',
  amber: 'text-amber-400 bg-amber-500/10 group-hover:bg-amber-500/20',
};

const Services = () => {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-vedixx-bg overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-vedixx-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[10%] right-[5%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-purple-900/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight"
          >
            Growth <span className="text-vedixx-primary">Systems</span> We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-vedixx-muted max-w-2xl mx-auto font-light"
          >
            We don&apos;t sell services. We engineer revenue systems that scale. Tap any system to explore it.
          </motion.p>
        </div>

        {/* Service Grid — cards link straight to the full page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={category.link}
                className={`group relative flex flex-col h-full min-h-[260px] sm:min-h-[320px] bg-vedixx-card/40 sm:bg-vedixx-card/30 sm:backdrop-blur-sm border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${accentRing[category.accent]}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Header */}
                <div className="relative z-10 mb-5 sm:mb-6 border-b border-white/5 pb-5 sm:pb-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      {category.icon}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-4 h-4 text-vedixx-muted group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                  <h3 className={`text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 transition-colors ${accentText[category.accent]}`}>
                    {category.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-vedixx-muted font-medium">{category.subtitle}</p>
                </div>

                {/* List Items */}
                <div className="relative z-10 space-y-2.5 sm:space-y-3 mb-6 flex-grow">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        <div className="w-4 h-4 [&>svg]:w-full [&>svg]:h-full">{item.icon}</div>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Row */}
                <div
                  className={`relative z-10 flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${accentCta[category.accent]}`}
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
