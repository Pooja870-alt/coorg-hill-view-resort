import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { KeyHighlights } from './components/KeyHighlights';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CentralTouristHub } from './components/CentralTouristHub';
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a1a1a] selection:bg-[#C5A059]/30 selection:text-[#1a1a1a]">
      {/* Fixed Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="w-full">
        {/* 1. Hero — left text + right slideshow */}
        <Hero onOpenBookingWithDetails={handleOpenBookingWithDetails} />

        {/* 2. Rooms — 13 handcrafted suites */}
        <RoomsSection onSelectRoomForBooking={handleSelectRoomForBooking} />

        {/* 3. Highlights & Activities */}
        <KeyHighlights />

        {/* 4. Amenities & Dining */}
        <AmenitiesSection />

        {/* 5. Tourist Places Nearby */}
        <CentralTouristHub />

        {/* 6. Photo Gallery */}
        <PhotoGallery />

        {/* 7. Reviews & FAQ */}
        <ReviewsAndFAQ />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <BookingInquiryModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDetails={bookingPrefill}
      />
    </div>
  );
}
