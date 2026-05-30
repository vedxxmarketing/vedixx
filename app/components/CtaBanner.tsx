'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-vedixx-primary/20 via-vedixx-card to-vedixx-bg px-6 sm:px-12 py-12 sm:py-20 text-center"
        >
          {/* Glow accents */}
          <div className="absolute -top-1/2 left-1/4 w-[400px] h-[400px] bg-vedixx-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5 sm:space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-vedixx-primary" />
              Limited spots for new growth partners
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight leading-tight">
              Let&apos;s Turn Your Traffic
              <br className="hidden sm:block" /> Into <span className="text-vedixx-primary">Revenue.</span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 font-light max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll audit your current growth, spot the biggest
              opportunities, and map a clear plan — no pressure, just value.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-vedixx-bg px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-vedixx-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                Book My Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-white/40">
              Free audit · Custom plan · Clear pricing &amp; timelines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
