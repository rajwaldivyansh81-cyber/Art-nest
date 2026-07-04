// API Base URL
export const API_BASE_URL = 'https://api.artnest.local';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  auth: {
    signUp: '/auth/signup',
    login: '/auth/login',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    refreshToken: '/auth/refresh',
  },

  // Users
  users: {
    profile: '/users/profile',
    updateProfile: '/users/profile',
    addresses: '/users/addresses',
    addAddress: '/users/addresses',
    updateAddress: '/users/addresses/:id',
    deleteAddress: '/users/addresses/:id',
    paymentMethods: '/users/payment-methods',
    addPaymentMethod: '/users/payment-methods',
    deletePaymentMethod: '/users/payment-methods/:id',
  },

  // Artwork
  artwork: {
    list: '/artwork',
    details: '/artwork/:id',
    byCategory: '/artwork/category/:category',
    trending: '/artwork/trending',
    recommended: '/artwork/recommended',
    reviews: '/artwork/:id/reviews',
    addReview: '/artwork/:id/reviews',
  },

  // Artists
  artists: {
    list: '/artists',
    details: '/artists/:id',
    nearby: '/artists/nearby',
    search: '/artists/search',
    reviews: '/artists/:id/reviews',
  },

  // Cart
  cart: {
    get: '/cart',
    add: '/cart/items',
    update: '/cart/items/:id',
    remove: '/cart/items/:id',
    applyCoupon: '/cart/coupon',
    removeCoupon: '/cart/coupon',
    checkout: '/cart/checkout',
  },

  // Orders
  orders: {
    list: '/orders',
    details: '/orders/:id',
    create: '/orders',
    cancel: '/orders/:id/cancel',
    track: '/orders/:id/tracking',
  },

  // Custom Orders
  customOrders: {
    create: '/custom-orders',
    list: '/custom-orders',
    details: '/custom-orders/:id',
  },

  // Live Sketch Booking
  liveSketch: {
    book: '/live-sketch/book',
    list: '/live-sketch/bookings',
    details: '/live-sketch/bookings/:id',
    cancel: '/live-sketch/bookings/:id/cancel',
  },

  // Chat
  chat: {
    rooms: '/chat/rooms',
    messages: '/chat/rooms/:id/messages',
    send: '/chat/rooms/:id/messages',
    markAsRead: '/chat/rooms/:id/read',
  },

  // Notifications
  notifications: {
    list: '/notifications',
    markAsRead: '/notifications/:id/read',
    markAllAsRead: '/notifications/read-all',
    delete: '/notifications/:id',
  },

  // Wishlist
  wishlist: {
    list: '/wishlist',
    add: '/wishlist',
    remove: '/wishlist/:id',
  },
};
