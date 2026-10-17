---
trigger: always_on
---

# Project Constitution: Fashion Home Sourcing

## 1. Tech Stack & Execution Constraints
- Framework: Next.js 15+ (App Router, root `app/` directory, no `src/`).
- Output: Static export (`output: 'export'` in `next.config.ts` or `next.config.mjs`).
- Styling: Tailwind CSS.
- Motion: `framer-motion` for transitions (typewriter effect, smooth horizontal card flipping, slider pagination).
- Icons: `lucide-react`.
- Assets: Next.js `<Image unoptimized />` pointing to `/assets/...`.

## 2. Brand Theme & Colors
- Primary Dark: Deep Midnight Navy (`#0B1B33`)
- Brand Gold: Imperial Gold (`#C59B27`)
- Light Warm Tint: Soft Ivory Cream (`#FBF8F1`)
- Border Colors: Rich Gold (`#C59B27`) or subtle navy borders (`#0B1B33/15`)
- Typography: Clean modern serif/sans contrast.

## 3. Structural Layout & Transitions (Client Mandate)
- Header: Soft Ivory background (`bg-[#FBF8F1]`), logo on left, clean navigation links, hamburger menu on mobile.
- Hero Section:
  - Background image carousel with smooth slide transitions and active pagination dots at the bottom.
  - Text transition: Typewriter animated headline (`Responsibly Building a Sustainable Future..._`).
  - Dual action buttons: Solid Gold button (`Start Project`) and Outlined Glass button (`Our Products`).
- Core Values Section:
  - ECG / Heartbeat icon accent before the title (`Our Core Values`).
  - Horizontal Flipping Cards: Modern 3D CSS / Framer Motion flip effect (hover on desktop, tap on mobile) with Gold rounded borders.
- Why Choose Us Bar:
  - Full-width Deep Navy or Rich Gold banner with 4 horizontal value badges (Premium Quality, Timeless Designs, Customer First, Worldwide Delivery).
- Founder Story Section:
  - Left-side founder portrait cut-out with modern offset framing.
  - Right-side bold narrative text.
- Footer:
  - Exactly 4 navigation links: Home, Products, About Us, Contact.