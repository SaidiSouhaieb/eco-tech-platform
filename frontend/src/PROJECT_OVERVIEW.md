# EcoTech Platform - Complete UX/UI System

A comprehensive dual-sided eco-tech startup platform with clickable prototypes for Founders and Clients.

## 🎯 Overview

This is a fully functional, responsive web application built with React, TypeScript, and Tailwind CSS that supports:
- **Two user roles**: Founder (creates eco products using AI) and Client (scans products for eco-friendliness)
- **Responsive layouts**: Desktop (1440px), Tablet (1024px), Mobile (390px)
- **Theme support**: Light and Dark modes
- **RTL support**: Full Arabic language support
- **Accessibility**: WCAG 2.1 AA compliant

## 🎨 Design System

### Colors
- **Primary (Eco Green)**: #2B7A0B, Dark: #102A12, Light: #E9F6EA
- **Secondary (Tech Blue)**: #2F80ED
- **Eco Score Colors**: A (Green), B (Blue), C (Yellow), D (Orange), E (Red)
- **Neutrals**: Full grayscale from #FFFFFF to #0B0B0C

### Typography
- Font family: System default (Inter, SF Pro)
- Headings: H1-H6 with medium weight (500)
- Body text: Regular weight (400)
- Full RTL support for Arabic text

### Spacing
- 4px base grid system
- Tokens: --space-1 through --space-24
- Responsive grid: 12 columns (desktop), 8 (tablet), 4 (mobile)

### Icons
- Library: Lucide React
- Consistent 24px size, 1.5px stroke

## 📄 Pages & Features

### Public Pages
1. **Landing Page** (`/`)
   - Hero section with dual CTAs
   - How it works (Founder & Client flows)
   - Success metrics showcase
   - Featured products carousel
   - Platform features grid
   - Footer with multilingual switch

2. **Pricing Page**
   - Three subscription tiers (Free, Pro, Enterprise)
   - Feature comparison table
   - FAQ section

3. **Auth Pages**
   - Login page with social login
   - Signup page with role selection (Founder/Client)
   - Onboarding flow

4. **Design System Page** (`🧩 Design System`)
   - Complete color palette documentation
   - Typography scale with RTL examples
   - Spacing and grid system
   - Icon library showcase
   - Component examples with all states
   - Accessibility guidelines

### Founder Area (After Login)

5. **Founder Dashboard**
   - Product statistics (created, published, pending)
   - Eco-score distribution chart
   - Quick actions panel
   - Recent AI conversations widget

6. **AI Product Creator** (Step-by-Step Wizard)
   - Multi-step form: Idea → Dimensions → Materials → Manufacturing → Gallery → Publish
   - **Right-side AI Assistant**:
     - Chat UI with prompts and responses
     - AI suggestions for capacity, dimensions, materials
     - Sustainability benefits analysis
     - "Apply suggestions" and "Regenerate" actions
   - Technical form fields synced with AI
   - Image generation section with 3D views
   - Material recommendations (PET/rPET, Tritan, Aluminum)

7. **Product Detail Page** (Founder View)
   - Tabs: Overview / Specs / Materials / Manufacturing / Sustainability / AI History / Images
   - Export spec as PDF
   - Publish/Unpublish toggle
   - View counts and scan statistics
   - Revision timeline

8. **Store Management**
   - Product listing table with drafts and published items
   - Branding customization
   - Quick filters and search

9. **Analytics Dashboard**
   - Views and scans graphs
   - Product performance charts
   - Geographic heat map
   - Conversion tracking

### Client Area

10. **Scanner / Eco-Check**
    - Desktop: barcode/QR input field
    - Mobile: camera frame mockup
    - **Product result page**:
      - Eco-Score (A-E) with color coding
      - Materials breakdown and recyclability %
      - Nearby recycling/buyback locations button
      - Similar products recommendations

11. **Find Similar Products**
    - Grid of eco-friendly alternatives
    - Advanced filters: price, material, eco-score, availability
    - Filter chips with easy removal
    - Responsive product cards

12. **Recycling / Buyback Map**
    - Interactive map with location markers
    - Clustering for multiple points
    - Category filters (recycling vs buyback)
    - Drawer with detailed point info:
      - Operating hours
      - Accepted materials
      - Incentives and rewards

13. **Client Product Catalog**
    - Search bar with filters
    - Product categories
    - Cards with ratings and eco-scores
    - Save functionality

14. **Client Profile**
    - Scan history with timestamps and locations
    - Saved products collection
    - **Eco-impact stats**:
      - Total scans
      - CO₂ saved (kg)
      - Items recycled
      - Eco points earned
    - Achievements system

## 🔧 Components

### Core Components
- **Navigation**: Responsive sidebar for authenticated users, top nav for public
- **AI Chatbot**: Floating button that expands to drawer (Founder only)
- **Product Card**: Reusable card with eco-score badge
- **Eco Score Badge**: Color-coded A-E rating system
- **Theme Toggle**: Light/dark mode switch
- **Language Selector**: EN/FR/AR with RTL support

### UI Components (Shadcn)
All standard components included: Button, Input, Card, Dialog, Dropdown, Sheet, Tabs, Table, Badge, Progress, Slider, Switch, Tooltip, etc.

## 🎭 Prototype & Interactions

### Navigation Flows
- Landing → Auth → Role Selection → Dashboard → Main Flows
- Seamless navigation between all pages
- Role-based routing (Founder vs Client paths)

