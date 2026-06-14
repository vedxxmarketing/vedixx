'use client';

import { ArrowRight, Star } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotating phrases — tied to VEDIXX's core services
  const rotatingPhrases = [
    'Growth Systems',
    'Digital Dominance',
    'Smart Automation',
    'Premium Websites',
    'Revenue Engines',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Background — pure dark, just subtle ember sparks */}
      <div className="absolute inset-0 bg-vedixx-bg">
        <ParticleBackground />
        {/* Very subtle ember line at the very bottom — barely-there accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[12vh] w-[40vw] rounded-[50%] bg-vedixx-ember/[0.07] blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center w-full">
        <div className="space-y-5 sm:space-y-7 max-w-5xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vedixx-ember opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-vedixx-ember" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/55">
              Taking on new growth partners
            </span>
          </motion.div>

          {/* Static Headline + Rotating Phrase */}
          <div className="space-y-0">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h1 className="text-[3rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold font-heading tracking-[-0.04em] text-gradient leading-[0.95] py-1">
                We Build
              </h1>
            </motion.div>

            {/* Line 2: Rotating phrase in ember */}
            <div className="h-[3rem] sm:h-[4.5rem] md:h-[5.5rem] lg:h-[7rem] relative overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -36, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-ember-gradient text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[7rem] font-bold font-heading tracking-[-0.03em] leading-[0.95]">
                    {rotatingPhrases[currentIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm sm:text-lg md:text-xl text-vedixx-muted max-w-sm sm:max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-2"
          >
            Premium development, data-driven marketing, and intelligent automation —
            engineered to scale your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-vedixx-ember text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 shadow-ember hover:shadow-[0_0_50px_-5px_rgba(255,90,31,0.7)] flex items-center justify-center gap-2"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-white/[0.03] border border-white/10 text-white/70 rounded-full font-medium text-sm sm:text-base hover:text-white hover:border-vedixx-ember/40 hover:bg-vedixx-ember/[0.06] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-5 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vedixx-ember fill-vedixx-ember"
                  />
                ))}
              </div>
              <span className="text-white/70 font-medium">Rated 5/5 by 50+ brands</span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-white/15" />
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-6 text-vedixx-muted">
              <span>
                <strong className="text-white/85 font-semibold">5+</strong> countries
              </span>
              <span>
                <strong className="text-white/85 font-semibold">10x</strong> avg. growth
              </span>
              <span>
                <strong className="text-white/85 font-semibold">98%</strong> retention
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
