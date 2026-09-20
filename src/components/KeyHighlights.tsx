import React, { useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import {
  Mountain,
  Flame,
  Droplets,
  CloudRain,
  Gamepad2,
  Clock,
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { RESORT_ACTIVITIES, RESORT_INFO } from '../data/resortData';
import { ResortActivity } from '../types';
import {
  ease,
  easeSmooth,
  fadeUp,
  maskReveal,
  scaleSettle,
  staggerContainer,
  viewport,
} from '../lib/motion';

export const KeyHighlights: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Restrained parallax on the ambient glows
  const glow1Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain':   return <Mountain  className="w-5 h-5 text-[#C5A059]" />;
      case 'Flame':      return <Flame     className="w-5 h-5 text-amber-400" />;
      case 'Droplets':   return <Droplets  className="w-5 h-5 text-cyan-400" />;
      case 'CloudRain':  return <CloudRain className="w-5 h-5 text-blue-400" />;
      case 'Gamepad2':   return <Gamepad2  className="w-5 h-5 text-[#C5A059]" />;
      default:           return <Sparkles  className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  // Shared child transition
  const childTransition = { duration: prefersReducedMotion ? 0.01 : 0.7, ease: ease as number[] };
  const cardTransition  = { duration: prefersReducedMotion ? 0.01 : 0.75, ease: easeSmooth as number[] };

  return (
    <motion.section
      ref={sectionRef}
      id="highlights"
      className="w-full py-16 lg:py-24 bg-[#FAF8F5] text-[#1a1a1a] relative overflow-hidden"
    >
      {/* Parallax ambient glows */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : glow1Y }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : glow2Y }}
        className="absolute bottom-10 -left-20 w-96 h-96 bg-[#555555]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge pill */}
          <div className="overflow-hidden inline-block mb-3">
            <motion.div
              initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={viewport}
              transition={childTransition}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-300/20 text-[#1a1a1a] text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Unmatched Resort Experiences</span>
            </motion.div>
          </div>

          {/* Heading */}
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={prefersReducedMotion ? {} : { y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={viewport}
              transition={{ ...childTransition, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] tracking-tight leading-tight"
            >
              Hill View, Fire Camp &amp; Mountain Stream Highlights
            </motion.h2>
          </div>

          {/* Subtext */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...childTransition, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-stone-600 font-light leading-relaxed"
          >
            Crafted for pure rejuvenation. Immerse yourself in our three signature hallmarks—expansive mountain vistas, nightly crackling bonfires, and crystal mountain waters.
          </motion.p>
        </div>

        {/* ── 3 Core Highlight bento cards ────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
          }}
        >
          {RESORT_ACTIVITIES.filter((a) => a.isMainHighlight).map((activity) => (
            <motion.div
              key={activity.id}
              variants={
                prefersReducedMotion
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                  : {
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }
              }
              transition={cardTransition}
              className="rounded-3xl overflow-hidden bg-white border border-stone-200 hover:border-[#C5A059]/50 shadow-md hover:shadow-xl transition-[border-color,box-shadow] duration-500 hover:-translate-y-1.5 flex flex-col justify-between group"
              style={{ willChange: 'transform' }}
            >
              {/* Image — subtle scale on enter + hover */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  initial={prefersReducedMotion ? {} : { scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewport}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 1.1, ease: easeSmooth as number[] }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  // @ts-ignore — whileHover transition
                  hoverTransition={{ duration: 0.7, ease: ease }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#E2C98F]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                  {getActivityIcon(activity.iconName)}
                  <span>{activity.tag}</span>
                </div>

                {/* Title in image */}
                <div className="absolute bottom-4 left-4 right-4 overflow-hidden">
                  <motion.h3
                    initial={prefersReducedMotion ? {} : { y: '100%' }}
                    whileInView={{ y: 0 }}
                    viewport={viewport}
                    transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, ease: ease as number[], delay: 0.15 }}
                    className="font-serif text-2xl text-white font-medium drop-shadow-md"
                  >
                    {activity.title}
                  </motion.h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                    {activity.subtitle}
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-light">
                    {activity.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-stone-700">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{activity.schedule}</span>
                  </span>
                  <span className="text-[#1a1a1a] font-semibold">Complimentary</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Secondary activities ─────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
          }}
        >
          {RESORT_ACTIVITIES.filter((a) => !a.isMainHighlight).map((activity) => (
            <motion.div
              key={activity.id}
              variants={
                prefersReducedMotion
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
                  : {
                      hidden: { opacity: 0, x: -24 },
                      visible: { opacity: 1, x: 0 },
                    }
              }
              transition={cardTransition}
              className="rounded-3xl overflow-hidden bg-white border border-stone-200 hover:border-[#C5A059]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group transition-[border-color] duration-300 shadow-sm hover:shadow-md"
            >
              <div className="relative w-full sm:w-48 h-44 rounded-2xl overflow-hidden shrink-0">
                <motion.img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                  initial={prefersReducedMotion ? {} : { scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewport}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 1.0, ease: easeSmooth as number[] }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider">
                  {activity.tag}
                </span>
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {getActivityIcon(activity.iconName)}
                    <h4 className="font-serif text-xl text-[#1a1a1a] font-medium">{activity.title}</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">{activity.description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{activity.schedule}</span>
                  </span>
                  <a
                    href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi,%20tell%20me%20more%20about%20${encodeURIComponent(activity.title)}%20at%20Coorg%20Heritage%20Hill%20View%20Resort`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:underline font-semibold"
                  >
                    Inquire Desk
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
