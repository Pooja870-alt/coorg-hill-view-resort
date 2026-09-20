import { Room, TouristAttraction, ResortActivity, Amenity, GalleryItem } from '../types';

export const RESORT_INFO = {
  name: 'Coorg Heritage Hill View Resort',
  tagline: 'Misty Hilltop Sanctuary • Central Hub to All Madikeri Tourist Sights',
  totalRooms: 13,
  phone: '9019563004',
  phoneDisplay: '+91 9019563004',
  email: 'coorgheritagehillviewresort@gmail.com',
  address: 'Madikeri, Coorg (Kodagu), Karnataka - 571201, India',
  altitude: '1,150 meters (3,770 ft)',
  locationHighlight: 'The Exact Centre Point of All Coorg Tourist Attractions',
  whatsappNumber: '919019563004',
  googleMapsUrl: 'https://maps.google.com/?q=Madikeri+Coorg+Karnataka',
};

// 13 Individual Rooms with high quality photography and specs
export const ROOMS_DATA: Room[] = [
  {
    id: 'room-101',
    roomNumber: 1,
    name: 'Superior Hill View Suite (AC)',
    category: 'ac',
    badge: 'Signature Panoramic',
    view: 'Panoramic Cloud Valley & Coffee Slopes',
    bedType: '1 King Bed + Extra Rollaway available',
    capacity: '2 - 3 Guests',
    pricePerNight: 4200,
    description: 'Floor-to-ceiling glass fenestration offering an unobstructed sweeping vista of the Western Ghats mountain ridges. Features private balcony with cane armchairs and premium climate control.',
    features: ['High-efficiency Air Conditioning', 'Private Hill View Balcony', '24/7 Hot Water Geyser', 'High-Speed Wi-Fi', 'Flat Screen TV', 'In-Room Dining Service', 'Coffee & Tea Maker'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHLV-IQbxmssRD4RXgLOtqh_jQSGK975sGIvr-Ivj_RvF0ZImhLXIDRFMRZEMYeTiOUJhdcUHG-naGSQg-kksIOocoVjiW-gIunirBNUSZhFC2kEuVYSC4p25bp8rTMUVaPVQEXSWxe7EvKTRV55A5rF7oM-sIyRw6Wg-ln1rZu3ngqZU_gqszjoByIA97Pvueeoi0OyE1p3P_NbX_FTU2pnfzmPUauTvW_OsspEqNXlxObx1Z7sgcWitOu07KQ-nDZ_o',
    additionalImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBatgXWioYdc7RTVTzYEl4AzM53snw2ikyfsoAi32kdP3z2BLsjcmNdjTHp3HkSfZjqcRLrnvVa5LJK2K-fKHqKklxS4RXRZBH6m2ugPiYge8btWo8v1EbiTBVMO4Uk2dT_SGqAEFKlEt5HNnNdlFDEoK36G_Ra2razGPAJgkwK_dtjp4uofIbDKXrIB8BhWgJofqgp0ligpnGZfoHofTcSh85wJIfTBk0bTEI85eSXxS38w1fXn6JGVg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIeO146k0pOHp1IgGAcFdSeHLfz3MmGFz_ZbzeZUvcc2JvYbsJTiG5A072fU9Yow__gFK3Ntm0z7iwjUfqGypzNoKQ-cXh22buHRHEtNU31OKVvPTLG2xSTcZHEAoSj2V9pkIVrViJo4P6A4yXdVPeru8K42I5lcrVAWZXMIPgNUwJ8qzDr2fA29FGGG_9h1WaG6Fxyks4_p4v54HMwKKRcUVtczuIWwntnbU4aH9Qb0UDRhbAejSkDg'
    ]
  },
  {
    id: 'room-102',
    roomNumber: 2,
    name: 'Misty Valley Suite (AC)',
    category: 'ac',
    badge: 'Sunrise Vista',
    view: 'Eastern Valley & Forest Edge',
    bedType: '1 King Bed',
    capacity: '2 Guests',
    pricePerNight: 3900,
    description: 'Awake to the golden dawn breaking over misty pine treetops. Equipped with cooling AC, comfortable handcrafted wooden furnishings, and a peaceful personal verandah.',
    features: ['Climate AC', 'Valley Verandah', '24/7 Hot Water', 'Daily Housekeeping', 'Intercom Room Service', 'Complimentary Filter Coffee'],
    imageUrl: '/images/IMG-20260920-WA0008.jpg',
    additionalImages: [
      '/images/IMG-20260920-WA0004.jpg'
    ]
  },
  {
    id: 'room-103',
    roomNumber: 3,
    name: 'Highland Executive Suite (AC)',
    category: 'ac',
    badge: 'Premium Comfort',
    view: 'Hill View & Bonfire Courtyard',
    bedType: '1 King Bed + 1 Single Daybed',
    capacity: '3 Guests',
    pricePerNight: 4100,
    description: 'Spacious retreat pairing modern air-conditioned convenience with direct views over both the distant rolling hills and the twilight campfire terrace.',
    features: ['Air Conditioning', 'Hill View Outlook', 'En-suite Luxury Bath', 'Work Desk & Wi-Fi', '24h Power Backup', 'Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4oNfFPX8LslVGZ_Ynh9jHd-Heli6N2vQ4xABbMe0-bvveBjIVcmlljoXRXffYKY9a3CC4JoAKJFTKW2Iea_Phs0I5xbfbK2wTXs-CDy93XzrMOZ-1U1EqdZ7_ricaj7uG6vroNzIgIqi2EKcQOy1DITaRY9_TXbnYYKNsj0tRnFSuiCUOW46YPZYUqNGmKh2QzUxYBnHczam9fuU41S4wo3Ef2dP7Ovx7JF99A5ZXPbELP3XuVNq2KI9eC0LguUAJtKM',
    additionalImages: []
  },
  {
    id: 'room-104',
    roomNumber: 4,
    name: 'Emerald Ridge Room (AC)',
    category: 'ac',
    badge: 'Quiet Corner',
    view: 'Cardamom & Pepper Plantation Grove',
    bedType: '1 Queen Bed',
    capacity: '2 Guests',
    pricePerNight: 3700,
    description: 'Immersed in deep green foliage with sweet botanical morning aromas. Crisp AC airflow and private attached bath with continuous heated water.',
    features: ['Air Conditioning', 'Forest Canopy View', 'Attached Hot Shower', 'Smart Flat Screen', 'Wi-Fi Access', 'Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHLV-IQbxmssRD4RXgLOtqh_jQSGK975sGIvr-Ivj_RvF0ZImhLXIDRFMRZEMYeTiOUJhdcUHG-naGSQg-kksIOocoVjiW-gIunirBNUSZhFC2kEuVYSC4p25bp8rTMUVaPVQEXSWxe7EvKTRV55A5rF7oM-sIyRw6Wg-ln1rZu3ngqZU_gqszjoByIA97Pvueeoi0OyE1p3P_NbX_FTU2pnfzmPUauTvW_OsspEqNXlxObx1Z7sgcWitOu07KQ-nDZ_o',
    additionalImages: []
  },
  {
    id: 'room-105',
    roomNumber: 5,
    name: 'Heritage Attic Cottage (Non-AC)',
    category: 'non-ac',
    badge: 'Cozy Timber Loft',
    view: 'Elevated Highland Skyline',
    bedType: '2 Double Beds (Loft Style)',
    capacity: '3 - 4 Guests',
    pricePerNight: 3500,
    description: 'Sloping natural timber rafters cooled naturally by the fresh 1,150-meter Western Ghats mountain breeze. Popular choice for close friends and families.',
    features: ['Natural Mountain Air Cooled', 'Timber Loft Architecture', 'Accommodates up to 4', 'Deck Seating Area', '24/7 Hot Water', 'High-Speed Wi-Fi', 'Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgByIBuJs0kmgtZhC_RZXIVuTARzFKJDtzyN1WaF-aQ6ajzBq0l4wlTZcydbOM3IQlZkZHux2ug40J4gw-qzgR5-NRdHw5bDvgnkCop8cmBGasXjw2RB2lgcsQFN6v5nJ6Snx56ELVlElzqWQ4yWGBdZP9Udz5jgc5w10jJaZOuwzlK1e04HfY7Rpg5HB-30FQ0t8oaAPTD9NfHEbzwMfFzM5744j9Y8Gwhv5YiPbcTQcSPcNeXsEwRJxweSZ8bQKxEIo',
    additionalImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDm5lZFBw-knuiNs4QznoIPyj-toM4qjkZjuFcIsU83fNzXO2R8VsFhwdooVKxMG7Zv6T-5t9JDSEC_R_4AM8rWWWo7VnZAy9KTdXfvEc7wVZdJBRxPHy-XrBOCRtUpKqRRAdjBkK3q9a4SdMggpOX98c3ZHhV7yXueM0x3iAbuleG25_-rJRxbUQbeQ-93KcT2BcRY5RZeiqjutdLtsUC1XKFwll3ozXQPEk5qqNYV9FqNe8zrv_83UQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyGk1N8Px1Mc-K5JjgTkhWNrahZYUdRAk3jYKtp-Dr3_nmTI3vn2kshmCOmcVRDD5wH3-IY3xx_UP-T_0H7HvjIgKXQQ7sX5FFLB6Kt3UhErOa8OfGvhIvSLx3AGzBegSBDV4BJkx2VtkaWRnLUno6KlyrsoMEGLzgOUmc2tZ5NeKuXCSg9thqKybzNhVzOx_FyioxTk0AyGbGy85lE3C91JTQqc8O4xdwOew33zARWrqTMVsy-rUQdQ'
    ]
  },
  {
    id: 'room-106',
    roomNumber: 6,
    name: 'Mountain Breeze Loft (Non-AC)',
    category: 'non-ac',
    badge: 'Eco-Living',
    view: 'Misty Coffee Valleys',
    bedType: '1 Queen Bed',
    capacity: '2 Guests',
    pricePerNight: 3100,
    description: 'Designed for eco-conscious travelers desiring pure mountain oxygen and acoustic nature sounds. Cross-ventilated timber architecture with private bath.',
    features: ['Natural Cross Ventilation', 'Warm Teak Finishing', 'Private Bathroom with Geyser', 'Wi-Fi & Charging', 'Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCggS_QSyRXwalIBTKpgLkrU1AN3D-RmvL8uKaUE5ghwN7Ypft3BV_r1buy6U1Q6b5IrrtgiaeObUJJtWCHuJzBO5Xw1H8P0hgYdoeClEDHa2tWqyt3RVH4X4k9wrZph52Yv2vsQmmHXXzOkxnD3HQ-9IYXyJg9G1XuX_BGSCCSIezLmLvbFhdmtvk9_hzXoWqn9hejIhZz3tSwMEYO05Ox7fEgVPkfrcfysqPItmNjoPOAOVWPbJoRJg',
    additionalImages: []
  },
  {
    id: 'room-107',
    roomNumber: 7,
    name: 'Plantation Haven (Non-AC)',
    category: 'non-ac',
    badge: 'Hillside Serenity',
    view: 'Stream & Tree Fern Valley',
    bedType: '1 King Bed',
    capacity: '2 Guests',
    pricePerNight: 3200,
    description: 'Located alongside the gentle footpaths leading to our natural water stream. Features quiet private verandah and soothing water acoustics.',
    features: ['Stream Side Path Access', 'Verandah Seating', '24h Hot Geyser', 'Direct Room Delivery', 'Peaceful Seclusion'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyJ_96QuXFzVz_vpT5A2BSTpoh5C83iKgg7thyvrd0SSgeKHTnFyYrYwQ7rGaXXTEru-xBoCJ0QMVTg10aH9gHbidyqP3dD1tWhU-k7jH9QnqdGzwk3y5T5ITixvv_YWslUHmD-1Lv9gDIH27OIpS3Tmjt1wzFT0uuq7uPHbcpCtPiidr5kPtPOk_LaKf65A9qRDk_GPzfaaumA8r7scLLvED510JWb9qVUKpNR_Rr5kSv0FGlFZTgMNHpXkh5xcIbQ2w',
    additionalImages: []
  },
  {
    id: 'room-108',
    roomNumber: 8,
    name: 'Western Ghats View Suite (AC)',
    category: 'ac',
    badge: 'Panoramic Deck',
    view: 'Horizon Hill View',
    bedType: '1 King Bed',
    capacity: '2 Guests',
    pricePerNight: 4300,
    description: 'Breathtaking corner placement granting wide double-angle views of Kodagu’s rolling highlands. Crisp air conditioning, private balcony, and plush bedding.',
    features: ['High-Power Air Conditioning', 'Dual Corner Balconies', 'Room Service 24/7', 'High-Speed Wi-Fi', 'Modern En-suite Bath'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWVRhKwTX8UC7ZNjiP_3yjsAJPlSGnE5eqDScUf5VMrUEfwoyrzPTIvxlAGAdtvdtPwP3zJJ65K0c18y4Mjzizr2Ii4Z8PrS-jwkALj2Zwv6hAXE4tiIC8PJkFCbYKCT0B0gwYP6c5JBIqOXop3X03r3RCq8b-BRZ09-Tkl8OgXSg3v61uXn6sdy3NMmav0E4ROtkjXDS_7XO_5JnZ-h-nG8t85kvxcrHdbrRfP2B2LksdzAwVPRRNw',
    additionalImages: []
  },
  {
    id: 'room-109',
    roomNumber: 9,
    name: 'Grand Family Valley Room',
    category: 'family',
    badge: 'Family Favorite',
    view: 'Valley & Courtyard',
    bedType: '2 King Beds',
    capacity: '4 - 5 Guests',
    pricePerNight: 4800,
    description: 'Generously proportioned bedroom with dual king beds, spacious seating circle, and quick access to the indoor games room and campfire lawns.',
    features: ['Spacious Family Layout', 'AC Available', 'Dining Table Nook', '24/7 Hot Water', 'Fast Wi-Fi', 'Dedicated Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgtHm9gKYevKsRwTYdUhdhBvD5L3L1cq3LzqQBZeQK3j0hSaNZThp0L2XiNStj6CFMzmKUWXVrI1ZdbcNV4vcI6-W1lVln4beHw4imrGKYX96Ig88KL6dDnGYQsDZDkKp9axcp9MyfnRk8Wc5wEx6wuhsiT_pVi0PWvh2WOkWwfPz3trT-T3DDWkqsyrMqfFLnnKku1FDAth4izBJfbyw8jc8jjsCCJo5qBlJwvgsTpbMccNqdc-PHZA',
    additionalImages: []
  },
  {
    id: 'room-110',
    roomNumber: 10,
    name: 'Garden Verandah Suite',
    category: 'family',
    badge: 'Direct Garden Walk',
    view: 'Lush Tropical Garden & Hills',
    bedType: '1 King Bed + 1 Single Bed',
    capacity: '3 Guests',
    pricePerNight: 3800,
    description: 'Ground floor suite stepping right onto manicured garden lawns bordered by coffee plants and exotic native flora. Quiet, peaceful, and easily accessible.',
    features: ['Step-Out Lawn Verandah', 'Option for AC or Fan', 'Generous Wardrobe', 'Hot Shower 24h', 'Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbOxMPXYwZXgEhkLb-SyYyzJmRI5ZymH1oKuIRZBSEANa1cbKq7aISMvGt-CJPtGuoMG96J1ksQOJjkqaBF9RsmhmXKZmlJw9utHG3JTM0WbnJZFMIf9gFo-GmQZBzrIyRrTJWuSBrtApNj4sRSFbGB0Tq2cbEiMjy1xWFwulpt4QodCV5AE_4FK9Fw70qecxuZtj_kN88LIPYBjgSN2DL80y0pVlOSPHr8LTdVfBCe11dzAmclQVaNA',
    additionalImages: []
  },
  {
    id: 'room-111',
    roomNumber: 11,
    name: 'Cloud View Attic Room (Non-AC)',
    category: 'non-ac',
    badge: 'Upper Loft',
    view: '360° Hilltop Cloud Line',
    bedType: '1 Queen Bed',
    capacity: '2 Guests',
    pricePerNight: 3300,
    description: 'High vantage point attic room with panoramic gable windows framing drifting morning clouds and evening twilight glows.',
    features: ['High Timber Gable Windows', 'Fresh Mountain Breezes', 'Private Bath', 'Cozy Reading Nook', 'Room Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgByIBuJs0kmgtZhC_RZXIVuTARzFKJDtzyN1WaF-aQ6ajzBq0l4wlTZcydbOM3IQlZkZHux2ug40J4gw-qzgR5-NRdHw5bDvgnkCop8cmBGasXjw2RB2lgcsQFN6v5nJ6Snx56ELVlElzqWQ4yWGBdZP9Udz5jgc5w10jJaZOuwzlK1e04HfY7Rpg5HB-30FQ0t8oaAPTD9NfHEbzwMfFzM5744j9Y8Gwhv5YiPbcTQcSPcNeXsEwRJxweSZ8bQKxEIo',
    additionalImages: []
  },
  {
    id: 'room-112',
    roomNumber: 12,
    name: 'Valley Horizon Suite (AC)',
    category: 'ac',
    badge: 'Executive Hill View',
    view: 'Unbroken Western Ghats Valley',
    bedType: '1 King Bed',
    capacity: '2 Guests',
    pricePerNight: 4150,
    description: 'Elegantly appointed bedroom with plush mattress, custom Kodava timber headboard, high-efficiency AC, and scenic hillside balcony.',
    features: ['Air Conditioning', 'Private Valley Balcony', 'Smart TV with Streaming', '24h Hot Geyser', 'Breakfast in Bed Available'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4oNfFPX8LslVGZ_Ynh9jHd-Heli6N2vQ4xABbMe0-bvveBjIVcmlljoXRXffYKY9a3CC4JoAKJFTKW2Iea_Phs0I5xbfbK2wTXs-CDy93XzrMOZ-1U1EqdZ7_ricaj7uG6vroNzIgIqi2EKcQOy1DITaRY9_TXbnYYKNsj0tRnFSuiCUOW46YPZYUqNGmKh2QzUxYBnHczam9fuU41S4wo3Ef2dP7Ovx7JF99A5ZXPbELP3XuVNq2KI9eC0LguUAJtKM',
    additionalImages: []
  },
  {
    id: 'room-113',
    roomNumber: 13,
    name: 'The Heritage Sanctuary Suite (AC)',
    category: 'ac',
    badge: 'Master Villa Suite',
    view: 'Full Panorama Hillview & Estate',
    bedType: '1 King Bed + Lounge Sitting',
    capacity: '2 - 3 Guests',
    pricePerNight: 4600,
    description: 'Our premier suite commanding the highest vantage point of the resort. Enjoy private terrace seating, luxury ensuite with premium toiletries, and personalized resort service.',
    features: ['Top-Floor Master Balcony', 'High-end Air Conditioning', 'Spacious Lounge Area', 'Welcome Plantation Hamper', '24/7 Dedicated Butler Service'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHLV-IQbxmssRD4RXgLOtqh_jQSGK975sGIvr-Ivj_RvF0ZImhLXIDRFMRZEMYeTiOUJhdcUHG-naGSQg-kksIOocoVjiW-gIunirBNUSZhFC2kEuVYSC4p25bp8rTMUVaPVQEXSWxe7EvKTRV55A5rF7oM-sIyRw6Wg-ln1rZu3ngqZU_gqszjoByIA97Pvueeoi0OyE1p3P_NbX_FTU2pnfzmPUauTvW_OsspEqNXlxObx1Z7sgcWitOu07KQ-nDZ_o',
    additionalImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIeO146k0pOHp1IgGAcFdSeHLfz3MmGFz_ZbzeZUvcc2JvYbsJTiG5A072fU9Yow__gFK3Ntm0z7iwjUfqGypzNoKQ-cXh22buHRHEtNU31OKVvPTLG2xSTcZHEAoSj2V9pkIVrViJo4P6A4yXdVPeru8K42I5lcrVAWZXMIPgNUwJ8qzDr2fA29FGGG_9h1WaG6Fxyks4_p4v54HMwKKRcUVtczuIWwntnbU4aH9Qb0UDRhbAejSkDg'
    ]
  }
];

// Tourist Attractions with Exact Distances (Central Point of Coorg)
export const TOURIST_ATTRACTIONS: TouristAttraction[] = [
  {
    id: 'rajas-seat',
    name: "Raja's Seat",
    distanceKm: 5.0,
    driveTimeMins: 10,
    shortDescription: "Legendary hilltop garden where the historic Kings of Kodagu watched sunsets amidst seasonal blossoms and mist.",
    detailedDescription: "Perched high on a rocky cliff overlooking endless rolling valleys, Raja's Seat (Seat of the Kings) was the favored sunset promenade of the Kodagu royalty. It features terraced flower gardens, musical fountains, and panoramic vistas.",
    highlight: 'Spectacular 5:30 PM Sunset & Valley Mist',
    bestTime: '5:00 PM – 7:00 PM (Sunset)',
    category: 'viewpoint',
    googleMapsQuery: "Raja's Seat Madikeri",
    iconName: 'Sunset'
  },
  {
    id: 'cariappa-museum',
    name: 'Field Marshal Cariappa Museum',
    distanceKm: 5.0,
    driveTimeMins: 10,
    shortDescription: "Sunny Side memorial dedicated to India's first Commander-in-Chief, preserving medals, artifacts, and military heritage.",
    detailedDescription: "Located at 'Sunny Side', the ancestral residence of Field Marshal K.M. Cariappa, this prestigious memorial showcases uniforms, rare medals, vintage weaponry, historical photographs, and wartime artillery.",
    highlight: 'Authentic Kodava Martial Heritage',
    bestTime: '10:00 AM – 4:30 PM',
    category: 'heritage',
    googleMapsQuery: 'Field Marshal Cariappa Memorial Madikeri',
    iconName: 'Shield'
  },
  {
    id: 'omkareshwar-temple',
    name: 'Omkareshwar Temple',
    distanceKm: 5.0,
    driveTimeMins: 11,
    shortDescription: "1820 CE historic Shaivite shrine blending Gothic and Islamic architecture with a tranquil sacred freshwater pond.",
    detailedDescription: "Commissioned by King Lingarajendra II in 1820 CE, Omkareshwara Temple has an extraordinary central dome resembling a dargah flanked by four minarets, built around an expansive water tank filled with friendly fish.",
    highlight: 'Unique Architectural Blend & Water Pool',
    bestTime: '6:30 AM – 11:30 AM & 5:00 PM – 7:30 PM',
    category: 'heritage',
    googleMapsQuery: 'Omkareshwara Temple Madikeri',
    iconName: 'Building2'
  },
  {
    id: 'abbey-falls',
    name: 'Abbey Falls (Abbi Falls)',
    distanceKm: 10.0,
    driveTimeMins: 18,
    shortDescription: "Roaring 70-foot waterfall cascading between lush private coffee plantations and spice vines with a suspension hanging bridge.",
    detailedDescription: "Hidden deep inside aromatic Arabica coffee estates and wild black pepper creepers, the Kaveri river tributary plunges down volcanic boulders into a rocky ravine. An overhanging suspension bridge offers breathtaking photo angles.",
    highlight: 'Thundering 70ft Cascade & Hanging Bridge',
    bestTime: '9:00 AM – 3:00 PM',
    category: 'nature',
    googleMapsQuery: 'Abbey Falls Madikeri',
    iconName: 'Waves'
  },
  {
    id: 'madikeri-fort',
    name: 'Madikeri Fort & Palace',
    distanceKm: 5.5,
    driveTimeMins: 12,
    shortDescription: "17th-century historic stone fort featuring two life-sized mortar elephants, clock tower, and archaeological museum.",
    detailedDescription: "Originally built by Mudduraja and later reconstructed in granite by Tipu Sultan and the British. Offers sweeping rampart views of Madikeri town, the district library, and historic stone prison cells.",
    highlight: 'Life-Sized Stone Elephants & St. Mark’s Church',
    bestTime: '9:30 AM – 5:30 PM',
    category: 'heritage',
    googleMapsQuery: 'Madikeri Fort',
    iconName: 'Castle'
  },
  {
    id: 'mandalpatti',
    name: 'Mandalpatti Peak (Cloud Market)',
    distanceKm: 22.0,
    driveTimeMins: 45,
    shortDescription: "High-altitude cloud peak accessible via thrilling 4x4 Jeep safari through mist-draped shola grasslands.",
    detailedDescription: "Known as 'Mugilu-Pete' (Market of Clouds) at an altitude of 4,050 feet. Our resort desk arranges direct 4x4 off-road safari jeeps right from our gate for an exhilarating ride above the cloud layer.",
    highlight: '4x4 Off-Road Jeep Adventure & Sea of Clouds',
    bestTime: 'Early Morning (6:00 AM) or Sunset',
    category: 'adventure',
    googleMapsQuery: 'Mandalpatti Peak Coorg',
    iconName: 'Compass'
  }
];

// Activities with Hillview, Bonfire, Water Stream highlighted
export const RESORT_ACTIVITIES: ResortActivity[] = [
  {
    id: 'act-hillview',
    title: 'Panoramic Hill View Vistas',
    subtitle: '1,150m Altitude Above The Coffee Valley',
    description: 'Coorg Heritage Hill View Resort is perched on an elevated hillside commanding 180-degree unobstructed panoramas over lush valleys, coffee plantations, and morning mist layers. Witness the clouds rise directly below your vantage deck.',
    schedule: 'Sunrise to Sunset (Optimal: 6:00 AM & 5:30 PM)',
    isMainHighlight: true,
    tag: 'Top Highlight',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWVRhKwTX8UC7ZNjiP_3yjsAJPlSGnE5eqDScUf5VMrUEfwoyrzPTIvxlAGAdtvdtPwP3zJJ65K0c18y4Mjzizr2Ii4Z8PrS-jwkALj2Zwv6hAXE4tiIC8PJkFCbYKCT0B0gwYP6c5JBIqOXop3X03r3RCq8b-BRZ09-Tkl8OgXSg3v61uXn6sdy3NMmav0E4ROtkjXDS_7XO_5JnZ-h-nG8t85kvxcrHdbrRfP2B2LksdzAwVPRRNw',
    iconName: 'Mountain',
    features: ['Panoramic wooden viewing deck', 'Cane armchairs for slow coffee sips', 'Unfiltered valley sunrise watching', 'Clean mountain air at 1,150m']
  },
  {
    id: 'act-bonfire',
    title: 'Evening Fire Camp & Bonfire',
    subtitle: 'Nightly Ritual Under Star-Lit Mountain Skies',
    description: 'As the highland chill settles in over Madikeri, gather around our circular stone campfire arena. Enjoy crackling teakwood logs, acoustic Kodava folk music, warm grilled delicacies, and stargazing in pristine dark skies.',
    schedule: 'Every Evening • 7:30 PM – 10:30 PM',
    isMainHighlight: true,
    tag: 'Nightly Experience',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKs-zOaGphpUEEHos-DpGrllU36emheH_0_J5QjWN7ZmK1-gnjh46vADcGsoAS3702Kbi4cdFr4uWI7WIfQ6X96DB-w_mv2_PhmhyPCFZ5JvZwPr_CyoMXrVywavPjUeQcryYIMBNZozjGFihz5lWMiqrPoU_i5ixl1QHkv1YBuS4cxAqDLm1cXzPcw2lvpGRZz5n0LHFWLVvSFZFl_GFk85xaAwjPR98eK4Fp4W-cA8pT09O5rAqF5Sw-l-WR2jmSnfo',
    iconName: 'Flame',
    features: ['Real wood campfire circle', 'Acoustic background music', 'Steaming hot snacks & barbecue', 'Family & group bonding space']
  },
  {
    id: 'act-waterstream',
    title: 'Natural Mountain Water Stream',
    subtitle: 'Crystal Fresh Highland Spring Running Alongside',
    description: 'Our property is blessed with a perennial natural water stream cascading through emerald fern groves. Wander along shaded nature footpaths, feel the invigorating cool water, and relax to the therapeutic sound of flowing mountain springs.',
    schedule: 'Open All Day for Gentle Walking & Relaxation',
    isMainHighlight: true,
    tag: 'Pure Nature',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyJ_96QuXFzVz_vpT5A2BSTpoh5C83iKgg7thyvrd0SSgeKHTnFyYrYwQ7rGaXXTEru-xBoCJ0QMVTg10aH9gHbidyqP3dD1tWhU-k7jH9QnqdGzwk3y5T5ITixvv_YWslUHmD-1Lv9gDIH27OIpS3Tmjt1wzFT0uuq7uPHbcpCtPiidr5kPtPOk_LaKf65A9qRDk_GPzfaaumA8r7scLLvED510JWb9qVUKpNR_Rr5kSv0FGlFZTgMNHpXkh5xcIbQ2w',
    iconName: 'Droplets',
    features: ['Natural crystal-clear mountain spring', 'Shaded wooden walking paths', 'Medicinal ferns & birdwatching', 'Rhythmic flowing water ambiance']
  },
  {
    id: 'act-raindance',
    title: 'Rain Dance & Music Pavilion',
    subtitle: 'High-Energy Refreshment for Families & Friends',
    description: 'Beat the afternoon warmth with overhead mist jets and pressurized rain sprinklers synchronized with upbeat music in a dedicated stone-paved open pavilion.',
    schedule: 'Daily Sessions (3:30 PM – 5:30 PM)',
    isMainHighlight: false,
    tag: 'Group Excitement',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjyVyXYsc-319Gyg2IHdgPKfljs2wtj7CC5xftpwuPE4uQ_MEg0uKM3XJn_rnJ7Yw9YpqNbICEL_A9-mvfX_cVdUIbdGXEA7kAyFPlF67PmzR8cK4Yx6h6lM18ebX7dF5X_97dEZHtkDNenyRfXGKStMrzs-dknYFbU7e1zzE9bNFXGgHuZAZupcedIxURfoybnjGtga-yTqRJIPZQaNs1M_96wITdQoVEsdWh0y-u-QCFf5vE-oTU-aWzgu1Q5uWSqZg',
    iconName: 'CloudRain',
    features: ['Multi-nozzle rain showers', 'Surround sound audio setup', 'Ambient night LED lighting', 'Changing rooms and fresh towels']
  },
  {
    id: 'act-indoorgames',
    title: 'Indoor Games Arena & Heritage Lounge',
    subtitle: 'All-Weather Family Recreation',
    description: 'Unwind after a day exploring Madikeri’s tourist spots with friendly rounds of carrom, strategic chess matches, cards, and lawn badminton in our heritage pavilion.',
    schedule: '8:00 AM – 10:00 PM',
    isMainHighlight: false,
    tag: 'Leisure & Fun',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLCCqYwXUTp_0GpFDfPAxrxOJBVOob82BFjHYxtakSeXolaPp_pmpYSWqlUQZ0Ntyh-5wWnXwkGVT_mzflsoBQMIxjKvEVfjEEjAA_8vaE6BTq6R757ODWj17dMN9Sf6BPB3c4Y1VNfmlwU9BMGntIvHO0KS7xGP5S-fTpWLIyC-eE9zmaLNf9Lz88NtuUBodf7nAOMzcMLEIK_cm1l2c8I0fMRWiCTcinR800Jc-ve1MAYpflm8rPyg',
    iconName: 'Gamepad2',
    features: ['Tournament-sized carrom boards', 'Handcrafted wooden chess sets', 'Lawn badminton racquets & net', 'Family board games & cards']
  }
];

// Amenities matching user specifications
export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'amenity-ac',
    title: 'AC & Non-AC Room Options',
    description: 'Choose between high-efficiency climate-controlled AC suites or naturally ventilated timber-rafter attic cottages.',
    iconName: 'Wind',
    category: 'core'
  },
  {
    id: 'amenity-restaurant',
    title: 'In-House Kodava & Multi-Cuisine Restaurant',
    description: 'Savor authentic Coorg delicacies like aromatic Pandi Curry, Kadambuttu, Akki Roti, along with fresh North & South Indian comfort food.',
    iconName: 'UtensilsCrossed',
    category: 'core'
  },
  {
    id: 'amenity-roomservice',
    title: 'Prompt In-Room & Balcony Dining Service',
    description: 'Enjoy piping hot coffee, tea, and wholesome freshly cooked meals delivered directly to your room or private hill view balcony.',
    iconName: 'Bell',
    category: 'service'
  },
  {
    id: 'amenity-hotwater',
    title: '24/7 Hot Water Geysers',
    description: 'Continuous instant hot water available in all 13 private bathrooms—essential for crisp Madikeri mornings and cool nights.',
    iconName: 'Flame',
    category: 'comfort'
  },
  {
    id: 'amenity-wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Seamless wireless coverage throughout the property for remote work, streaming, or sharing your scenic holiday moments.',
    iconName: 'Wifi',
    category: 'comfort'
  },
  {
    id: 'amenity-parking',
    title: 'Secure On-Site Free Parking',
    description: 'Ample private parking inside the resort gates with space for SUVs, family cars, and tempo travelers with 24/7 security.',
    iconName: 'Car',
    category: 'service'
  },
  {
    id: 'amenity-power',
    title: '24/7 Generator Power Backup',
    description: 'Uninterrupted power supply with automated generator backup ensuring lighting, hot water, and electronics stay powered.',
    iconName: 'Zap',
    category: 'core'
  },
  {
    id: 'amenity-bonfire-amenity',
    title: 'Evening Bonfire Arena',
    description: 'Dedicated outdoor campfire ring with log benches and starry night sky observation.',
    iconName: 'Sparkles',
    category: 'core'
  }
];

// Gallery Mosaic Items
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Panoramic Misty Hillside Vista',
    category: 'hillview',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy93_FLtW3hjOjNufX5VE7HTZJ5AFj96-wYOKD1FZBfiHr5UkUwEZWifgDizSDuyhM1QTWSw-ixArJfVvO5its6CAypyb0Ik5iBSLQkJuuSKbomSS4kl1_1l-QgTC_9W9tvVlQyYIfKYJKx4Zp5J3xgFqk7oc64OIQe3M63buX1dAUQQqsleZUhobqyJNy_OSOU3cW7KVb-pQlnD5BOrV9rHRFzARliqweWxL4MyFUL7xnM1bMDJjYpVVwFW0CI40_6ds',
    description: 'Sweeping morning outlook over rolling coffee valleys and cloud banks.'
  },
  {
    id: 'gal-2',
    title: 'Crackling Evening Bonfire & Campfire',
    category: 'bonfire',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKs-zOaGphpUEEHos-DpGrllU36emheH_0_J5QjWN7ZmK1-gnjh46vADcGsoAS3702Kbi4cdFr4uWI7WIfQ6X96DB-w_mv2_PhmhyPCFZ5JvZwPr_CyoMXrVywavPjUeQcryYIMBNZozjGFihz5lWMiqrPoU_i5ixl1QHkv1YBuS4cxAqDLm1cXzPcw2lvpGRZz5n0LHFWLVvSFZFl_GFk85xaAwjPR98eK4Fp4W-cA8pT09O5rAqF5Sw-l-WR2jmSnfo',
    description: 'Gathering around the warm fire pit under cool Madikeri night skies.'
  },
  {
    id: 'gal-3',
    title: 'Natural Mountain Water Stream & Balcony',
    category: 'waterstream',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyJ_96QuXFzVz_vpT5A2BSTpoh5C83iKgg7thyvrd0SSgeKHTnFyYrYwQ7rGaXXTEru-xBoCJ0QMVTg10aH9gHbidyqP3dD1tWhU-k7jH9QnqdGzwk3y5T5ITixvv_YWslUHmD-1Lv9gDIH27OIpS3Tmjt1wzFT0uuq7uPHbcpCtPiidr5kPtPOk_LaKf65A9qRDk_GPzfaaumA8r7scLLvED510JWb9qVUKpNR_Rr5kSv0FGlFZTgMNHpXkh5xcIbQ2w',
    description: 'Stream-side balconies immersed in evergreen botanical foliage.'
  },
  {
    id: 'gal-4',
    title: 'Deluxe Glass-Front Hill View Bedroom',
    category: 'rooms',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHLV-IQbxmssRD4RXgLOtqh_jQSGK975sGIvr-Ivj_RvF0ZImhLXIDRFMRZEMYeTiOUJhdcUHG-naGSQg-kksIOocoVjiW-gIunirBNUSZhFC2kEuVYSC4p25bp8rTMUVaPVQEXSWxe7EvKTRV55A5rF7oM-sIyRw6Wg-ln1rZu3ngqZU_gqszjoByIA97Pvueeoi0OyE1p3P_NbX_FTU2pnfzmPUauTvW_OsspEqNXlxObx1Z7sgcWitOu07KQ-nDZ_o',
    description: 'Unobstructed glass fenestration opening directly to the mountain slopes.'
  },
  {
    id: 'gal-5',
    title: 'Heritage Attic Loft Architecture',
    category: 'rooms',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgByIBuJs0kmgtZhC_RZXIVuTARzFKJDtzyN1WaF-aQ6ajzBq0l4wlTZcydbOM3IQlZkZHux2ug40J4gw-qzgR5-NRdHw5bDvgnkCop8cmBGasXjw2RB2lgcsQFN6v5nJ6Snx56ELVlElzqWQ4yWGBdZP9Udz5jgc5w10jJaZOuwzlK1e04HfY7Rpg5HB-30FQ0t8oaAPTD9NfHEbzwMfFzM5744j9Y8Gwhv5YiPbcTQcSPcNeXsEwRJxweSZ8bQKxEIo',
    description: 'Rustic wooden vaulted ceilings with warm family multi-bed layout.'
  },
  {
    id: 'gal-6',
    title: 'Rain Dance Arena with Ambient Evening Glow',
    category: 'waterstream',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjyVyXYsc-319Gyg2IHdgPKfljs2wtj7CC5xftpwuPE4uQ_MEg0uKM3XJn_rnJ7Yw9YpqNbICEL_A9-mvfX_cVdUIbdGXEA7kAyFPlF67PmzR8cK4Yx6h6lM18ebX7dF5X_97dEZHtkDNenyRfXGKStMrzs-dknYFbU7e1zzE9bNFXGgHuZAZupcedIxURfoybnjGtga-yTqRJIPZQaNs1M_96wITdQoVEsdWh0y-u-QCFf5vE-oTU-aWzgu1Q5uWSqZg',
    description: 'Dynamic overhead spray pavilion and illuminated swimming pool steps.'
  },
  {
    id: 'gal-7',
    title: 'Rustic Gazebo & In-House Dining',
    category: 'dining',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7m5BFTF55J0I9tBVtfJMq7rZ1TnCOKQeqe-2mBt3iWzbDK58LsJjqy1SQcWQa3LujvapV8EQ8rgVoanGxd-UVIcBqf_HPWFVwoXBqSHnqpzeeraBI2BOJW6jNz4dk6hK0IcKEolNSF1PfC-tPzza9ngu3mkwSwBy8Wyxa35QHZ0EqYZzguCzfUHkf7Zr1b_GQptYUloqAzoyegi3Our3eGe8mAUxgUAS39FRvaa5GGc_wLb0duDwOAiBDCHgkR70OcY',
    description: 'Stone courtyard restaurant serving authentic traditional Kodava delicacies.'
  },
  {
    id: 'gal-8',
    title: 'Sunset View from Private Verandah',
    category: 'hillview',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIeO146k0pOHp1IgGAcFdSeHLfz3MmGFz_ZbzeZUvcc2JvYbsJTiG5A072fU9Yow__gFK3Ntm0z7iwjUfqGypzNoKQ-cXh22buHRHEtNU31OKVvPTLG2xSTcZHEAoSj2V9pkIVrViJo4P6A4yXdVPeru8K42I5lcrVAWZXMIPgNUwJ8qzDr2fA29FGGG_9h1WaG6Fxyks4_p4v54HMwKKRcUVtczuIWwntnbU4aH9Qb0UDRhbAejSkDg',
    description: 'Sip fresh estate filter coffee from cane armchairs overlooking mountain fog.'
  }
];

// Frequently Asked Questions
export const FAQ_ITEMS = [
  {
    question: "Why is the resort known as the 'Centre Point of All Tourist Places'?",
    answer: "Our resort is situated right in the central geographic corridor of Madikeri. You are just 5.0 km (10 mins) from Raja's Seat, 5.0 km from the Field Marshal Cariappa Museum, 5.0 km from Omkareshwara Temple, and 10.0 km from Abbey Falls. Unlike remote resorts that require 1 to 2 hours of winding uphill driving every day, staying here saves you hours of travel time so you spend more time relaxing."
  },
  {
    question: "How many rooms does Coorg Heritage Hill View Resort have?",
    answer: "We have exactly 13 boutique rooms. This intentional low-density setup guarantees peaceful seclusion, uncrowded bonfires, personalized service, and zero noise from oversized tour buses. We also offer full-property 13-room buyouts for extended family reunions and corporate retreats."
  },
  {
    question: "Are AC and Non-AC room options available?",
    answer: "Yes! We offer both options. Our Superior Hill View Suites and Executive Valley Rooms feature powerful climate control AC. We also have Heritage Attic Cottages that are naturally cooled by fresh 1,150m mountain breezes with charming wooden architecture."
  },
  {
    question: "Are the evening Bonfire and Rain Dance included?",
    answer: "Yes! Every evening starting at 7:30 PM (weather permitting), we light the fire camp with crackling teakwood and soft music. The rain dance arena is also operational daily for families and groups looking for lively daytime fun."
  },
  {
    question: "What food and dining options are available?",
    answer: "We have an in-house restaurant serving authentic Kodava specialties (such as authentic Pandi Curry, Kadambuttu steamed rice cakes, and Akki Roti) along with North Indian, South Indian, and tandoor dishes. Room service is available for in-room or private balcony dining."
  },
  {
    question: "How can I book or check live availability?",
    answer: "You can call our direct desk at +91 9019563004, message us directly on WhatsApp (9019563004), or email coorgheritagehillviewresort@gmail.com. We offer instant booking confirmation and best direct tariff guarantee."
  }
];
