import type { DemoEntry } from "@/studio/types";

export const yimShowcase: DemoEntry = {
  id: "D04",
  slug: "yim-dental",
  name: "Yim Dental Clinic",
  nameTh: "ยิ้ม ทันตกรรม",
  industry: "Dental clinic",
  audience: "Neighbourhood dental clinics serving Thai families and expats",
  goal: "Get people in pain seen at the right time, and make routine visits easy to book",
  theme: "Humanist Professional + Treatment Library",
  summary:
    "Task-first and reassuring: three doorways in the hero, an honest 'is it urgent?' guide that knows when to send you to hospital instead, a searchable treatment table with sample prices, and a page written for people who are nervous of the dentist.",
  features: [
    "Thai / English with real language switching",
    "Urgency guide → pre-filled appointment request",
    "Searchable treatment table (cards on mobile)",
    "Nervous-patient options carried into the booking",
    "Sample prices and placeholder dentists clearly labelled",
  ],
  routes: { th: "/demos/yim-dental/th", en: "/demos/yim-dental/en" },
  palette: ["#fbfcfc", "#0d6b66", "#f5c84c", "#14262b"],
  tryThis: "Answer the toothache questions with “constant” pain, then send the request — the urgency travels with it.",
  sector: "Health & beauty",
  status: "Review",
};
