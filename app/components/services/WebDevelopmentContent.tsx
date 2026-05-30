'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Palette,
  Gauge,
  Layers,
  Shield,
  Search,
  ArrowRight,
  Rocket,
  PenTool,
  Sparkles,
  Zap,
  ShoppingCart,
  Globe,
  ServerCog,
} from 'lucide-react';
import Contact from '../Contact';
import FAQ from '../FAQ';
import { webDevelopmentFaqs } from '../../lib/faqs';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: <Gauge className="w-6 h-6" />, value: '<2s', label: 'Target load time' },
  { icon: <Smartphone className="w-6 h-6" />, value: '100%', label: 'Mobile-first' },
  { icon: <Search className="w-6 h-6" />, value: '90+', label: 'Lighthouse SEO' },
  { icon: <Rocket className="w-6 h-6" />, value: '2–4 wk', label: 'Typical launch' },
];

const capabilities = [
  { icon: <Gauge className="w-6 h-6 text-green-400" />, title: 'Speed Obsessed', desc: 'Sub-2-second load times. Every second of delay costs ~7% in conversions — so we obsess over performance.' },
  { icon: <Smartphone className="w-6 h-6 text-blue-400" />, title: 'Mobile-First, Always', desc: '60%+ of your visitors are on a phone. We design for mobile first, then scale up — never the reverse.' },
  { icon: <Palette className="w-6 h-6 text-pink-400" />, title: 'Design That Converts', desc: 'Conversion psychology baked in: clear CTAs, trust signals, and strategic whitespace that turn visitors into leads.' },
  { icon: <Search className="w-6 h-6 text-yellow-400" />, title: 'SEO-Ready From Day 1', desc: 'Semantic HTML, heading hierarchy, schema markup, and blazing speed — Google-friendly out of the box.' },
  { icon: <Shield className="w-6 h-6 text-red-400" />, title: 'Rock-Solid Security', desc: 'SSL, security headers, input validation, and secure deployments to protect your site and your users.' },
  { icon: <Layers className="w-6 h-6 text-purple-400" />, title: 'Scalable Architecture', desc: 'Built with React, Next.js, and headless CMS so your site grows with your business — no costly rebuilds.' },
];

const buildTypes = [
  { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: 'Marketing & Landing Sites', desc: 'High-converting pages engineered to capture leads and rank.' },
  { icon: <Code2 className="w-6 h-6 text-indigo-400" />, title: 'Custom Web Apps', desc: 'Dashboards, portals, and tools tailored to your workflow.' },
  { icon: <ShoppingCart className="w-6 h-6 text-amber-400" />, title: 'E-Commerce Front-Ends', desc: 'Fast, conversion-focused storefronts that drive sales.' },
  { icon: <ServerCog className="w-6 h-6 text-green-400" />, title: 'Headless CMS Builds', desc: 'Edit content freely without touching code, on a modern stack.' },
];

const WebDevelopmentContent = () => {
  return (
    <div className="pt-20 bg-vedixx-bg font-body text-vedixx-text overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[5%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[5%] left-[10%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase"
          >
            <Code2 className="w-4 h-4" /> Performance Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-8xl font-bold font-heading text-white tracking-tight leading-[1.1]"
          >
            Your Website Should <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Sell, Not Just Sit There.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-2xl text-vedixx-muted font-light leading-relaxed"
          >
            We&apos;re a <strong className="text-white font-semibold">web development agency</strong> building fast,
            mobile-first, SEO-ready websites with React and Next.js — engineered to turn visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-vedixx-bg px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >
              Start My Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-medium text-sm sm:text-lg border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
            >
              See Our Approach
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
                <div className="mx-auto mb-3 w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  {s.icon}
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-xs sm:text-sm text-vedixx-muted mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section id="capabilities" className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs sm:text-sm">Why Vedixx</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Not Just Developers. <span className="text-cyan-400">Growth Engineers.</span>
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg max-w-2xl mx-auto">
              Every line of code we write has one purpose: make your business money.
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
                className="p-6 sm:p-8 bg-vedixx-card/40 rounded-2xl border border-white/5 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all group"
              >
                <div className="mb-4 sm:mb-5 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs sm:text-sm">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">
              From Landing Pages to Web Apps
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {buildTypes.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 sm:p-7 bg-vedixx-bg/60 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all text-center group"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs sm:text-sm">
              From Brief to Launch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">How We Build</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { icon: <Search className="w-6 h-6" />, step: '01', title: 'Discovery & Strategy', desc: "We start with your goals, not a Figma file. Who's your audience? What's the one action they must take? We map a journey that drives them there.", color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
              { icon: <PenTool className="w-6 h-6" />, step: '02', title: 'Design & Prototype', desc: 'High-fidelity mockups you can click through before we write a single line of code. Premium aesthetics meet conversion psychology.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: <Code2 className="w-6 h-6" />, step: '03', title: 'Code & Optimize', desc: "Clean React/Next.js code with image optimization, lazy loading, and code splitting. Your site doesn't just look fast — it is fast.", color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
              { icon: <Rocket className="w-6 h-6" />, step: '04', title: 'Launch & Monitor', desc: "Deployed with analytics, error tracking, and performance monitoring baked in. We don't ghost you after launch.", color: 'text-green-400', bg: 'bg-green-500/10' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 bg-vedixx-card/40 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <span className={`text-3xl sm:text-4xl font-bold opacity-20 ${item.color}`}>{item.step}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center gap-3">
              <Sparkles className="w-7 h-7 text-cyan-400" /> Our Stack
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg">Modern frameworks. Battle-tested tools. Zero bloat.</p>
          </motion.div>
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vercel', 'Netlify', 'Sanity CMS', 'Strapi', 'PostgreSQL', 'Supabase', 'Cloudflare', 'Git/GitHub'].map((tech, i) => (
              <span
                key={i}
                className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-vedixx-bg border border-white/10 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white hover:border-cyan-500/30 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={webDevelopmentFaqs} accent="text-cyan-400" eyebrow="Web Development FAQ" />

      {/* CTA */}
      <section className="py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-8">
            Ready for a Site That Works?
          </motion.h2>
          <motion.p {...fadeUp} className="text-sm sm:text-xl text-vedixx-muted mb-6 sm:mb-10">
            Stop settling for templates. Get a site engineered for your growth.
          </motion.p>
          <motion.div {...fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-vedixx-primary text-white px-8 sm:px-12 py-3.5 sm:py-6 rounded-full font-bold text-base sm:text-xl hover:bg-cyan-600 transition-all shadow-2xl hover:-translate-y-1"
            >
              Start My Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default WebDevelopmentContent;
