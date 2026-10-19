# D07 — Ledgerline Advisory (เลดเจอร์ไลน์ แอดไวซอรี) · Accounting & business advisory

**Routes:** `/demos/ledgerline/th` (default) · `/en`
**Code:** `src/demos/ledgerline/` + `src/app/demos/ledgerline/[lang]/`
**Theme:** Case Study Narrative (primary) + Quiet Editorial (secondary)
**Status:** REVIEW — automated and visual checks pass; native Thai proofread, real-device check and a tax-date review by a Thai accountant pending.

## Art-direction brief
1. **Customer and feeling.** Café owners, online sellers and foreign founders in Bangkok who find Thai tax confusing and accountants hard to reach. They need to feel *these people will explain it to me, on time, at a known price*.
2. **Visual concept.** A well-made annual report or a quality financial newspaper: serif voice, double rules, footnotes — calm, precise, a little literary.
3. **Palette.** paper `#fbfaf7` · ink `#16181d` (≈ 17:1) · ink-2 `#474b54` (≈ 8.5:1) · muted `#61656e` (≈ 5.6:1) · claret `#7d2230` (white on claret ≈ 9.5:1; claret text on paper ≈ 9:1) · panel `#f1eee7`.
4. **Typography.** Taviraj (Thai-designed serif with a Latin companion) for display, questions and numbers; Noto Sans Thai for body and forms. Light-weight serif headlines, italic only in English.
5. **Layout grammar.** Editorial columns on a 12-col feel: masthead with double rule, standfirst, footnote markers (¹ ²) linking to a notes list above the footer, alternating story spreads, a timeline rule for "a month with us".
6. **Images.** Desaturated documentary photos (signing, café counter, founder at a laptop, shopping bags, a meeting table). No people are named; every story is tagged "Illustrative scenario — not a real client".
7. **Interactions.** (a) A live "Coming up: filing dates" card computes the next PND 1/3/53, SSO and PP 30 dates from today's Bangkok date, moving weekend deadlines to Monday. (b) A fee estimator (transactions band, VAT, payroll headcount) gives a sample monthly range.
8. **Mobile.** Hero card drops below the CTA; story spreads stack image over text; the services list and estimator stack; form option groups wrap.
9. **Distinct from D01–D06.** First serif-led editorial demo with footnotes and case-story spreads; only demo with a live, date-driven widget; claret on warm white is unused elsewhere. Avoids D06's Swiss numerals/3 px rules and D01's sheet strips.

## Honesty choices
- The three "stories" are framed as common questions with *illustrative scenarios*, each visibly labelled, never as client results.
- Fees are labelled sample figures, not a quote; > 400 transactions → "let's talk".
- Licensed-auditor slot is a dashed placeholder; legal/visa work is explicitly referred to licensed lawyers (footnote 2).
- Deadline card states that public holidays aren't included and to confirm dates with the Revenue Department.
- Intro form asks for no documents or financial details; preview mode sends nothing.

## Acceptance record
- Checks (2026-10-19): typecheck ✓ · lint ✓ · unit tests ✓ (`tests/ledgerline.test.ts`: weekend roll, deadline ordering, fee ranges, form validation) · build ✓ · smoke 7/7 ✓ · zero console errors · no overflow at 360/390/820/1440 (TH and EN).
- Found and fixed during review: hero headline ran to six lines (shortened, smaller clamp); flipped story put text in the narrow column; "30-" wrapped alone in the intro heading (non-breaking hyphen); intro double rule ran past the content width.
- To move to COMPLETE: native Thai proofread; real-device check; a Thai accountant to confirm filing dates (e-filing extensions change) and terminology.
