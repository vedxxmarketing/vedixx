'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import type { FaqItem } from '../lib/faqs';

const FAQ = ({
  faqs,
  accent = 'text-vedixx-primary',
  eyebrow = 'FAQ',
  heading = 'Questions? Answered.',
}: {
  faqs: FaqItem[];
  accent?: string;
  eyebrow?: string;
  heading?: string;
}) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className={`inline-flex items-center gap-2 font-bold tracking-wider uppercase text-xs sm:text-sm ${accent}`}>
            <HelpCircle className="w-4 h-4" /> {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">{heading}</h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border bg-vedixx-card/40 overflow-hidden transition-colors ${
                  isOpen ? 'border-white/15' : 'border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg font-semibold text-white group-hover:text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-white/10' : ''
                    }`}
                  >
                    <Plus className={`w-4 h-4 ${accent}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-vedixx-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
