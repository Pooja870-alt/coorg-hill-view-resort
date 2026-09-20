import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Calendar,
  Users,
  BedDouble,
  ArrowRight,
  Flame,
  Droplets,
  Mountain,
  Sparkles,
  Compass,
  MessageCircle,
  CalendarCheck,
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';
import { ease, easeSmooth } from '../lib/motion';

interface HeroProps {
  onOpenBookingWithDetails?: (details: {
    checkIn: string;
    checkOut: string;
    roomCategory: string;
    guests: string;
  }) => void;
}

// ---------------------------------------------------------------------------
// Slideshow images — served from /public/images/
// ---------------------------------------------------------------------------
const HERO_IMAGES = [
  '/images/IMG-20260920-WA0004.jpg',
  '/images/IMG-20260920-WA0008.jpg',
  '/images/IMG-20260920-WA0013.jpg',
  '/images/IMG-20260920-WA0014.jpg',
  '/images/IMG-20260920-WA0016.jpg',
];

const SLIDE_INTERVAL_MS = 4000;

// ---------------------------------------------------------------------------
// Standalone slideshow — crossfade + ken-burns, for the right panel
// ---------------------------------------------------------------------------
const HeroSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
      {HERO_IMAGES.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          <img
            src={src}
            alt={`Coorg Heritage Hill View Resort ${i + 1}`}
            className="w-full h-full object-cover animate-kenburns"
          />
        </motion.div>
      ))}

      {/* Dark gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl lg:rounded-3xl" />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-5 h-2'
                : 'bg-white/50 w-2 h-2 hover:bg-white/80'
            }`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Photo counter */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold">
        {current + 1} / {HERO_IMAGES.length}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main Hero component
// ---------------------------------------------------------------------------
export const Hero: React.FC<HeroProps> = ({ onOpenBookingWithDetails }) => {
  const prefersReducedMotion = useReducedMotion();

  const today    = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn,       setCheckIn]       = useState(today);
  const [checkOut,      setCheckOut]      = useState(tomorrow);
  const [roomCategory,  setRoomCategory]  = useState('Superior Hill View Suite (AC)');
  const [guests,        setGuests]        = useState('2 Adults');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBookingWithDetails) {
      onOpenBookingWithDetails({ checkIn, checkOut, roomCategory, guests });
    } else {
      const msg = encodeURIComponent(
        `Hello Coorg Heritage Hill View Resort! I would like to check availability:\n• Check-in: ${checkIn}\n• Check-out: ${checkOut}\n• Suite: ${roomCategory}\n• Guests: ${guests}`,
      );
      window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  const dur = prefersReducedMotion ? 0.01 : undefined;

  const pillars = [
    { icon: <Mountain  className="w-4 h-4 text-[#C5A059]" />, label: 'Panoramic Hill Views' },
    { icon: <Flame     className="w-4 h-4 text-[#C5A059]" />, label: 'Nightly Fire Camp' },
    { icon: <Droplets  className="w-4 h-4 text-[#C5A059]" />, label: 'Mountain Stream' },
    { icon: <Compass   className="w-4 h-4 text-[#C5A059]" />, label: "5km to Raja's Seat" },
  ];

  return (
    <section
      id="overview"
      className="w-full bg-white text-[#1a1a1a] pt-20 sm:pt-24 pb-0 overflow-hidden"
    >
      {/* ── Top area: two-column split ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text content ──────────────────────────────────── */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: dur ?? 0.8, ease: easeSmooth as number[] }}
          >
            {/* Location badge */}
            <div className="flex flex-wrap gap-2 mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-[#E2C98F]/30 text-[#C5A059] text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2C98F] animate-ping" />
                <span>Madikeri, Coorg • 1,150m Altitude</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>13 Boutique Suites</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-[#1a1a1a] leading-[1.1] mb-3">
              A Misty Hilltop
              <br />
              <span className="italic text-[#C5A059] font-light">Sanctuary</span>
            </h1>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-stone-600 font-light mb-5 leading-snug">
              Above The Emerald Clouds
            </p>

            {/* Body */}
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6 max-w-lg">
              Welcome to{' '}
              <strong className="text-[#1a1a1a] font-semibold">Coorg Heritage Hill View Resort</strong>
              —an intimate Kodava retreat of just 13 rooms in Madikeri. Wake up to sweeping cloud valleys, enjoy crackling evening bonfires, walk along natural mountain streams.
            </p>

            {/* Pillar icons */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-7">
              {pillars.map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                  {icon}
                  {label}
                </span>
              ))}
            </div>

            {/* Status chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                <Mountain className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>20°C • Pleasant &amp; Misty</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>Stream Flowing</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Campfire 7:30 PM</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => onOpenBookingWithDetails?.({ checkIn, checkOut, roomCategory, guests })}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#E2C98F] text-[#1a1a1a] font-bold text-sm shadow-lg hover:bg-amber-200 transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                <CalendarCheck className="w-4 h-4" />
                Book Your Stay
              </motion.button>
              <a
                href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hello%20Coorg%20Heritage%20Hill%20View%20Resort!%20I%20would%20like%20to%20know%20about%20room%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 border border-stone-300 text-[#1a1a1a] font-semibold text-sm hover:bg-stone-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Slideshow ─────────────────────────────────────── */}
          <motion.div
            className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-square max-h-[520px]"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: dur ?? 0.9, ease: easeSmooth as number[], delay: 0.15 }}
          >
            <HeroSlideshow />
          </motion.div>
        </div>
      </div>

      {/* ── Quick Booking Bar ─────────────────────────────────────────── */}
      <div className="w-full bg-white text-[#1a1a1a] shadow-2xl border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 sm:py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#1a1a1a]">
                Direct Reservation — Best Rate Guarantee
              </span>
            </div>
            <span className="text-xs text-stone-500 hidden sm:block">Only 13 Rooms • Instant Confirmation</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 items-end"
          >
            {/* Check-In */}
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C5A059]" /> Check-In
              </label>
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-stone-100 hover:bg-stone-200/80 focus:bg-white px-3 py-2.5 rounded-xl text-stone-800 text-sm font-medium border border-transparent focus:border-[#C5A059] outline-none transition-colors"
                required
              />
            </div>

            {/* Check-Out */}
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C5A059]" /> Check-Out
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-stone-100 hover:bg-stone-200/80 focus:bg-white px-3 py-2.5 rounded-xl text-stone-800 text-sm font-medium border border-transparent focus:border-[#C5A059] outline-none transition-colors"
                required
              />
            </div>

            {/* Room Category */}
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <BedDouble className="w-3 h-3 text-[#C5A059]" /> Room Type
              </label>
              <select
                value={roomCategory}
                onChange={(e) => setRoomCategory(e.target.value)}
                className="w-full bg-stone-100 hover:bg-stone-200/80 focus:bg-white px-3 py-2.5 rounded-xl text-stone-800 text-sm font-medium border border-transparent focus:border-[#C5A059] outline-none transition-colors cursor-pointer"
              >
                <option value="Superior Hill View Suite (AC)">Superior Hill View Suite (AC)</option>
                <option value="Misty Valley Suite (AC)">Misty Valley Suite (AC)</option>
                <option value="Heritage Attic Cottage (Non-AC)">Heritage Attic Cottage (Non-AC)</option>
                <option value="Grand Family Valley Room">Grand Family Valley Room</option>
                <option value="Entire 13-Room Resort Buyout">Entire Resort Buyout</option>
              </select>
            </div>

            {/* Guests */}
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <Users className="w-3 h-3 text-[#C5A059]" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-stone-100 hover:bg-stone-200/80 focus:bg-white px-3 py-2.5 rounded-xl text-stone-800 text-sm font-medium border border-transparent focus:border-[#C5A059] outline-none transition-colors cursor-pointer"
              >
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="3 - 4 Adults (Loft/Family)">3–4 Adults (Family)</option>
                <option value="Corporate / Family Group (10+)">Group (10+)</option>
                <option value="Full Resort Buyout (~40 Guests)">Full Buyout (~40)</option>
              </select>
            </div>

            {/* Submit */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-1">
              <motion.button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-stone-800 text-white hover:bg-stone-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                Check Rates
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

