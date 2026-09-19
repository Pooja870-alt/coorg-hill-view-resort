import React, { useState } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryItem } from '../types';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hillview' | 'bonfire' | 'rooms' | 'dining' | 'waterstream'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="w-full py-20 lg:py-28 bg-[#0A2016] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E2C98F] text-xs font-bold uppercase tracking-widest mb-3">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Resort Visuals</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              Glimpses of Your Hilltop Retreat
            </h2>
            <p className="text-sm sm:text-base text-stone-300 mt-2 font-light">
              Misty horizons, crackling bonfires, and comfortable handcrafted spaces in Madikeri.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'hillview', label: 'Hill Views' },
              { id: 'bonfire', label: 'Bonfire Nights' },
              { id: 'waterstream', label: 'Water Stream & Pool' },
              { id: 'rooms', label: 'Suites & Lofts' },
              { id: 'dining', label: 'Dining' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-[#E2C98F] text-[#0A2016] shadow-md'
                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-stone-900 shadow-lg border border-white/10 hover:border-[#E2C98F]/50 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#E2C98F] tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-medium leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] text-stone-300 mt-1 line-clamp-1 font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-xl">
              <h3 className="font-serif text-xl font-medium text-[#E2C98F]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-stone-300 mt-1 font-light">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="text-[11px] text-stone-500 mt-2">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
