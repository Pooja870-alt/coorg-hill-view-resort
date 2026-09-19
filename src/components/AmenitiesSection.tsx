import React from 'react';
import { 
  Wind, 
  UtensilsCrossed, 
  Bell, 
  Flame, 
  Wifi, 
  Car, 
  Zap, 
  Sparkles, 
  Coffee, 
  Check, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { AMENITIES_DATA, RESORT_INFO } from '../data/resortData';

export const AmenitiesSection: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#1E4D38]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-700" />;
      case 'Bell':
        return <Bell className="w-6 h-6 text-[#C5A059]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-600" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-blue-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-emerald-700" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="amenities" className="w-full py-20 lg:py-28 bg-[#FAF8F5] text-[#1E2522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Essential Resort Comforts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A2016] tracking-tight leading-tight mb-4">
            AC, Non-AC, Authentic Dining &amp; Room Services
          </h2>
          <p className="font-sans text-base text-stone-600 leading-relaxed">
            Thoughtfully designed for tranquil hill station living. Savor delicious Kodava specialties in our scenic courtyard or enjoy warm meals delivered directly to your balcony.
          </p>
        </div>

        {/* Feature Split: Dining & Kodava Culinary Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xl">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK7m5BFTF55J0I9tBVtfJMq7rZ1TnCOKQeqe-2mBt3iWzbDK58LsJjqy1SQcWQa3LujvapV8EQ8rgVoanGxd-UVIcBqf_HPWFVwoXBqSHnqpzeeraBI2BOJW6jNz4dk6hK0IcKEolNSF1PfC-tPzza9ngu3mkwSwBy8Wyxa35QHZ0EqYZzguCzfUHkf7Zr1b_GQptYUloqAzoyegi3Our3eGe8mAUxgUAS39FRvaa5GGc_wLb0duDwOAiBDCHgkR70OcY"
              alt="In-house resort restaurant and rustic open-air dining courtyard"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold text-[#E2C98F] uppercase tracking-widest block">
                Taste of Kodagu
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                In-House Restaurant &amp; Courtyard Dining
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              <Coffee className="w-4 h-4" />
              <span>Farm-Fresh Local Spices</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A2016] leading-snug">
              Authentic Kodava Specialties, Multi-Cuisine &amp; Balcony Service
            </h3>

            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Experience the distinctive culinary heritage of Coorg. From aromatic traditional dishes simmered with indigenous Kachampuli black vinegar to beloved North and South Indian comfort staples, our cooks prepare fresh food tailored to your palate.
            </p>

            {/* Menu Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <span className="font-bold text-xs text-[#0A2016] block mb-1">Authentic Kodava Flavors</span>
                <p className="text-xs text-stone-500">Pandi Curry, Kadambuttu (steamed rice cakes), and Akki Roti with spicy chutneys.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <span className="font-bold text-xs text-[#0A2016] block mb-1">Multi-Cuisine Favorites</span>
                <p className="text-xs text-stone-500">Flavorful Biryanis, hot tandoori kebabs, paneer gravies, and mild kids dishes.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <span className="font-bold text-xs text-[#0A2016] block mb-1">Prompt Room Services</span>
                <p className="text-xs text-stone-500">Hot meals, evening tea, and snacks served directly to your room or scenic balcony.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <span className="font-bold text-xs text-[#0A2016] block mb-1">Bonfire Barbecue Starters</span>
                <p className="text-xs text-stone-500">Sizzling barbecue skewers and hot soup beside the crackling evening fire camp.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=Hi,%20could%20you%20please%20share%20the%20current%20dining%20menu%20and%20food%20arrangements%20at%20Coorg%20Heritage%20Hill%20View%20Resort?`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A2016] text-white hover:bg-[#133E2B] text-xs font-semibold uppercase tracking-wider shadow transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-[#E2C98F]" />
                <span>Inquire About Food Menu &amp; Meals</span>
              </a>
            </div>
          </div>
        </div>

        {/* Complete Core Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getAmenityIcon(amenity.iconName)}
                </div>
                <h4 className="font-serif text-lg text-[#0A2016] font-semibold mb-2">
                  {amenity.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>Standard Feature</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
