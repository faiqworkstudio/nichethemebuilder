# D01 — Sen Studio (เส้น สตูดิโอ) · Interior design & renovation

**Routes:** `/demos/sen-studio/th` (default) · `/demos/sen-studio/en` · `/demos/sen-studio/{th,en}/projects/<slug>`
**Code:** `src/demos/sen-studio/` + `src/app/demos/sen-studio/[lang]/`
**Theme:** Architectural Portfolio (primary) + Portfolio-to-Quote (secondary)
**Status:** REVIEW — all automated and visual checks pass; waiting on a native Thai proofread and real-device check (see bottom).

## Art-direction brief

1. **Customer and feeling.** Bangkok condo owners, townhouse owners and small-office managers planning a
   renovation of roughly ฿0.5–4M. They have been burned by — or heard stories about — vague quotes, slipping
   schedules and contractors who disappear. They need to feel *this studio is precise and straight with me*.
2. **Visual concept.** The website as a well-drawn construction set: sheet numbers, ink rules, dimension lines
   and a title block — calm plaster tones with one laterite accent.
3. **Palette (WCAG contrast).**
   | Token | Hex | Use | Contrast |
   |---|---|---|---|
   | paper | `#f3f0ea` | page background (plaster) | — |
   | ink | `#1d1c1a` | text, rules | 14.97:1 on paper |
   | ink-2 | `#46433d` | body copy | 8.67:1 on paper |
   | muted | `#67625a` | labels | 5.32:1 on paper, 4.73:1 on paper-2 |
   | accent (laterite) | `#9a4426` | CTA, sheet codes | 5.72:1 on paper; white on accent 6.5:1 |
   | dark | `#22211e` | studio band, footer | dark-ink 13.19:1, dark-muted 6.91:1 |
   | danger | `#a3241b` | form errors | 6.53:1 on paper |
4. **Typography.** IBM Plex Sans Thai (300/400/500/600) for both Thai and Latin, so the voice stays the same
   across languages; light 300 weight at display sizes, tight tracking in English only, looser line-height
   (1.28–1.75) and zero tracking for Thai. IBM Plex Mono for Latin-only annotations (sheet codes, dimensions,
   areas) — never for Thai text.
5. **Layout grammar.** Architectural / drawing set. 12-column grid; every section opens with a ruled strip
   (`A-01 … A-06` sheet code, title, intro); content set in schedules and tables rather than cards; one dark
   band (studio) for rhythm.
6. **Images.** Natural light interiors with real materials (timber, concrete, plaster), two process shots
   (drawing, strip-out) and one workshop shot. Mixed aspect ratios (4:3.3 hero, 4:5 index preview, 3:2 and
   4:5 process pair, 16:8.5 project lead). Captions in mono like drawing labels. All labelled as concept
   imagery.
7. **Interactions.** (a) Project index: hovering or focusing a row swaps the large sticky preview; type filter
   with live result count. (b) Budget planner: type + area + scope → ballpark range, "use this in the
   enquiry" pre-fills the form's budget band and project type.
8. **Mobile.** Section nav becomes a horizontally scrolling ruled row under the header; hero image goes
   full-bleed; title block becomes 2×2; project index turns into thumbnail rows (no hover preview); services
   schedule stacks with inline inclusions; process becomes a vertical timeline with a left rule; planner
   stacks above the form.
9. **What makes it distinct.** First demo, so it sets the baseline: no cards, no rounded corners, no shadows,
   drawing-set vocabulary, plaster/ink/laterite palette, single-family Thai-Latin type. Later demos must not
   reuse the sheet-strip headings, ruled schedules or plaster palette.

## Page sequence

Demo notice (in flow) → header → hero + title block → A-01 Projects (index + preview) → A-02 Services
(schedule) → A-03 Studio (dark band, principles, roles) → A-04 Process (6-step sequence, process images,
"good to know" notes) → A-05 Budget planner + enquiry form → A-06 FAQ → footer (contact from config, credits).

## Acceptance record

- **Demo ID / industry:** D01 / Interior design & renovation
- **Primary and secondary theme:** Architectural Portfolio + Portfolio-to-Quote
- **Route:** `/demos/sen-studio/th`, `/demos/sen-studio/en`
- **Target customer:** Bangkok design-and-build / renovation studios and their prospective clients
- **Conversion goal:** qualified project enquiry (site survey request)
- **Unique design decisions:** sheet-numbered section strips, dimension line over hero, title block,
  ruled services schedule, drawing "notes" box, mono annotations
- **Functional features:** real TH/EN routes with hreflang + translated metadata; language switch keeps the
  section anchor; filterable project index with preview; 5 project pages (10 with both languages);
  budget planner → form; validated form (error summary, inline errors, Thai phone/LINE/email checks) with
  honest preview mode and optional real endpoint; copy-summary; contact/LINE from `config.ts`
- **Quality checks run (2026-10-18):** typecheck ✓ · eslint ✓ · 13 unit tests ✓ · production build ✓
  (15 static pages) · browser smoke test (8 flows) ✓ · no console errors · no horizontal overflow at
  390 / 820 / 1440 px · full-page visual review in TH + EN at mobile, tablet, desktop
- **Known limitations:** see `docs/KNOWN_ISSUES.md`
- **Status:** REVIEW

## Quality gates (CLAUDE.md §8)

Design
- [x] Visually distinct from every existing demo (first demo; sets the baseline)
- [x] First viewport feels intentional and well-composed
- [x] No generic AI language, decorative clutter or pointless overlays
- [x] Typography, spacing and image crops are consistent
- [x] No repeated template sections just to fill space
- [x] Desktop and mobile each feel designed

Content and trust
- [x] All visible copy is finished and relevant
- [x] Demo status is clear (notice bar, title block, concept labels, form demo mode, footer)
- [x] No fake claims, invented reviews or broken placeholder links (contacts show "not connected")
- [~] Thai and English content checked — reviewed by Claude; **native Thai speaker proofread still pending**

Functionality
- [x] Navigation and CTAs work
- [x] Language switcher works across the page and project pages
- [x] Forms validate and have honest demo behaviour
- [x] No console errors or broken assets
- [x] Keyboard focus visible; reduced motion disables transitions and smooth scrolling

Technical
- [x] Responsive at 390, 820 and 1440 px (automated + visual)
- [x] Semantic landmarks, alt text, titles, descriptions, Open Graph, hreflang
- [x] `next/image` with blur placeholders and fixed aspect ratios
- [x] Build / lint / tests run
- [x] Known limitations recorded

**To move to COMPLETE:** native Thai proofread of `content.ts` + `projects.ts`, and a check on a real iPhone
and Android phone (Safari/Chrome) — including Thai line breaking in headings.
