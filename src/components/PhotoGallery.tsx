import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryItem } from '../types';
import {
  ease,
  easeSmooth,
  overlayVariants,
  modalContentVariants,
  viewport,
} from '../lib/motion';

type Category = 'all' | 'hillview' | 'bonfire' | 'rooms' | 'dining' | 'waterstream';

const TABS: { id: Category; label: string }[] = [
  { id: 'all',         label: 'All Photos' },
  { id: 'hillview',    label: 'Hill Views' },
  { id: 'bonfire',     label: 'Bonfire Nights' },
  { id: 'waterstream', label: 'Water Stream & Pool' },
  { id: 'rooms',       label: 'Suites & Lofts' },
  { id: 'dining',      label: 'Dining' },
];

export const PhotoGallery: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory,
  );

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    lightboxIndex !== null &&
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  const prevImage = () =>
    lightboxIndex !== null &&
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);

  const childTransition = { duration: prefersReducedMotion ? 0.01 : 0.7, ease: ease as number[] };

  return (
    <section id="gallery" className="w-full py-20 lg:py-28 bg-[#0A2016] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="overflow-hidden inline-block mb-3">
              <motion.div
                initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={childTransition}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E2C98F] text-xs font-bold uppercase tracking-widest"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Resort Visuals</span>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ ...childTransition, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight"
              >
                Glimpses of Your Hilltop Retreat
              </motion.h2>
            </div>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...childTransition, delay: 0.2 }}
              className="text-sm sm:text-base text-stone-300 mt-2 font-light"
            >
              Misty horizons, crackling bonfires, and comfortable handcrafted spaces in Madikeri.
            </motion.p>
          </div>

          {/* Filter pills */}
          <motion.div
            className="flex flex-wrap items-center gap-2"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...childTransition, delay: 0.25 }}
          >
            {TABS.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-[#E2C98F] text-[#0A2016] shadow-md'
                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                }`}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                transition={{ duration: 0.15, ease: ease as number[] }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ── Gallery grid — re-staggers when category changes ─────────── */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
          }}
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={
                prefersReducedMotion
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                  : { hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }
              }
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.55, ease: easeSmooth as number[] }}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-stone-900 shadow-lg border border-white/10 hover:border-[#E2C98F]/50 transition-[border-color] duration-300"
              style={{ willChange: 'transform' }}
            >
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                initial={prefersReducedMotion ? {} : { scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={viewport}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.9, ease: easeSmooth as number[] }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#E2C98F] tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-medium leading-snug">{item.title}</h4>
                <p className="text-[11px] text-stone-300 mt-1 line-clamp-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              <motion.div
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                // Show on card hover via group
              >
                <Eye className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <>
            {/* Backdrop */}
            <motion.div
              key="lb-backdrop"
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: ease as number[] }}
              onClick={closeLightbox}
            />

            {/* Content */}
            <motion.div
              key="lb-content"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <motion.div
                className="max-w-4xl w-full flex flex-col items-center pointer-events-auto"
                variants={
                  prefersReducedMotion
                    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
                    : { hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.97 } }
                }
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.35, ease: easeSmooth as number[] }}
              >
                {/* Image — cross-fades between slides */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIndex}
                    src={filteredItems[lightboxIndex].imageUrl}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: ease as number[] }}
                  />
                </AnimatePresence>

                <div className="mt-4 text-center text-white max-w-xl">
                  <h3 className="font-serif text-xl font-medium text-[#E2C98F]">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 font-light">
                    {filteredItems[lightboxIndex].description}
                  </p>
                  <div className="text-[11px] text-stone-500 mt-2">
                    Photo {lightboxIndex + 1} of {filteredItems.length}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Close */}
            <motion.button
              key="lb-close"
              onClick={closeLightbox}
              className="fixed top-5 right-5 z-[60] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Prev */}
            <motion.button
              key="lb-prev"
              onClick={prevImage}
              className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.1, x: -2 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next */}
            <motion.button
              key="lb-next"
              onClick={nextImage}
              className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.1, x: 2 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
