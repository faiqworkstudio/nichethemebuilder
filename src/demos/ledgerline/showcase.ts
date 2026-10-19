import type { DemoEntry } from "@/studio/types";

export const ledgerShowcase: DemoEntry = {
  id: "D07",
  slug: "ledgerline",
  name: "Ledgerline Advisory",
  nameTh: "เลดเจอร์ไลน์ แอดไวซอรี",
  industry: "Accounting & business advisory",
  audience: "Small accounting, tax and company-set-up firms serving SMEs and foreign founders",
  goal: "Earn trust with plain explanations, then book a free intro call",
  theme: "Case Study Narrative + Quiet Editorial",
  summary:
    "Reads like a good business magazine: a serif masthead, a live countdown to this month's Thai filing dates, three clearly-labelled illustrative stories, a fee estimator, and footnotes that point to the official source.",
  features: [
    "Thai / English with real language switching",
    "Live countdown to the next PND, PP 30 and SSO dates",
    "Monthly fee estimator with sample ranges",
    "Illustrative stories labelled — no invented clients",
    "Footnoted tax facts and a placeholder for the licensed auditor",
  ],
  routes: { th: "/demos/ledgerline/th", en: "/demos/ledgerline/en" },
  palette: ["#fbfaf7", "#16181d", "#7d2230", "#f1eee7"],
  tryThis: "Check the ‘Coming up’ box for real filing dates, then move the payroll slider in the fee estimator.",
  sector: "Professional",
  status: "Review",
};
