'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Rocket, CheckCircle2, X } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Revenue-Obsessed',
    desc: 'We optimize for sales, leads, and ROI — never likes, impressions, or vanity metrics.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Radical Transparency',
    desc: 'Live dashboards in plain language. You own every account, asset, and dataset — always.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Fast Execution',
    desc: 'We move quickly, test relentlessly, and double down on what actually drives growth.',
  },
];

const them = [
  'Vanity metrics buried in confusing reports',
  'SEO and paid ads run in separate silos',
  'Junior account managers learning on your budget',
  'Locked-in contracts — and they keep your data',
  'Slow, reactive, once-a-month check-ins',
];

const us = [
  'Revenue & ROI reporting in plain language',
  'One integrated growth system, fully aligned',
  'Senior strategists working on your account',
  'You own every account, asset, and dashboard',
  'Fast execution and proactive communication',
];

const WhyVedixx = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-vedixx-card overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vedixx-ember/[0.05] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
            Why Vedixx
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            Built Different. <span className="text-vedixx-primary">Built for Results.</span>
          </h2>
          <p className="text-base sm:text-xl text-vedixx-muted font-light">
            We&apos;re not another agency renting you reports. We&apos;re a growth partner accountable to one
            thing — your revenue.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-vedixx-bg/60 border border-white/5 hover:border-vedixx-primary/20 transition-all group"
            >
              <div className="mb-4 sm:mb-5 w-12 h-12 rounded-xl bg-vedixx-primary/10 border border-vedixx-primary/20 text-vedixx-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm sm:text-base text-vedixx-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Them vs Us comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Typical agencies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-vedixx-bg/40 border border-white/5"
          >
            <h3 className="text-lg sm:text-xl font-bold text-vedixx-muted mb-5 sm:mb-6">Typical Agencies</h3>
            <ul className="space-y-3 sm:space-y-4">
              {them.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-vedixx-primary/10 text-vedixx-primary flex items-center justify-center">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm sm:text-base text-vedixx-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Vedixx way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-vedixx-ember/[0.12] to-vedixx-card border border-vedixx-ember/30 shadow-[0_0_50px_-10px_rgba(255,90,31,0.35)]"
          >
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-vedixx-primary text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-lg">
              The Vedixx Way
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">How We Work</h3>
            <ul className="space-y-3 sm:space-y-4">
              {us.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-vedixx-primary/20 text-vedixx-primary flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm sm:text-base text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyVedixx;
