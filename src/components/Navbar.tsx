import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import {
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  CalendarCheck,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { Logo } from './Logo';
import { RESORT_INFO } from '../data/resortData';
import { ease, easeSmooth, fadeUp, staggerContainer } from '../lib/motion';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: '13 Suites', href: '#rooms' },
    { name: 'Highlights & Activities', href: '#highlights' },
    { name: 'Central Tourist Hub', href: '#tourist-hub' },
    { name: 'Amenities & Dining', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ & Contact', href: '#faq' },
  ];

  return (
    /* The entire header slides down from above on initial load */
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      initial={prefersReducedMotion ? {} : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeSmooth as number[], delay: 0.05 }}
    >
      {/* Top announcement bar */}
      <motion.div
        className="bg-[#0A2016] text-[#FAF8F5] border-b border-[#1E4D38]/40 px-4 sm:px-8 py-1.5 text-xs font-medium"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: ease as number[], delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#E2C98F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>13 Boutique Rooms • 5km from Raja's Seat</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-semibold text-white">Centre Point</span> of All Coorg Tourist Sights
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${RESORT_INFO.phone}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#E2C98F] transition-colors"
              title="Call Resort Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-semibold">{RESORT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hello%20Coorg%20Heritage%20Hill%20View%20Resort,%20I%20would%20like%20to%20inquire%20about%20room%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-[#25D366] hover:text-[#4ade80] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${RESORT_INFO.email}`}
              className="hidden lg:inline-flex items-center gap-1 text-stone-300 hover:text-[#E2C98F] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{RESORT_INFO.email}</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main nav bar — transitions smoothly on scroll */}
      <motion.div
        animate={
          scrolled
            ? { paddingTop: '0.75rem', paddingBottom: '0.75rem' }
            : { paddingTop: '1rem', paddingBottom: '1rem' }
        }
        transition={{ duration: 0.35, ease: ease as number[] }}
        className={`transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-lg border-b border-stone-200/80'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#overview" className="group">
            <Logo compact={scrolled} />
          </a>

          {/* Desktop nav links — staggered fade-in on load */}
          <motion.nav
            className="hidden xl:flex items-center gap-6 2xl:gap-8 font-sans text-xs tracking-wider uppercase font-semibold text-stone-700"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.65,
                },
              },
            }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={
                  prefersReducedMotion
                    ? {}
                    : { hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }
                }
                transition={{ duration: 0.4, ease: ease as number[] }}
                className="hover:text-[#0A2016] relative py-1 transition-colors group/link"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C5A059] group-hover/link:w-full transition-[width] duration-300 ease-out" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Action CTAs */}
          <motion.div
            className="flex items-center gap-3"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: ease as number[], delay: 0.8 }}
          >
            {/* WhatsApp pill */}
            <a
              href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hello%20Coorg%20Heritage%20Hill%20View%20Resort,%20I%20would%20like%20to%20check%20room%20availability%20and%20rates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 text-xs font-semibold transition-all hover:scale-[1.02]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>WhatsApp Desk</span>
            </a>

            {/* Book button */}
            <motion.button
              onClick={onOpenBooking}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: ease as number[] }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0A2016] text-[#FAF8F5] hover:bg-[#133E2B] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-colors"
            >
              <CalendarCheck className="w-4 h-4 text-[#E2C98F]" />
              <span>Book Your Stay</span>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-700 hover:text-black hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2, ease: ease as number[] }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2, ease: ease as number[] }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: ease as number[] }}
            className="xl:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 shadow-2xl"
          >
            <motion.nav
              className="flex flex-col gap-4 font-sans text-sm font-semibold uppercase tracking-wider text-stone-800"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={
                    prefersReducedMotion
                      ? {}
                      : { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }
                  }
                  transition={{ duration: 0.28, ease: ease as number[] }}
                  className="py-2 border-b border-stone-100 hover:text-[#0A2016] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C5A059] text-xs">→</span>
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              className="mt-6 pt-4 border-t border-stone-200 flex flex-col gap-3"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: ease as number[], delay: 0.2 }}
            >
              <a
                href={`tel:${RESORT_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-100 text-stone-900 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call: {RESORT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi%20Coorg%20Heritage%20Hill%20View%20Resort`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
