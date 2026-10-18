# D06 — Plot Property (พล็อต พร็อพเพอร์ตี้) · Real estate agent

**Routes:** `/demos/plot-property/th` (default) · `/en` · `/demos/plot-property/{th,en}/listings/<ref>` (8 sample listings)
**Code:** `src/demos/plot-property/` + `src/app/demos/plot-property/[lang]/`
**Theme:** Property Explorer (primary) + Modern Swiss (secondary)
**Status:** REVIEW — automated and visual checks pass; native Thai proofread and real-device check pending.

## Art-direction brief
1. **Customer and feeling.** Thai and expat renters/buyers tired of listings with stale photos, "near BTS" claims and hidden fees. They need to feel *this agent tells me the real details up front*.
2. **Visual concept.** A Swiss information board: black type, white space, one red signal colour, hard edges.
3. **Palette.** white `#ffffff` · ink `#111111` (≈ 19:1) · ink-2 `#3d3d3d` · muted `#5e5e5e` (≈ 6.4:1) · red `#d0021b` (white on red ≈ 5.6:1; red text on white ≈ 5.6:1) · paper `#f4f4f2` for panels.
4. **Typography.** Bai Jamjuree only (Thai-designed, technical Latin), weights 300–700 doing all the hierarchy work.
5. **Layout grammar.** Modern Swiss: numbered section strips (01–05) with 3 px black rules, segmented controls, filter rail + results list, a real data table, hard-edged image frames, no radius and no shadow.
6. **Images.** Geometric condo facade (hero) and clean interiors per listing; always tagged "Sample listing".
7. **Interactions.** (a) Explorer: deal, type, area, bedrooms, price cap (enabled once rent/buy is chosen), pets, sort — every change rewrites the URL so a search can be shared; the last search is remembered for "Back to all listings". (b) Hero quick search is a plain GET form that works without JavaScript and feeds the same URL format.
8. **Mobile.** Filters become a two-column then single-column panel above results; cards stack image over data; cost table becomes labelled blocks; option groups wrap as grids inside forms.
9. **Distinct from D01–D05.** Only demo with a filtered catalogue, URL state and per-item pages built from data; strict black/white/red Swiss look with one typeface.

## Honesty choices
- Every listing and price is labelled "Sample"; a FAQ answers "Are these listings real?" — "No".
- Listings carry the details agents usually omit (fees, power rate, pet rules, contract length) — as sample text.
- Viewing form asks for no ID/passport; preview mode arranges nothing.
- All listing pages are `noindex`.

## Acceptance record
- Checks (2026-10-18): typecheck ✓ · lint ✓ · unit tests ✓ (`tests/plot-search.test.ts`: filters, sorting, URL round-trip, junk rejection, viewing form) · build ✓ (16 listing pages) · smoke 8/8 ✓ · zero console errors · no overflow at 360/390/820/1440 on home and a listing page.
- Found and fixed during review: searches arriving via URL weren't remembered for the back link; viewing-form options overflowed the card.
- To move to COMPLETE: native Thai proofread; real-device check; a real agency would replace the static data with its listing feed.
