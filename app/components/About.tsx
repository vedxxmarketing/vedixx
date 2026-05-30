'use client';

import { Shield, Target, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-vedixx-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
            >
              We Are Your <span className="text-vedixx-primary">Growth Partners</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-sm sm:text-lg text-vedixx-muted leading-relaxed">
                Vedixx isn&apos;t just a service provider; we are a strategic extension of your team. We believe
                that true growth comes from the intersection of creativity, data, and technology.
              </p>
              <p className="text-sm sm:text-lg text-vedixx-muted leading-relaxed">
                Our mission is to empower businesses with scalable systems that generate predictable revenue. We
                move fast, break barriers, and deliver results that matter.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              {[
                {
                  icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'Result Oriented',
                  desc: 'We focus on KPIs that drive actual business growth.',
                },
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'Data Driven',
                  desc: 'Decisions backed by analytics, not guesswork.',
                },
                {
                  icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'Fast Execution',
                  desc: 'Rapid deployment without compromising quality.',
                },
                {
                  icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'Client Centric',
                  desc: 'Your success is our ultimate metric.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-vedixx-card border border-white/5 text-vedixx-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1">{item.title}</h4>
                    <p className="text-[11px] sm:text-sm text-vedixx-muted leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-vedixx-primary to-purple-600 rounded-2xl opacity-15 blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-vedixx-card">
              <div className="aspect-[4/3] sm:aspect-video bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-4xl sm:text-6xl font-bold text-white mb-2"
                    >
                      100+
                    </motion.div>
                    <div className="text-vedixx-primary font-medium tracking-wide uppercase text-xs sm:text-sm">
                      Projects Delivered
                    </div>
                  </div>
                </div>

                {/* Floating cards — responsive positioning */}
                <div className="absolute top-3 right-3 sm:top-8 sm:right-8 p-2 sm:p-4 bg-black/70 sm:bg-black/60 sm:backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    <span className="text-[10px] sm:text-sm font-bold text-white">ROAS Increased 300%</span>
                  </div>
                </div>
                {/* Desktop-only floating animation wrapper */}
                <div className="hidden sm:block">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-8 right-8 p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-bold text-white">ROAS Increased 300%</span>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-8 sm:left-8 p-2 sm:p-4 bg-black/70 sm:bg-black/60 sm:backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 sm:hidden">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-[10px] font-bold text-white">Automations Active</span>
                  </div>
                </div>
                {/* Desktop-only floating animation wrapper */}
                <div className="hidden sm:block">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-8 left-8 p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-bold text-white">Automations Active</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
