# D04 — Yim Dental Clinic (ยิ้ม ทันตกรรม) · Dental clinic

**Routes:** `/demos/yim-dental/th` (default) · `/demos/yim-dental/en`
**Code:** `src/demos/yim-dental/` + `src/app/demos/yim-dental/[lang]/`
**Theme:** Humanist Professional (primary) + Treatment Library (secondary)
**Status:** REVIEW — automated and visual checks pass; native Thai proofread, real-device check and a dental-advertising read pending.

## Art-direction brief
1. **Customer and feeling.** Families and expats near the BTS who either have toothache right now or have been putting off a check-up. They need to feel *I'll know what's happening and what it costs, and nobody will judge me*.
2. **Visual concept.** A bright, practical neighbourhood clinic: white, confident teal, a sunny yellow for reassurance.
3. **Palette.** bg `#fbfcfc` · ink `#14262b` (≈ 15:1) · ink-2 `#3f5258` (≈ 8:1) · muted `#5c6d72` (≈ 5.4:1) · teal `#0d6b66` buttons (white ≈ 6.4:1) · sun `#f5c84c` highlights (with ink text) · coral `#c84b33` for pain/alerts · danger `#b0261b`.
4. **Typography.** Mitr (Thai-designed, soft geometric) for headings; Niramit (Thai-designed humanist) for text.
5. **Layout grammar.** Task-first and structured: three "doorway" tiles, a two-column triage tool, a real data table, numbered first-visit steps. Medium radii (10–24 px), no arches or pills-as-decoration.
6. **Images.** A colourful treatment room, a dentist explaining an X-ray, reassuring hands, everyday toothbrushes. No open-mouth close-ups.
7. **Interactions.** (a) "Is it urgent?" guide: four questions → emergency (hospital / 1669), today, within 2–3 days, or routine; the result can be attached to the booking. (b) Searchable, filterable treatment table that becomes labelled cards on mobile; "Book for this" sets the visit reason.
8. **Mobile.** Doorways stack; triage result follows the questions; table rows become cards; header booking button hides under 440 px (doorways and form are on the page).
9. **Distinct from D01–D03.** Task-first doorway tiles, a decision tool and a real table; bright white/teal/yellow; Thai-designed sans pairing; no serif, no full-bleed photo hero.

## Honesty and safety choices
- The urgency guide is labelled "general guidance, not a diagnosis"; red-flag symptoms always route to hospital emergency and 1669 (Thailand's emergency medical number), never to an online booking.
- Prices are sample ranges, labelled in the table and the footer.
- Dentist slots are placeholders for real names and licence numbers (ท.).
- The form asks for no health history (taken at the visit).

## Acceptance record
- Checks (2026-10-18): typecheck ✓ · lint ✓ · unit tests ✓ (`tests/yim-dental.test.ts`: triage, search, prices, form) · build ✓ · smoke 7/7 ✓ · zero console errors · no horizontal overflow at 360/390/820/1440.
- To move to COMPLETE: native Thai proofread; real-device check; a dentist to review the triage wording; a read against current Thai rules for dental-clinic advertising and price display.
