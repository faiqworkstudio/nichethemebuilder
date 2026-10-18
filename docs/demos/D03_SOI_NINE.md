# D03 — Soi Nine House (บ้านซอยเก้า) · Boutique hotel / serviced apartment

**Routes:** `/demos/soi-nine/th` (default) · `/demos/soi-nine/en`
**Code:** `src/demos/soi-nine/` + `src/app/demos/soi-nine/[lang]/`
**Theme:** Contemporary Boutique Hotel (primary) + Neighbourhood Journal (secondary)
**Status:** REVIEW — automated and visual checks pass; native Thai proofread and real-device check pending.

## Art-direction brief
1. **Customer and feeling.** Independent travellers and longer-stay guests choosing between big hotels and something with character. They need to feel *this place is real, the area is interesting, and booking won't be a gamble*.
2. **Visual concept.** An old shophouse at dusk: dark teak, old paper and river green, written like a good neighbourhood guide.
3. **Palette.** paper `#f4efe6` · teak `#2a211c` (band/footer) · ink `#241f1b` · ink-2 `#51473f` · river `#2c5a52` buttons (white on river ≈ 7.7:1) · brass `#d6b27a` on teak (≈ 8:1) · brass-ink `#8a6122` on paper (≈ 5:1).
4. **Typography.** Fraunces (light, editorial serif) for Latin headings with Noto Serif Thai taking over Thai glyphs; Sarabun for reading text.
5. **Layout grammar.** Immersive + editorial: full-bleed hero with the header over the photo, a planner bar overlapping the hero edge, tabbed room catalogue, dark "house" band with an image collage, magazine-style journal beside a sketch map.
6. **Images.** Warm rooms, a lived-in café and real Bangkok places (Yaowarat, Loha Prasat, street food). Room photos are labelled as illustration; place photos are real places.
7. **Interactions.** (a) Stay planner → shared dates/guests → sample totals in the room catalogue, room fit warnings, and a pre-filled request form. (b) Journal entries light up their numbered pins on the sketch map (hover/focus).
8. **Mobile.** Header nav scrolls horizontally; planner becomes a 2-column grid; room tabs become a horizontal scroller; map sits above a single-column journal.
9. **Distinct from D01/D02.** Dark immersive photography vs light page; serif editorial with tabs and a map vs drawing-set schedules (D01) or soft pills and arches (D02).

## Honesty choices
- Every rate is labelled "sample"; a FAQ answers "Are the prices real?" with "No".
- The request form says no room is held and no payment is taken; it never asks for card or passport details.
- A real booking engine can be connected via `soiConfig.bookingProviderUrl` (hidden while null).
- Walking times are marked approximate; the map is labelled "not to scale".

## Acceptance record
- Functional: TH/EN routes; planner with Bangkok-time "today", night count, 28-night cap (monthly studio requires ≥ 28); accessible tabs with arrow/Home/End keys; request form with error summary, preview, optional `NEXT_PUBLIC_SOI_REQUEST_ENDPOINT`.
- Checks (2026-10-18): typecheck ✓ · lint ✓ · unit tests ✓ (`tests/soi-booking.test.ts`) · build ✓ · smoke 8/8 ✓ · no console errors · no horizontal overflow at 360/390/820/1440 (fixed a 14 px mobile overflow from date inputs during review).
- To move to COMPLETE: native Thai proofread and real-device check (iOS date pickers in particular).
