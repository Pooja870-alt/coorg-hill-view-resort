import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CentralTouristHub } from './components/CentralTouristHub';
import { KeyHighlights } from './components/KeyHighlights';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { PhotoGallery } from './components/PhotoGallery';
import { ReviewsAndFAQ } from './components/ReviewsAndFAQ';
import { Footer } from './components/Footer';
import { BookingInquiryModal } from './components/BookingInquiryModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    checkIn?: string;
    checkOut?: string;
    roomCategory?: string;
    guests?: string;
  }>({});

  const handleOpenBooking = () => {
    setBookingPrefill({});
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithDetails = (details: {
    checkIn: string;
    checkOut: string;
    roomCategory: string;
    guests: string;
  }) => {
    setBookingPrefill(details);
    setBookingModalOpen(true);
  };

  const handleSelectRoomForBooking = (roomName: string) => {
    setBookingPrefill((prev) => ({ ...prev, roomCategory: roomName }));
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2522] selection:bg-[#C5A059]/30 selection:text-[#0A2016]">
      {/* Fixed Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="w-full">
        {/* 1. Hero with WebGL / Motion & Quick Booking Bar */}
        <Hero onOpenBookingWithDetails={handleOpenBookingWithDetails} />

        {/* 2. Strategic Focus: The Central Tourist Hub (Raja's Seat 5km, Cariappa Museum 5km, Omkareshwara Temple 5km, Abbey Falls 10km) */}
        <CentralTouristHub />

        {/* 3. Highlighted Activities: Hillview, Fire Camp, Water Stream, Rain Dance, Indoor Games */}
        <KeyHighlights />

        {/* 4. The 13 Handcrafted Rooms Collection (AC & Non-AC) */}
        <RoomsSection onSelectRoomForBooking={handleSelectRoomForBooking} />

        {/* 5. Amenities & Authentic Kodava Restaurant Dining */}
        <AmenitiesSection />

        {/* 6. Photo Gallery with Category Filters & Lightbox */}
        <PhotoGallery />

        {/* 7. Verified Guest Experiences & FAQ Accordion */}
        <ReviewsAndFAQ />
      </main>

      {/* Footer with Full Contact (9019563004, Email, Address) & Sticky Mobile Bar */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Reservation & Tariff Calculation Modal */}
      <BookingInquiryModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDetails={bookingPrefill}
      />
    </div>
  );
}

