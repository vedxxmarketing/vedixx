'use client';

import { Search, PenTool, Rocket, LineChart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Process = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPos = useRef(0);
  const speed = 0.5; // Same speed as Testimonials
  const isTouchDevice = useRef(false);

  const steps = [
    {
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Discover',
      description: 'We audit your current setup and identify growth opportunities.',
    },
    {
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Build',
      description: 'Our team crafts a custom strategy and high-converting assets.',
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Launch',
      description: 'We deploy optimization campaigns across targeted channels.',
    },
    {
      icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Optimize',
      description: 'Continuous A/B testing and data analysis to maximize ROI.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Scale',
      description: 'We amplify what works to drive exponential growth.',
    },
  ];

  // Duplicate for seamless infinite loop
  const allSteps = [...steps, ...steps];

  // Detect touch device
  useEffect(() => {
    const onTouch = () => {
      isTouchDevice.current = true;
    };
    window.addEventListener('touchstart', onTouch, { once: true });
    return () => window.removeEventListener('touchstart', onTouch);
  }, []);

  // Tap outside to deselect on mobile
  useEffect(() => {
    if (hoveredIndex === null) return;
    const handleTapOutside = (e: TouchEvent) => {
      const container = scrollRef.current;
      if (container && !container.contains(e.target as Node)) {
        setHoveredIndex(null);
      }
    };
    document.addEventListener('touchstart', handleTapOutside);
    return () => document.removeEventListener('touchstart', handleTapOutside);
  }, [hoveredIndex]);

  const handleCardInteraction = (index: number) => {
    if (isTouchDevice.current) {
      setHoveredIndex((prev) => (prev === index ? null : index));
    }
  };

  // requestAnimationFrame scroll — same as Testimonials
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = () => {
      if (hoveredIndex !== null) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      scrollPos.current += speed;

      const halfWidth = container.scrollWidth / 2;
      if (scrollPos.current >= halfWidth) {
        scrollPos.current = 0;
      }

      container.scrollLeft = scrollPos.current;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredIndex]);

  // Sync scroll position when interaction ends
  useEffect(() => {
    if (hoveredIndex === null && scrollRef.current) {
      scrollPos.current = scrollRef.current.scrollLeft;
    }
  }, [hoveredIndex]);

  return (
    <section id="process" className="py-16 sm:py-24 bg-vedixx-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            The Vedixx Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-vedixx-muted max-w-2xl mx-auto text-sm sm:text-base"
          >
            A proven framework for consistent, scalable results.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container — full width */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-vedixx-card to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-vedixx-card to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track — requestAnimationFrame */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-hidden px-4 sm:px-6 py-2 cursor-default"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allSteps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const hasHover = hoveredIndex !== null;

            return (
              <div
                key={index}
                onClick={() => handleCardInteraction(index)}
                onMouseEnter={() => {
                  if (!isTouchDevice.current) setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice.current) setHoveredIndex(null);
                }}
                className="flex-shrink-0 w-[220px] sm:w-[280px] md:w-[300px] rounded-xl sm:rounded-2xl border bg-vedixx-bg/50 p-4 sm:p-6 group transition-all duration-300 cursor-default"
                style={{
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  opacity: hasHover && !isHovered ? 0.5 : 1,
                  filter: hasHover && !isHovered ? 'blur(2px)' : 'none',
                  zIndex: isHovered ? 10 : 1,
                  borderColor: isHovered ? 'rgba(255,90,31,0.4)' : 'rgba(255,255,255,0.06)',
                  background: isHovered ? 'rgba(255,90,31,0.06)' : undefined,
                  boxShadow: isHovered ? '0 10px 30px -6px rgba(255,90,31,0.18)' : 'none',
                }}
              >
                {/* Icon + Number */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-vedixx-primary/30 group-hover:bg-vedixx-primary/10 transition-all duration-300">
                    <div className="text-white/60 group-hover:text-vedixx-primary transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-vedixx-primary/90 text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                    {(index % steps.length) + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 group-hover:text-vedixx-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
