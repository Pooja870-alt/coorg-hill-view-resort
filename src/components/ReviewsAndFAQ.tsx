import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  Star,
  Phone,
  MessageCircle,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { FAQ_ITEMS, RESORT_INFO } from '../data/resortData';
import { ease, easeSmooth, fadeUp, viewport } from '../lib/motion';

const guestReviews = [
  {
    name: 'Vikas & Shruti Nambiar',
    location: 'Bengaluru',
    review: 'The location is unbeatable! Being right in the center meant we visited Raja\u2019s Seat for sunset and Omkareshwara temple in the morning without any of the exhausting mountain driving. The evening fire camp under the stars with hot Coorg snacks was pure magic.',
    highlight: 'Central Location & Evening Bonfire',
    rating: 5,
  },
  {
    name: 'Dr. Arvind Hegde',
    location: 'Mysuru',
    review: 'With only 13 rooms, this place feels like a private forest sanctuary. No crowded tourist chaos. The natural stream running along the edge is crystal clear, and the staff treated us like royal family. Highly recommend the Superior Hill View Suite.',
    highlight: '13-Room Peaceful Sanctuary',
    rating: 5,
  },
  {
    name: 'Pooja & Friends Group',
    location: 'Chennai',
    review: 'We booked 3 attic cottages for our college reunion. The rain dance setup was super energetic in the afternoon, and the homemade Pandi curry and Akki Roti for dinner was the most authentic we tasted in Coorg!',
    highlight: 'Rain Dance & Kodava Food',
    rating: 5,
  },
];

export const ReviewsAndFAQ: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) =>
    setOpenIdx(openIdx === idx ? null : idx);

  const childTransition = { duration: prefersReducedMotion ? 0.01 : 0.65, ease: ease as number[] };

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── Reviews ─────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="overflow-hidden inline-block mb-3">
              <motion.div
                initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={childTransition}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest"
              >
                <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>Verified Guest Memories</span>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ ...childTransition, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] tracking-tight"
              >
                Beloved by Nature Lovers &amp; Families
              </motion.h2>
            </div>
          </div>

          {/* Review cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
            }}
          >
            {guestReviews.map((rev, idx) => (
              <motion.div
                key={idx}
                variants={
                  prefersReducedMotion
                    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
                }
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, ease: easeSmooth as number[] }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl transition-[box-shadow] duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-semibold text-sm text-[#1a1a1a]">{rev.name}</h4>
                    <span className="text-[11px] text-stone-500">{rev.location}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] bg-amber-50 px-2 py-1 rounded-md">
                    {rev.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="overflow-hidden inline-block mb-3">
              <motion.div
                initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={childTransition}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-widest"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Everything You Need to Know</span>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-2">
              <motion.h3
                initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ ...childTransition, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal tracking-tight"
              >
                Frequently Asked Questions
              </motion.h3>
            </div>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...childTransition, delay: 0.2 }}
              className="text-sm text-stone-600 mt-2"
            >
              Essential details regarding our 13 rooms, central location, dining, and activities.
            </motion.p>
          </div>

          {/* Accordion */}
          <motion.div
            className="space-y-3.5"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
            }}
          >
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div
                  key={idx}
                  variants={
                    prefersReducedMotion
                      ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                      : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }
                  }
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: ease as number[] }}
                  className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#C5A059]/60 shadow-md'
                      : 'bg-white/70 hover:bg-white border-stone-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-[#1a1a1a]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: ease as number[] }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-white text-[#C5A059]' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  {/* Animated answer panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-answer"
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.35, ease: ease as number[] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Still have questions */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.7, ease: easeSmooth as number[], delay: 0.1 }}
            className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <div>
              <h4 className="font-serif font-medium text-base text-[#1a1a1a]">
                Have a custom requirement or planning a group trip?
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Our front desk manager is happy to help with customized itineraries and room arrangements.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <motion.a
                href={`tel:${RESORT_INFO.phone}`}
                className="px-4 py-2.5 rounded-xl bg-white text-[#1a1a1a] hover:bg-stone-100 text-xs font-semibold tracking-wider uppercase transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.18, ease: ease as number[] }}
              >
                Call: {RESORT_INFO.phoneDisplay}
              </motion.a>
              <motion.a
                href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hello%20Coorg%20Heritage%20Hill%20View%20Resort,%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-amber-500 text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.18, ease: ease as number[] }}
              >
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
