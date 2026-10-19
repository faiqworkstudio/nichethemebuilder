/** Pure intro-call request logic for Ledgerline (unit tested). */
import { contactValue, type ContactMethod } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { intro as copy } from "./content";

export type Need = keyof typeof copy.needs;

export type IntroValues = {
  stage: keyof typeof copy.stages | "";
  needs: Need[];
  structure: keyof typeof copy.structures | "";
  revenue: keyof typeof copy.revenues | "";
  language: Locale;
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  consent: boolean;
};

export type IntroField = keyof IntroValues;
export type IntroErrors = Partial<Record<IntroField, string>>;

export const emptyIntro = (language: Locale): IntroValues => ({
  stage: "",
  needs: [],
  structure: "",
  revenue: "",
  language,
  name: "",
  method: "",
  lineId: "",
  phone: "",
  email: "",
  consent: false,
});

export function validateIntro(v: IntroValues, lang: Locale): IntroErrors {
  const e: IntroErrors = {};
  const m = copy.errors;
  if (!v.stage) e.stage = m.stage[lang];
  if (!v.needs.length) e.needs = m.needs[lang];
  if (!v.structure) e.structure = m.structure[lang];
  if (!v.name.trim()) e.name = m.name[lang];
  if (!v.method) e.method = m.method[lang];
  else if (!contactValue(v.method, v)) {
    const key = v.method === "line" ? "lineId" : v.method;
    e[key] = m[key][lang];
  }
  if (!v.consent) e.consent = m.consent[lang];
  return e;
}

export function toIntroPayload(v: IntroValues) {
  return {
    stage: v.stage,
    needs: v.needs,
    structure: v.structure,
    revenue: v.revenue || null,
    language: v.language,
    name: v.name.trim(),
    contactMethod: v.method,
    contact: v.method ? contactValue(v.method, v) : null,
  };
}

export function introSummary(v: IntroValues, lang: Locale): [string, string][] {
  const f = copy.fields;
  const p = toIntroPayload(v);
  return [
    [f.stage[lang], v.stage ? copy.stages[v.stage][lang] : "—"],
    [f.needs[lang], v.needs.map((n) => copy.needs[n][lang]).join(", ") || "—"],
    [f.structure[lang], v.structure ? copy.structures[v.structure][lang] : "—"],
    [f.revenue[lang], v.revenue ? copy.revenues[v.revenue][lang] : "—"],
    [f.language[lang], copy.languages[v.language][lang]],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${copy.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
  ];
}
