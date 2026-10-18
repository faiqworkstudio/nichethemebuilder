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
