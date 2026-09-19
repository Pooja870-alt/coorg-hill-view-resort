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
        return <Building2 className="w-5 h-5 text-emerald-600" />;
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
      className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1E2522] relative overflow-hidden"
    >
      {/* Scroll-linked Ambient Background Decor */}
      <motion.div
        style={{ y: bgGlow1Y }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: bgGlow2Y }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E4D38]/10 rounded-full blur-3xl pointer-events-none"
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-widest"
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
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A2016] tracking-tight leading-tight"
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
              className="p-4 sm:p-5 rounded-2xl bg-[#0A2016] text-[#FAF8F5] shadow-xl border border-[#C5A059]/30"
            >
              <div className="flex items-center gap-2 text-[#E2C98F] text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Save 2.5+ Hours Daily</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Zero highway fatigue. Enjoy sunset at Raja’s Seat and waterfalls by morning, then easily return for lunch and evening campfire.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Interactive Distance Visualizer & Sight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Interactive Attractions List with Sequential Journey Discovery */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative">
            {/* Subtle Scroll-linked Journey Path Line */}
            <div className="absolute left-[27px] top-12 bottom-4 w-0.5 bg-stone-200 pointer-events-none hidden sm:block">
              <motion.div
                style={{ height: journeyProgressY }}
                className="w-full bg-gradient-to-b from-[#C5A059] to-[#0A2016] rounded-full"
              />
            </div>

            <div className="overflow-hidden mb-1">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: cubicEase }}
                className="text-xs uppercase tracking-widest font-bold text-stone-500 block"
              >
                Click Any Landmark to Inspect Proximity:
              </motion.span>
            </div>

            {TOURIST_ATTRACTIONS.map((attraction, index) => {
              const isSelected = selectedAttraction.id === attraction.id;
              return (
                <div key={attraction.id} className="overflow-hidden rounded-2xl">
                  <motion.button
                    initial={{ y: '100%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: 0.65,
                      ease: cubicEase,
                      delay: 0.08 * index
                    }}
                    onClick={() => setSelectedAttraction(attraction)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group relative z-10 ${
                      isSelected
                        ? 'bg-[#0A2016] text-white border-[#0A2016] shadow-xl scale-[1.02]'
                        : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Icon with subtle scale-settle */}
                      <motion.div
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, ease: cubicEase, delay: 0.08 * index }}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                          isSelected ? 'bg-white/15 text-[#E2C98F]' : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        {getCategoryIcon(attraction.iconName)}
                      </motion.div>

                      <div>
                        {/* Masked Typography Reveal for Destination Name */}
                        <div className="overflow-hidden">
                          <motion.div
                            initial={{ y: '100%' }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: cubicEase, delay: 0.08 * index + 0.04 }}
                            className={`font-serif text-base sm:text-lg font-medium leading-snug ${
                              isSelected ? 'text-[#E2C98F]' : 'text-[#0A2016]'
                            }`}
                          >
                            {attraction.name}
                          </motion.div>
                        </div>
                        <div className={`text-xs mt-0.5 line-clamp-1 ${
                          isSelected ? 'text-stone-300' : 'text-stone-500'
                        }`}>
                          {attraction.highlight}
                        </div>
                      </div>
                    </div>

                    {/* Distance Pill with natural staggered reveal */}
                    <div className="text-right shrink-0 ml-2">
                      <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: cubicEase, delay: 0.08 * index + 0.08 }}
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                          isSelected
                            ? 'bg-[#E2C98F] text-[#0A2016]'
                            : 'bg-stone-100 text-stone-800'
                        }`}
                      >
                        {attraction.distanceKm} KM
                      </motion.span>
                      <span className={`block text-[10px] mt-0.5 ${
                        isSelected ? 'text-stone-300' : 'text-stone-400'
                      }`}>
                        ~{attraction.driveTimeMins} mins
                      </span>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Landmark Spotlight Card with Parallax & Masked Transitions */}
          <motion.div
            style={{ y: spotlightParallaxY }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/90 flex flex-col justify-between relative overflow-hidden min-h-[420px]"
          >
            <div className="absolute top-0 right-0 bg-[#0A2016] text-[#E2C98F] px-4 py-1.5 rounded-bl-2xl text-xs font-bold tracking-widest uppercase z-10">
              {selectedAttraction.distanceKm === 5.0 ? '⚡ Direct 5 KM Radius' : `${selectedAttraction.distanceKm} KM Distance`}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAttraction.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: cubicEase }}
                className="flex-grow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {/* Image / Icon container with 1.08 -> 1 scale settle */}
                    <motion.div
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: cubicEase }}
                      className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 overflow-hidden"
                    >
                      {getCategoryIcon(selectedAttraction.iconName)}
                    </motion.div>

                    <div>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                        Scenic Mountain Route
                      </span>

                      {/* Masked Typography Reveal for Spotlight Heading */}
                      <div className="overflow-hidden">
                        <motion.h3
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.5, ease: cubicEase, delay: 0.05 }}
                          className="font-serif text-2xl sm:text-3xl text-[#0A2016] font-medium"
                        >
                          {selectedAttraction.name}
                        </motion.h3>
                      </div>
                    </div>
                  </div>

                  {/* Masked Paragraph Reveal */}
                  <div className="overflow-hidden mb-6">
                    <motion.p
                      initial={{ y: '30px', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: cubicEase, delay: 0.1 }}
                      className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed"
                    >
                      {selectedAttraction.detailedDescription}
                    </motion.p>
                  </div>

                  {/* Quick Details Grid with Staggered Scale-Settle */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-700 mb-6">
                    <motion.div
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: cubicEase, delay: 0.12 }}
                    >
                      <span className="block font-bold text-stone-400 uppercase text-[10px]">Distance</span>
                      <span className="font-semibold text-[#0A2016] text-sm">{selectedAttraction.distanceKm} km from Resort</span>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: cubicEase, delay: 0.16 }}
                    >
                      <span className="block font-bold text-stone-400 uppercase text-[10px]">Driving Duration</span>
                      <span className="font-semibold text-emerald-800 text-sm">~{selectedAttraction.driveTimeMins} minutes</span>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: cubicEase, delay: 0.2 }}
                    >
                      <span className="block font-bold text-stone-400 uppercase text-[10px]">Recommended Visit Time</span>
                      <span className="font-semibold text-amber-900 text-sm">{selectedAttraction.bestTime}</span>
                    </motion.div>
                  </div>
                </div>

                {/* CTAs and Google Maps */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: cubicEase, delay: 0.22 }}
                  className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero mountain hairpin delay from resort</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedAttraction.googleMapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A2016] text-[#FAF8F5] hover:bg-[#133E2B] text-xs font-semibold uppercase tracking-wider shadow transition-all hover:scale-105"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#E2C98F]" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                    </a>

                    <a
                      href={`tel:${RESORT_INFO.phone}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                    >
                      <Car className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Ask Front Desk for Cab/Jeep</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Travel Fatigue Comparison Banner with Masked Entrance */}
        <motion.div
          initial={{ y: '50px', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: cubicEase }}
          className="rounded-3xl bg-gradient-to-r from-[#0A2016] to-[#133E2B] text-white p-6 sm:p-8 shadow-2xl border border-[#C5A059]/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="overflow-hidden mb-3">
                <motion.div
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: cubicEase }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E2C98F] text-xs font-semibold uppercase tracking-widest"
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

              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Coorg's mountain terrain features winding roads where 20 km takes nearly an hour. By choosing our central Madikeri location, you stay within 5–10 km of Raja's Seat, Abbey Falls, and the historic temples, allowing you to return to your room whenever you want to freshen up or rest.
              </p>
            </div>

            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: cubicEase, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-center"
            >
              <div className="text-3xl sm:text-4xl font-serif text-[#E2C98F] font-bold">5 KM</div>
              <div className="text-xs uppercase tracking-widest text-white/90 font-semibold mt-1">Average Distance to Sights</div>
              <div className="text-xs text-stone-300 mt-2">vs. 25–40 km from remote plantation stays</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

