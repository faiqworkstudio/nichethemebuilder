import type { DemoEntry } from "@/studio/types";

export const maliShowcase: DemoEntry = {
  id: "D02",
  slug: "mali-clinic",
  name: "Mali Skin Clinic",
  nameTh: "มะลิ สกินคลินิก",
  industry: "Skin & aesthetic clinic",
  audience: "Independent Bangkok skin, laser and facial clinics",
  goal: "Help nervous first-timers understand their options and book a doctor consultation",
  theme: "Soft Contemporary + Consultation First",
  summary:
    "Calm, rounded and reassuring: arch-shaped imagery, a jasmine mark and plain-spoken promises. Visitors pick what's bothering their skin once, and the treatment guide and booking form both follow along.",
  features: [
    "Thai / English with real language switching",
    "Concern finder that filters the treatment guide",
    "Shared concern picks pre-fill the booking form",
    "No prices, outcomes or credentials invented",
    "Doctor profiles shown as clearly marked placeholders",
  ],
  routes: { th: "/demos/mali-clinic/th", en: "/demos/mali-clinic/en" },
  palette: ["#fbf2f0", "#344a3c", "#a3573f", "#e3e8df"],
  tryThis: "Tap “Breakouts & acne” in the hero — the treatments and the booking form both update.",
  sector: "Health & beauty",
  status: "Review",
};
