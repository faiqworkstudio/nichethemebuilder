import type { DemoEntry } from "@/studio/types";

export const tharaShowcase: DemoEntry = {
  id: "D05",
  slug: "thara-spa",
  name: "Thara Thai Massage & Spa",
  nameTh: "ธารา นวดไทยและสปา",
  industry: "Thai massage & spa",
  audience: "Independent massage houses and day spas in Bangkok's busy neighbourhoods",
  goal: "Let people book a specific massage, length and time from the very first screen",
  theme: "Warm Minimal + Booking First",
  summary:
    "Quiet and warm: the booking ticket sits right in the hero, the menu is set like a printed price board with dotted leaders, and the page explains the visit, the etiquette and the tipping question in plain words.",
  features: [
    "Thai / English with real language switching",
    "Booking ticket in the hero: treatment, length, date, time, people",
    "Menu board prices start a booking in one tap",
    "Therapist and pressure preferences; times that respect closing hours",
    "Sample prices labelled; no fake confirmation",
  ],
  routes: { th: "/demos/thara-spa/th", en: "/demos/thara-spa/en" },
  palette: ["#f6efe4", "#4f5a2b", "#c58a2a", "#2e231d"],
  tryThis: "Tap a price on the olive menu board — the hero ticket jumps to that treatment and length.",
  sector: "Health & beauty",
  status: "Review",
};