### Micro-interactions
- Floating AI chatbot expands to right drawer
- Chat responses inject content into forms
- Success actions show animated toast messages
- Map toggle between list and map view
- Dark mode toggles globally
- Smooth page transitions
- Hover states on all interactive elements
- Loading skeletons for async content

### Responsive Behavior
- Mobile: Bottom navigation, hamburger menu
- Tablet: Adapted grid layouts, touch-optimized
- Desktop: Full sidebar, multi-column layouts
- All forms are mobile-friendly with large touch targets

## 🌍 Internationalization

### Supported Languages
- **English (EN)**: Default
- **French (FR)**: Full support
- **Arabic (AR)**: Full RTL layout support

### RTL Implementation
- Automatic direction switching
- Mirrored layouts for Arabic
- RTL-aware components
- Typography optimized for Arabic text

## ♿ Accessibility (WCAG 2.1 AA)

- **Color Contrast**: All text meets 4.5:1 minimum ratio
- **Focus States**: Visible keyboard navigation indicators
- **Touch Targets**: Minimum 44x44px for mobile
- **Scalable Typography**: Supports browser zoom up to 200%
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility

## 📱 Responsive Design

### Breakpoints
- Mobile: 390px (4-column grid)
- Tablet: 1024px (8-column grid)
- Desktop: 1440px (12-column grid)

### Features
- Fluid typography and spacing
- Flexible images and media
- Mobile-first approach
- Touch-optimized interactions
- Responsive navigation patterns

## 🎨 Brand Tone

**Clean Sustainability Tech**
- Professional yet friendly
- Modern and approachable
- Trust and transparency
- Eco-conscious messaging
- Data-driven insights

## 📦 Product Field Examples

- Reusable bottles (water, sports, insulated)
- Cups and mugs (coffee, travel, thermal)
- Food containers (lunch boxes, storage)
- Plastic packaging alternatives
- Glass and bamboo products
- Sustainable materials focus

## 🚀 Key Features

### Founder Features
- AI-powered product design wizard
- Material sustainability recommendations
- 3D visualization and technical specs
- Product catalog management
- Analytics and insights dashboard
- Export specifications as PDF
- Publish/unpublish controls
- AI conversation history

### Client Features
- Barcode/QR scanning
- Eco-score checking (A-E rating)
- Materials analysis
- Recyclability percentage
- Similar product recommendations
- Recycling location finder
- Buyback point locator
- Personal impact tracking
- Scan history
- Product bookmarking

## 🎯 User Experience Highlights

1. **Seamless Onboarding**: Clear role selection with feature previews
2. **AI Assistance**: Contextual help throughout product creation
3. **Visual Feedback**: Loading states, success messages, error handling
4. **Progressive Disclosure**: Complex features revealed as needed
5. **Mobile Optimization**: Full feature parity across devices
6. **Performance**: Fast page loads, optimized images
7. **Accessibility**: Inclusive design for all users

## 📊 Data & State Management

- **Context API**: Theme, locale, user role, authentication
- **Mock Data**: Realistic product, recycling point, and stats data
- **Local State**: Component-specific state management
- **Type Safety**: Full TypeScript implementation

## 🔐 Authentication Flow

1. Landing page CTA
2. Role selection (Founder/Client)
3. Sign up / Log in
4. Social auth placeholders (Google, GitHub)
5. Role-specific dashboard redirect
6. Persistent authentication state

## 📈 Success Metrics Displayed

- 10K+ Tons Recycled
- 50K+ CO₂ Saved (kg)
- 200+ Partners
- Product views and scans
- User engagement analytics
- Geographic distribution

---

## 🏗️ Technical Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Theming**: CSS Custom Properties
- **Routing**: Client-side navigation

## 📁 Project Structure

```
/
├── App.tsx                     # Main app with routing
├── components/
│   ├── AIChatbot.tsx          # AI assistant component
│   ├── EcoScoreBadge.tsx      # Score indicator
│   ├── Navigation.tsx          # Sidebar/header navigation
│   ├── ProductCard.tsx         # Reusable product card
│   └── ui/                     # Shadcn components
├── pages/
│   ├── DesignSystem.tsx        # Design system docs
│   ├── LandingPage.tsx         # Public homepage
│   ├── LoginPage.tsx           # Authentication
│   ├── SignupPage.tsx          # Registration
│   ├── PricingPage.tsx         # Subscription plans
│   ├── FounderDashboard.tsx    # Founder home
│   ├── AICreatorPage.tsx       # Product wizard
│   ├── ProductDetailPage.tsx   # Product view/edit
│   ├── StoreManagement.tsx     # Product listing
│   ├── AnalyticsPage.tsx       # Metrics dashboard
│   ├── ScannerPage.tsx         # Client scanner
│   ├── ClientCatalog.tsx       # Product browser
│   ├── SimilarProductsPage.tsx # Alternatives
│   ├── RecyclingMap.tsx        # Location finder
│   └── ClientProfile.tsx       # User profile
├── lib/
│   ├── context.tsx             # App context provider
│   ├── types.ts                # TypeScript types
│   └── mock-data.ts            # Sample data
└── styles/
    └── globals.css             # Design tokens
```

---

**Built with sustainability in mind. Every interaction, every pixel, every line of code contributes to a greener future.** 🌱
