# Klickdoe Portfolio Lab — Claude Code Master Instructions

> **Purpose:** Build a large, coherent portfolio of realistic demo websites for Klickdoe, aimed at winning website-design and development clients in Bangkok, Thailand. This file is the source of truth. Read it before coding, keep the trackers updated, and do not lose design decisions between sessions.

## 0. Start here — required working protocol

At the beginning of every session:
1. Read this file completely.
2. Read `docs/DESIGN_SYSTEM.md`, `docs/THEME_TRACKER.md`, and `docs/DEMO_ROADMAP.md`.
3. Inspect the existing repository and identify what is already built before changing anything.
4. Update `docs/SESSION_LOG.md` with the current date, active demo, current state, next actions, and any blockers.
5. Continue from the current state; do not restart, overwrite, or redesign finished work without a reason.
6. Before coding a new demo, select an unused theme from the tracker and record it as `IN PROGRESS`.
7. After finishing, update the tracker and session log, run available checks, and list exactly what works, what does not, and what remains.

If a tracker is missing, create it using the definitions in this kit. If there is existing code, preserve the project's conventions unless there is a clear technical reason to change them.

## 1. Mission

Create a portfolio of **distinct, polished, human-designed-feeling demo websites** that show Klickdoe can solve real business problems for Bangkok-based Thai and international clients. These are sales demos and portfolio pieces, not one giant generic template.

Each demo must:
- Have a clear target customer, business goal, and conversion action.
- Feel art-directed for its specific business, with a unique layout, typography, imagery, palette, and interaction language.
- Be credible enough to present to a real business owner.
- Work on mobile, tablet, and desktop.
- Use Thai and English where appropriate. For bilingual demos, build real language switching and translated content—not a decorative toggle.
- Use sensible SEO metadata, semantic HTML, accessible controls, and good performance practices.
- Be implementable and maintainable, with no fake functionality presented as real.
- Be visibly different from other demos. Do not just change colors on the same template.

## 2. Brand and design DNA

The studio reference style comes from earlier OXE Marketing design work: **modern, premium, human, trustworthy, creative, professional, and warm**. Use that as the overall quality bar, not as a single visual template. The agency reference direction blended Apple-like clarity, creative-agency confidence, restrained soft 3D depth, and a clean SaaS-level usability. It favored white/light-blue/blue accents, navy typography, generous whitespace, Poppins-like display headings and Inter-like body text, rounded elements, soft shadows, and restrained gradients.

For this portfolio:
- Treat **Klickdoe** as the portfolio/studio label requested for this project. Keep the studio name, logo, contact details, and social links in one configuration file so the label can be changed globally if needed.
- Keep the underlying studio qualities consistent: clear hierarchy, care, craftsmanship, calm confidence, honest copy, thoughtful details, and visible business purpose.
- Let each client demo have its own identity. Do **not** force every client into OXE's blue-and-white palette.
- Use the blue/light palette mainly for the studio's own portfolio shell or where it genuinely fits a client's identity.
- Use restrained motion, useful transitions, subtle tactile detail, natural photography, and real content structure.
- Favor specific details over decorative effects: editorial type, thoughtful spacing, a well-composed hero, strong imagery, precise alignment, useful forms, and good responsive behavior.

### Avoid at all times
- Generic AI/SaaS landing-page clichés: glowing purple gradients, endless floating glass cards, random abstract blobs, fake dashboards, meaningless metric counters, “revolutionary AI-powered solutions,” and filler claims.
- Unnecessary overlays, popups, modals, sticky widgets, cookie banners without a real need, and floating elements covering content.
- Excessive rounded cards, every section inside a card, repetitive 3-column grids, identical hero layouts, and identical section order across demos.
- Stock imagery that looks unrelated, fake client logos, fabricated testimonials, invented awards, made-up performance metrics, or claims that imply real client work.
- Placeholder Latin, lorem ipsum, empty links, dead buttons, nonfunctional forms, fake booking confirmations, and “coming soon” UI unless explicitly required.
- Over-animation, scroll-jacking, autoplay audio/video, and motion that harms accessibility or performance.
- Design choices that prioritize novelty over readability, trust, or business outcomes.

## 3. Portfolio scope and initial demo priorities

Build each demo as a separate route or standalone project according to the existing architecture. Start with these three client niches, then expand to more industries. They are strategic demo choices, not claims about proven market demand.

