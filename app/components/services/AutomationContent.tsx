'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Zap,
  MessageSquare,
  Database,
  Bot,
  Users,
  Clock,
  Shield,
  Workflow,
  ArrowRight,
  GitBranch,
  Mail,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import Contact from '../Contact';
import FAQ from '../FAQ';
import { automationFaqs } from '../../lib/faqs';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: <Clock className="w-6 h-6" />, value: '30s', label: 'Lead response time' },
  { icon: <Bot className="w-6 h-6" />, value: '90%', label: 'Support queries handled' },
  { icon: <RefreshCw className="w-6 h-6" />, value: '20+ hrs', label: 'Saved per week' },
  { icon: <Shield className="w-6 h-6" />, value: '24/7', label: 'Always-on operations' },
];

const capabilities = [
  { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: 'Lead Velocity Systems', desc: 'Instant capture, AI scoring, and routing to the right rep in 30 seconds — so hot prospects never go cold.' },
  { icon: <Bot className="w-6 h-6 text-purple-400" />, title: 'AI Support Agents', desc: 'Chatbots that resolve up to 90% of FAQs across your site and WhatsApp, escalating only what needs a human.' },
  { icon: <Database className="w-6 h-6 text-blue-400" />, title: 'CRM Synchronization', desc: 'Marketing, sales, invoicing, and fulfillment all talking to each other with zero manual data entry.' },
  { icon: <Mail className="w-6 h-6 text-green-400" />, title: 'Follow-Up Sequences', desc: 'Automated nurture across email, SMS, and WhatsApp until a lead buys — or clearly says no.' },
  { icon: <Users className="w-6 h-6 text-cyan-400" />, title: 'Client Onboarding', desc: 'From signed proposal to welcome email to project channel — fully hands-off for your team.' },
  { icon: <GitBranch className="w-6 h-6 text-pink-400" />, title: 'Workflow Architecture', desc: 'Custom multi-step logic with n8n, Zapier, and Make connecting your entire tech stack.' },
];

const AutomationContent = () => {
  return (
    <div className="pt-20 bg-vedixx-bg font-body text-vedixx-text overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase"
          >
            <Cpu className="w-4 h-4" /> Automation & AI Integration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-8xl font-bold font-heading text-white tracking-tight leading-[1.1]"
          >
            Your Team Does the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Thinking. We Automate the Rest.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-2xl text-vedixx-muted font-light leading-relaxed"
          >
            We build intelligent <strong className="text-white font-semibold">business automation</strong> and AI
            systems that handle your leads, sales, and support — running silently, accurately, and 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-vedixx-bg px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-purple-400 hover:text-black transition-all shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            >
              Get a Free Automation Audit
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-medium text-sm sm:text-lg border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all"
            >
              What We Automate
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
                <div className="mx-auto mb-3 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  {s.icon}
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-xs sm:text-sm text-vedixx-muted mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN / IMAGINE IF */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-purple-400 font-bold tracking-wider uppercase text-xs sm:text-sm">
              The Opportunity
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Imagine If Your Business Could...
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg max-w-2xl mx-auto">
              These aren&apos;t dreams. They&apos;re systems we build every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: <Clock className="w-7 h-7 text-yellow-400" />, title: 'Respond to leads in 30 seconds', desc: 'Not 30 minutes. Automated routing means your hottest prospects get instant attention.' },
              { icon: <Bot className="w-7 h-7 text-purple-400" />, title: 'Answer 90% of support queries', desc: 'AI chatbots handle the FAQs. Your team handles the complex work that needs a human.' },
              { icon: <Database className="w-7 h-7 text-blue-400" />, title: 'Sync every tool you use', desc: 'CRM, email, invoicing, project management — all connected. Zero manual entry.' },
              { icon: <Zap className="w-7 h-7 text-orange-400" />, title: 'Onboard clients automatically', desc: 'From signed proposal to welcome email to channel setup — zero clicks from your team.' },
              { icon: <Users className="w-7 h-7 text-green-400" />, title: 'Score & qualify leads with AI', desc: 'Not all leads are equal. Scoring models prioritize the ones ready to buy.' },
              { icon: <Shield className="w-7 h-7 text-red-400" />, title: 'Never lose a lead again', desc: 'Automated follow-ups across email, SMS, and WhatsApp until they buy — or say no.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 sm:p-8 bg-vedixx-card/40 rounded-2xl border border-white/5 hover:bg-white/[0.06] hover:border-purple-500/20 transition-all group"
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

      {/* WHAT WE AUTOMATE */}
      <section id="capabilities" className="py-12 sm:py-24 bg-vedixx-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-purple-400 font-bold tracking-wider uppercase text-xs sm:text-sm">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Systems We Build for You
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg">
              Each one removes a bottleneck, recovers lost revenue, and gives your team back hours every week.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 sm:p-8 bg-vedixx-bg/60 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all group"
              >
                <div className="mb-4 sm:mb-5 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <span className="text-purple-400 font-bold tracking-wider uppercase text-xs sm:text-sm">Our Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              How We Build Your Autopilot
            </h2>
            <p className="text-vedixx-muted text-base sm:text-lg max-w-2xl mx-auto">
              We don&apos;t just connect apps. We architect intelligent systems that think, adapt, and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { icon: <Workflow className="w-6 h-6" />, step: '01', title: 'Workflow Audit', desc: "We map every manual process — every copy-paste, spreadsheet lookup, and 'I forgot to send that email'. We find the time-killers.", color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: <GitBranch className="w-6 h-6" />, step: '02', title: 'System Architecture', desc: 'We design the logic — which tool triggers which action and where the data flows. The blueprint for your business brain.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { icon: <Cpu className="w-6 h-6" />, step: '03', title: 'Build & Connect', desc: 'Using n8n, Zapier, Make, and custom APIs, we wire your CRM, email, and invoicing into one living ecosystem.', color: 'text-green-400', bg: 'bg-green-500/10' },
              { icon: <CheckCircle2 className="w-6 h-6" />, step: '04', title: 'Test & Hand Over', desc: 'We stress-test every edge case, then train your team on the system they now own — with full docs and support.', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 bg-vedixx-card/40 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Tools We Master</h2>
            <p className="text-vedixx-muted text-base sm:text-lg">
              We pick the right tool for the job — not the one with the fanciest logo.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {['n8n', 'Zapier', 'Make (Integromat)', 'Respond.io', 'OpenAI API', 'Airtable', 'HubSpot', 'Slack API', 'WhatsApp Business API', 'Google Sheets API', 'Stripe', 'Calendly'].map((tech, i) => (
              <span
                key={i}
                className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-vedixx-bg border border-white/10 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white hover:border-purple-500/30 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={automationFaqs} accent="text-purple-400" eyebrow="Automation FAQ" />

      {/* CTA */}
      <section className="py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-8">
            Stop Being the Bottleneck.
          </motion.h2>
          <motion.p {...fadeUp} className="text-sm sm:text-xl text-vedixx-muted mb-6 sm:mb-10">
            Let your systems do the heavy lifting so your team can focus on what matters — growing.
          </motion.p>
          <motion.div {...fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-vedixx-primary text-white px-8 sm:px-12 py-3.5 sm:py-6 rounded-full font-bold text-base sm:text-xl hover:bg-purple-600 transition-all shadow-2xl hover:-translate-y-1"
            >
              Book a Free Automation Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default AutomationContent;
