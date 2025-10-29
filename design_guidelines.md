# Design Guidelines: Kaizen HR Consultants Website

## Design Approach

**Selected Approach:** Reference-Based (B2B Professional Services)
Drawing inspiration from Stripe's clean professionalism, Linear's modern typography, and Webflow's service presentation patterns. This approach balances corporate credibility with contemporary digital design.

**Core Principle:** Professional trust meets modern simplicity - creating an authoritative yet approachable digital presence that converts visitors into leads.

---

## Typography System

**Font Family:** Inter (Google Fonts CDN)
- Headings: Inter 600-700 (Semibold-Bold)
- Body: Inter 400-500 (Regular-Medium)

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Headings: text-3xl md:text-4xl, font-semibold
- Service Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text: text-sm, for footer/metadata

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section vertical padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl mx-auto px-6 md:px-8
- Component spacing: space-y-8 md:space-y-12
- Grid gaps: gap-8 md:gap-12

**Grid Structure:**
- Services Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 (5 services per row, 2 rows)
- Mobile: Single column stack for all sections

---

## Component Library

### Header/Navigation
- Sticky header: sticky top-0 z-50 with subtle backdrop blur
- Height: h-20
- Logo + brand name left-aligned
- Navigation links right-aligned with smooth scroll behavior
- Subtle bottom border for depth

### Hero Section
- Height: min-h-screen flex items-center
- Two-column layout on desktop (60/40 split): Text left, custom illustration right
- Tagline prominent with gradient text treatment (indigo to cyan)
- Dual CTA buttons: Primary (solid indigo) + Secondary (outline cyan)
- Buttons with blur backdrop: backdrop-blur-sm bg-indigo-600/90
- Illustration: Abstract connecting nodes/pathways representing talent connection

### Vision & Mission Section
- Single column centered layout: max-w-4xl mx-auto
- Vision and Mission in side-by-side cards on desktop
- Cards with subtle borders and hover elevation
- Small decorative illustration accent (growth arrow or transformation symbol)

### Services Grid
- 2-column grid on desktop, single column mobile
- Each service card includes:
  - Custom icon illustration (64x64px, top of card)
  - Service title
  - 2-3 line description
  - Subtle hover state with border color shift
- Card styling: rounded-xl border border-gray-200 p-8
- Icons use indigo-cyan gradient fills

**10 Services to Display:**
1. Recruitment & Staffing
2. HR Consulting
3. Executive Search
4. Payroll Management
5. Training & Development
6. Compliance & Policy
7. Performance Management
8. Employee Relations
9. Benefits Administration
10. Workforce Planning

### Terms & Conditions
- Single column: max-w-4xl mx-auto
- Organized with numbered sections
- Clean typography hierarchy
- Collapsible sections optional for length management

### Contact Section
- Two-column layout: Form (60%) + Contact Info (40%)
- Form fields with proper spacing (space-y-6)
- Input styling: border border-gray-300 rounded-lg px-4 py-3
- Submit button: full-width indigo with hover state
- Contact info card with:
  - Address with map pin icon
  - Email with envelope icon
  - Phone with phone icon
  - Business hours with clock icon
- Small communication illustration in contact info area

### Footer
- Simple centered layout
- Copyright text
- Business location
- Optional social links (LinkedIn recommended for HR firm)
- Background: bg-gray-50 with top border

---

## Illustrations

**Style Guide:**
- Vector-based, clean line work with minimal detail
- Color palette: Indigo (#4F46E5), Cyan (#06B6D4), Gray accents
- Abstract/metaphorical representations
- Consistent stroke width (2-3px)

**Illustration Inventory:**
1. Hero: Connecting nodes/network visualization (large, 600x500px)
2. Services Icons: 10 minimalist icons (64x64px each)
3. Contact: Handshake or communication symbol (small accent)

**Optimization:** SVG format, inline in HTML for performance

---

## Visual Treatment

**Color Application:**
- Primary Actions: Indigo (#4F46E5)
- Secondary Accents: Cyan (#06B6D4)
- Backgrounds: White (#FFFFFF), Gray-50 (#F9FAFB)
- Text: Gray-900 (#111827) for primary, Gray-600 for secondary
- Borders: Gray-200 (#E5E7EB)

**Depth & Elevation:**
- Subtle shadows on cards: shadow-sm hover:shadow-md transition
- Header: shadow-sm
- No heavy drop shadows - maintain clean aesthetic

**Borders & Radius:**
- Standard radius: rounded-lg (8px)
- Cards: rounded-xl (12px)
- Buttons: rounded-lg
- Input fields: rounded-lg

---

## Interaction Patterns

**Smooth Scrolling:** Enable smooth scroll behavior for anchor links
**Form Validation:** Visual feedback on input focus and validation states
**Hover States:** Subtle transitions (duration-200) on interactive elements
**CTA Progression:** Clear visual hierarchy from primary to secondary actions

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids maintained)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations:**
- Hero stacks vertically, illustration below text
- Services grid single column
- Contact form full-width, info section below
- Navigation converts to hamburger menu if >4 links

---

## Performance Considerations

- Inline critical SVG illustrations
- Lazy load below-fold illustrations
- Single Tailwind CSS CDN link
- No JavaScript frameworks needed
- Optimize for < 100KB initial page load

This design creates a trustworthy, modern professional presence that converts visitors through clear service communication and strategic lead capture points.