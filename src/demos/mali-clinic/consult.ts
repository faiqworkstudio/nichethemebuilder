/** Pure consultation-request logic for Mali Skin Clinic (unit tested). */
import { contactValue, type ContactMethod } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { form } from "./content";
import { concerns as concernList, type Concern } from "./treatments";

export type DayPref = keyof typeof form.dayOptions;
export type TimePref = keyof typeof form.timeOptions;

export type ConsultValues = {
  concerns: Concern[];
  firstTime: "yes" | "no";
  days: DayPref | "";
  time: TimePref | "";
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  language: Locale;
  consent: boolean;
};

export type ConsultField = keyof ConsultValues;
export type ConsultErrors = Partial<Record<ConsultField, string>>;

export const emptyConsult = (language: Locale): Omit<ConsultValues, "concerns"> => ({
  firstTime: "yes",
  days: "",
  time: "",
  name: "",
  method: "",
  lineId: "",
  phone: "",
  email: "",
  language,
  consent: false,
});

export function validateConsult(v: ConsultValues, lang: Locale): ConsultErrors {
  const e: ConsultErrors = {};
  const m = form.errors;
  if (v.concerns.length === 0) e.concerns = m.concerns[lang];
  if (!v.days) e.days = m.days[lang];
  if (!v.time) e.time = m.time[lang];
  if (!v.name.trim()) e.name = m.name[lang];
  if (!v.method) e.method = m.method[lang];
  else if (!contactValue(v.method, v)) {
    const key = v.method === "line" ? "lineId" : v.method;
    e[key] = m[key][lang];
  }
  if (!v.consent) e.consent = m.consent[lang];
  return e;
}

/** Only the chosen contact channel is included — nothing else the visitor typed. */
export function toConsultPayload(v: ConsultValues) {
  return {
    concerns: v.concerns,
    firstVisit: v.firstTime === "yes",
    days: v.days,
    time: v.time,
    name: v.name.trim(),
    contactMethod: v.method,
    contact: v.method ? contactValue(v.method, v) : null,
    language: v.language,
  };
}

export function consultSummary(v: ConsultValues, lang: Locale): [string, string][] {
  const f = form.fields;
  const p = toConsultPayload(v);
  const concernNames = concernList.filter((c) => v.concerns.includes(c.id)).map((c) => c.label[lang]);
  return [
    [f.concerns[lang], concernNames.join(", ") || "—"],
    [f.firstTime[lang], form.firstTimeOptions[v.firstTime][lang]],
    [f.days[lang], v.days ? form.dayOptions[v.days][lang] : "—"],
    [f.time[lang], v.time ? form.timeOptions[v.time][lang] : "—"],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${form.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
    [f.language[lang], form.languages[v.language][lang]],
  ];
}
