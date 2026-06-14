'use client';

import { motion } from 'framer-motion';
import {
  ShoppingBag,
  CreditCard,
  Package,
  TrendingUp,
  Palette,
  Truck,
  BarChart3,
  ArrowRight,
  Search,
  RotateCcw,
  Store,
  Settings,
  ShoppingCart,
  Layers,
} from 'lucide-react';
import Contact from '../Contact';
import FAQ from '../FAQ';
import { cmsFaqs } from '../../lib/faqs';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: <TrendingUp className="w-6 h-6" />, value: '3x', label: 'Avg. conversion lift' },
  { icon: <RotateCcw className="w-6 h-6" />, value: '40%', label: 'Cart recovery rate' },
  { icon: <CreditCard className="w-6 h-6" />, value: '2.5x', label: 'Avg. order value' },
  { icon: <ShoppingBag className="w-6 h-6" />, value: '90%', label: 'Client retention' },
];

const capabilities = [
  { icon: <Palette className="w-6 h-6 text-vedixx-primary" />, title: 'Custom Store Design', desc: 'No cookie-cutter themes. Premium, on-brand storefronts designed to build trust and drive sales.' },
  { icon: <CreditCard className="w-6 h-6 text-vedixx-primary" />, title: 'Seamless Checkout', desc: 'One-page checkout, auto-fill, and multiple payment options that remove every point of friction.' },
  { icon: <Package className="w-6 h-6 text-vedixx-primary" />, title: 'Smart Product Pages', desc: 'High-converting layouts with social proof, urgency triggers, and benefit-driven copy.' },
  { icon: <Truck className="w-6 h-6 text-vedixx-primary" />, title: 'Shipping & Inventory', desc: 'Automated stock alerts, shipping rules, and fulfillment integrations that run themselves.' },
  { icon: <TrendingUp className="w-6 h-6 text-vedixx-primary" />, title: 'Upsells & Bundles', desc: 'Strategic recommendations that boost average order value by 30–50% on autopilot.' },
  { icon: <BarChart3 className="w-6 h-6 text-vedixx-primary" />, title: 'Analytics & Insights', desc: 'Know what sells, what converts, and where customers drop off — decisions backed by data.' },
];

const pains = [
  'Slow checkout flow killing mobile sales',
  'No upsell or cross-sell strategy',
  'Product pages that describe, not persuade',
  'Zero post-purchase retention system',
  'No abandoned-cart recovery',
];

