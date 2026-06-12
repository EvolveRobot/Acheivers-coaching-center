# ALLEN-Inspired Static Coaching Website Plan

## Summary
Build a polished multi-page static website for **Achievers Coaching Center**, inspired by the current ALLEN homepage structure at https://allen.in/: dark premium navigation, course/result/study-material mega menus, "What's Trending," filterable "Meet our Stars," scholarships, strong CTAs, and dense footer links.

Use **plain HTML, CSS, and JavaScript only**. No npm, build step, framework, backend, or external image dependency. Content will use realistic editable placeholders for Achievers until final names, results, phone numbers, and addresses are available.

## Key Changes
- Create a multi-page static site:
  - `index.html`: homepage with hero, trending banner, stars carousel, courses, scholarships, testimonials, demo form, footer.
  - `courses.html`: course grid for JEE, NEET, Foundation/Class 6-10, boards, crash courses.
  - `results.html`: toppers/results page with filters and achievement cards.
  - `scholarships.html`: scholarship tests, merit offers, deadlines, eligibility.
  - `contact.html`: WhatsApp CTA, callback/demo form, address, timings, map placeholder.
- Shared assets:
  - `styles.css` for all layout, responsive behavior, color tokens, cards, nav, sliders.
  - `script.js` for nav menus, mobile menu, ticker pause, filters, carousels, counters, form validation.
  - `assets/` for local placeholder student/course images or CSS-based initials cards.
- Visual direction:
  - Dark navy header and footer, bright yellow/orange announcement ticker, white/light content sections, blue accent CTAs.
  - ALLEN-inspired information architecture, but not a direct brand clone.
  - Use Poppins or system fallback; if no internet fonts are desired, use `system-ui` only.
- Core homepage sections:
  - Sticky dark top nav with logo, mega-menu groups, "Request a call back," "Book demo," and mobile full-screen menu.
  - Trending marquee below nav with editable announcements.
  - Hero with bold coaching promise, result highlight card, course CTAs, and local placeholder collage.
  - Stats strip with animated counters.
  - "Meet our Stars" filter tabs: ALL, JEE, NEET, Classes 6-10.
  - Course cards with colored top bands and "Explore" links.
  - Scholarship section for ASAT-style entrance test, merit scholarship, and early-bird admission offer.
  - Testimonials slider with dots and pause-on-hover behavior.
  - Final dark CTA: WhatsApp + Book Demo.
  - Multi-column footer with courses, results, study materials, scholarships, contact, and social links.
- Lead behavior:
  - Primary CTA opens WhatsApp using a replaceable phone number token.
  - Secondary CTA scrolls to or opens the demo/contact form.
  - Forms validate required name, phone, class/course, and message fields on the client; submission shows a static success message because no backend is planned.

## Interfaces And Data
- Store editable site content in simple JavaScript arrays/objects inside `script.js` or inline constants:
  - `announcements`
  - `courses`
  - `toppers`
  - `scholarships`
  - `testimonials`
- Use `data-category` attributes for filters and `data-count` for animated stats.
- Use placeholder brand tokens that can be replaced globally:
  - Center name: `Achievers Coaching Center`
  - Phone/WhatsApp: placeholder Indian number
  - Location: placeholder city/address
  - Email: placeholder email
- Navigation links must work without routing or server support, using normal `.html` files and section anchors.

## Test Plan
- Open each HTML page directly in a browser and verify no build step is required.
- Desktop checks:
  - Mega menus open on hover/focus.
  - CTA links, page links, anchors, filters, sliders, and form validation work.
  - Layout remains aligned at common widths: 1440px, 1024px, 768px.
- Mobile checks:
  - Header collapses into mobile menu.
  - No text overflow in cards, buttons, nav, ticker, or forms.
  - Carousels are swipe/scroll friendly and controls remain tappable.
- Accessibility checks:
  - Keyboard can reach nav, menu, filters, carousel controls, and form fields.
  - `prefers-reduced-motion` disables or reduces marquee/slider animation.
  - Form errors are visible and clear.
- Content checks:
  - No ALLEN logos, names, copyrighted student photos, or exact copy are used.
  - All placeholder data is easy to find and replace.

## Assumptions
- The project starts from an empty directory.
- The implementation should be ALLEN-inspired, not a direct copy.
- The site should be multi-page static HTML/CSS/JS.
- Use realistic placeholder content for Achievers Coaching Center.
- Use local/offline-safe placeholder assets, not remote image dependencies.
- WhatsApp plus demo form is the primary lead-generation flow.
