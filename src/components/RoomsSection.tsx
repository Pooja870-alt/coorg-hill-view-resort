import React, { useState } from 'react';
import { 
  BedDouble, 
  Users, 
  Wind, 
  Mountain, 
  Sparkles, 
  Check, 
  X, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { ROOMS_DATA, RESORT_INFO } from '../data/resortData';
import { Room } from '../types';

interface RoomsSectionProps {
  onSelectRoomForBooking?: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoomForBooking }) => {
  const [filter, setFilter] = useState<'all' | 'ac' | 'non-ac' | 'family'>('all');
  const [modalRoom, setModalRoom] = useState<Room | null>(null);

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'all') return true;
    return room.category === filter;
  });

  const handleBookDirect = (room: Room) => {
    if (onSelectRoomForBooking) {
      onSelectRoomForBooking(room.name);
    } else {
      const msg = encodeURIComponent(
        `Hi Coorg Heritage Hill View Resort! I am interested in reserving Room #${room.roomNumber}: ${room.name} (${room.capacity}). Could you please share availability and best direct tariff?`
      );
      window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="rooms" className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1E2522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Exclusive Boutique Sanctuary</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A2016] tracking-tight leading-tight">
              13 Handcrafted Hillside Rooms &amp; Suites
            </h2>
            <p className="font-sans text-base text-stone-600 mt-3 leading-relaxed">
              We purposefully limit our property to just 13 guest chambers, guaranteeing undisturbed peaceful silence, personalized attention, uncrowded bonfires, and unblocked views over Coorg’s lush coffee canopies.
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs font-semibold text-stone-700">
              <span className="text-[#0A2016] font-bold text-sm">Total 13 Rooms</span> • AC &amp; Non-AC Available
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-2">
          {[
            { id: 'all', label: 'All 13 Suites' },
            { id: 'ac', label: 'AC Hill View Suites' },
            { id: 'non-ac', label: 'Heritage Attic Cottages (Non-AC)' },
            { id: 'family', label: 'Family & Group Suites' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-[#0A2016] text-[#FAF8F5] shadow-md scale-[1.02]'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-stone-900 cursor-pointer" onClick={() => setModalRoom(room)}>
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0A2016]/90 backdrop-blur-md text-[#E2C98F] text-[11px] font-bold uppercase tracking-wider">
                    Room #{room.roomNumber < 10 ? `0${room.roomNumber}` : room.roomNumber}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                    room.category === 'ac' 
                      ? 'bg-blue-900/80 text-blue-100' 
                      : 'bg-emerald-900/80 text-emerald-100'
                  }`}>
                    {room.category === 'ac' ? 'AC Suite' : 'Non-AC Loft'}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalRoom(room);
                    }}
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    title="View Room Photos & Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom View Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#E2C98F] font-bold uppercase tracking-widest block mb-0.5">
                    {room.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-200">
                    <Mountain className="w-3.5 h-3.5 text-[#E2C98F]" />
                    <span className="truncate">{room.view}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0A2016] font-medium mb-2 leading-snug">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Specs & Capacity */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-stone-100 text-xs text-stone-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span className="truncate">{room.bedType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-[11px] font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span 
                        onClick={() => setModalRoom(room)}
                        className="px-2 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-medium cursor-pointer hover:underline"
                      >
                        +{room.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-stone-500 uppercase tracking-wider font-semibold">Direct Tariff</span>
                    <span className="font-serif text-lg font-bold text-[#0A2016]">
                      ₹{room.pricePerNight.toLocaleString()} <span className="text-xs font-sans font-normal text-stone-500">/ night</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalRoom(room)}
                      className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                      title="View Room Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleBookDirect(room)}
                      className="px-3.5 py-2.5 rounded-xl bg-[#0A2016] text-[#FAF8F5] hover:bg-[#133E2B] text-xs font-semibold uppercase tracking-wider shadow transition-all hover:scale-105"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 13-Room Full Property Buyout Card */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#133E2B] to-[#0A2016] text-white p-6 sm:p-10 shadow-2xl border border-[#C5A059]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E2C98F] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Resort Private Sanctuary Buyout</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3">
              Planning a Family Reunion, Corporate Offsite, or Wedding Retreat?
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Reserve all 13 rooms exclusively for your group (accommodating up to 40 guests). Enjoy private access to the bonfire arena, rain dance pavilion, scenic dining hall, indoor games, and bespoke Kodava catering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi%20Coorg%20Heritage%20Hill%20View%20Resort,%20we%20are%20planning%20a%20full%2013-room%20buyout%20for%20our%20group.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#E2C98F] text-[#0A2016] hover:bg-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              Inquire 13-Room Buyout
            </a>
            <a
              href={`tel:${RESORT_INFO.phone}`}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Call Manager: {RESORT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Room Detail Modal */}
      {modalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-[#1E2522] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
              <img
                src={modalRoom.imageUrl}
                alt={modalRoom.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              <button
                onClick={() => setModalRoom(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#E2C98F] uppercase tracking-widest block mb-1">
                  Room #{modalRoom.roomNumber} • {modalRoom.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                  {modalRoom.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">Room Description</h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {modalRoom.description}
                </p>
              </div>

              {/* Additional Photos Strip if available */}
              {modalRoom.additionalImages.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2.5">More Photos</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {modalRoom.additionalImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${modalRoom.name} angle ${idx + 1}`}
                        className="h-28 w-full object-cover rounded-xl border border-stone-200"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">View</span>
                  <span className="font-medium text-stone-800">{modalRoom.view}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Bedding</span>
                  <span className="font-medium text-stone-800">{modalRoom.bedType}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Max Capacity</span>
                  <span className="font-medium text-stone-800">{modalRoom.capacity}</span>
                </div>
              </div>

              {/* Complete Features */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-3">Included Amenities &amp; Perks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {modalRoom.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] text-stone-400 uppercase font-semibold">Tariff (Direct Guarantee)</span>
                  <span className="font-serif text-2xl font-bold text-[#0A2016]">
                    ₹{modalRoom.pricePerNight.toLocaleString()} <span className="text-xs font-sans font-normal text-stone-500">/ night</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`tel:${RESORT_INFO.phone}`}
                    className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                    <span>Call Desk</span>
                  </a>

                  <button
                    onClick={() => {
                      const roomToBook = modalRoom;
                      setModalRoom(null);
                      handleBookDirect(roomToBook);
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#0A2016] text-white hover:bg-[#133E2B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E2C98F]" />
                    <span>Confirm on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
