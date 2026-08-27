import { Booking, DashboardSummary, DeliveryZone, GalleryItem, LiveStream, PrasadProduct, PujaEvent, SiteContent, VideoItem } from '../core/models/models';

export const SITE_CONTENT: SiteContent = { heroTitle: 'इस दुर्गा पूजा माँ दुर्गा के साथ जुड़िए', heroText: 'राँची रेलवे स्टेशन दुर्गा पूजा समिति के पावन उत्सव से जुड़िए। पूजा, आरती, दर्शन और माँ का प्रसाद अपने परिवार के साथ प्राप्त करें।', committeeMessage: 'श्रद्धा, सेवा और एकता के साथ हम सभी भक्तों का स्वागत करते हैं।', contactPhone: '+91 00000 00000', contactEmail: 'contact@ranchirailwaydurgapuja.org', location: 'Ranchi Railway परिसर, Ranchi, Jharkhand' };
export const PUJA_EVENTS: PujaEvent[] = [
  { id: 1, date: '2026-10-17', dayName: 'षष्ठी', eventName: 'बेल वरण', startTime: '06:00 PM', venue: 'मुख्य पंडाल', isActive: true },
  { id: 2, date: '2026-10-17', dayName: 'षष्ठी', eventName: 'संध्या आरती', startTime: '07:00 PM', venue: 'मुख्य पंडाल', isActive: true },
  { id: 3, date: '2026-10-18', dayName: 'सप्तमी', eventName: 'नवपत्रिका प्रवेश', startTime: '08:00 AM', venue: 'मुख्य पंडाल', isActive: true },
  { id: 4, date: '2026-10-18', dayName: 'सप्तमी', eventName: 'संध्या आरती', startTime: '07:00 PM', venue: 'मुख्य पंडाल', isActive: true },
  { id: 5, date: '2026-10-19', dayName: 'अष्टमी', eventName: 'संधि पूजा', startTime: '11:45 PM', venue: 'मुख्य पंडाल', isActive: true },
  { id: 6, date: '2026-10-19', dayName: 'अष्टमी', eventName: 'महाभोग', startTime: '01:00 PM', venue: 'भोग मंडप', isActive: true },
  { id: 7, date: '2026-10-20', dayName: 'नवमी', eventName: 'महाआरती', startTime: '07:30 PM', venue: 'मुख्य पंडाल', isActive: true },
  { id: 8, date: '2026-10-21', dayName: 'दशमी', eventName: 'सिंदूर खेला व विसर्जन यात्रा', startTime: '03:00 PM', venue: 'रेलवे परिसर', isActive: true }
];
export const PRASAD_PRODUCTS: PrasadProduct[] = [
  {
    id: 1,
    name: 'महाभोग',
    description: 'सप्तमी विशेष सात्विक महाभोग, श्रद्धापूर्वक तैयार।',
    price: 100,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Prosad_thali.jpg',
    availableDate: '2026-10-20',
    availability: 63,
    capacity: 500,
    collectionMethods: ['ON_PREMISES', 'HOME_DELIVERY'],
    isActive: true
  },

  {
    id: 2,
    name: 'माँ दुर्गा का प्रसाद थाल',
    description: 'माँ दुर्गा को अर्पित सात्विक भोजन से तैयार विशेष प्रसाद थाल।',
    price: 100,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/INDIAN_thali.jpg',
    availableDate: '2026-10-19',
    availability: 120,
    capacity: 300,
    collectionMethods: ['ON_PREMISES'],
    isActive: true
  },

  {
    id: 3,
    name: 'अष्टमी भोग',
    description: 'अष्टमी के पावन अवसर पर विशेष सात्विक भोग।',
    price: 100,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Indian_food_thali.jpg',
    availableDate: '2026-10-21',
    availability: 85,
    capacity: 500,
    collectionMethods: ['ON_PREMISES', 'HOME_DELIVERY'],
    isActive: true
  },

  {
    id: 4,
    name: 'खिचड़ी महाभोग',
    description: 'सप्तमी एवं अष्टमी के अवसर पर पारंपरिक सात्विक खिचड़ी एवं भोग।',
    price: 120,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Khichdi.jpg',
    availableDate: '2026-10-21',
    availability: 145,
    capacity: 600,
    collectionMethods: ['ON_PREMISES', 'HOME_DELIVERY'],
    isActive: true
  },

  {
    id: 5,
    name: 'नवमी विशेष भोग',
    description: 'नवमी के पावन दिन माँ दुर्गा को अर्पित विशेष सात्विक भोग एवं प्रसाद।',
    price: 150,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/A_complete_meal.jpg',
    availableDate: '2026-10-22',
    availability: 72,
    capacity: 400,
    collectionMethods: ['ON_PREMISES', 'HOME_DELIVERY'],
    isActive: true
  },

  {
    id: 6,
    name: 'विशेष प्रसाद पैकेट',
    description: 'माँ दुर्गा का आशीर्वाद एवं पारंपरिक भारतीय मिठाई से तैयार विशेष प्रसाद पैकेट।',
    price: 50,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Desi_besan_ke_ladoo.jpg',
    availableDate: '2026-10-19',
    availability: 180,
    capacity: 500,
    collectionMethods: ['ON_PREMISES'],
    isActive: true
  },

  {
    id: 7,
    name: 'परिवार प्रसाद पैक',
    description: 'परिवार के लिए विशेष प्रसाद पैक, पूजा परिसर से प्राप्त करने हेतु।',
    price: 250,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Indian_Traditional_Thali.JPG',
    availableDate: '2026-10-22',
    availability: 45,
    capacity: 200,
    collectionMethods: ['ON_PREMISES', 'HOME_DELIVERY'],
    isActive: true
  },

  {
    id: 8,
    name: 'पूरी-हलवा प्रसाद',
    description: 'पारंपरिक पूरी एवं हलवा से तैयार विशेष सात्विक प्रसाद।',
    price: 80,
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Poori_halwa.jpg',
    availableDate: '2026-10-20',
    availability: 95,
    capacity: 300,
    collectionMethods: ['ON_PREMISES', 'HOME_DELIVERY'],
    isActive: true
  }
];
export const DELIVERY_ZONES: DeliveryZone[] = Array.from({ length: 55 }, (_, i) => ({ id: i + 1, ward: `Ward ${i + 1}`, charge: i < 25 ? 40 : 60, isSupported: i < 35 }));
export const LIVE_STREAM: LiveStream = { title: 'राँची रेलवे स्टेशन दुर्गा पूजा — लाइव दर्शन', youtubeVideoId: 'dQw4w9WgXcQ', isActive: true, startDate: '2026-10-17', endDate: '2026-10-21' };
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: 'अलौकिक पंडाल', category: 'Pandal', year: 2025, imageUrl: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85' },
  { id: 2, title: 'संध्या आरती', category: 'Aarti', year: 2025, imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=900&q=85' },
  { id: 3, title: 'भोग सेवा', category: 'Bhog', year: 2025, imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85' },
  { id: 4, title: 'समिति उत्सव', category: 'Events', year: 2024, imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85' },
  { id: 5, title: 'पूजा आराधना', category: 'Puja', year: 2024, imageUrl: 'https://images.unsplash.com/photo-1567591414240-e1f7c1b43d9a?auto=format&fit=crop&w=900&q=85' },
  { id: 6, title: 'रंग और रोशनी', category: 'Pandal', year: 2025, imageUrl: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85' }
];
export const VIDEO_ITEMS: VideoItem[] = [
  { id: 1, title: 'महाआरती 2025', description: 'भक्ति और प्रकाश से भरी संध्या आरती।', year: 2025, thumbnailUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=85', videoId: 'dQw4w9WgXcQ' },
  { id: 2, title: 'पंडाल की झलक', description: 'राँची रेलवे परिसर की उत्सवमयी तैयारी।', year: 2025, thumbnailUrl: 'https://images.unsplash.com/photo-1533157073503-d5edafdc1f1f?auto=format&fit=crop&w=900&q=85', videoId: 'dQw4w9WgXcQ' },
  { id: 3, title: 'सेवा का संकल्प', description: 'स्वयंसेवकों और समिति की यात्रा।', year: 2024, thumbnailUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=85', videoId: 'dQw4w9WgXcQ' }
];
export const DASHBOARD: DashboardSummary = { todayBookings: 86, totalBookings: 1248, revenue: 124800, pendingOrders: 31, availableBhog: 183, homeDeliveries: 68 };
export const DEMO_BOOKINGS: Booking[] = [
  { id: 'RRP-2026-000123', customerName: 'Amit Kumar', mobile: '9876543210', email: 'amit@example.com', eventDate: '2026-10-20', item: { productId: 1, productName: 'महाभोग', quantity: 2, unitPrice: 100 }, collectionMethod: 'HOME_DELIVERY', prasadAmount: 200, deliveryCharge: 40, totalAmount: 240, status: 'CONFIRMED', createdAt: '2026-08-27' },
  { id: 'RRP-2026-000124', customerName: 'Suman Devi', mobile: '9876543211', email: 'suman@example.com', eventDate: '2026-10-19', item: { productId: 2, productName: 'माँ दुर्गा का प्रसाद थाल', quantity: 1, unitPrice: 100 }, collectionMethod: 'ON_PREMISES', prasadAmount: 100, deliveryCharge: 0, totalAmount: 100, status: 'PENDING', createdAt: '2026-08-27' }
];
