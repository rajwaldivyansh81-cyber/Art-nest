// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePicture?: string;
  address?: Address;
  savedPaymentMethods: PaymentMethod[];
  createdAt: Date;
  gender?: 'male' | 'female' | 'other';
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'upi' | 'card' | 'netbanking' | 'cod';
  details: {
    upiId?: string;
    cardLast4?: string;
    bankName?: string;
  };
  isDefault: boolean;
}

// Artist Types
export interface Artist {
  id: string;
  name: string;
  profilePicture: string;
  rating: number;
  reviewCount: number;
  bio: string;
  specialties: ArtworkCategory[];
  location: {
    lat: number;
    lng: number;
    city: string;
  };
  distance?: number;
  responseTime: string;
  isVerified: boolean;
}

// Artwork Types
export type ArtworkCategory =
  | 'pencil-sketch'
  | 'color-portrait'
  | 'canvas-painting'
  | 'couple-portrait'
  | 'family-portrait'
  | 'pet-portrait'
  | 'digital-art'
  | 'calligraphy'
  | 'resin-art'
  | 'wall-art'
  | 'customized-gifts';

export interface Artwork {
  id: string;
  title: string;
  category: ArtworkCategory;
  artist: Artist;
  images: string[];
  description: string;
  sizes: ArtworkSize[];
  basePrice: number;
  rating: number;
  reviewCount: number;
  estimatedDelivery: number; // days
  isCustomizable: boolean;
  isTrending: boolean;
  createdAt: Date;
}

export interface ArtworkSize {
  id: string;
  name: string;
  dimensions: string;
  priceModifier: number;
}

export interface ArtworkReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: Date;
}

// Cart Types
export interface CartItem {
  id: string;
  artwork: Artwork;
  quantity: number;
  selectedSize?: ArtworkSize;
  customOptions?: CustomOptions;
  price: number;
}

export interface CustomOptions {
  referenceImages: string[];
  instructions: string;
  artworkType: ArtworkCategory;
  size: ArtworkSize;
  frameOption: 'with-frame' | 'without-frame';
  delivery: 'normal' | 'express';
  estimatedPrice: number;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  couponCode?: string;
  couponDiscount: number;
}

// Order Types
export type OrderStatus =
  | 'placed'
  | 'artist-assigned'
  | 'artwork-started'
  | 'in-progress'
  | 'quality-check'
  | 'packed'
  | 'out-for-delivery'
  | 'delivered';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: OrderStatus;
  artist?: Artist;
  deliveryAddress: Address;
  paymentMethod: PaymentMethod;
  subtotal: number;
  deliveryCharges: number;
  tax: number;
  total: number;
  couponDiscount: number;
  estimatedDelivery: Date;
  actualDelivery?: Date;
  createdAt: Date;
  updatedAt: Date;
  trackingUpdates: TrackingUpdate[];
}

export interface TrackingUpdate {
  status: OrderStatus;
  timestamp: Date;
  message: string;
}

// Live Sketch Booking Types
export type LiveSketchEventType = 'home' | 'birthday' | 'wedding' | 'corporate' | 'cafe';

export interface LiveSketchBooking {
  id: string;
  userId: string;
  artist: Artist;
  eventType: LiveSketchEventType;
  date: Date;
  time: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  numberOfPeople: number;
  sketchStyle: string;
  estimatedCost: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
}

// Chat Types
export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  recipientId: string;
  content: string;
  images?: string[];
  timestamp: Date;
  isRead: boolean;
}

export interface ChatRoom {
  id: string;
  userId: string;
  artistId: string;
  orderId?: string;
  lastMessage?: ChatMessage;
  unreadCount: number;
  createdAt: Date;
}

// Wishlist Types
export interface WishlistItem {
  id: string;
  userId: string;
  type: 'artwork' | 'artist';
  artworkId?: string;
  artistId?: string;
  artwork?: Artwork;
  artist?: Artist;
  addedAt: Date;
}

// Notification Types
export type NotificationType = 'order' | 'offer' | 'discount' | 'reminder' | 'message';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  image?: string;
  actionUrl?: string;
  isRead: boolean;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