### Demo 01 — Interior design / renovation studio (first priority)
Audience: Bangkok interior designers, condo renovation firms, office fit-out contractors, and property owners.
Goal: turn portfolio browsing into qualified project enquiries.
Required sections/features:
- Distinctive visual hero with specific positioning and one clear CTA.
- Selected projects with location/type/scope labels.
- Services explained in plain language.
- Process and what clients can expect.
- About/team or craft philosophy.
- Testimonials only if clearly marked as sample content, or omit them.
- Project enquiry form with project type, location, approximate budget, timeline, and contact method.
- Thai/English content and functional language switching.
- Mobile-first contact / LINE link configured from one place.
- Privacy-conscious forms; no collection of unnecessary data.
Content should sound like a real Bangkok studio. Do not claim actual completed projects or results.

### Demo 02 — Beauty / aesthetic clinic
Audience: independent Bangkok skin, laser, facial, or beauty clinics.
Goal: help prospective customers understand services and request a consultation.
Required sections/features:
- Calm, hygienic, premium but approachable visual direction.
- Treatment categories, practitioner credentials placeholders clearly marked as demo, FAQ, location and contact.
- Consultation CTA and LINE contact.
- Thai/English language switching.
- Clear content disclaimers and careful treatment claims; no guaranteed outcomes, medical misinformation, or invented doctor credentials.
- Do not use fake before/after medical imagery as if it documents a real patient. Use neutral editorial imagery or visibly labelled concept content.

### Demo 03 — Boutique hotel / serviced apartment
Audience: independent hotels and serviced apartments serving Thai and international guests.
Goal: communicate rooms, location, amenities and drive enquiries or hand off to a real booking provider.
Required sections/features:
- Strong hospitality art direction and room photography.
- Room types, amenities, neighborhood/location guide, FAQs and contact.
- Thai/English language switching.
- Booking CTA must lead to a configured provider or be clearly a demo interaction. Do not fake a real reservation.
- Clear distinction between sample prices and real rates.

### Expansion queue
04. Dental clinic
05. Premium spa / massage studio
06. Real estate agent / property management
07. Accounting, legal or B2B consulting firm
08. Private tour / cooking class / local experience
09. Restaurant / café (brand-led, menu-first)
10. Boutique fitness / Pilates / yoga
11. Specialty retail / jewellery / tailor
12. Professional photography / video studio
13. Education / language school
14. Wedding / event venue
15. Pet clinic / pet services
16. Automotive detailing / premium garage

Do not build all expansion demos at once. Finish, review, and track each demo before starting another.

## 4. Architecture and engineering rules

First inspect the repository. Prefer the existing stack and patterns. If the repository is empty, choose a modern, simple stack suitable for the task and explain the choice in the session log. Do not migrate frameworks casually.

- Reuse shared utilities, accessibility patterns, language handling, SEO helpers, and design tokens.
- Reuse *components* only when it helps maintainability. Do not force every site to use the same composition.
- Keep each demo's content, theme tokens, imagery choices, navigation, and section composition clearly isolated.
- Avoid a monolithic component full of conditionals for every industry. Prefer separate page compositions with shared low-level primitives.
- Keep all demo business details in a central data/config file where practical.
- No secrets or API keys in client-side code. Use environment variables for secrets and provide `.env.example` when needed.
- Use lightweight browser-native or client-side processing when appropriate; do not add a backend or dependency without a clear purpose.
- Add meaningful empty, error, loading, and success states to actual interactive features.
- Forms must validate inputs and explain what happens on submission. If no backend is configured, implement a safe demo mode that explicitly tells the user it is a preview; do not pretend a message was sent.
- External links should be real and configured. If not known, use a clear placeholder in configuration and disable the action gracefully.
- Respect reduced-motion preferences, keyboard navigation, focus visibility, contrast, alt text, and semantic landmarks.
- Optimize image dimensions and loading; avoid layout shift. Use `next/image` if the existing stack supports it.
- Use stable package versions and avoid unnecessary libraries.
- Do not invent analytics IDs, business addresses, phone numbers, reviews, certifications, or contact details. Use conspicuously labelled demo data or central configuration.

## 5. Required visual craft for every demo

Before implementing, write a mini art-direction brief:
1. Who the customer is and what they need to feel.
2. One-sentence visual concept.
3. Palette with accessible text/background combinations.
4. Typography pairing and hierarchy.
5. Layout grammar (editorial, architectural, modular, immersive, catalog, etc.).
6. Image treatment and art direction.
7. One or two meaningful interactions.
8. Mobile layout changes.
9. What makes this demo different from all existing demos.

Then build in this order:
1. Content hierarchy and rough section structure.
2. Hero composition and first-screen rhythm.
3. Typography, spacing, grid, and imagery.
4. Complete page sections.
5. Responsive behavior.
6. Functional details and states.
7. Accessibility, SEO, performance, and final visual review.

