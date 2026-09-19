import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CalendarCheck, 
  ExternalLink, 
  Sparkles,
  Mountain,
  Flame,
  Droplets,
  ArrowUp
} from 'lucide-react';
import { Logo } from './Logo';
import { RESORT_INFO, TOURIST_ATTRACTIONS } from '../data/resortData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-[#0A2016] text-[#FAF8F5] pt-16 sm:pt-20 pb-28 sm:pb-16 border-t border-white/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E4D38]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-16">
            {/* Column 1 & 2: Brand & Story */}
            <div className="lg:col-span-2 space-y-4">
              <Logo variant="light" />

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-sm mt-3">
                An intimate hilltop sanctuary of only 13 boutique rooms in Madikeri, Coorg. Centrally positioned to let you explore Raja's Seat, Abbey Falls, and historic temples with zero mountain travel fatigue.
              </p>

              <div className="space-y-2 pt-2 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E2C98F] shrink-0 mt-0.5" />
                  <span>{RESORT_INFO.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E2C98F] shrink-0" />
                  <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-[#E2C98F] transition-colors font-semibold">
                    {RESORT_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E2C98F] shrink-0" />
                  <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#E2C98F] transition-colors">
                    {RESORT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi%20Coorg%20Heritage%20Hill%20View%20Resort`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#E2C98F] text-xs font-semibold transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book a Room</span>
                </button>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-serif text-base text-[#E2C98F] font-semibold">Sanctuary Living</h4>
              <ul className="space-y-2 text-xs text-stone-300 font-light">
                <li><a href="#overview" className="hover:text-white transition-colors">Resort Overview</a></li>
                <li><a href="#rooms" className="hover:text-white transition-colors">13 Hillside Rooms</a></li>
                <li><a href="#highlights" className="hover:text-white transition-colors">Hill View Vistas</a></li>
                <li><a href="#highlights" className="hover:text-white transition-colors">Nightly Bonfire Camp</a></li>
                <li><a href="#highlights" className="hover:text-white transition-colors">Mountain Water Stream</a></li>
                <li><a href="#highlights" className="hover:text-white transition-colors">Rain Dance Pavilion</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Kodava Restaurant &amp; Room Service</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              </ul>
            </div>

            {/* Column 4: Central Tourist Hub Proximity */}
            <div className="space-y-3">
              <h4 className="font-serif text-base text-[#E2C98F] font-semibold">Proximity To Sights</h4>
              <p className="text-[11px] text-stone-400 font-light">The central hub of all Madikeri attractions:</p>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>Raja's Seat Sunset Point</span>
                  <span className="text-[#E2C98F] font-bold">5.0 km</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>Field Marshal Cariappa Memorial</span>
                  <span className="text-[#E2C98F] font-bold">5.0 km</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>Omkareshwara Temple</span>
                  <span className="text-[#E2C98F] font-bold">5.0 km</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>Madikeri Fort &amp; Museum</span>
                  <span className="text-[#E2C98F] font-bold">5.5 km</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>Abbey Falls Cascade</span>
                  <span className="text-[#E2C98F] font-bold">10.0 km</span>
                </li>
              </ul>
            </div>

            {/* Column 5: Direct Booking Assurance */}
            <div className="space-y-3">
              <h4 className="font-serif text-base text-[#E2C98F] font-semibold">Direct Reservations</h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Booking directly with our manager guarantees the best room assignment, instant confirmation, zero middleman fees, and complimentary campfire access.
              </p>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Reservations Desk</span>
                <a href={`tel:${RESORT_INFO.phone}`} className="font-serif text-lg text-white font-bold block hover:text-[#E2C98F] transition-colors">
                  {RESORT_INFO.phoneDisplay}
                </a>
                <span className="text-[11px] text-emerald-400 block font-medium">Open 24/7 for Inquiries</span>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Madikeri+Coorg+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E2C98F] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              © {new Date().getFullYear()} Coorg Heritage Hill View Resort. All rights reserved. Madikeri, Kodagu, Karnataka.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Bottom Mobile Bar for Instant Actions */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-40 bg-[#0A2016]/95 backdrop-blur-lg border-t border-white/15 p-3 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${RESORT_INFO.phone}`}
          className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#E2C98F]" />
          <span>Call Desk</span>
        </a>

        <a
          href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi%20Coorg%20Heritage%20Hill%20View%20Resort,%20I%20would%20like%20to%20inquire%20about%20booking.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 rounded-xl bg-[#E2C98F] text-[#0A2016] font-bold text-xs flex items-center justify-center gap-1 shadow-md"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Book Stay</span>
        </button>
      </div>
    </>
  );
};
