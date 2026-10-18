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