Do not start by adding gradients, shadows, and animation to a weak layout. Get composition and content right first.

## 6. Theme system — diversity is mandatory

Read `docs/DESIGN_SYSTEM.md` and `docs/THEME_TRACKER.md`. The theme library contains many design directions. Each new demo must select a different primary theme and, where sensible, one secondary influence. Record what was used.

A theme means more than a color palette. Vary:
- Hero composition and content alignment.
- Header/navigation treatment.
- Typography scale and font character.
- Grid and page rhythm.
- Image aspect ratios, cropping and placement.
- Section sequencing.
- Surface and border treatment.
- Buttons, forms, tabs and navigation.
- Interaction and motion.
- Color and contrast.

Do not repeat the same hero + centered heading + two buttons + 3 cards + logo strip + testimonials + CTA formula. Use testimonials only when appropriate and truthful. Vary the rhythm and density of the page.

## 7. Content and localization

- Write natural, specific copy in Thai and English. Do not translate literally if the result sounds unnatural.
- Avoid jargon and vague phrases like “unlock your potential,” “elevate your brand,” “seamless solutions,” and “AI-powered transformation.”
- Explain what the business does, who it helps, what is included, and how to take the next step.
- Use Thai formatting and local context appropriately: ฿, Thai addresses only when real or clearly marked demo, Bangkok neighborhood references only when relevant, and LINE as a common contact option.
- Use proper `lang` attributes, localized metadata, translated nav labels, translated forms and errors, and a working language switcher.
- Never publish fabricated testimonials, client names, awards, metrics or case studies as facts. For portfolio concepts, show a discreet “Concept project / งานออกแบบแนวคิด” label on the project page and in portfolio metadata.

## 8. Demo quality gates — do not mark complete until all pass

### Design
- [ ] Visually distinct from every existing demo.
- [ ] First viewport feels intentional and well-composed.
- [ ] No generic AI language, decorative clutter or pointless overlays.
- [ ] Typography, spacing and image crops are consistent.
- [ ] No repeated template sections just to fill space.
- [ ] Desktop and mobile each feel designed, not merely scaled down.

### Content and trust
- [ ] All visible copy is finished and relevant.
- [ ] Demo status is clear where visitors could mistake it for a real client.
- [ ] No fake claims, invented reviews or broken placeholder links.
- [ ] Thai and English content is checked when bilingual.

### Functionality
- [ ] Navigation and CTAs work.
- [ ] Language switcher works across the page.
- [ ] Forms validate and have honest demo/success behavior.
- [ ] No console errors or obvious broken assets.
- [ ] Keyboard focus and reduced-motion behavior are supported.

### Technical
- [ ] Responsive at narrow mobile, tablet and desktop widths.
- [ ] Semantic HTML, alt text, page title, description and social metadata.
- [ ] Images optimized and layout shift minimized.
- [ ] Build/lint/tests run where available.
- [ ] Known limitations are recorded.

## 9. Session memory and anti-drift protocol

Keep these files current:
- `docs/SESSION_LOG.md` — dated notes for every work session.
- `docs/THEME_TRACKER.md` — every theme used, reserved, or avoided.
- `docs/DEMO_ROADMAP.md` — demo statuses and acceptance criteria.
- `docs/DESIGN_DECISIONS.md` — durable decisions, why they were made, and whether they are still active.
- `docs/KNOWN_ISSUES.md` — bugs, technical debt, incomplete integrations, and next steps.

At the end of every session, append:
- Date
- Active demo and route
- Files changed
- Design decisions made
- Features completed
- Checks run and results
- Known issues
- Exact next action

Never say a task is done if it has not been tested. Do not silently drop requested features. If scope must change, record why and what is deferred.

## 10. Recommended execution sequence

1. Inspect repository and report a short plan.
2. Create/verify the tracking documents.
3. Build the studio portfolio shell only if the repo needs it.
4. Build Demo 01 (renovation/interior) to completion.
5. Run quality checks and review the actual rendered page if browser tooling is available.
6. Record lessons and freeze its theme in the tracker.
7. Build Demo 02 with a clearly different theme.
8. Build Demo 03 with another clearly different theme.
9. Continue expansion queue one demo at a time.
10. Do not spend time generating lots of incomplete homepage mockups. Prefer fewer complete, believable, high-quality demos.

## 11. What to report after each milestone

Report briefly:
- What is now working.
- Which demo and theme were used.
- How it differs from previous demos.
- What checks were run.
- What remains incomplete.
- The next best action.

**Start now:** inspect the repo, read the companion docs, initialise missing tracking files, then build the first complete interior design / renovation demo without overwriting existing work.
