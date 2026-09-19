import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  Star, 
  Phone, 
  MessageCircle,
  ShieldCheck,
  Check
} from 'lucide-react';
import { FAQ_ITEMS, RESORT_INFO } from '../data/resortData';

export const ReviewsAndFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const guestReviews = [
    {
      name: 'Vikas & Shruti Nambiar',
      location: 'Bengaluru',
      review: 'The location is unbeatable! Being right in the center meant we visited Raja’s Seat for sunset and Omkareshwara temple in the morning without any of the exhausting mountain driving. The evening fire camp under the stars with hot Coorg snacks was pure magic.',
      highlight: 'Central Location & Evening Bonfire',
      rating: 5
    },
    {
      name: 'Dr. Arvind Hegde',
      location: 'Mysuru',
      review: 'With only 13 rooms, this place feels like a private forest sanctuary. No crowded tourist chaos. The natural stream running along the edge is crystal clear, and the staff treated us like royal family. Highly recommend the Superior Hill View Suite.',
      highlight: '13-Room Peaceful Sanctuary',
      rating: 5
    },
    {
      name: 'Pooja & Friends Group',
      location: 'Chennai',
      review: 'We booked 3 attic cottages for our college reunion. The rain dance setup was super energetic in the afternoon, and the homemade Pandi curry and Akki Roti for dinner was the most authentic we tasted in Coorg!',
      highlight: 'Rain Dance & Kodava Food',
      rating: 5
    }
  ];

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1E2522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Guest Testimonial Cards */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Verified Guest Memories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A2016] tracking-tight">
              Beloved by Nature Lovers &amp; Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guestReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-semibold text-sm text-[#0A2016]">{rev.name}</h4>
                    <span className="text-[11px] text-stone-500">{rev.location}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md">
                    {rev.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Everything You Need to Know</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0A2016] font-normal tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Essential details regarding our 13 rooms, central location, dining, and activities.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#C5A059]/60 shadow-md'
                      : 'bg-white/70 hover:bg-white border-stone-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-[#0A2016]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#0A2016] text-[#E2C98F] rotate-180' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-serif font-medium text-base text-[#0A2016]">Have a custom requirement or planning a group trip?</h4>
              <p className="text-xs text-stone-500 mt-0.5">Our front desk manager is happy to help with customized itineraries and room arrangements.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${RESORT_INFO.phone}`}
                className="px-4 py-2.5 rounded-xl bg-[#0A2016] text-white hover:bg-[#133E2B] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Call: {RESORT_INFO.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hello%20Coorg%20Heritage%20Hill%20View%20Resort,%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
