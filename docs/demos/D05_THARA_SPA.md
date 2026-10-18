# D05 — Thara Thai Massage & Spa (ธารา นวดไทยและสปา)

**Routes:** `/demos/thara-spa/th` (default) · `/demos/thara-spa/en`
**Code:** `src/demos/thara-spa/` + `src/app/demos/thara-spa/[lang]/`
**Theme:** Warm Minimal (primary) + Booking First (secondary)
**Status:** REVIEW — automated and visual checks pass; native Thai proofread and real-device check pending.

## Art-direction brief
1. **Customer and feeling.** Office workers, residents and visitors around Phrom Phong who want a good massage at a specific time without phoning. They need to feel *calm, and sure of what they're getting*.
2. **Visual concept.** Rice paper, cocoa and herbal olive — a quiet shophouse spa with a printed menu on the wall.
3. **Palette.** cream `#f6efe4` · ink `#2e231d` (≈ 14:1) · ink-2 `#554539` (≈ 8:1) · muted `#6d5d50` (≈ 5.6:1) · olive `#4f5a2b` band and buttons (cream text ≈ 7:1) · turmeric `#c58a2a` decorative only · turmeric-ink `#8a5a12` for text (≈ 5:1).
4. **Typography.** Pridi (warm Thai + Latin serif, light weights) for headings and the menu; Krub (friendly Thai + Latin sans) for text.
5. **Layout grammar.** Warm minimal: lots of quiet space, 6 px corners, thin lines; a tall photo beside a booking "ticket"; a full-width olive price board with dotted leaders; a staggered three-photo visit strip.
6. **Images.** Overhead Thai-style massage on a patterned tiled floor, a frangipani foot soak, hands-on Thai massage, oil, a garden lounge, a diffuser.
7. **Interactions.** (a) Booking ticket in the hero (treatment, length, date, start time, people) with a live sample price. (b) Every price line on the menu board sets treatment + length in the ticket. Start times are generated so each treatment ends by closing time, and past times are hidden for today.
8. **Mobile.** Ticket directly under the title (booking first); image after; menu board single column; summary card stacks above the details form.
9. **Distinct from D01–D04.** Booking widget as hero, printed-menu board with leaders, olive/cream palette, Pridi serif; no arches (D02), no dark photo hero (D03), no doorway tiles or tables (D04).

## Honesty choices
- Sample prices and "times are preferences, not live availability" next to the price.
- Tipping, pregnancy/injury and cancellation explained plainly; no health details collected in the form.
- Preview mode says nothing is booked; optional `NEXT_PUBLIC_THARA_BOOKING_ENDPOINT`.

## Acceptance record
- Checks (2026-10-18): typecheck ✓ · lint ✓ · unit tests ✓ (`tests/thara-booking.test.ts`) · build ✓ · smoke 7/7 ✓ · zero console errors · no horizontal overflow at 360/390/820/1440.
- To move to COMPLETE: native Thai proofread and real-device check (date/time pickers).
