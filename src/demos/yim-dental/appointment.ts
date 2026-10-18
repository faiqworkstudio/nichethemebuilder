/** Pure appointment-request logic for Yim Dental (unit tested). */
import { contactValue, type ContactMethod } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { form } from "./content";
import type { Urgency } from "./triage";

export type Reason = keyof typeof form.reasons;

export type AppointmentValues = {
  reason: Reason | "";
  urgency: Urgency | null;
  patient: "adult" | "child";
  days: keyof typeof form.days | "";
  time: keyof typeof form.times | "";
  sso: keyof typeof form.sso;
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  nervous: boolean;
  consent: boolean;
};

export type AppointmentField = keyof AppointmentValues;
export type AppointmentErrors = Partial<Record<AppointmentField, string>>;

/** Everything except reason/urgency, which the page shares between sections. */
export const emptyDetails = (): Omit<AppointmentValues, "reason" | "urgency"> => ({
  patient: "adult",
  days: "",
  time: "",
  sso: "unsure",
  name: "",
  method: "",
  lineId: "",
  phone: "",
  email: "",
  nervous: false,
  consent: false,
});

export const emptyAppointment = (): AppointmentValues => ({ reason: "", urgency: null, ...emptyDetails() });

export function validateAppointment(v: AppointmentValues, lang: Locale): AppointmentErrors {
  const e: AppointmentErrors = {};
  const m = form.errors;
  if (!v.reason) e.reason = m.reason[lang];
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

export function toAppointmentPayload(v: AppointmentValues) {
  return {
    reason: v.reason,
    urgency: v.urgency,
    patient: v.patient,
    days: v.days,
    time: v.time,
    socialSecurity: v.sso,
    nervous: v.nervous,
    name: v.name.trim(),
    contactMethod: v.method,
    contact: v.method ? contactValue(v.method, v) : null,
  };
}

export function appointmentSummary(v: AppointmentValues, lang: Locale): [string, string][] {
  const f = form.fields;
  const p = toAppointmentPayload(v);
  const rows: [string, string][] = [
    [f.reason[lang], v.reason ? form.reasons[v.reason][lang] : "—"],
    [f.patient[lang], form.patients[v.patient][lang]],
    [f.days[lang], v.days ? form.days[v.days][lang] : "—"],
    [f.time[lang], v.time ? form.times[v.time][lang] : "—"],
    [f.sso[lang], form.sso[v.sso][lang]],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${form.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
  ];
  if (v.urgency) rows.splice(1, 0, [form.urgencyNote[lang], form.urgencyLabels[v.urgency][lang]]);
  if (v.nervous) rows.push(["✓", f.nervous[lang]]);
  return rows;
}
