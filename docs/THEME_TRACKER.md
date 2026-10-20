# Theme Tracker

**Rule:** Reserve a theme before building. Mark it `IN PROGRESS`, then `COMPLETE`, `PAUSED`, or `RETIRED`. A complete demo permanently records its primary theme so future demos do not accidentally become recolors of the same template.

| Demo ID | Industry | Primary theme | Secondary influence | Layout signature | Status | Last updated | Notes |
|---|---|---|---|---|---|---|---|
| D01 | Interior design / renovation (Sen Studio) | Architectural Portfolio | Portfolio-to-Quote | Sheet-numbered ruled sections, title block, hover-preview project index, budget planner → enquiry | REVIEW | 2026-10-18 | Built. Cool concrete (was plaster)/ink/laterite, IBM Plex Sans Thai + Plex Mono, no cards/radius/shadows. Brief: `docs/demos/D01_SEN_STUDIO.md` |
| D02 | Skin / aesthetic clinic (Mali Skin Clinic) | Soft Contemporary | Consultation First | Arch/circle image masks, pill nav, concern finder shared with booking form, placeholder doctor slots | REVIEW | 2026-10-18 | Blush plaster (was milk)/forest/clay, Trirong + Anuphan. No prices, outcomes or credentials invented. Brief: `docs/demos/D02_MALI_CLINIC.md` |
| D03 | Boutique hotel / serviced apartment (Soi Nine House) | Contemporary Boutique Hotel | Neighbourhood Journal | Full-bleed hero with overlaid header, planner bar, tabbed room catalogue, sketch map + journal | REVIEW | 2026-10-18 | Faded teal (was paper)/teak/river green, Fraunces + Noto Serif Thai + Sarabun. Sample rates labelled; no reservation. Brief: `docs/demos/D03_SOI_NINE.md` |
| D04 | Dental clinic (Yim Dental Clinic) | Humanist Professional | Treatment Library | Doorway tiles, "is it urgent?" triage tool, searchable treatment table → cards on mobile | REVIEW | 2026-10-18 | White/teal/sun-yellow, Nunito + Mitr / Nunito Sans + Niramit. Triage routes red flags to hospital/1669. Brief: `docs/demos/D04_YIM_DENTAL.md` |
| D05 | Thai massage & spa (Thara) | Warm Minimal | Booking First | Booking ticket in the hero, olive printed-menu price board with dotted leaders, staggered visit strip | REVIEW | 2026-10-18 | Indigo-washed cotton (was cream)/cocoa/olive/turmeric, Pridi + Mulish/Noto Sans Thai Looped. Sample prices; no live availability. Brief: `docs/demos/D05_THARA_SPA.md` |
| D06 | Real estate agent (Plot Property) | Property Explorer | Modern Swiss | Filter rail + results, URL-shareable search, 8 listing pages, cost table, numbered 3px-rule sections | REVIEW | 2026-10-18 | White/black/signal red, Schibsted Grotesk + Bai Jamjuree. Every listing labelled sample. Brief: `docs/demos/D06_PLOT_PROPERTY.md` |
| D07 | Accounting & business advisory (Ledgerline) | Case Study Narrative | Quiet Editorial | Masthead with double rule, live filing-date card in the hero, footnoted story spreads, fee estimator, timeline month | REVIEW | 2026-10-19 | White + ledger green/ink/claret, Taviraj + Noto Sans Thai. Stories labelled illustrative; fees sample. Brief: `docs/demos/D07_LEDGERLINE.md` |
| D08 | Tours / experiences | Playful Hospitality | Full-Bleed Documentary | Experience-led, itinerary and booking handoff | BACKLOG | — | — |
| D09 | Restaurant / café | Menu-Led | Independent Magazine | Editorial menu, hours and location | BACKLOG | — | — |
| D10 | Pilates / yoga | Botanical Calm | Sport Performance | Class information and instructor profiles | BACKLOG | — | — |
| D11 | Tailor / jewellery | Understated Luxury | Material Close-Up | Detail photography and appointment request | BACKLOG | — | — |
| D12 | Photo / video studio | Gallery White Cube | Image Mosaic | Portfolio-first, quiet navigation | BACKLOG | — | — |

## Before reserving a new theme

- [ ] Search this table and session log for prior use.
- [ ] Describe how the hero differs from earlier demos.
- [ ] Describe how the page rhythm differs.
- [ ] Describe how typography and image treatment differ.
- [ ] Confirm the theme fits the industry rather than being novelty for its own sake.
- [ ] Update this tracker before coding.

## Change log

Append dated entries when a theme is reserved, changed, completed, or retired.

### Reserved visual vocabulary (do not reuse in later demos)
- **D01:** sheet-code section strips (A-01…), dimension lines, title-block fact row, ruled "schedule" tables, plaster `#f3f0ea` + ink + laterite `#9a4426` palette, IBM Plex Sans Thai light display type, square-cornered controls.
- **D02:** arch and circle image masks, pill navigation and chips, milk `#f8f4ee` + forest `#344a3c` + clay palette, Trirong headings, dashed placeholder cards.
- **D03:** full-bleed photo hero with header over it, overlapping planner bar, vertical room tabs, dark teak band, hand-drawn SVG sketch map with numbered pins, Fraunces italic kickers.
- **D04:** three numbered doorway tiles in the hero, triage question cards with coloured result states, semantic treatment table, yellow tick bullets, Mitr headings.
- **D05:** hero booking ticket with stepper, full-width olive menu board with dotted price leaders, staggered 3-photo visit strip, Pridi light display.
- **D06:** red index numerals with 3 px black section rules, bordered segmented controls, hard-edged listing rows, single-typeface Swiss hierarchy.
- **D07:** masthead double rule, footnote markers + notes list, italic serif question headlines, "Illustrative scenario" outline tags, claret `#7d2230` accent, roman-numeral service list, vertical timeline rule.
- **Klickdoe shell (updated 2026-10-20):** blue graph-paper ground + navy/blue, Bricolage Grotesque + Inter + Caveat handwriting, taped screenshot prints, sticky-note tips, outlined demo numerals — reserved for the studio's own pages.

### 2026-10-18
- D01 reserved as `IN PROGRESS` (Architectural Portfolio + Portfolio-to-Quote) before coding; moved to `REVIEW` after build and checks. Not `COMPLETE` until native Thai proofread and real-device check.

### 2026-10-18 (later)
- D02 reserved `IN PROGRESS` → `REVIEW` (Soft Contemporary + Consultation First).
- D03 reserved `IN PROGRESS` → `REVIEW` (Contemporary Boutique Hotel + Neighbourhood Journal).
- Showcase shell restyled to a more human "studio wall" direction at the user's request.
- D04 reserved `IN PROGRESS` → `REVIEW` (Humanist Professional + Treatment Library).
- D05 reserved `IN PROGRESS` → `REVIEW` (Warm Minimal + Booking First).
- D06 reserved `IN PROGRESS` → `REVIEW` (Property Explorer + Modern Swiss).

### 2026-10-19
- D07 reserved `IN PROGRESS` → `REVIEW` (Case Study Narrative + Quiet Editorial). Modern Swiss was dropped as D07's primary because D06 already uses it.

### 2026-10-20
- Background palettes changed away from cream for the shell, D01, D02, D03, D05 and D07 (DESIGN_DECISIONS #21); per-script font pairings for D01, D04, D05 and D06 (#20). Rule: no cream/beige page grounds in future demos.
