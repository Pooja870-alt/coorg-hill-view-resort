import React, { useState } from 'react';
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
  ShieldCheck
} from 'lucide-react';
import { RESORT_ACTIVITIES, RESORT_INFO } from '../data/resortData';
import { ResortActivity } from '../types';

export const KeyHighlights: React.FC = () => {
  const [activeActivity, setActiveActivity] = useState<ResortActivity>(RESORT_ACTIVITIES[0]);

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-[#E2C98F]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-blue-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E2C98F]" />;
    }
  };

  return (
    <section id="highlights" className="w-full py-20 lg:py-28 bg-[#0A2016] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1E4D38]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#835425]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#E2C98F] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unmatched Resort Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
            Hill View, Fire Camp &amp; Mountain Stream Highlights
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Crafted for pure rejuvenation. Immerse yourself in our three signature hallmarks—expansive mountain vistas, nightly crackling bonfires, and crystal mountain waters.
          </p>
        </div>

        {/* The 3 Core Highlights (Large Bento Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {RESORT_ACTIVITIES.filter(a => a.isMainHighlight).map((activity) => (
            <div
              key={activity.id}
              className="rounded-3xl overflow-hidden bg-[#133E2B]/50 border border-emerald-500/20 hover:border-[#E2C98F]/50 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2016] via-[#0A2016]/30 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2016]/90 backdrop-blur-md border border-[#E2C98F]/40 text-[#E2C98F] text-xs font-bold uppercase tracking-wider">
                  {getActivityIcon(activity.iconName)}
                  <span>{activity.tag}</span>
                </div>

                {/* Bottom title in image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl text-white font-medium drop-shadow-md">
                    {activity.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#E2C98F] uppercase tracking-wider mb-2">
                    {activity.subtitle}
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                    {activity.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6 text-xs text-stone-200">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#E2C98F] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Schedule */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <Clock className="w-3.5 h-3.5 text-[#E2C98F]" />
                    <span>{activity.schedule}</span>
                  </span>
                  <span className="text-[#E2C98F] font-semibold flex items-center gap-1">
                    <span>Complimentary</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Activities: Rain Dance & Indoor Games */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESORT_ACTIVITIES.filter(a => !a.isMainHighlight).map((activity) => (
            <div
              key={activity.id}
              className="rounded-3xl overflow-hidden bg-[#133E2B]/30 border border-white/10 hover:border-[#E2C98F]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group transition-all duration-300 shadow-lg"
            >
              <div className="relative w-full sm:w-48 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 text-[#E2C98F] text-[10px] font-bold uppercase tracking-wider">
                  {activity.tag}
                </span>
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {getActivityIcon(activity.iconName)}
                    <h4 className="font-serif text-xl text-white font-medium">
                      {activity.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#E2C98F]" />
                    <span>{activity.schedule}</span>
                  </span>
                  <a
                    href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi,%20tell%20me%20more%20about%20${encodeURIComponent(activity.title)}%20at%20Coorg%20Heritage%20Hill%20View%20Resort`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E2C98F] hover:underline font-semibold"
                  >
                    Inquire Desk
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
