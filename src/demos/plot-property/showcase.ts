import type { DemoEntry } from "@/studio/types";

export const plotShowcase: DemoEntry = {
  id: "D06",
  slug: "plot-property",
  name: "Plot Property",
  nameTh: "พล็อต พร็อพเพอร์ตี้",
  industry: "Real estate agent",
  audience: "Bangkok rental and sales agents working with Thai and expat clients",
  goal: "Let people filter honest listings fast, then request a viewing for a specific unit",
  theme: "Property Explorer + Modern Swiss",
  summary:
    "A strict black, white and red grid built for searching: filters that live in the URL so a search can be shared, listings that state walking distances, fees and pet rules up front, and a viewing request on every listing page.",
  features: [
    "Thai / English with real language switching",
    "Filters for deal, type, area, bedrooms, price and pets",
    "Shareable searches — filters are kept in the URL",
    "Eight sample listing pages with viewing requests",
    "'What renting costs' table in plain language",
  ],
  routes: { th: "/demos/plot-property/th", en: "/demos/plot-property/en" },
  palette: ["#ffffff", "#111111", "#d0021b", "#f4f4f2"],
  tryThis: "Choose Rent, 2+ bedrooms and pet-friendly, then copy the address bar — the search comes with it.",
  sector: "Home & property",
  status: "Review",
};
