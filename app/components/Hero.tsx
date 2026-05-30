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

  const gradientColor = 'from-sky-300 via-cyan-200 to-white';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-vedixx-bg">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-vedixx-card via-vedixx-bg to-vedixx-bg opacity-40 pointer-events-none" />
        {/* Subtle glow — smaller on mobile */}
        <div className="absolute top-1/3 left-1/3 w-48 sm:w-[500px] h-48 sm:h-[500px] bg-vedixx-primary/10 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center w-full">
        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-white/[0.06] sm:bg-white/[0.04] border border-white/[0.08] sm:backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="hidden sm:inline-flex animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-sm font-medium text-white/60 tracking-wide">
              Taking on new growth partners
            </span>
          </motion.div>

          {/* Static Headline + Rotating Phrase */}
          <div className="space-y-0">
            {/* Line 1: Static "We Build" */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading tracking-[-0.03em] text-white leading-none py-1">
                We Build
              </h1>
            </motion.div>

            {/* Line 2: Rotating phrase — optimized for mobile */}
            <div className="h-[2.8rem] sm:h-[3.5rem] md:h-[4.5rem] lg:h-[5.5rem] relative overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span
                    className={`text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-[-0.02em] leading-none bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}
                  >
                    {rotatingPhrases[currentIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-vedixx-primary to-transparent origin-center"
          />

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs sm:text-base md:text-lg text-white/45 max-w-xs sm:max-w-xl mx-auto leading-relaxed font-light tracking-wide px-2"
          >
            Premium development, data-driven marketing, and intelligent automation — engineered to scale your
            business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2"
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-vedixx-bg rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/[0.08] text-white/60 rounded-full font-medium text-sm sm:text-base hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/70 font-medium">Rated 5/5 by 50+ brands</span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-white/15" />
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-6 text-white/45">
              <span>
                <strong className="text-white/80 font-semibold">5+</strong> countries
              </span>
              <span>
                <strong className="text-white/80 font-semibold">10x</strong> avg. growth
              </span>
              <span>
                <strong className="text-white/80 font-semibold">98%</strong> retention
              </span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
