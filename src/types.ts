export interface Room {
  id: string;
  roomNumber: number;
  name: string;
  category: 'ac' | 'non-ac' | 'family';
  badge: string;
  view: string;
  bedType: string;
  capacity: string;
  pricePerNight: number;
  description: string;
  features: string[];
  imageUrl: string;
  additionalImages: string[];
}

export interface TouristAttraction {
  id: string;
  name: string;
  distanceKm: number;
  driveTimeMins: number;
  shortDescription: string;
  detailedDescription: string;
  highlight: string;
  bestTime: string;
  category: 'viewpoint' | 'heritage' | 'nature' | 'adventure';
  googleMapsQuery: string;
  iconName: string;
}

export interface ResortActivity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  isMainHighlight: boolean;
  tag: string;
  imageUrl: string;
  iconName: string;
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'core' | 'comfort' | 'service';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hillview' | 'bonfire' | 'rooms' | 'dining' | 'waterstream';
  imageUrl: string;
  description: string;
}

export interface BookingInquiry {
  checkIn: string;
  checkOut: string;
  roomCategory: string;
  guestsCount: number;
  roomsCount: number;
  guestName: string;
  guestPhone: string;
  specialRequests: string;
}
