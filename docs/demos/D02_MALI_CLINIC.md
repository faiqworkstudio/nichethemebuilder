# D02 — Mali Skin Clinic (มะลิ สกินคลินิก) · Skin & aesthetic clinic

**Routes:** `/demos/mali-clinic/th` (default) · `/demos/mali-clinic/en`
**Code:** `src/demos/mali-clinic/` + `src/app/demos/mali-clinic/[lang]/`
**Theme:** Soft Contemporary (primary) + Consultation First (secondary)
**Status:** REVIEW — automated and visual checks pass; native Thai proofread, real-device check and a clinic-advertising compliance read are pending.

## Art-direction brief
1. **Customer and feeling.** People in Bangkok who are curious but wary of aesthetic clinics: they've seen hard-sell packages and before/after promises. They need to feel *no one will pressure me here, and I'll understand my options*.
2. **Visual concept.** A calm consultation room: milk, sage and a little clay, soft arches, one jasmine mark.
3. **Palette.** milk `#f8f4ee` bg · forest `#344a3c` headings/buttons (white on forest ≈ 10:1) · ink `#262624` · ink-2 `#4e4d49` (≈ 8:1 on milk) · muted `#67655f` (≈ 5.4:1) · clay `#a3573f` accent (≈ 5:1 on milk) · sage-soft `#e3e8df` surfaces.
4. **Typography.** Trirong (Thai + Latin serif, light 300) for headings — gentle contrast, not luxury-cold; Anuphan (friendly Thai + Latin sans) for text and forms.
5. **Layout grammar.** Soft contemporary: pills, generous radii, arch and circle image masks, a white treatment band with rounded ends; content grouped in calm cards only where it helps (steps, treatments).
6. **Images.** Hands, products and careful in-clinic facials. No before/after, no bodies-as-results, no branded products. Credits in `docs/CREDITS.md`.
7. **Interactions.** (a) Concern chips in the hero → filter the treatment guide and jump to it. (b) The same concern state pre-fills the booking form (one shared React context).
8. **Mobile.** Pill nav scrolls horizontally; hero art moves under the copy; header booking button hides (hero button is directly below); concern list becomes a wrapping grid; form fields stack.
9. **Distinct from D01.** Rounded vs square; serif vs grotesk; sage/milk vs plaster/ink; arches and pills vs ruled schedules; centre-weighted calm vs drawing-set grid.

## Honesty and compliance choices
- No prices on the site (priced after consultation) — realistic for Thai clinic advertising and avoids promotional claims.
- No guaranteed outcomes; "results vary" and "general information, not medical advice" are stated in the treatment guide and footer.
- Doctor section shows dashed **Placeholder** slots for name, licence number (ว.) and training — nothing invented.
- Booking form asks for no photos or medical history and says so.

## Acceptance record
- Functional: TH/EN routes with hreflang; language switch keeps anchor; concern finder; shared concern state; consult form (concerns, first visit, days, time, name, contact method + value, language, consent) with error summary and preview mode; optional `NEXT_PUBLIC_MALI_CONSULT_ENDPOINT`.
- Checks (2026-10-18): typecheck ✓ · lint ✓ · unit tests ✓ (`tests/mali-consult.test.ts`) · build ✓ · smoke 6/6 ✓ · no console errors · no horizontal overflow at 360/390/820/1440.
- To move to COMPLETE: native Thai proofread, real-device check, and a read of the copy against current Thai rules on clinic advertising before showing to a real clinic.
