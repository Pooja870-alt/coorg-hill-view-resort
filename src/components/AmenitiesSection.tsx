import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Wind,
  UtensilsCrossed,
  Bell,
  Flame,
  Wifi,
  Car,
  Zap,
  Sparkles,
  Coffee,
  Check,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { AMENITIES_DATA, RESORT_INFO } from '../data/resortData';
import { ease, easeSmooth, fadeUp, scaleSettle, viewport } from '../lib/motion';

export const AmenitiesSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':           return <Wind           className="w-6 h-6 text-[#555555]" />;
      case 'UtensilsCrossed':return <UtensilsCrossed className="w-6 h-6 text-amber-700" />;
      case 'Bell':           return <Bell           className="w-6 h-6 text-[#C5A059]" />;
      case 'Flame':          return <Flame          className="w-6 h-6 text-amber-600" />;
      case 'Wifi':           return <Wifi           className="w-6 h-6 text-blue-600" />;
      case 'Car':            return <Car            className="w-6 h-6 text-[#C5A059]" />;
      case 'Zap':            return <Zap            className="w-6 h-6 text-amber-500" />;
      default:               return <Sparkles       className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const childTransition = { duration: prefersReducedMotion ? 0.01 : 0.7, ease: ease as number[] };

  return (
    <section id="amenities" className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="overflow-hidden inline-block mb-3">
            <motion.div
              initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={viewport}
              transition={childTransition}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-widest"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Essential Resort Comforts</span>
            </motion.div>
          </div>

          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={viewport}
              transition={{ ...childTransition, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] tracking-tight leading-tight"
            >
              AC, Non-AC, Authentic Dining &amp; Room Services
            </motion.h2>
          </div>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...childTransition, delay: 0.2 }}
            className="font-sans text-base text-stone-600 leading-relaxed"
          >
            Thoughtfully designed for tranquil hill station living. Savor delicious Kodava specialties in our scenic courtyard or enjoy warm meals delivered directly to your balcony.
          </motion.p>
        </div>

        {/* ── Dining feature split ─────────────────────────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, ease: easeSmooth as number[] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xl"
        >
          {/* Dining image with clip-path reveal */}
          <motion.div
            className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md group"
            initial={prefersReducedMotion ? {} : { clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={viewport}
            transition={{ duration: prefersReducedMotion ? 0.01 : 1.0, ease: easeSmooth as number[] }}
          >
            <motion.img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK7m5BFTF55J0I9tBVtfJMq7rZ1TnCOKQeqe-2mBt3iWzbDK58LsJjqy1SQcWQa3LujvapV8EQ8rgVoanGxd-UVIcBqf_HPWFVwoXBqSHnqpzeeraBI2BOJW6jNz4dk6hK0IcKEolNSF1PfC-tPzza9ngu3mkwSwBy8Wyxa35QHZ0EqYZzguCzfUHkf7Zr1b_GQptYUloqAzoyegi3Our3eGe8mAUxgUAS39FRvaa5GGc_wLb0duDwOAiBDCHgkR70OcY"
              alt="In-house resort restaurant and rustic open-air dining courtyard"
              className="w-full h-80 sm:h-96 object-cover"
              initial={prefersReducedMotion ? {} : { scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={viewport}
              transition={{ duration: prefersReducedMotion ? 0.01 : 1.1, ease: easeSmooth as number[] }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-widest block">
                Taste of Kodagu
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                In-House Restaurant &amp; Courtyard Dining
              </h3>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            <motion.div
              variants={prefersReducedMotion ? {} : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              transition={childTransition}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] uppercase tracking-wider"
            >
              <Coffee className="w-4 h-4" />
              <span>Farm-Fresh Local Spices</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h3
                variants={prefersReducedMotion ? {} : { hidden: { y: '100%', opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                transition={childTransition}
                className="font-serif text-2xl sm:text-3xl font-medium text-[#1a1a1a] leading-snug"
              >
                Authentic Kodava Specialties, Multi-Cuisine &amp; Balcony Service
              </motion.h3>
            </div>

            <motion.p
              variants={prefersReducedMotion ? {} : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              transition={childTransition}
              className="text-sm text-stone-600 leading-relaxed font-light"
            >
              Experience the distinctive culinary heritage of Coorg. From aromatic traditional dishes simmered with indigenous Kachampuli black vinegar to beloved North and South Indian comfort staples, our cooks prepare fresh food tailored to your palate.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? {} : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              transition={childTransition}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {[
                { title: 'Authentic Kodava Flavors', desc: 'Pandi Curry, Kadambuttu (steamed rice cakes), and Akki Roti with spicy chutneys.' },
                { title: 'Multi-Cuisine Favorites',  desc: 'Flavorful Biryanis, hot tandoori kebabs, paneer gravies, and mild kids dishes.' },
                { title: 'Prompt Room Services',     desc: 'Hot meals, evening tea, and snacks served directly to your room or scenic balcony.' },
                { title: 'Bonfire Barbecue Starters',desc: 'Sizzling barbecue skewers and hot soup beside the crackling evening fire camp.' },
              ].map(({ title, desc }) => (
                <div key={title} className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                  <span className="font-bold text-xs text-[#1a1a1a] block mb-1">{title}</span>
                  <p className="text-xs text-stone-500">{desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? {} : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              transition={childTransition}
              className="pt-2"
            >
              <motion.a
                href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi,%20could%20you%20please%20share%20the%20current%20dining%20menu%20and%20food%20arrangements%20at%20Coorg%20Heritage%20Hill%20View%20Resort?`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#1a1a1a] hover:bg-stone-100 text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.18, ease: ease as number[] }}
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Inquire About Food Menu &amp; Meals</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Amenities grid ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
          }}
        >
          {AMENITIES_DATA.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={
                prefersReducedMotion
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                  : { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }
              }
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, ease: easeSmooth as number[] }}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-lg transition-[box-shadow,transform] duration-300 flex flex-col justify-between group hover:-translate-y-1"
              style={{ willChange: 'transform' }}
            >
              <div>
                <motion.div
                  className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-4"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.12, rotate: 3 }}
                  transition={{ duration: 0.25, ease: ease as number[] }}
                >
                  {getAmenityIcon(amenity.iconName)}
                </motion.div>
                <h4 className="font-serif text-lg text-[#1a1a1a] font-semibold mb-2">{amenity.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{amenity.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1 text-[11px] font-bold text-[#C5A059]">
                <Check className="w-3.5 h-3.5" />
                <span>Standard Feature</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
