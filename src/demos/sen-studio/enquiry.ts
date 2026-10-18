/**
 * Pure enquiry + budget logic for Sen Studio, kept free of React so it can be
 * unit-tested and reused if a real backend is connected later.
 */
import { isEmail, isLineId, normaliseThaiPhone } from "@/lib/contact";
import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { budgetBands, form, plannerRates, type PlannerScope, type PlannerType } from "./content";
import type { BudgetBand } from "./projects";

export type EnquiryType = keyof typeof form.types;
export type Timeline = keyof typeof form.timelines;
export type ContactMethod = keyof typeof form.methods;

export type EnquiryValues = {
  type: EnquiryType | "";
  location: string;
  size: string;
  budget: BudgetBand | "";
  timeline: Timeline | "";
  details: string;
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  replyLang: Locale;
  consent: boolean;
};

export type EnquiryField = keyof EnquiryValues;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const DETAILS_MAX = 800;

export const emptyEnquiry = (replyLang: Locale): EnquiryValues => ({
  type: "",
  location: "",
  size: "",
  budget: "",
  timeline: "",
  details: "",
  name: "",
  method: "",
  lineId: "",
  phone: "",
  email: "",
  replyLang,
  consent: false,
});

export { formatTHB, normaliseThaiPhone };

/** Field order matters: the error summary lists errors in form order. */
export function validateEnquiry(v: EnquiryValues, lang: Locale): EnquiryErrors {
  const e: EnquiryErrors = {};
  const msg = form.errors;

  if (!v.type) e.type = msg.type[lang];
  if (v.location.trim().length < 2) e.location = msg.location[lang];
  if (v.size.trim()) {
    const n = Number(v.size);
    if (!Number.isFinite(n) || n < 5 || n > 5000) e.size = msg.size[lang];
  }
  if (!v.budget) e.budget = msg.budget[lang];
  if (!v.timeline) e.timeline = msg.timeline[lang];
  if (v.details.length > DETAILS_MAX) e.details = msg.details[lang];
  if (v.name.trim().length < 1) e.name = msg.name[lang];
  if (!v.method) e.method = msg.method[lang];
  if (v.method === "line" && !isLineId(v.lineId)) e.lineId = msg.lineId[lang];
  if (v.method === "phone" && !normaliseThaiPhone(v.phone)) e.phone = msg.phone[lang];
  if (v.method === "email" && !isEmail(v.email)) e.email = msg.email[lang];
  if (!v.consent) e.consent = msg.consent[lang];

  return e;
}

/**
 * Only the contact field for the chosen method is kept, so we never pass on
 * data the visitor typed and then switched away from.
 */
export function toPayload(v: EnquiryValues) {
  const contact =
    v.method === "line"
      ? v.lineId.trim()
      : v.method === "phone"
        ? normaliseThaiPhone(v.phone)
        : v.email.trim();
  return {
    type: v.type,
    location: v.location.trim(),
    sizeSqm: v.size.trim() ? Number(v.size) : null,
    budget: v.budget,
    timeline: v.timeline,
    details: v.details.trim(),
    name: v.name.trim(),
    contactMethod: v.method,
    contact,
    replyLanguage: v.replyLang,
  };
}

/** Human-readable summary in the page language, used for preview and copy. */
export function summaryRows(v: EnquiryValues, lang: Locale): [string, string][] {
  const f = form.fields;
  const p = toPayload(v);
  const band = budgetBands.find((b) => b.value === v.budget);
  const rows: [string, string][] = [
    [f.type[lang], v.type ? form.types[v.type][lang] : "—"],
    [f.location[lang], p.location],
    [f.size[lang], p.sizeSqm ? `${p.sizeSqm} m²` : "—"],
    [f.budget[lang], band ? band.label[lang] : "—"],
    [f.timeline[lang], v.timeline ? form.timelines[v.timeline][lang] : "—"],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${form.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
    [f.replyLang[lang], form.replyLangs[v.replyLang][lang]],
  ];
  if (p.details) rows.push([f.details[lang], p.details]);
  return rows;
}

export const summaryText = (v: EnquiryValues, lang: Locale) =>
  [form.summaryHeading[lang], "", ...summaryRows(v, lang).map(([k, val]) => `${k}: ${val}`)].join("\n");

/* ---------- Budget planner ---------- */

export const AREA_MIN = 15;
export const AREA_MAX = 1000;

export type Estimate = { low: number; high: number; rate: [number, number]; band: BudgetBand };

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

export function estimate(type: PlannerType, scope: PlannerScope, area: number): Estimate | null {
  if (!Number.isFinite(area) || area < AREA_MIN || area > AREA_MAX) return null;
  const rate = plannerRates[type][scope];
  const step = scope === "design" ? 1_000 : 10_000;
  const low = roundTo(rate[0] * area, step);
  const high = roundTo(rate[1] * area, step);
  return { low, high, rate, band: bandFor((low + high) / 2) };
}

export function bandFor(amount: number): BudgetBand {
  return budgetBands.find((b) => amount <= b.max)?.value ?? "o4m";
}

/** Planner space types map directly onto enquiry project types. */
export const plannerToEnquiryType = (t: PlannerType): EnquiryType => t;
