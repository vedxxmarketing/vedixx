'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    company: 'Scale AlromaihCars',
    industry: 'Automotive',
    location: 'Saudi Arabia',
    reviewer: 'Abdulrahman Alromaih',
    role: 'Marketing Manager',
    growth: '~10x Organic Growth',
    review:
      'Vedixx helped us rebuild our SEO foundation with a clear technical-first approach. After implementation and content optimization, organic traffic increased close to 10x and lead quality improved noticeably. Communication was consistent and results stayed stable over time.',
  },
  {
    company: 'TedRed',
    industry: 'Digital Marketing & Automations',
    location: 'Global',
    reviewer: 'Sayed Yahya',
    role: 'Growth Lead',
    growth: 'Improved ROAS',
    review:
      'Vedixx restructured our paid ads and automated key parts of our marketing workflow. ROAS improved within the first quarter and internal operations became much smoother. It felt more like a strategic partnership than a service.',
  },
  {
    company: 'PharmaElegance',
    industry: 'Pharma & Beauty eCommerce',
    location: 'United Kingdom',
    reviewer: 'Charlotte Bennett',
    role: 'Ecommerce Director',
    growth: '~10x Revenue',
    review:
      'Vedixx understood compliance requirements and platform restrictions from the start. They scaled Google and Meta ads carefully while supporting growth with SEO. Revenue increased close to 10x and brand stability was maintained.',
  },
  {
    company: 'US Pet Food Brand',
    industry: 'Pet Nutrition',
    location: 'United States',
    reviewer: 'Michael Reynolds',
    role: 'Founder',
    growth: '~10x Performance',
    review:
      'Vedixx improved our tracking, ad structure, and testing process. Customer acquisition scaled steadily and profitability improved. Performance increased nearly 10x with clear reporting throughout.',
  },
  {
    company: 'Hair & Skin Care Brands',
    industry: 'Beauty eCommerce',
    location: 'United Kingdom and United States',
    reviewer: 'Rebecca Collins',
    role: 'Brand Manager',
    growth: 'Consistent Growth',
    review:
      'Vedixx supported multiple beauty brands with ads, SEO, and creative testing. Growth was consistent and the process was structured. Collaboration felt reliable and long term.',
  },
  {
    company: 'WordPress Website and SEO Client',
    industry: 'Business Services',
    location: 'United Arab Emirates',
    reviewer: 'Khalid Al Mansoori',
    role: 'Business Owner',
    growth: '~10x in 3 Months',
    review:
      'Vedixx designed our WordPress website and handled SEO from scratch. The site performs well and rankings improved quickly. We saw close to 10x growth within three months and I am very satisfied.',
  },
  {
    company: 'Custom Coded Website Client',
    industry: 'Corporate Services',
    location: 'United Kingdom',
    reviewer: 'Jonathan Whitmore',
    role: 'Operations Director',
    growth: 'Long-Term Performance',
    review:
      'Vedixx developed a custom coded, SEO friendly website for our company. The structure, speed, and scalability were handled properly. Everything was built with long term performance in mind.',
  },
];

// Duplicate for seamless loop
const duplicated = [...testimonials, ...testimonials];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPos = useRef(0);
  const speed = 0.5;
  const isTouchDevice = useRef(false);

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
      // Toggle: tap to select, tap again to deselect
      setHoveredIndex((prev) => (prev === index ? null : index));
    }
  };

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

  useEffect(() => {
    if (hoveredIndex === null && scrollRef.current) {
      scrollPos.current = scrollRef.current.scrollLeft;
    }
  }, [hoveredIndex]);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-vedixx-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vedixx-primary/10 border border-vedixx-primary/20 mb-4 sm:mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-vedixx-primary" />
            <span className="text-xs font-semibold text-vedixx-primary uppercase tracking-wider">Client Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Trusted by Brands That Care
            <br />
            About <span className="text-vedixx-primary">Real Growth</span>
          </h2>
          <p className="text-vedixx-muted text-base sm:text-lg max-w-2xl mx-auto">
            Measurable results across SEO, paid advertising, and marketing automation — built on clarity,
            consistency, and long-term partnerships.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Auto-Scroll Marquee */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-hidden px-4 sm:px-6 py-2 cursor-default"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicated.map((testimonial, index) => {
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
              className="flex-shrink-0 w-[300px] sm:w-[360px] transition-all duration-300"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                opacity: hasHover && !isHovered ? 0.5 : 1,
                filter: hasHover && !isHovered ? 'blur(2px)' : 'none',
                zIndex: isHovered ? 10 : 1,
              }}
            >
              <div
                className={`h-full bg-vedixx-card/40 border rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                  isHovered ? 'border-vedixx-primary/30 shadow-lg shadow-vedixx-primary/10' : 'border-white/[0.06]'
                }`}
              >
                {/* Review Text */}
                <p className="text-white/70 text-sm leading-relaxed mb-3">{testimonial.review}</p>

                {/* Reviewer Info */}
                <div className="border-t border-white/[0.06] pt-3">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-vedixx-primary/15 border border-vedixx-primary/30 flex items-center justify-center text-vedixx-primary text-xs font-bold">
                        {testimonial.reviewer
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{testimonial.reviewer}</h4>
                        <span className="text-vedixx-muted text-[11px]">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5 shrink-0 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-vedixx-primary fill-vedixx-primary" />
                      ))}
                    </div>
                  </div>

                  {/* Company + Location */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/60 text-xs font-medium">{testimonial.company}</span>
                    <span className="text-white/20">·</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-vedixx-muted" />
                      <span className="text-vedixx-muted text-[11px]">{testimonial.location}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-vedixx-primary/10 text-vedixx-primary text-[10px] font-semibold">
                      {testimonial.industry}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-vedixx-primary/10 text-vedixx-primary text-[10px] font-semibold">
                      {testimonial.growth}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 sm:gap-6 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-vedixx-card/30 border border-white/[0.05]">
            <div className="text-center">
              <div className="text-vedixx-primary font-bold text-lg sm:text-xl">50+</div>
              <div className="text-vedixx-muted text-[10px] sm:text-xs">Clients Served</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-vedixx-primary font-bold text-lg sm:text-xl">10x</div>
              <div className="text-vedixx-muted text-[10px] sm:text-xs">Avg. Growth</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-vedixx-primary font-bold text-lg sm:text-xl">5+</div>
              <div className="text-vedixx-muted text-[10px] sm:text-xs">Countries</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-vedixx-primary font-bold text-lg sm:text-xl">98%</div>
              <div className="text-vedixx-muted text-[10px] sm:text-xs">Retention Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
