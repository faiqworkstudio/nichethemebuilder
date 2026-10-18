# Demo Roadmap

## Portfolio strategy
Build complete, convincing demos one at a time. Prefer quality and distinction over many unfinished homepages. First three demos should demonstrate three different business problems and three materially different design directions.

## Status definitions
- `BACKLOG` — planned, not started.
- `NOT STARTED` — prioritised but not yet begun.
- `IN PROGRESS` — active implementation.
- `REVIEW` — feature-complete; quality checks remain.
- `COMPLETE` — quality gates in `CLAUDE.md` passed.
- `PAUSED` — intentionally paused with reason documented.
- `RETIRED` — removed from active portfolio, with reason recorded.

## Milestones
### M0 — Repository and tracking setup — DONE 2026-10-18
- [x] Inspect repository and current framework (repository was empty; Next.js chosen — see DESIGN_DECISIONS).
- [x] Establish project scripts and baseline checks (`npm run check`, `smoke`, `screenshots`).
- [x] Create session log, design decisions and known issues.
- [x] Identify how demos are routed and previewed (`/demos/<slug>/<lang>`, showcase at `/`).
- [x] Klickdoe showcase page with automated desktop / iPad / mobile screenshots.

### M1 — Demo 01: Interior design / renovation — REVIEW
- [x] Write art-direction brief (`docs/demos/D01_SEN_STUDIO.md`).
- [x] Reserve theme in tracker.
- [x] Build complete Thai-English site (home + 5 project pages per language).
- [x] Implement functional enquiry form with explicit demo mode (and optional real endpoint).
- [x] Test responsive layouts, links, language switcher and SEO.
- [x] Run checks and review actual rendered page.
- [ ] Native Thai proofread + real-device check → then mark COMPLETE.

### M2 — Demo 02: Beauty / aesthetic clinic — REVIEW (Mali Skin Clinic)
- [x] Use a materially different primary theme and layout (Soft Contemporary).
- [x] Avoid fabricated credentials, outcomes and testimonials (placeholder doctor slots, no prices/outcomes).
- [x] Implement Thai-English site and clear enquiry path (concern finder → consultation form).
- [x] Automated + visual checks.
- [ ] Native Thai proofread, real-device check, clinic-advertising read → COMPLETE.

### M3 — Demo 03: Boutique hotel / serviced apartment — REVIEW (Soi Nine House)
- [x] Use a third distinct primary theme and layout (Contemporary Boutique Hotel).
- [x] Configurable booking-engine hand-off (`bookingProviderUrl`) plus clearly labelled demo request.
- [x] Automated + visual checks.
- [ ] Native Thai proofread and real-device check → COMPLETE.

### M4 — Expansion
Continue through the theme tracker. Prioritise based on prospect feedback and the industries the studio wants to sell to.

## Per-demo acceptance record
For each demo, record:
- Demo ID / industry:
- Primary and secondary theme:
- Route / preview URL:
- Target customer:
- Conversion goal:
- Unique design decisions:
- Functional features:
- Quality checks run:
- Known limitations:
- Status:

## Acceptance records
- D01 Sen Studio — see `docs/demos/D01_SEN_STUDIO.md` (status: REVIEW).
- D02 Mali Skin Clinic — see `docs/demos/D02_MALI_CLINIC.md` (status: REVIEW).
- D03 Soi Nine House — see `docs/demos/D03_SOI_NINE.md` (status: REVIEW).
