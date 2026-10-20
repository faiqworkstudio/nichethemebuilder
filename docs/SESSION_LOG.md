# Session Log

Append a new dated entry after each Claude Code work session. Never replace prior entries.

## 2026-10-18 — Initial portfolio kit created
- **Status:** Planning kit only; no website implementation is implied by this file.
- **Active demo:** D01 — Interior design / renovation.
- **Design direction:** Human, premium, modern, warm, trustworthy and professional; individual demos must have genuinely distinct art direction.
- **Theme reserved:** Architectural Portfolio + Portfolio-to-Quote (confirm against the repository before implementation).
- **Next action:** Inspect the existing codebase and available browser/test tooling; then implement D01 without overwriting existing work.
- **Checks run:** None; this kit contains instructions and planning documents, not a tested website.
- **Known limitations:** Studio name requested as “Klickdoe”; earlier design reference was OXE Marketing. Keep branding configurable and confirm existing repo assets before replacing anything.

## 2026-10-18 — D01 Sen Studio built; Klickdoe showcase added
- **Active demo and route:** D01 Sen Studio — `/demos/sen-studio/th`, `/demos/sen-studio/en`, project pages under `/projects/<slug>`. Showcase at `/`.
- **Starting state:** repository was empty (no commits). Copied `CLAUDE.md` and `docs/` from the portfolio kit (kit README kept as `docs/KIT_README.md`).
- **Stack chosen:** Next.js 16 App Router, React 19, TypeScript, CSS Modules, `next/font`, `next/image`; dev-only Playwright + tsx. Reasons in DESIGN_DECISIONS #7–8.
- **User requests added mid-session:** (1) a showcase landing page with real desktop / iPad / mobile screenshots of every demo; (2) projects clearly separated and easy to manage/sell from GitHub; (3) clean logic and working functionality. Addressed via the `/` showcase + `npm run screenshots`, the one-folder-per-demo layout documented in README, pure tested form logic, and a browser smoke test.
- **Files changed:** `package.json`, configs (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.env.example`, `.gitignore`), `src/app/(studio)/*`, `src/app/demos/sen-studio/[lang]/**`, `src/demos/sen-studio/**`, `src/studio/*`, `src/config/studio.ts`, `src/lib/i18n.ts`, `tests/sen-enquiry.test.ts`, `scripts/capture-showcase.mjs`, `scripts/smoke-sen-studio.mjs`, `public/showcase/sen-studio/*`, `README.md`, `docs/*`.
- **Design decisions:** Architectural Portfolio + Portfolio-to-Quote; drawing-set vocabulary (sheet codes, rules, dimension line, title block); plaster/ink/laterite palette; IBM Plex Sans Thai for both languages; Thai default; demo pages noindex. Full brief: `docs/demos/D01_SEN_STUDIO.md`.
- **Features completed:** hero + title block; filterable project index with hover/focus preview; 5 concept project pages; services schedule; studio principles + roles (no fake people); 6-step process + practical notes; budget planner feeding the enquiry form; bilingual validated enquiry form with error summary, honest preview mode and optional endpoint; FAQ; footer with config-driven contacts and credits; Klickdoe showcase with generated screenshots.
- **Checks run and results:** `npm run typecheck` ✓; `npm run lint` ✓; `npm test` 13/13 ✓; `npm run build` ✓ (15 static pages); `npm run smoke` 8/8 ✓; no console errors; no horizontal overflow at 390/820/1440 px; visual review of full pages in TH and EN at all three widths. Fixed during review: CSS reset specificity hiding button text, duplicate hero/preview image, "THB" instead of "฿", misaligned process outputs, oversized portrait gallery images, cross-layout prefetch warnings, small showcase screenshots.
- **Known issues:** native Thai proofread and real-device testing pending; no backend or real contacts by design. See KNOWN_ISSUES.
- **Exact next action:** get a native Thai speaker to proofread `src/demos/sen-studio/content.ts` and `projects.ts` and test on a real iPhone/Android; apply fixes, regenerate screenshots, mark D01 COMPLETE in THEME_TRACKER and DEMO_ROADMAP, then start D02 (beauty clinic) with Soft Contemporary + Consultation First — explicitly avoiding D01's ruled-schedule and sheet-strip vocabulary.

## 2026-10-18 (session 2) — Showcase redesign, D02 Mali Skin Clinic, D03 Soi Nine House
- **Requests:** (1) fix a Vercel `404 NOT_FOUND`; (2) make the design more creative and human; (3) continue building the other demos and add each to the landing page.
- **Vercel 404:** likely a framework preset saved as "Other" because the project was created from an empty repo; added `vercel.json` (`"framework": "nextjs"`). Not verifiable from this environment (Vercel host blocked) — user to confirm on the next deployment.
- **Showcase (`/`):** redesigned as a studio wall — taped screenshot prints, handwritten notes (Caveat), outlined demo numerals, "try this" sticky notes, sector filter, annotated phone section, working-together steps. See DESIGN_DECISIONS #14.
- **Shared primitives extracted:** `LocaleSwitch`, contact validation, ฿ formatting, bilingual metadata (`src/components`, `src/lib`). D01 migrated to them with no behaviour change (tests and smoke still pass).
- **D02 Mali Skin Clinic** (`/demos/mali-clinic/{th,en}`): Soft Contemporary + Consultation First. Concern chips → treatment finder → booking form (shared state); placeholder doctor slots; no prices/outcomes. Brief: `docs/demos/D02_MALI_CLINIC.md`.
- **D03 Soi Nine House** (`/demos/soi-nine/{th,en}`): Contemporary Boutique Hotel + Neighbourhood Journal. Stay planner → tabbed room catalogue (sample totals, fit warnings) → request form; sketch map linked to a walking journal of real Talat Noi/Chinatown places. Brief: `docs/demos/D03_SOI_NINE.md`.
- **Checks run:** typecheck ✓; lint ✓; unit tests 28/28 ✓; build ✓ (19 static pages); smoke 22/22 ✓ (D01 8, D02 6, D03 8); zero console errors and no horizontal overflow on 7 routes at 360/390/820/1440 px; full-page visual review of D02, D03 and the showcase at desktop and mobile. Fixed during review: function prop passed to a client component (build error), D02 mobile header overflow and nav clipping, D02 image corner, D03 header inside `<main>`, D03 14 px mobile overflow from date inputs, duplicate hero/room photo, showcase note positions.
- **Known issues:** native Thai proofread and real-device testing pending for D01–D03; D02 copy should be read against Thai clinic-advertising rules before a real pitch; no backends or real contacts by design.
- **Exact next action:** start D04 (dental clinic — Humanist Professional + Treatment Library) with a layout that avoids D02's pills/arches; then regenerate screenshots so it appears on the showcase.

## 2026-10-18 (session 2, continued) — D04 Yim Dental Clinic
- **Active demo and route:** D04 — `/demos/yim-dental/{th,en}`. Theme Humanist Professional + Treatment Library.
- **Built:** hero doorway tiles; "is it urgent?" triage (red flags → hospital/1669; injury/bleeding/constant pain → today; intermittent → 2–3 days; else routine) feeding the appointment form; nervous-patient section; searchable treatment table with sample prices (cards on mobile); first-visit steps and placeholder dentist slots; paying notes (written price first, Social Security check, PromptPay); appointment form with nervous flag; FAQ.
- **Checks:** typecheck ✓; lint ✓; unit tests 35/35 ✓; build ✓ (21 static pages); smoke 29/29 ✓ across four demos (D04 7/7); zero console errors and no overflow on 9 routes at 360/390/820/1440; desktop + mobile visual review.
- **Decision:** kept the header non-sticky (CLAUDE.md: no sticky elements covering content) — the "In pain?" route is already the first doorway tile.
- **Exact next action:** D05 (spa / massage — Warm Minimal + Booking First), avoiding D02's arches/pills and D03's dark hero.

## 2026-10-18 (session 2, continued) — D05 Thara Thai Massage & Spa
- **Active demo and route:** D05 — `/demos/thara-spa/{th,en}`. Theme Warm Minimal + Booking First.
- **Built:** hero booking ticket (treatment, length, date, start time within opening hours, people stepper, live sample price); olive menu board whose price lines start a booking; visit steps; good-to-know (pressure, pregnancy/injury, tipping, cancellation); details form with summary card and preview; FAQ and finding-us.
- **Refactor:** Bangkok date/time helpers moved to `src/lib/dates.ts`; D03 now uses them (tests unchanged and passing).
- **Checks:** typecheck ✓; lint ✓; unit tests 42/42 ✓; build ✓ (23 static pages); smoke 36/36 ✓ across five demos; zero console errors and no overflow on 11 routes at 360/390/820/1440; desktop + mobile visual review.
- **Exact next action:** D06 (real estate — Property Explorer + Modern Swiss) with honest "sample listings" and filters; then regenerate screenshots.

## 2026-10-18 (session 2, continued) — D06 Plot Property
- **Active demo and route:** D06 — `/demos/plot-property/{th,en}` + 8 listing pages per language. Theme Property Explorer + Modern Swiss.
- **Built:** hero with no-JS quick search; explorer (deal/type/area/beds/price cap/pets/sort) synced to the URL and remembered for the back link; listing pages with facts, features, "worth knowing" notes and a viewing request; "what renting costs" table; how-we-work; FAQ.
- **Checks:** typecheck ✓; lint ✓; unit tests 49/49 ✓; build ✓ (41 static pages); smoke 44/44 ✓ across six demos; zero console errors and no overflow on 14 routes at 360/390/820/1440.
- **Fixed during review:** back link lost searches that arrived via URL; viewing-form option groups overflowed; smoke test raced hydration (now waits for network idle).
- **Exact next action:** D07 (B2B consulting — Modern Swiss is now taken as a secondary, so use Case Study Narrative + Quiet Editorial or another unused primary) and continue down the expansion queue; regenerate screenshots after each.

## 2026-10-19 — D07 Ledgerline Advisory + showcase polish
- **Request:** "Continue improve design along the way" — keep adding demos and refining the showcase.
- **Active demo and route:** D07 — `/demos/ledgerline/{th,en}`. Theme Case Study Narrative + Quiet Editorial.
- **Files changed:** `src/demos/ledgerline/**`, `src/app/demos/ledgerline/[lang]/*`, `tests/ledgerline.test.ts`, `scripts/smoke-ledgerline.mjs`, `src/studio/registry.ts`, `src/app/(studio)/page.tsx`, `src/studio/DemoBoard.tsx`, `src/studio/studio.css`, `next.config.ts`, `.env.example`, `public/showcase/**`, docs.
- **Built:** masthead + standfirst hero with a live "Coming up: filing dates" card (PND 1/3/53 and SSO on the 15th, PP 30 on the 23rd, weekends rolled to Monday); three illustrative question-led story spreads with footnotes; services list + sample fee estimator; "a month with us" timeline and working principles with a placeholder auditor slot; FAQ; intro-call form (stage, needs, structure, revenue, language, contact) with honest preview; notes list and footer.
- **Showcase:** index strip of every demo under the hero (swipe row below 1200 px, wrapping grid above), "new!" tag on the newest demo, newest demo's phone screenshot in the hero and "inside" section; D06 spacing fixes.
- **Checks:** typecheck ✓; lint ✓; unit tests 57/57 ✓; build ✓; smoke ✓ across seven demos (D07 7/7); zero console errors and no overflow on 16 routes at 360/390/820/1440; desktop + mobile visual review of D07 and the showcase.
- **Fixed during review:** six-line hero headline; flipped story's narrow text column; "30-" orphan in the intro heading; intro double rule wider than the content; index strip clipping its last card on desktop.
- **Exact next action:** D08 (private tours / cooking class — Playful Hospitality + Full-Bleed Documentary), avoiding D03's full-bleed-with-header-over hero and D05's booking ticket; regenerate screenshots after.

## 2026-10-20 — Typography and background pass; D08–D10 in progress
- **Requests:** "Next stop after 10. Make sure all the designs are clean, modern, responsive, and humanized fonts in English and Thai"; then "change the creamy backgrounds — more creative, different, human"; "push everything to main".
- **Typography:** per-script font stacks (DESIGN_DECISIONS #20) for D01, D04, D05, D06; studio shell display headings now fall back to Noto Sans Thai for Thai names.
- **Backgrounds:** cream removed everywhere (DESIGN_DECISIONS #21): graph paper (shell), concrete grain (D01), blush (D02), faded teal (D03), indigo cotton (D05), ledger green with ruled panel (D07). Showcase palettes and browser theme colours updated; screenshots regenerated.
- **D08 Khao Hom Kitchen, D09 Toh Yao, D10 Lom Studio:** being built in separate git worktrees (one per demo) with pre-assigned, non-overlapping themes, fonts and non-cream palettes; they paused on a usage limit and were resumed. Not merged yet.
- **Checks:** typecheck ✓; lint ✓; unit tests 57/57 ✓; build ✓; smoke ✓ (7 demos); zero console errors and no overflow on 16 routes at 360/390/820/1440; visual review of every changed page.
- **Git:** pushed to `claude/festive-einstein-cwk0n5` and, at the user's request, to `main` (created — it did not exist on the remote).
- **Exact next action:** merge D08–D10 when each passes its checks, add them to the registry/redirects/docs, regenerate screenshots, re-run all suites, push to both branches; then stop at D10 as requested.
