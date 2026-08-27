export type CollectionMethod =
  'ON_PREMISES' |
  'HOME_DELIVERY';


export type BookingStatus =
  'PENDING' |
  'CONFIRMED' |
  'PREPARING' |
  'OUT_FOR_DELIVERY' |
  'DELIVERED' |
  'CANCELLED';


/* =====================================================
   PUJA
===================================================== */

export interface PujaEvent {
  id: number;

  date: string;

  dayName: string;

  eventName: string;

  startTime: string;

  endTime?: string;

  description?: string;

  venue: string;

  isActive: boolean;
}


/* =====================================================
   PRASAD
===================================================== */

export interface PrasadProduct {
  id: number;

  name: string;

  description: string;

  price: number;

  imageUrl: string;

  availableDate: string;

  availability: number;

  capacity: number;

  collectionMethods: CollectionMethod[];

  isActive: boolean;
}


/* =====================================================
   DELIVERY
===================================================== */

export interface DeliveryZone {
  id: number;

  ward: string;

  charge: number;

  isSupported: boolean;
}


/* =====================================================
   GALLERY
===================================================== */

export interface GalleryItem {
  id: number;

  title: string;

  category: string;

  year: number;

  imageUrl: string;
}


/* =====================================================
   VIDEOS
===================================================== */

export interface VideoItem {
  id: number;

  title: string;

  description: string;

  year: number;

  thumbnailUrl: string;

  videoId: string;
}


/* =====================================================
   LIVE DARSHAN
===================================================== */

export type LiveStreamStatus =
  'UPCOMING' |
  'LIVE' |
  'ENDED';


export interface LiveStream {

  id: number;

  title: string;

  description?: string;

  youtubeVideoId?: string;

  thumbnailUrl?: string;

  eventDate: string;

  startTime: string;

  endTime?: string;

  dayName?: string;

  venue: string;

  status: LiveStreamStatus;

  isActive: boolean;

}


/* =====================================================
   LIVE DARSHAN HISTORY / ARCHIVE
===================================================== */

export interface LiveDarshanHistory {

  id: number;

  title: string;

  description?: string;

  eventDate: string;

  startTime?: string;

  year: number;

  dayName?: string;

  thumbnailUrl?: string;

  youtubeVideoId: string;

  venue: string;

  isActive: boolean;

}


/* =====================================================
   BOOKING
===================================================== */

export interface BookingItem {

  productId: number;

  productName: string;

  quantity: number;

  unitPrice: number;

}


export interface DeliveryAddress {

  address: string;

  city: string;

  ward: string;

  pinCode: string;

}


export interface Booking {

  id: string;

  customerName: string;

  mobile: string;

  email: string;

  eventDate: string;

  item: BookingItem;

  collectionMethod: CollectionMethod;

  deliveryAddress?: DeliveryAddress;

  prasadAmount: number;

  deliveryCharge: number;

  totalAmount: number;

  status: BookingStatus;

  createdAt: string;

}


/* =====================================================
   PAYMENT
===================================================== */

export interface Payment {

  bookingId: string;

  amount: number;

  status:
    'SUCCESS' |
    'PENDING' |
    'FAILED';

  transactionId: string;

}


/* =====================================================
   ADMIN DASHBOARD
===================================================== */

export interface DashboardSummary {

  todayBookings: number;

  totalBookings: number;

  revenue: number;

  pendingOrders: number;

  availableBhog: number;

  homeDeliveries: number;

}


/* =====================================================
   SITE CONTENT
===================================================== */

export interface SiteContent {

  heroTitle: string;

  heroText: string;

  committeeMessage: string;

  contactPhone: string;

  contactEmail: string;

  location: string;

}