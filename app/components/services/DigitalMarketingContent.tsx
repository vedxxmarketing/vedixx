'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Search,
  Target,
  TrendingUp,
  Database,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Users,
  Zap,
  DollarSign,
  LineChart,
  MousePointerClick,
  Megaphone,
  Repeat,
  Gauge,
  PenTool,
} from 'lucide-react';
import Contact from '../Contact';
import FAQ from '../FAQ';
import { digitalMarketingFaqs } from '../../lib/faqs';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: <TrendingUp className="w-6 h-6" />, value: '~10x', label: 'Avg. organic growth' },
  { icon: <DollarSign className="w-6 h-6" />, value: '3.2x', label: 'Avg. return on ad spend' },
  { icon: <Target className="w-6 h-6" />, value: '−42%', label: 'Lower cost per lead' },
  { icon: <BarChart3 className="w-6 h-6" />, value: '100%', label: 'Revenue attribution' },
];

const deliverables = [
  {
    icon: <Target className="w-6 h-6 text-vedixx-primary" />,
    title: 'Paid Acquisition Systems',
    desc: 'Google Ads for high-intent demand capture and Meta Ads for demand generation — structured, tested, and scaled by ROAS.',
  },
  {
    icon: <Search className="w-6 h-6 text-vedixx-primary" />,
    title: 'SEO Growth Engine',
    desc: 'Technical SEO, intent-based content, and authority building that captures buyers actively searching for what you sell.',
  },
  {
    icon: <Database className="w-6 h-6 text-vedixx-primary" />,
    title: 'Tracking & Attribution',
    desc: 'GA4, GTM, and server-side tracking so every click, call, and conversion is mapped to the exact channel that drove it.',
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-vedixx-primary" />,
    title: 'Conversion Rate Optimization',
    desc: 'Landing pages and funnels engineered with conversion psychology to turn more of your existing traffic into leads.',
  },
  {
    icon: <PenTool className="w-6 h-6 text-vedixx-primary" />,
    title: 'Creative & Ad Testing',
    desc: 'A continuous pipeline of hooks, angles, and creatives — we find the winners and kill the losers fast.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-vedixx-primary" />,
    title: 'Revenue Reporting',
    desc: 'Live dashboards that report leads, sales, and ROI in plain language — the numbers that actually run your business.',
  },
];

const pains = [
  { icon: <Megaphone className="w-5 h-5" />, text: 'Running ads on guesswork with no idea which campaigns are actually profitable' },
  { icon: <Search className="w-5 h-5" />, text: 'SEO and paid teams working in silos, duplicating budget and effort' },
  { icon: <Gauge className="w-5 h-5" />, text: 'Reports full of impressions and clicks but silent on real revenue' },
  { icon: <Repeat className="w-5 h-5" />, text: 'Paying to acquire traffic once, then never retargeting or nurturing it' },
];

