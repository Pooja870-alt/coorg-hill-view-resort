import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ExternalLink, 
  Sparkles, 
  Compass, 
  Car, 
  CheckCircle2, 
  Sunrise, 
  Shield, 
  Building2, 
  Waves, 
  Castle, 
  Mountain
} from 'lucide-react';
import { TOURIST_ATTRACTIONS, RESORT_INFO } from '../data/resortData';
import { TouristAttraction } from '../types';

export const CentralTouristHub: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<TouristAttraction>(TOURIST_ATTRACTIONS[0]);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax & section transition kinematics
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Smooth cinematic section connection movement
  const sectionY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, -30]);
  const bgGlow1Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const bgGlow2Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const spotlightParallaxY = useTransform(scrollYProgress, [0.2, 0.8], [-15, 15]);
  const journeyProgressY = useTransform(scrollYProgress, [0.2, 0.75], ['0%', '100%']);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sunset':
        return <Sunrise className="w-5 h-5 text-amber-600" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-cyan-600" />;
      case 'Castle':
        return <Castle className="w-5 h-5 text-stone-700" />;
      default:
        return <Compass className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  // Custom cubic-bezier easing matching cinematic language of Activities
  const cubicEase = [0.25, 1, 0.5, 1];

  return (
    <motion.section
      ref={sectionRef}
      id="tourist-hub"
      style={{ y: sectionY }}
      className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1a1a1a] relative overflow-hidden"
    >
      {/* Scroll-linked Ambient Background Decor */}
      <motion.div
        style={{ y: bgGlow1Y }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgGlow2Y }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#555555]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header with Masked Upward Text Reveals */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            {/* Masked Badge Pill */}
            <div className="overflow-hidden mb-3">
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: cubicEase, delay: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-widest"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>The Strategic Advantage</span>
              </motion.div>
            </div>

            {/* Masked Upward Heading Reveal */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.75, ease: cubicEase, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] tracking-tight leading-tight"
              >
                The Exact Centre Point of All Coorg Tourist Places
              </motion.h2>
            </div>

            {/* Masked Supporting Subtitle Reveal */}
            <div className="overflow-hidden mt-4">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: cubicEase, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed"
              >
                Why spend hours trapped on winding mountain roads? Coorg Heritage Hill View Resort sits in the geographic pivot of Madikeri, placing every iconic landmark within 5 to 10 kilometers.
              </motion.p>
            </div>
          </div>

          {/* Time Saver Callout Pill with Scale-Settle & Masked Text */}
          <div className="overflow-hidden max-w-sm shrink-0">
            <motion.div
              initial={{ y: '40px', opacity: 0, scale: 0.97 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: cubicEase, delay: 0.3 }}
              className="p-4 sm:p-5 rounded-2xl bg-white text-[#1a1a1a] shadow-xl border border-[#C5A059]/30"
            >
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Save 2.5+ Hours Daily</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero highway fatigue. Enjoy sunset at Raja’s Seat and waterfalls by morning, then easily return for lunch and evening campfire.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Interactive Distance Visualizer & Sight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-14">
          {/* Left Column: Attractions List */}
          <div className="flex flex-col gap-3 relative">
            {/* Journey Path Line - desktop only */}
            <div className="absolute left-[27px] top-12 bottom-4 w-0.5 bg-stone-200 pointer-events-none hidden lg:block">
              <motion.div
                style={{ height: journeyProgressY }}
                className="w-full bg-gradient-to-b from-[#C5A059] to-stone-400 rounded-full"
              />
            </div>

            <div className="mb-1">
              <span className="text-xs uppercase tracking-widest font-bold text-stone-500 block">
                Click Any Landmark to Inspect Proximity:
              </span>
            </div>

            {TOURIST_ATTRACTIONS.map((attraction, index) => {
              const isSelected = selectedAttraction.id === attraction.id;
              return (
                <motion.button
                  key={attraction.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, ease: cubicEase, delay: 0.06 * index }}
                  onClick={() => setSelectedAttraction(attraction)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group relative z-10 ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xl'
                      : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/15' : 'bg-stone-100'
                    }`}>
                      {getCategoryIcon(attraction.iconName)}
                    </div>
                    <div className="min-w-0">
                      <div className={`font-serif text-base sm:text-lg font-medium leading-snug ${
                        isSelected ? 'text-white' : 'text-[#1a1a1a]'
                      }`}>
                        {attraction.name}
                      </div>
                      <div className={`text-xs mt-0.5 truncate ${
                        isSelected ? 'text-stone-300' : 'text-stone-500'
                      }`}>
                        {attraction.highlight}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 ml-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                      isSelected ? 'bg-[#C5A059] text-white' : 'bg-stone-100 text-stone-800'
                    }`}>
                      {attraction.distanceKm} KM
                    </span>
                    <span className={`block text-[10px] mt-0.5 ${
                      isSelected ? 'text-stone-300' : 'text-stone-500'
                    }`}>
                      ~{attraction.driveTimeMins} mins
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Spotlight Card — no parallax, no overflow */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-stone-200 flex flex-col justify-between sticky top-28">
            <div className="inline-flex items-center self-end mb-4 bg-stone-900 text-[#C5A059] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              {selectedAttraction.distanceKm === 5.0 ? '⚡ 5 KM Radius' : `${selectedAttraction.distanceKm} KM Away`}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAttraction.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: cubicEase }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    {getCategoryIcon(selectedAttraction.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                      Scenic Mountain Route
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-medium leading-tight">
                      {selectedAttraction.name}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
                  {selectedAttraction.detailedDescription}
                </p>

                {/* Details grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs mb-5">
                  <div>
                    <span className="block font-bold text-stone-400 uppercase text-[10px] mb-1">Distance</span>
                    <span className="font-semibold text-[#1a1a1a] text-sm">{selectedAttraction.distanceKm} km</span>
                  </div>
                  <div>
                    <span className="block font-bold text-stone-400 uppercase text-[10px] mb-1">Drive Time</span>
                    <span className="font-semibold text-[#C5A059] text-sm">~{selectedAttraction.driveTimeMins} mins</span>
                  </div>
                  <div>
                    <span className="block font-bold text-stone-400 uppercase text-[10px] mb-1">Best Time</span>
                    <span className="font-semibold text-stone-700 text-sm">{selectedAttraction.bestTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedAttraction.googleMapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-white hover:bg-stone-700 text-xs font-semibold uppercase tracking-wider shadow transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <a
                    href={`tel:${RESORT_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                  >
                    <Car className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Ask for Cab/Jeep</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-400 mt-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Zero mountain hairpin delay from resort</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Travel Fatigue Comparison Banner with Masked Entrance */}
        <motion.div
          initial={{ y: '50px', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: cubicEase }}
          className="rounded-3xl bg-white text-[#1a1a1a] p-6 sm:p-8 shadow-xl border border-[#C5A059]/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="overflow-hidden mb-3">
                <motion.div
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: cubicEase }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-[#C5A059] text-xs font-semibold uppercase tracking-widest"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Smart Itinerary Choice</span>
                </motion.div>
              </div>

              <div className="overflow-hidden mb-2">
                <motion.h3
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: cubicEase, delay: 0.1 }}
                  className="font-serif text-2xl sm:text-3xl font-normal leading-snug"
                >
                  Why Staying at the Centre Point Matters Most in Coorg
                </motion.h3>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Coorg's mountain terrain features winding roads where 20 km takes nearly an hour. By choosing our central Madikeri location, you stay within 5–10 km of Raja's Seat, Abbey Falls, and the historic temples, allowing you to return to your room whenever you want to freshen up or rest.
              </p>
            </div>

            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: cubicEase, delay: 0.2 }}
              className="bg-stone-100 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-stone-200 text-center"
            >
              <div className="text-3xl sm:text-4xl font-serif text-[#C5A059] font-bold">5 KM</div>
              <div className="text-xs uppercase tracking-widest text-stone-700 font-semibold mt-1">Average Distance to Sights</div>
              <div className="text-xs text-stone-600 mt-2">vs. 25–40 km from remote plantation stays</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

