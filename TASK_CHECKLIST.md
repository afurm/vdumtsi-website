# V DUMTSI Website - Task Checklist

## ✅ Phase 1: Project Setup & Foundation

### 1. Initialize Next.js Project
- [ ] Run `npx create-next-app@latest vdumtsi-website --typescript --tailwind --app`
- [ ] Clean up default files and content
- [ ] Configure TypeScript settings
- [ ] Install additional dependencies:
  - [ ] `framer-motion` for animations
  - [ ] `next-seo` for SEO
  - [ ] `sharp` for image optimization
  - [ ] `react-hook-form` for forms
  - [ ] `clsx` and `tailwind-merge` for className utilities

### 2. Design System Setup
- [ ] Configure Tailwind theme in `tailwind.config.ts`:
  - [ ] Add custom colors from brand palette
  - [ ] Configure font families
  - [ ] Add custom spacing scale
  - [ ] Configure responsive breakpoints
- [ ] Create CSS custom properties in `globals.css`
- [ ] Setup utility classes for common patterns

### 3. Font Configuration
- [ ] Add Google Fonts to `layout.tsx`:
  - [ ] Playfair Display for headings
  - [ ] Inter for body text
- [ ] Configure font variables
- [ ] Create typography scale utilities

### 4. SEO Foundation
- [ ] Create `config/seo.ts` with default SEO configuration
- [ ] Setup metadata in `layout.tsx`
- [ ] Configure Open Graph tags
- [ ] Add favicon and app icons
- [ ] Create `robots.txt` and `sitemap.xml`

## ✅ Phase 2: Component Development

### 5. Layout Components
- [ ] Create `Header.tsx`:
  - [ ] Logo/brand name
  - [ ] Navigation menu (mobile responsive)
  - [ ] Contact button
- [ ] Create `Footer.tsx`:
  - [ ] Contact information
  - [ ] Social links
  - [ ] Copyright

### 6. UI Components
- [ ] Create `Button.tsx` with variants:
  - [ ] Primary (filled)
  - [ ] Secondary (outlined)
  - [ ] Size variants
- [ ] Create `Card.tsx` for service cards
- [ ] Create `Container.tsx` for consistent spacing
- [ ] Create `Section.tsx` wrapper component

### 7. Hero Section
- [ ] Create `sections/Hero.tsx`:
  - [ ] Full-height layout
  - [ ] Animated headline
  - [ ] Subtitle with brand description
  - [ ] Two CTA buttons
  - [ ] Background gradient/image
  - [ ] Optional: Floating animation elements

### 8. About Section
- [ ] Create `sections/About.tsx`:
  - [ ] Two-column layout (image + text)
  - [ ] Founder story
  - [ ] Brand values
  - [ ] Fade-in animation on scroll

### 9. Master Classes Section
- [ ] Create `sections/MasterClasses.tsx`:
  - [ ] Section heading and description
  - [ ] Service cards grid
  - [ ] What's included list
  - [ ] CTA to book
  - [ ] Hover animations

### 10. Seasonal Planting Section
- [ ] Create `sections/SeasonalPlanting.tsx`:
  - [ ] Service description
  - [ ] Process steps
  - [ ] Image showcase
  - [ ] Quote request CTA

### 11. Gallery Section
- [ ] Create `sections/Gallery.tsx`:
  - [ ] Image grid/masonry layout
  - [ ] Lazy loading
  - [ ] Lightbox on click
  - [ ] Optional: Category filters

### 12. Contact Section
- [ ] Create `sections/Contact.tsx`:
  - [ ] Contact information display
  - [ ] Phone with click-to-call
  - [ ] Instagram link
  - [ ] Optional: Contact form
  - [ ] Optional: Map embed

## ✅ Phase 3: Enhancement & Polish

### 13. Animations & Interactions
- [ ] Add Framer Motion animations:
  - [ ] Page load animations
  - [ ] Scroll-triggered animations
  - [ ] Hover effects
  - [ ] Smooth scrolling
- [ ] Add micro-interactions:
  - [ ] Button hover states
  - [ ] Card hover effects
  - [ ] Focus states

### 14. Mobile Optimization
- [ ] Test all sections on mobile devices
- [ ] Implement mobile navigation menu
- [ ] Optimize touch targets
- [ ] Adjust typography for mobile
- [ ] Test landscape orientation

### 15. Performance Optimization
- [ ] Optimize all images:
  - [ ] Convert to WebP format
  - [ ] Add proper sizing
  - [ ] Implement lazy loading
- [ ] Minimize JavaScript bundle
- [ ] Add proper caching headers
- [ ] Test Core Web Vitals

## ✅ Phase 4: Launch Preparation

### 16. Content & Copy
- [ ] Review all Ukrainian text for accuracy
- [ ] Add proper Schema.org markup
- [ ] Ensure all links work
- [ ] Add 404 page

### 17. Testing & QA
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO audit
- [ ] Performance testing
- [ ] Form testing (if applicable)

### 18. Analytics & Monitoring
- [ ] Setup Google Analytics 4
- [ ] Configure conversion tracking
- [ ] Add Google Search Console
- [ ] Setup error monitoring (optional)

### 19. Deployment
- [ ] Choose hosting platform (Vercel recommended)
- [ ] Configure domain
- [ ] Setup SSL certificate
- [ ] Deploy to production
- [ ] Test live site

## 📋 Additional Considerations

### Content Needed:
- [ ] High-quality images of work
- [ ] Founder photo
- [ ] Service descriptions
- [ ] Pricing information (if public)
- [ ] Terms & conditions (if needed)

### Future Enhancements:
- [ ] Blog section
- [ ] Online booking system
- [ ] Email newsletter signup
- [ ] Multi-language support
- [ ] Client testimonials section 