const DigitalMarketingContent = () => {
  return (
    <div className="pt-20 bg-vedixx-bg font-body text-vedixx-text overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-vedixx-primary/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-vedixx-primary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vedixx-primary/10 border border-vedixx-primary/20 text-vedixx-primary text-xs sm:text-sm font-semibold tracking-wider uppercase"
          >
            <Zap className="w-4 h-4" /> Integrated Growth Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-8xl font-bold font-heading text-white tracking-tight leading-[1.1]"
          >
            Stop Running Ads.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vedixx-primary to-vedixx-primary">
              Start Building Revenue.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-2xl text-vedixx-muted font-light leading-relaxed space-y-4 sm:space-y-6"
          >
            <p>
              We&apos;re a results-driven <strong className="text-white font-semibold">digital marketing agency</strong>{' '}
              that treats SEO and paid ads as one revenue engine — not separate line items.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-base sm:text-lg font-medium text-white/90">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vedixx-primary"></span> Paid = Immediate Scale
              </span>
              <span className="hidden sm:block text-white/20">|</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vedixx-primary"></span> SEO = Compounding Growth
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-vedixx-bg px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-vedixx-primary hover:text-black transition-all shadow-[0_0_40px_rgba(102, 117, 198,0.2)]"
            >
              Get My Free Growth Audit
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#deliverables"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-medium text-sm sm:text-lg border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
            >
              See What We Do
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

      {/* PROBLEM */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="space-y-5 sm:space-y-6">
              <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
                The Real Problem
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Most Marketing Budgets <span className="text-vedixx-primary">Leak Money.</span>
              </h2>
              <p className="text-vedixx-muted text-base sm:text-lg leading-relaxed">
                If you can&apos;t draw a straight line from a dollar spent to a dollar earned, you&apos;re not
                marketing — you&apos;re gambling. These are the gaps we close on day one.
              </p>
            </motion.div>
            <motion.ul {...fadeUp} className="space-y-3 sm:space-y-4">
              {pains.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-vedixx-card/40 border border-white/5"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-vedixx-primary/10 text-vedixx-primary flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed pt-1">{p.text}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* INTEGRATED GROWTH SYSTEM */}
      <section
        id="growth-system"
        className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                  The <span className="text-vedixx-primary">Integrated</span> Growth System
                </h2>
                <p className="text-vedixx-muted text-base sm:text-lg leading-relaxed">
                  We destroy the silos between channels. Here&apos;s how the pieces compound to lower your customer
                  acquisition cost and increase lifetime value — together.
                </p>
              </div>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  { icon: <Zap className="w-4 h-4" />, title: 'Rapid Testing', desc: 'Paid ads test offers and keywords instantly — no guessing what your market wants.' },
                  { icon: <Search className="w-4 h-4" />, title: 'SEO Intelligence', desc: 'Winning paid keywords become your organic content roadmap.' },
                  { icon: <DollarSign className="w-4 h-4" />, title: 'CAC Reduction', desc: 'As organic compounds, your blended cost-per-lead steadily drops.' },
                  { icon: <Repeat className="w-4 h-4" />, title: 'Retargeting Loop', desc: 'Paid ads recapture lost organic visitors and close them into sales.' },
                  { icon: <Database className="w-4 h-4" />, title: 'Unified Data', desc: 'One dashboard. Every channel. Real revenue numbers you can act on.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-vedixx-primary/20 flex items-center justify-center text-vedixx-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vedixx-primary/10 to-vedixx-primary/10 blur-3xl"></div>
              <div className="relative border border-white/10 bg-vedixx-bg/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 space-y-6 sm:space-y-8">
                <div className="text-center text-xs sm:text-sm font-mono text-gray-500">REVENUE FLOW</div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'blue', title: 'Traffic Source', sub: 'SEO + Paid Combined' },
                    { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'green', title: 'Conversion Engine', sub: 'Landing Pages & Funnels' },
                    { icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'purple', title: 'Tracking & Attribution', sub: 'GA4 + Server-Side' },
                    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'yellow', title: 'Revenue Scaling', sub: 'Reinvest based on Data', highlight: true },
                  ].map((step, i) => (
                    <div key={i}>
                      <div
                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border ${
                          step.highlight ? 'border-vedixx-primary/30 shadow-[0_0_20px_rgba(102, 117, 198,0.1)]' : 'border-white/5'
                        }`}
                      >
                        <div className="p-2 sm:p-3 bg-vedixx-primary/20 rounded-lg text-vedixx-primary">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm sm:text-base">{step.title}</div>
                          <div className="text-[10px] sm:text-xs text-gray-400">{step.sub}</div>
                        </div>
                      </div>
                      {i < 3 && <ArrowRight className="mx-auto text-gray-600 rotate-90 w-4 h-4 my-1" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section id="deliverables" className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Full-Funnel Capability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Everything You Need to Grow
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg">
              One team covering the entire acquisition funnel — from the first impression to the closed sale.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 sm:p-8 bg-vedixx-card/40 rounded-2xl border border-white/5 hover:bg-white/[0.06] hover:border-vedixx-primary/20 transition-all group"
              >
                <div className="mb-4 sm:mb-5 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {d.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{d.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO DEEP DIVE */}
      <section className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Long-Term Revenue Asset
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              SEO That Captures Buyers
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg">
              We build <span className="text-white font-semibold">intent-based SEO</span> that ranks for the keywords
              your customers use right before they buy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-vedixx-primary" />, title: 'Technical SEO Core', desc: 'Site speed, mobile-first indexing, schema markup, and clean architecture that search engines love.' },
              { icon: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-vedixx-primary" />, title: 'Search Intent Mapping', desc: 'Keywords matched to funnel stages — informational content for awareness, transactional pages for sales.' },
              { icon: <LineChart className="w-7 h-7 sm:w-8 sm:h-8 text-vedixx-primary" />, title: 'Authority & Reporting', desc: 'Content and links that build topical authority — reported as organic leads and revenue, not impressions.' },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 bg-vedixx-bg/60 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-vedixx-primary/20 transition-colors"
              >
                <div className="mb-4 sm:mb-6">{f.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{f.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAID ACQUISITION */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-vedixx-primary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Immediate Scale
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Paid Acquisition Protocols
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg">
              We use <span className="text-white font-semibold">scientific testing</span> to find winning ads, then
              scale them aggressively while protecting your budget.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div {...fadeUp} className="space-y-6 sm:space-y-8">
              {[
                { icon: <Target className="w-6 h-6 text-vedixx-primary" />, color: 'red', title: 'Google Ads — Demand Capture', desc: 'We capture high-intent users actively searching. Keywords selected by commercial intent, not just volume.' },
                { icon: <Users className="w-6 h-6 text-vedixx-primary" />, color: 'blue', title: 'Meta Ads — Demand Generation', desc: 'We stop the scroll. Creative testing finds the hooks and visuals that drive cheap, high-converting clicks.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-vedixx-primary/20 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div {...fadeUp} className="bg-vedixx-card/40 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">The Testing Framework</h4>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: '1. Angle Testing', time: 'Week 1-2', highlight: false },
                  { step: '2. Creative Testing', time: 'Week 3-4', highlight: false },
                  { step: '3. Scale Winners', time: 'Ongoing', highlight: true },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg ${
                      s.highlight ? 'border border-vedixx-primary/30' : ''
                    }`}
                  >
                    <span className={`text-sm sm:text-base ${s.highlight ? 'text-white font-bold' : 'text-gray-300'}`}>
                      {s.step}
                    </span>
                    <span className="text-xs sm:text-sm text-vedixx-primary font-bold">{s.time}</span>
                  </div>
                ))}
                <p className="text-[10px] sm:text-xs text-center text-gray-500 mt-3">
                  *We kill losing ads ruthlessly to protect your budget.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-gradient-to-br from-vedixx-primary/20 to-vedixx-bg border border-vedixx-primary/20 rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16 text-center"
          >
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-vedixx-primary/15 border border-vedixx-primary/20 flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Database className="w-7 h-7 sm:w-10 sm:h-10 text-vedixx-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Without Tracking, Scaling is <span className="text-vedixx-primary">Guessing.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10">
              We set up enterprise-grade tracking before spending a cent. Every touchpoint mapped, every dollar
              attributed — so you scale on data, not hope.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['Multi-Touch Attribution', 'Server-Side Tracking', 'Funnel Visualization', 'Real-Time ROAS'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-vedixx-primary/10 border border-vedixx-primary/20 text-vedixx-primary text-xs sm:text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={digitalMarketingFaqs} accent="text-vedixx-primary" eyebrow="Digital Marketing FAQ" />

      {/* CTA */}
      <section className="py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-8">
            Ready to Build Your System?
          </motion.h2>
          <motion.p {...fadeUp} className="text-sm sm:text-xl text-vedixx-muted mb-6 sm:mb-10">
            Stop focusing on clicks. Start focusing on revenue. Book a free, no-pressure growth audit today.
          </motion.p>
          <motion.div {...fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-vedixx-primary text-white px-8 sm:px-12 py-3.5 sm:py-6 rounded-full font-bold text-base sm:text-xl hover:bg-vedixx-primary transition-all shadow-2xl hover:-translate-y-1"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default DigitalMarketingContent;
