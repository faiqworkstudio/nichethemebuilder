# Known Issues

Add each issue with severity, affected demo, reproduction, current status, and next action.

## Open issues
- **Brand naming check:** User requested “Klickdoe” while earlier design material referenced “OXE Marketing.” Keep the studio label configurable and inspect existing assets before deciding which name appears in the public-facing UI.
- **Contact details:** No verified phone, email, LINE ID, physical address or social URLs are provided here. Do not invent them; centralize demo-safe placeholders and clearly label them.

### D01 Sen Studio (updated 2026-10-18)
- **Thai copy needs a native proofread** — Severity: medium. All Thai in `src/demos/sen-studio/content.ts` and `projects.ts` was written and checked by Claude, not by a native speaker. Next action: have a Thai speaker review before presenting to Thai prospects; then mark D01 COMPLETE.
- **Not yet tested on real devices** — Severity: medium. Verified in headless Chromium at 390 / 820 / 1440 px only. Next action: check iOS Safari and Android Chrome, especially Thai line breaks in large headings (browser Thai word-breaking can split headings awkwardly).
- **Enquiry form has no backend** — Severity: by design. Preview mode is clearly labelled. Next action (for a real client): set `NEXT_PUBLIC_SEN_ENQUIRY_ENDPOINT` to a form service and confirm its PDPA/data-retention terms.
- **Contact, LINE and address are not connected** — Severity: by design. Values are `null` in `src/demos/sen-studio/config.ts`; UI shows "not connected in this demo".
- **Concept imagery is stock photography** — Severity: low. Some photos are not Bangkok-specific (e.g. garden house in Bang Na concept). Labelled as illustrative on every project page and in the footer. Credits in `docs/CREDITS.md`.
- **Budget planner rates are illustrative** — Severity: low. THB/m² ranges in `content.ts` are plausible placeholders, labelled as not a quote. A real client must supply their own ranges.

### Portfolio shell
- **Klickdoe contact details not configured** — Severity: medium for sales use. `src/config/studio.ts` has `email`/`lineUrl` set to null, so the showcase hides its contact CTA in production. Next action: add real details.
- **Showcase is English only** — Severity: low. The shell has one Thai line; a full Thai version could follow once there are more demos.
- **Screenshots must be regenerated after visual changes** — run `npm run build && npm start`, then `npm run screenshots`, and commit `public/showcase/`.
