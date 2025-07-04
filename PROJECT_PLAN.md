# V DUMTSI Landing Page - Project Plan

## 🎯 Project Overview
Modern, stylish Next.js landing page for V DUMTSI floristry studio in Lviv, Ukraine.

### Key Features:
- SEO-optimized for Ukrainian market
- Modern, minimalist design with nature-inspired aesthetics
- Fully responsive
- Performance-optimized
- Smooth animations and interactions

## 🎨 Design System

### Color Palette:
```css
/* Primary Colors */
--color-primary: #d6d2c4;      /* Warm beige - Main brand color */
--color-secondary: #97A59A;    /* Soft green - Nature element */
--color-dark-green: #18332f;   /* Dark green - Contrast */

/* Accent Colors - Group 1 */
--color-forest: #2D3F2F;       /* Deep forest */
--color-lavender: #B2BBDA;     /* Soft lavender */
--color-moss: #1D2820;         /* Dark moss */
--color-light-gray: #EFEFF4;   /* Light gray */

/* Accent Colors - Group 2 */
--color-purple: #311C3B;       /* Deep purple */
--color-pink: #EACEE4;         /* Soft pink */
--color-orange: #F15B29;       /* Vibrant orange */
--color-cream: #F5F5B8;        /* Cream yellow */
```

### Typography:
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Sizes**: Responsive scale using clamp()

### Spacing System:
- Base unit: 8px
- Scale: 0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64

## 📐 Page Structure

### 1. Hero Section
- Full viewport height
- Large H1: "Майстер-класи з флористики та висадка квітів у Львові"
- Subtle background (gradient or image)
- CTA buttons: "Записатися на майстер-клас" & "Замовити висадку"
- Animated elements (floating petals or leaves)

### 2. About Section
- Split layout: Image + Text
- Founder photo/studio image
- Story about Марʼяна Фурманець
- Brand values: nature, design, poetry

### 3. Master Classes Section
- Grid layout with class types
- Interactive hover effects
- What's included
- Booking CTA

### 4. Seasonal Planting Section
- Service showcase
- Before/after gallery
- Process explanation
- Request quote CTA

### 5. Gallery Section
- Masonry or grid layout
- Lightbox functionality
- Category filters (optional)

### 6. Contact Section
- Contact information
- Instagram feed integration (optional)
- Contact form or direct links
- Google Maps embed (optional)

## 🛠 Technical Stack

### Core:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

### SEO & Performance:
- next-seo
- Sharp (image optimization)
- Google Analytics
- Schema.org markup

### Additional:
- React Hook Form (contact form)
- Swiper.js (carousels)
- Lightbox for gallery

## 📁 Project Structure
```
vdumtsi-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── MasterClasses.tsx
│       │   ├── SeasonalPlanting.tsx
│       │   ├── Gallery.tsx
│       │   └── Contact.tsx
│       ├── ui/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   └── ...
│       └── layout/
│           ├── Header.tsx
│           └── Footer.tsx
├── public/
│   ├── images/
│   └── favicon/
├── lib/
│   ├── constants.ts
│   └── utils.ts
└── config/
    └── seo.ts
```

## 🚀 Development Phases

### Phase 1: Setup & Foundation
1. Initialize Next.js with TypeScript
2. Configure Tailwind with custom theme
3. Setup fonts and base styles
4. Create layout components

### Phase 2: Core Sections
1. Implement Hero section
2. Build About section
3. Create service sections
4. Add contact section

### Phase 3: Enhancement
1. Add animations
2. Implement gallery
3. Mobile optimization
4. Performance tuning

### Phase 4: Launch Prep
1. SEO optimization
2. Analytics setup
3. Testing & QA
4. Deployment

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1280px

## 🎯 Performance Goals
- Lighthouse Score: 95+
- FCP: < 1.5s
- LCP: < 2.5s
- CLS: < 0.1 