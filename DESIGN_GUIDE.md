# V DUMTSI - Design Guide

## 🎨 Visual Style Direction

### Overall Aesthetic:
- **Modern Minimalist** with organic touches
- **Nature-inspired** elements and textures
- **Elegant typography** with generous white space
- **Soft, muted color palette** with strategic pops of color
- **Photography-focused** design showcasing floristry work

## 🎭 Component Specifications

### 1. Header Component
```
┌─────────────────────────────────────────────────────────┐
│  V DUMTSI          Майстер-класи  Послуги  Контакти  ☰  │
└─────────────────────────────────────────────────────────┘
```
- **Style**: Transparent on hero, white background on scroll
- **Logo**: Text-based "V DUMTSI" in Playfair Display
- **Navigation**: Minimal, right-aligned
- **Mobile**: Hamburger menu with full-screen overlay

### 2. Hero Section
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│     Майстер-класи з флористики                         │
│     та висадка квітів у Львові                        │
│                                                         │
│     V DUMTSI — це місце, де народжуються              │
│     квіткові історії                                   │
│                                                         │
│     [Записатися на майстер-клас] [Замовити висадку]   │
│                                                         │
│                    ✿  ❀  ✿                             │
└─────────────────────────────────────────────────────────┘
```
- **Background**: Subtle gradient (#d6d2c4 to white) or blurred floral image
- **Typography**: Large serif heading (60-80px desktop)
- **Animation**: Text fade-in, floating flower symbols

### 3. Button Styles
```
Primary Button:
┌─────────────────────────┐
│  Записатися на майстер  │  Background: #18332f
└─────────────────────────┘  Text: White

Secondary Button:
┌─────────────────────────┐
│    Дізнатися більше     │  Border: 2px #97A59A
└─────────────────────────┘  Text: #18332f
```

### 4. Card Component (Services)
```
┌─────────────────────┐
│ [Floral Image]      │
│                     │
├─────────────────────┤
│ Базовий майстер-клас│
│                     │
│ Навчіться основам   │
│ флористики          │
│                     │
│ → Детальніше        │
└─────────────────────┘
```
- **Shadow**: Soft drop shadow on hover
- **Transition**: Smooth scale(1.02) on hover
- **Border radius**: 8px

### 5. About Section Layout
```
┌─────────────────────────────────────────────┐
│  ┌─────────────┐  ХТО МИ                   │
│  │             │                             │
│  │   Founder   │  Студія V DUMTSI заснована │
│  │    Photo    │  Марʼяною Фурманець —      │
│  │             │  флористкою, яка поєднує... │
│  └─────────────┘                            │
└─────────────────────────────────────────────┘
```

### 6. Gallery Grid
```
┌────┬────┬────┐
│ 1  │ 2  │ 3  │
├────┼────┴────┤
│ 4  │    5    │
├────┴────┬────┤
│    6    │ 7  │
└─────────┴────┘
```
- **Style**: Masonry layout with gaps
- **Hover**: Slight zoom with overlay showing details
- **Click**: Opens lightbox

## 🎨 Color Usage Guidelines

### Primary Palette:
- **#d6d2c4** (Warm Beige): Main backgrounds, hero section
- **#97A59A** (Soft Green): Accents, secondary buttons
- **#18332f** (Dark Green): Text, primary buttons, headings

### Accent Usage:
- **Group 1**: Use for subtle UI elements (cards, borders)
- **Group 2**: Use sparingly for special highlights

### Text Colors:
- **Headings**: #18332f or #2D3F2F
- **Body text**: #2D3F2F (softer than pure black)
- **Muted text**: #97A59A

## 📐 Spacing & Layout

### Container:
```css
max-width: 1280px
padding: 0 24px (mobile) / 0 48px (desktop)
```

### Section Spacing:
```css
padding-top: 80px
padding-bottom: 80px
```

### Grid System:
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns

## 🎭 Animation Guidelines

### Entrance Animations:
1. **Fade Up**: Elements fade in while moving up 20px
2. **Stagger**: Child elements animate with 0.1s delay
3. **Duration**: 0.6s with ease-out timing

### Hover Effects:
1. **Scale**: Subtle scale(1.02-1.05)
2. **Shadow**: Elevation change
3. **Color**: Slight opacity/brightness adjustment

### Scroll Triggers:
- Trigger when element is 20% visible
- Use once (don't repeat on scroll up)

## 📱 Mobile Considerations

### Typography Scale:
- **H1**: 40px → 28px
- **H2**: 36px → 24px
- **Body**: 18px → 16px

### Touch Targets:
- Minimum 44px height
- Clear tap states
- Adequate spacing between interactive elements

### Navigation:
- Full-screen overlay menu
- Large, readable menu items
- Smooth slide-in animation

## 🖼 Image Guidelines

### Photography Style:
- Natural lighting
- Soft, muted tones
- Focus on texture and detail
- Lifestyle shots showing process

### Image Processing:
- Slight desaturation to match brand palette
- Consistent aspect ratios per section
- WebP format with fallbacks
- Multiple sizes for responsive loading

## 🎯 Interaction States

### Buttons:
- **Default**: Base style
- **Hover**: Darken 10%, subtle shadow
- **Active**: Scale(0.98)
- **Focus**: Visible outline (accessibility)

### Links:
- **Default**: Underline on hover
- **Visited**: Same as default (for consistency)
- **Focus**: Dotted outline

### Forms:
- **Input focus**: Border color change to #97A59A
- **Error state**: Soft red (#F15B29 at 80% opacity)
- **Success**: Soft green confirmation 