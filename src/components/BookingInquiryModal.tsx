import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MessageCircle, 
  Mail, 
  Calendar, 
  Users, 
  BedDouble, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Clock
} from 'lucide-react';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: {
    checkIn?: string;
    checkOut?: string;
    roomCategory?: string;
    guests?: string;
  };
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({
  isOpen,
  onClose,
  initialDetails = {}
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialDetails.checkIn || today);
  const [checkOut, setCheckOut] = useState(initialDetails.checkOut || tomorrow);
  const [roomCategory, setRoomCategory] = useState(initialDetails.roomCategory || 'Superior Hill View Suite (AC)');
  const [guestsCount, setGuestsCount] = useState(initialDetails.guests || '2 Adults');
  const [roomsCount, setRoomsCount] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculate estimated nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 1;
    } catch {
      return 1;
    }
  };

  const nights = calculateNights();

  // Find estimated room price
  const selectedRoomObj = ROOMS_DATA.find(r => r.name.toLowerCase().includes(roomCategory.toLowerCase().slice(0, 10))) || ROOMS_DATA[0];
  const estimatedTotal = selectedRoomObj ? selectedRoomObj.pricePerNight * nights * roomsCount : 4000 * nights * roomsCount;

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Reservation Inquiry - Coorg Heritage Hill View Resort*\n` +
      `-----------------------------------------\n` +
      `• *Guest Name:* ${guestName || 'Guest'}\n` +
      `• *Contact Phone:* ${guestPhone || 'Will share in chat'}\n` +
      `• *Check-in Date:* ${checkIn}\n` +
      `• *Check-out Date:* ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
      `• *Room Type:* ${roomCategory}\n` +
      `• *Number of Rooms:* ${roomsCount} (Out of 13)\n` +
      `• *Guests:* ${guestsCount}\n` +
      (specialRequests ? `• *Special Requests:* ${specialRequests}\n` : '') +
      `-----------------------------------------\n` +
      `Please confirm live room availability and the best direct booking tariff.`
    );
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const url = `https://wa.me/${RESORT_INFO.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Booking Inquiry for Coorg Heritage Hill View Resort: ${checkIn} to ${checkOut}`);
    const body = encodeURIComponent(
      `Hello Coorg Heritage Hill View Resort Reservations,\n\n` +
      `I would like to inquire about booking accommodation:\n` +
      `- Name: ${guestName || 'Prospective Guest'}\n` +
      `- Phone: ${guestPhone}\n` +
      `- Check-in: ${checkIn}\n` +
      `- Check-out: ${checkOut} (${nights} nights)\n` +
      `- Suite Category: ${roomCategory}\n` +
      `- Rooms Required: ${roomsCount}\n` +
      `- Guests: ${guestsCount}\n` +
      `- Special Requests: ${specialRequests}\n\n` +
      `Please reply with availability and reservation procedure.\n\nThank you!`
    );
    window.location.href = `mailto:${RESORT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] text-[#1a1a1a] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-300">
        {/* Header */}
        <div className="bg-white text-[#1a1a1a] p-6 sm:p-7 relative rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-100 text-[#1a1a1a] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Direct Reservation Desk</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-medium">
            Plan Your Stay in Madikeri
          </h3>
          <p className="text-xs text-stone-600 mt-1 font-light">
            Guaranteed best direct rate • Free campfire &amp; rain dance • Central hub to all tourist spots
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleWhatsAppSend} className="p-6 sm:p-8 space-y-6">
          {/* Dates & Room Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Check-In Date
              </label>
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 outline-none focus:border-[#C5A059]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Check-Out Date
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 outline-none focus:border-[#C5A059]"
                required
              />
            </div>
          </div>

          {/* Room Category & Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-[#C5A059]" /> Room Category
              </label>
              <select
                value={roomCategory}
                onChange={(e) => setRoomCategory(e.target.value)}
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 outline-none focus:border-[#C5A059] cursor-pointer"
              >
                <option value="Superior Hill View Suite (AC)">Superior Hill View Suite (AC)</option>
                <option value="Misty Valley Suite (AC)">Misty Valley Suite (AC)</option>
                <option value="Heritage Attic Cottage (Non-AC)">Heritage Attic Cottage (Non-AC)</option>
                <option value="Grand Family Valley Room">Grand Family Valley Room</option>
                <option value="Full Resort Buyout (All 13 Rooms)">Full Resort Buyout (All 13 Rooms)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1">
                  Rooms
                </label>
                <select
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full bg-white px-3 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                    <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1">
                  Guests
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 outline-none cursor-pointer"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="4 Adults">4 Adults</option>
                  <option value="Group 5-10 Adults">Group (5-10)</option>
                  <option value="Large Group (10+)">Group (10+)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Guest Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-800 outline-none focus:border-[#C5A059]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                WhatsApp / Mobile Phone
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-800 outline-none focus:border-[#C5A059]"
                required
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              Special Requests or Sightseeing Arrangements (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Need bonfire BBQ skewers, Mandalpatti 4x4 jeep safari, or Kodava dinner"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-800 outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Quick Tariff Summary Banner */}
          <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-stone-500 block">Estimated Duration</span>
              <span className="font-semibold text-stone-800 text-sm">{nights} Night{nights > 1 ? 's' : ''} • {roomsCount} Room{roomsCount > 1 ? 's' : ''}</span>
            </div>

            <div>
              <span className="text-stone-500 block">Approx. Starting Tariff</span>
              <span className="font-serif text-lg font-bold text-[#1a1a1a]">
                ₹{estimatedTotal.toLocaleString()}*
              </span>
            </div>

            <div className="text-stone-500 text-[11px] max-w-[200px]">
              *Tariff includes access to evening bonfire, rain dance, mountain stream &amp; parking.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-stone-100 text-[#1a1a1a] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Confirm on WhatsApp (Instant Response)</span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${RESORT_INFO.phone}`}
                className="py-3 px-4 rounded-2xl bg-white hover:bg-stone-100 text-[#1a1a1a] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Desk: {RESORT_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleEmailSend}
                className="py-3 px-4 rounded-2xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Send via Email</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
