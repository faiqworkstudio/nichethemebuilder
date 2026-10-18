import type { DemoEntry } from "@/studio/types";

/** How Sen Studio is presented on the Klickdoe showcase page. */
export const senShowcase: DemoEntry = {
  id: "D01",
  slug: "sen-studio",
  name: "Sen Studio",
  nameTh: "เส้น สตูดิโอ",
  industry: "Interior design & renovation",
  audience: "Bangkok condo renovators, design-and-build studios and office fit-out contractors",
  goal: "Turn portfolio browsing into qualified project enquiries",
  theme: "Architectural Portfolio + Portfolio-to-Quote",
  summary:
    "A drawing-set inspired site: sheet-numbered sections, fine ink rules and a project index that previews each concept on hover. Visitors can sketch a ballpark budget and carry it straight into a bilingual enquiry form.",
  features: [
    "Thai / English with real language switching",
    "Filterable project index + 5 concept project pages",
    "Budget planner feeding the enquiry form",
    "Validated enquiry form with honest preview mode",
    "Contact and LINE details configured in one file",
  ],
  routes: { th: "/demos/sen-studio/th", en: "/demos/sen-studio/en" },
  palette: ["#f3f0ea", "#1d1c1a", "#9a4426", "#22211e"],
  tryThis: "Sketch a budget in the planner, then watch it drop into the enquiry form.",
  sector: "Home & property",
  status: "Review",
};
