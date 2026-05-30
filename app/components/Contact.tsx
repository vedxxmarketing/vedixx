'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Linkedin, Facebook, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { CONTACT } from '../site.config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `New Strategy Call Request from ${formData.name}`,
          _template: 'table', // formatted table
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-vedixx-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {/* CTA Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready to <span className="text-vedixx-primary">Scale?</span>
              <br />
              Let&apos;s Talk.
            </h2>
            <p className="text-base sm:text-xl text-vedixx-muted">
              Book a free strategy call to discuss your goals and how Vedixx can help you achieve them. No
              pressure, just value.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
              {[
                'Free 30-minute growth audit',
                'Custom tailored implementation plan',
                'Clear pricing and timelines',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2.5 sm:gap-3 text-vedixx-muted text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-vedixx-primary shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex-1 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-vedixx-card border border-white/5 hover:border-vedixx-primary/50 transition-all group"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-vedixx-bg group-hover:bg-vedixx-primary/10 transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-vedixx-primary" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-vedixx-muted">Email Us</div>
                  <div className="font-bold text-white text-xs sm:text-base break-all">{CONTACT.email}</div>
                </div>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-vedixx-card border border-white/5 hover:border-vedixx-primary/50 transition-all group"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-vedixx-bg group-hover:bg-[#25D366]/10 transition-colors">
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-vedixx-muted">WhatsApp Us</div>
                  <div className="font-bold text-white text-xs sm:text-base">{CONTACT.phone}</div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 sm:pt-8 border-t border-white/5">
              <h4 className="text-xs sm:text-sm font-bold text-vedixx-muted mb-3 sm:mb-4 uppercase tracking-wider">
                Connect with us
              </h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-vedixx-card border border-white/5 hover:border-vedixx-primary/50 hover:bg-vedixx-primary/10 text-vedixx-muted hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-vedixx-card border border-white/5 hover:border-vedixx-primary/50 hover:bg-vedixx-primary/10 text-vedixx-muted hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-vedixx-card border border-white/5 hover:border-vedixx-primary/50 hover:bg-vedixx-primary/10 text-vedixx-muted hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-vedixx-card p-5 sm:p-8 rounded-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-vedixx-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-vedixx-bg border border-white/10 rounded-lg focus:outline-none focus:border-vedixx-primary focus:ring-1 focus:ring-vedixx-primary transition-all text-white placeholder-gray-600 focus:bg-white/5"
                  placeholder="John Doe"
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-vedixx-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-vedixx-bg border border-white/10 rounded-lg focus:outline-none focus:border-vedixx-primary focus:ring-1 focus:ring-vedixx-primary transition-all text-white placeholder-gray-600 focus:bg-white/5"
                  placeholder="john@company.com"
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-vedixx-muted mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-vedixx-bg border border-white/10 rounded-lg focus:outline-none focus:border-vedixx-primary focus:ring-1 focus:ring-vedixx-primary transition-all text-white placeholder-gray-600 focus:bg-white/5"
                  placeholder="Company Ltd."
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-vedixx-muted mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-vedixx-bg border border-white/10 rounded-lg focus:outline-none focus:border-vedixx-primary focus:ring-1 focus:ring-vedixx-primary transition-all text-white placeholder-gray-600 resize-none focus:bg-white/5"
                  placeholder="Tell us about your project..."
                  disabled={status === 'sending'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-vedixx-bg py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'sending' ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                {status !== 'sending' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent! We&apos;ll get back to you shortly.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium"
                  >
                    Something went wrong. Please email us directly at {CONTACT.email}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
