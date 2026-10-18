# Klickdoe Portfolio Lab

Concept websites for Bangkok businesses, built as sales demos for **Klickdoe**. Every demo is a fictional,
clearly labelled business with its own art direction, bilingual Thai–English content and working
interactions. `CLAUDE.md` is the source of truth for how demos are designed and reviewed; trackers live in
`docs/`.

| Route | What it is |
|---|---|
| `/` | Klickdoe showcase — every demo with desktop / iPad / mobile screenshots |
| `/demos/sen-studio/th` · `/en` | **D01 Sen Studio** — interior design & renovation (Architectural Portfolio) |
| `/demos/sen-studio/{th,en}/projects/<slug>` | Five concept project pages |

## Stack

Next.js 16 (App Router, static generation) · React 19 · TypeScript · CSS Modules · `next/font` · `next/image`.
No backend, no UI framework, no CSS framework. Playwright and `tsx` are dev-only (screenshots, smoke tests, unit tests).

## Scripts

```bash
npm install
npm run dev          # local development on http://localhost:3000
npm run build        # production build (all pages are pre-rendered)
npm start            # serve the production build

npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm test             # unit tests (tests/*.test.ts)
npm run check        # typecheck + lint + unit tests

# With `npm start` running in another terminal:
npm run smoke        # browser smoke test of D01 flows (language switch, filters, form, planner)
npm run screenshots  # regenerate public/showcase/<demo>/{desktop,tablet,mobile}.jpg
```

In environments where Playwright cannot download its browser, point it at an existing Chromium with
`PLAYWRIGHT_CHROMIUM_PATH=/path/to/chromium`.

## Project layout — one folder per demo

Each demo is self-contained so it can be maintained, reviewed and handed to a client on its own:

```
src/
  app/
    (studio)/                  # Klickdoe showcase shell (own root layout, lang="en")
    demos/sen-studio/[lang]/   # thin route files for D01 (own root layout, lang="th"|"en")
  demos/
    sen-studio/                # ← everything that belongs to D01
      config.ts                #   business name, contact/LINE, enquiry endpoint (one place)
      content.ts               #   all copy, Thai + English side by side
      projects.ts              #   concept projects + image imports
      enquiry.ts               #   pure form / budget logic (unit tested)
      seo.ts, paths.ts, fonts.ts, theme.css
      showcase.ts              #   how the demo appears on the showcase page
      components/              #   section components + CSS Modules
      assets/                  #   photography
  studio/                      # showcase components, demo registry, shared types
  config/studio.ts             # Klickdoe label + contact details (null until real)
  lib/i18n.ts                  # locale helpers shared by all demos
tests/                         # unit tests per demo
scripts/                       # screenshot capture + smoke tests
docs/                          # trackers, design system, decisions, per-demo briefs
```

Rules that keep demos separate:
- A demo imports only from its own folder and `src/lib` / `src/config`. Demos never import each other.
- Theme tokens are scoped to the demo's `<body>` class (`.sen`), so styles cannot leak between demos.
- Each demo has its own root layout (fonts, `lang`, metadata), so pages ship only that demo's CSS and fonts.

### Adding a demo

1. Reserve a theme in `docs/THEME_TRACKER.md` and write a brief in `docs/demos/`.
2. Create `src/demos/<slug>/` (config, content, components, assets, theme) and `src/app/demos/<slug>/[lang]/`.
3. Add `src/demos/<slug>/showcase.ts` and register it in `src/studio/registry.ts`.
4. `npm run build && npm start`, then `npm run screenshots` to add it to the showcase.

### Handing a demo to a client

Copy `src/demos/<slug>/`, its route folder, `src/lib/i18n.ts` and the config files into a fresh Next.js
project (or this repo minus the other demos), then fill in `config.ts` with the client's real name, contact
details, LINE URL and enquiry endpoint, and replace concept content and photography with real material.

## Deploying (Vercel)

Import the repo in Vercel; `vercel.json` pins the framework to Next.js, so the project works even if it was
created while the repository was still empty (which otherwise saves the preset as "Other" and serves only
`public/`, giving `404 NOT_FOUND` on every page). Leave Root Directory, Build Command and Output Directory on
their defaults.

## Configuration

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — public base URL for canonical and social metadata.
- `NEXT_PUBLIC_SEN_ENQUIRY_ENDPOINT` — when set, the D01 form POSTs JSON there; when empty the form runs in a
  clearly labelled preview mode and sends nothing.

Contact details (email, LINE, phone) are `null` in `src/config/studio.ts` and `src/demos/*/config.ts` until real,
verified details are supplied; the UI hides or labels them instead of showing dead links.

## Honesty rules

Demo businesses, projects and people are fictional and labelled as such on every page. No testimonials,
awards, metrics or client logos are invented. Photography credits: `docs/CREDITS.md`.
