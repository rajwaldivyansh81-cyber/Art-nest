# ArtNest - Premium Art Marketplace Mobile App

A modern, luxury mobile application for discovering and ordering handmade artwork from nearby artists.

## 🎨 Features

### Core Features
- **Authentication**: Phone, email, and Google sign-up
- **Home Screen**: Personalized discovery with categories and trending artwork
- **Artwork Details**: Comprehensive product information with ratings and reviews
- **Custom Orders**: Create personalized artwork requests
- **Live Sketch Booking**: Reserve artists for events
- **Shopping**: Cart management with coupon support
- **Checkout**: Multiple payment methods (UPI, Card, Net Banking, CoD)
- **Order Tracking**: Real-time status updates with progress visualization
- **Chat**: Direct communication with assigned artists
- **Notifications**: Real-time updates and offers
- **Wishlist**: Save favorite artworks and artists
- **Reviews**: Rate and review completed orders

### Design
- Premium, luxury aesthetic
- White background with black, gold, and beige accents
- Smooth animations and transitions
- Mobile-first responsive design
- Clean, professional UI

## 📁 Project Structure

```
art-nest/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/             # Screen components
│   ├── navigation/          # Navigation configuration
│   ├── redux/               # State management
│   ├── services/            # API and external services
│   ├── utils/               # Utility functions
│   ├── constants/           # Constants and configurations
│   ├── types/               # TypeScript type definitions
│   └── App.tsx              # Root component
├── assets/                  # Images, icons, animations
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Installation

```bash
cd art-nest
npm install
```

### Development

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Type Checking

```bash
npm run type-check
```

## 🏗️ Architecture

The app follows a modular architecture:

- **Redux** for state management
- **React Navigation** for app navigation
- **TypeScript** for type safety
- **Axios** for API communication
- **Formik & Yup** for form validation
- **React Native Reanimated** for smooth animations

## 📱 Screens

- Authentication (Sign Up, Log In, Forgot Password)
- Home with discover and categories
- Artwork Details
- Custom Order Creation
- Live Sketch Booking
- Shopping Cart
- Checkout
- Order Tracking
- Artist Chat
- Wishlist
- Profile
- Settings
- Help Center

## 🔐 Security Features

- Secure authentication
- Token-based API requests
- Local data encryption
- Input validation
- XSS protection

## 📦 Future Expansion

The architecture is designed to accommodate:
- Artist panel
- Admin dashboard
- Advanced analytics
- Payment gateway integration
- Real-time features

## 📝 License

MIT License - See LICENSE file for details

## 👥 Contributors

Project by Rajwaldivyansh81-cyber

---

**Note**: This is a customer-facing application. Artist and admin panels can be added as separate applications with shared backend services.
