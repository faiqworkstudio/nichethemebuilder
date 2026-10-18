import type { DemoEntry } from "@/studio/types";

export const soiShowcase: DemoEntry = {
  id: "D03",
  slug: "soi-nine",
  name: "Soi Nine House",
  nameTh: "บ้านซอยเก้า",
  industry: "Boutique hotel & serviced apartment",
  audience: "Independent hotels and serviced apartments serving Thai and international guests",
  goal: "Turn browsing into a dated stay request — or a clean hand-off to the hotel's own booking engine",
  theme: "Contemporary Boutique Hotel + Neighbourhood Journal",
  summary:
    "Immersive and editorial: a full-bleed teak room, a date planner that carries through the whole page, a tabbed room catalogue and a hand-drawn neighbourhood map pinned to real Talat Noi and Chinatown places.",
  features: [
    "Thai / English with real language switching",
    "Date planner feeds room totals and the request form",
    "Accessible tabbed room catalogue (arrow-key support)",
    "Sketch map linked to a walking-distance journal",
    "Sample rates labelled; no fake reservation or payment",
  ],
  routes: { th: "/demos/soi-nine/th", en: "/demos/soi-nine/en" },
  palette: ["#f4efe6", "#2a211c", "#2c5a52", "#d6b27a"],
  tryThis: "Pick dates in the planner, open the Loft Suite tab, then hover the journal entries to light up the map.",
  sector: "Hospitality",
  status: "Review",
};
