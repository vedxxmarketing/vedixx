'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from '../site.config';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const serviceLinks = [
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Automation & Integrations', href: '/services/automation' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'CMS Solutions', href: '/services/cms-solutions' },
  ];

  const navLinks = [
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-vedixx-bg/90 backdrop-blur-xl border-b border-white/5 py-2 shadow-lg shadow-black/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* 1. Logo (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group" aria-label="Vedixx home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-7 sm:h-9 lg:h-10 transition-[filter] duration-300 group-hover:drop-shadow-[0_0_14px_rgba(255,90,31,0.55)]"
              >
                <Logo className="h-full" />
              </motion.div>
            </Link>
          </div>

          {/* 2. Desktop Menu (Only on lg+) */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1 px-4">
            {/* Home Link */}
            <Link
              href="/"
              className="text-base font-medium text-vedixx-muted hover:text-white transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vedixx-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-base font-medium text-vedixx-muted hover:text-white transition-colors py-2 group relative">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-vedixx-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4"
                  >
                    <div className="bg-vedixx-card/95 border border-white/10 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl p-2 ring-1 ring-white/5">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-vedixx-muted hover:text-white hover:bg-white/5 rounded-lg transition-all hover:pl-6"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-vedixx-muted hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vedixx-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. Right Side: Phone + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone - Always visible. Compact on mobile, full on lg+ */}
            <motion.a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 text-white group transition-all duration-300 hover:text-vedixx-primary bg-white/5 px-3 py-2 sm:px-4 rounded-full border border-white/5 hover:border-vedixx-primary/30"
            >
              <div className="p-1 sm:p-1.5 rounded-full bg-vedixx-primary/20 group-hover:bg-vedixx-primary/30 transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vedixx-primary" />
              </div>
              <span className="hidden sm:inline font-bold font-heading tracking-wide text-sm sm:text-base">{CONTACT.phone}</span>
            </motion.a>

            {/* Mobile Menu Button (visible below lg) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-vedixx-text hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (below lg) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute w-full bg-vedixx-bg/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="/"
                className="block px-3 py-3 text-base font-medium text-vedixx-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="py-2 space-y-1">
                <div className="px-3 py-2 text-sm font-bold text-white uppercase tracking-wider opacity-50">
                  Services
                </div>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 pl-6 text-base font-medium text-vedixx-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-white/5 my-2"></div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-vedixx-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="block mt-4 text-center bg-vedixx-ember text-white px-5 py-3 rounded-full text-base font-bold hover:bg-vedixx-emberDeep transition-all shadow-ember-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
