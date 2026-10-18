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

### D02 Mali Skin Clinic (2026-10-18)
- **Thai proofread and real-device check pending** — Severity: medium. Same as D01.
- **Clinic-advertising rules** — Severity: medium before showing to a real clinic. Copy avoids prices, promotions, outcomes and invented credentials, but should be read against current Thai rules for medical-facility advertising.
- **Consultation form has no backend** — by design; preview mode labelled. Set `NEXT_PUBLIC_MALI_CONSULT_ENDPOINT` for a real clinic.
- **No clinic interior photography** — Severity: low. Imagery is products, hands and facials; a real clinic should supply its own rooms and team.

### D03 Soi Nine House (2026-10-18)
- **Thai proofread and real-device check pending** — Severity: medium. Check native date pickers on iOS Safari and Android Chrome.
- **No real availability** — by design. Sample rates are labelled; connect `bookingProviderUrl` or `NEXT_PUBLIC_SOI_REQUEST_ENDPOINT` for a real property.
- **Sketch map is illustrative** — Severity: low. Pins are approximate and labelled "not to scale"; a live site might add an embedded map (needs a provider and consent review).

### Showcase
- **Hero collage shows the first three demos only** — by design; later demos appear in the list below.

### D04 Yim Dental Clinic (2026-10-18)
- **Triage wording needs a dentist's review** — Severity: medium before a real pitch. Logic is deliberately conservative (red flags → hospital) and unit tested, but clinical wording should be checked by a professional.
- **Sample prices** — by design and labelled; a real clinic must supply its own price list (and check rules on displaying prices).
- **Thai proofread and real-device check pending** — Severity: medium.

### D05 Thara Thai Massage & Spa (2026-10-18)
- **No live availability** — by design; times are labelled as preferences. A real spa would connect a booking system or `NEXT_PUBLIC_THARA_BOOKING_ENDPOINT`.
- **Thai proofread and real-device check pending** — Severity: medium.

### D06 Plot Property (2026-10-18)
- **Static sample data** — by design. A real agency needs a listing feed or CMS; the search logic (`search.ts`) is already independent of the data source.
- **Clicking filters before the page finishes loading** — Severity: low. On a very slow connection, a filter clicked before hydration can be reset when the explorer reads the URL. Next action: read the URL during first render once Next exposes it for static pages, or disable controls until mounted.
- **Thai proofread and real-device check pending** — Severity: medium.
