import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  BedDouble, 
  ArrowRight, 
  Flame, 
  Droplets, 
  Mountain, 
  Sparkles,
  MapPin,
  Clock,
  Compass
} from 'lucide-react';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';

interface HeroProps {
  onOpenBookingWithDetails?: (details: { checkIn: string; checkOut: string; roomCategory: string; guests: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingWithDetails }) => {
  // Booking Quick Bar state
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [roomCategory, setRoomCategory] = useState('Superior Hill View Suite (AC)');
  const [guests, setGuests] = useState('2 Adults');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBookingWithDetails) {
      onOpenBookingWithDetails({ checkIn, checkOut, roomCategory, guests });
    } else {
      const msg = encodeURIComponent(
        `Hello Coorg Heritage Hill View Resort! I would like to check availability:\n• Check-in: ${checkIn}\n• Check-out: ${checkOut}\n• Suite: ${roomCategory}\n• Guests: ${guests}`
      );
      window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="overview" className="relative w-full min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#0A2016] text-[#FAF8F5] pt-28 sm:pt-32">
      {/* Background Imagery with Smooth Ambient Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy93_FLtW3hjOjNufX5VE7HTZJ5AFj96-wYOKD1FZBfiHr5UkUwEZWifgDizSDuyhM1QTWSw-ixArJfVvO5its6CAypyb0Ik5iBSLQkJuuSKbomSS4kl1_1l-QgTC_9W9tvVlQyYIfKYJKx4Zp5J3xgFqk7oc64OIQe3M63buX1dAUQQqsleZUhobqyJNy_OSOU3cW7KVb-pQlnD5BOrV9rHRFzARliqweWxL4MyFUL7xnM1bMDJjYpVVwFW0CI40_6ds"
          alt="Panoramic misty mountains and coffee plantation canopy at Coorg Heritage Hill View Resort"
          className="w-full h-full object-cover object-center animate-kenburns opacity-75 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2016] via-[#0A2016]/40 to-[#0A2016]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2016]/85 via-transparent to-[#0A2016]/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-8 sm:pb-12 w-full flex-grow flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#E2C98F]/30 text-[#E2C98F] text-xs font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E2C98F] animate-ping" />
            <span>Madikeri, Coorg • Altitude 1,150m</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E4D38]/80 backdrop-blur-md border border-emerald-500/30 text-emerald-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#E2C98F]" />
            <span>13 Boutique Hillside Suites</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/60 backdrop-blur-md border border-amber-500/30 text-amber-200 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#E2C98F]" />
            <span>Centre Point of All Tourist Sights</span>
          </div>
        </div>

        {/* Headline & Story */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6">
            A Misty Hilltop Sanctuary <br />
            <span className="italic text-[#E2C98F] font-light">Above The Emerald Clouds</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-stone-200 max-w-2xl font-light leading-relaxed mb-6">
            Welcome to <strong className="text-white font-semibold">Coorg Heritage Hill View Resort</strong>—an intimate Kodava retreat of just 13 rooms in Madikeri. Wake up to sweeping cloud valleys, enjoy crackling evening bonfires, walk along natural mountain streams, and explore every Coorg landmark with zero travel fatigue.
          </p>

          {/* Quick Pillar Highlights */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-stone-300 font-medium">
            <span className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-[#E2C98F]" />
              <span>Panoramic Hill View Vistas</span>
            </span>
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#E2C98F]" />
              <span>Nightly Fire Camp & Music</span>
            </span>
            <span className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#E2C98F]" />
              <span>Natural Mountain Stream</span>
            </span>
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#E2C98F]" />
              <span>5km to Raja's Seat & Temples</span>
            </span>
          </div>
        </div>

        {/* Highland Weather & Bonfire Status Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-3xl text-xs sm:text-sm text-stone-200 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#E2C98F] shrink-0">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-stone-400 uppercase tracking-wider">Madikeri Weather</span>
              <span className="font-semibold text-white">20°C • Pleasant & Misty</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:border-l sm:border-white/10 sm:pl-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-stone-400 uppercase tracking-wider">Water Stream</span>
              <span className="font-semibold text-white">Flowing & Crystal Pure</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:border-l sm:border-white/10 sm:pl-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-stone-400 uppercase tracking-wider">Night Campfire</span>
              <span className="font-semibold text-white">7:30 PM Every Evening</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Quick Booking Engine Bar */}
      <div className="relative z-20 w-full px-4 sm:px-8 pb-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF8F5] text-[#1E2522] rounded-2xl shadow-2xl p-4 sm:p-6 border border-stone-200">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#0A2016]">
                Direct Reservation & Best Rate Guarantee
              </span>
            </div>
            <span className="text-xs text-stone-500 hidden sm:inline-block">
              Only 13 Rooms • Instant Manager Confirmation
            </span>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end">
            {/* Check-In */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Check-In
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
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Check-Out
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
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-[#C5A059]" /> Suite / Room Type
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
                <option value="Entire 13-Room Resort Buyout">Entire 13-Room Sanctuary Buyout</option>
              </select>
            </div>

            {/* Guests Count */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" /> Guests & Groups
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-stone-100 hover:bg-stone-200/80 focus:bg-white px-3 py-2.5 rounded-xl text-stone-800 text-sm font-medium border border-transparent focus:border-[#C5A059] outline-none transition-colors cursor-pointer"
              >
                <option value="2 Adults">2 Adults (1 Room)</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="3 - 4 Adults (Loft/Family)">3 - 4 Adults (Family Suite)</option>
                <option value="Corporate / Family Group (10+)">Corporate / Family Group (10+)</option>
                <option value="Full Resort Buyout (~40 Guests)">Entire 13-Room Buyout (~40 Guests)</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#0A2016] text-[#FAF8F5] hover:bg-[#133E2B] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-4 h-4 text-[#E2C98F]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