const CMSSolutionsContent = () => {
  return (
    <div className="pt-20 bg-vedixx-bg font-body text-vedixx-text overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-vedixx-ember/[0.06] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-vedixx-ember/[0.05] rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vedixx-primary/10 border border-vedixx-primary/20 text-vedixx-primary text-xs sm:text-sm font-semibold tracking-wider uppercase"
          >
            <ShoppingBag className="w-4 h-4" /> E-Commerce & CMS Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-8xl font-bold font-heading text-white tracking-tight leading-[1.1]"
          >
            Don&apos;t Just Open a Store.
            <br className="hidden sm:block" />
            <span className="text-ember-gradient">
              Build a Sales Machine.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-2xl text-vedixx-muted font-light leading-relaxed"
          >
            We build high-converting <strong className="text-white font-semibold">Shopify and WooCommerce</strong>{' '}
            stores — with optimized checkout, smart upsells, and automation that turns buyers into repeat customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-vedixx-ember text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-vedixx-emberDeep hover:-translate-y-0.5 transition-all duration-300 shadow-ember"
            >
              Get a Free Store Audit
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#why-us"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-medium text-sm sm:text-lg border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
            >
              What We Build
            </a>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/5 bg-vedixx-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-3 w-11 h-11 rounded-xl bg-vedixx-primary/10 border border-vedixx-primary/20 flex items-center justify-center text-vedixx-primary">
                  {s.icon}
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-xs sm:text-sm text-vedixx-muted mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="space-y-5 sm:space-y-6">
              <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
                The Real Problem
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Most Stores <span className="text-vedixx-primary">Leak Money.</span> Yours Won&apos;t.
              </h2>
              <p className="text-vedixx-muted text-base sm:text-lg leading-relaxed">
                The average e-commerce store converts at just 1–2% — meaning 98% of visitors leave without buying.
                We find and fix the leaks that quietly drain your revenue.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {pains.map((pain, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-vedixx-primary shrink-0"></span>
                    <span className="text-sm sm:text-base">{pain}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white font-semibold text-base sm:text-lg">Sound familiar? We fix all of it.</p>
            </motion.div>

            <motion.div {...fadeUp} className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: <TrendingUp className="w-6 h-6" />, number: '3x', label: 'Average Conversion Lift', color: 'text-vedixx-primary' },
                { icon: <RotateCcw className="w-6 h-6" />, number: '40%', label: 'Cart Recovery Rate', color: 'text-vedixx-primary' },
                { icon: <CreditCard className="w-6 h-6" />, number: '2.5x', label: 'Average Order Value', color: 'text-vedixx-primary' },
                { icon: <ShoppingBag className="w-6 h-6" />, number: '90%', label: 'Client Retention', color: 'text-vedixx-primary' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 bg-vedixx-card/40 rounded-2xl border border-white/5 text-center hover:bg-white/[0.06] transition-colors"
                >
                  <div className={`mx-auto mb-3 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-xs sm:text-sm text-vedixx-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="why-us" className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Full-Stack E-Commerce
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Everything Your Store Needs
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg">
              From the first click to the repeat purchase, we design and optimize every step of the journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 sm:p-8 bg-vedixx-bg/60 rounded-2xl border border-white/5 hover:border-vedixx-primary/20 transition-all group"
              >
                <div className="mb-4 sm:mb-5 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-vedixx-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Platform Experts
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">
              We&apos;ve Mastered the Platforms
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Store className="w-6 h-6 text-vedixx-primary" />,
                title: 'Shopify / Shopify Plus',
                desc: 'For brands ready to scale fast. Custom theme development, app integrations, and Shopify Flow automations.',
                tags: ['Liquid', 'Theme Dev', 'Shopify Flow', 'Shopify Markets'],
              },
              {
                icon: <Settings className="w-6 h-6 text-vedixx-primary" />,
                title: 'WordPress + WooCommerce',
                desc: 'For full control and customization. Custom plugins, complex product configs, and SEO-optimized architecture.',
                tags: ['WooCommerce', 'ACF Pro', 'Custom Plugins', 'Elementor'],
              },
            ].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 sm:p-8 bg-vedixx-card/40 rounded-2xl border border-white/10 hover:border-vedixx-primary/20 transition-all"
              >
                <div className="mb-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {platform.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{platform.title}</h3>
                <p className="text-sm sm:text-base text-vedixx-muted leading-relaxed mb-4 sm:mb-6">{platform.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/75 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">
              From Concept to Conversions
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { icon: <Search className="w-6 h-6" />, step: '01', title: 'Audit & Strategy', desc: 'We analyze your products, audience, and current funnel to map exactly where revenue is being lost.', color: 'text-vedixx-primary', bg: 'bg-vedixx-primary/10' },
              { icon: <Palette className="w-6 h-6" />, step: '02', title: 'Design & Build', desc: 'Premium, on-brand store design built for conversion — from homepage to product page to checkout.', color: 'text-vedixx-primary', bg: 'bg-vedixx-primary/10' },
              { icon: <ShoppingCart className="w-6 h-6" />, step: '03', title: 'Optimize & Automate', desc: 'Upsells, bundles, abandoned-cart flows, and post-purchase automation that lift revenue per visitor.', color: 'text-vedixx-primary', bg: 'bg-vedixx-primary/10' },
              { icon: <Layers className="w-6 h-6" />, step: '04', title: 'Launch & Scale', desc: 'Go live with analytics and A/B testing in place, then keep improving conversion rate over time.', color: 'text-vedixx-primary', bg: 'bg-vedixx-primary/10' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 bg-vedixx-bg/60 rounded-2xl border border-white/5 hover:border-vedixx-primary/20 transition-all"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <span className={`text-3xl sm:text-4xl font-bold opacity-20 ${item.color}`}>{item.step}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-vedixx-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={cmsFaqs} accent="text-vedixx-primary" eyebrow="E-Commerce FAQ" />

      {/* CTA */}
      <section className="py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-8">
            Ready to Sell Smarter?
          </motion.h2>
          <motion.p {...fadeUp} className="text-sm sm:text-xl text-vedixx-muted mb-6 sm:mb-10">
            Your competitors are optimizing their checkout right now. Don&apos;t let them win.
          </motion.p>
          <motion.div {...fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-vedixx-primary text-white px-8 sm:px-12 py-3.5 sm:py-6 rounded-full font-bold text-base sm:text-xl hover:bg-vedixx-primary transition-all shadow-2xl hover:-translate-y-1"
            >
              Get a Free Store Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default CMSSolutionsContent;
