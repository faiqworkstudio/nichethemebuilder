/** Pure booking logic for Thara (unit tested). */
import { contactValue, type ContactMethod } from "@/lib/contact";
import { isIsoDate, toHHMM, toMinutes } from "@/lib/dates";
import type { Locale } from "@/lib/i18n";
import { tharaConfig } from "./config";
import { booking as copy } from "./content";
import { durationsFor, getItem, type TreatmentId } from "./menu";

export type Therapist = "any" | "female" | "male";
export type Pressure = "light" | "medium" | "firm";

export type BookingValues = {
  treatment: TreatmentId;
  duration: number;
  date: string;
  time: string;
  people: number;
  therapist: Therapist;
  pressure: Pressure;
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  consent: boolean;
};

export type BookingField = keyof BookingValues;
export type BookingErrors = Partial<Record<BookingField, string>>;

export const MAX_PEOPLE = 4;

/** Start times every 30 minutes such that the treatment ends by closing time. */
export function startTimes(duration: number, opens = tharaConfig.opens, closes = tharaConfig.closes): string[] {
  const out: string[] = [];
  for (let m = opens; m + duration <= closes; m += 30) out.push(toHHMM(m));
  return out;
}

export const samplePrice = (treatment: TreatmentId, duration: number, people = 1) =>
  (getItem(treatment).prices[duration] ?? 0) * people;

export const defaultBooking = (): BookingValues => ({
  treatment: "thai",
  duration: 60,
  date: "",
  time: "",
  people: 1,
  therapist: "any",
  pressure: "medium",
  name: "",
  method: "",
  lineId: "",
  phone: "",
  email: "",
  consent: false,
});

export function validateBooking(v: BookingValues, lang: Locale, today: string, nowMinutes?: number): BookingErrors {
  const e: BookingErrors = {};
  const m = copy.errors;
  if (!durationsFor(v.treatment).includes(v.duration)) e.duration = m.duration[lang];
  if (!v.date || !isIsoDate(v.date)) e.date = m.date[lang];
  else if (v.date < today) e.date = m.past[lang];
  if (!v.time || !startTimes(v.duration).includes(v.time)) e.time = m.time[lang];
  else if (v.date === today && nowMinutes !== undefined && toMinutes(v.time) <= nowMinutes) e.time = m.timePassed[lang];
  if (v.people < 1 || v.people > MAX_PEOPLE) e.people = m.people[lang];
  if (!v.name.trim()) e.name = m.name[lang];
  if (!v.method) e.method = m.method[lang];
  else if (!contactValue(v.method, v)) {
    const key = v.method === "line" ? "lineId" : v.method;
    e[key] = m[key][lang];
  }
  if (!v.consent) e.consent = m.consent[lang];
  return e;
}

export function toBookingPayload(v: BookingValues) {
  return {
    treatment: v.treatment,
    duration: v.duration,
    date: v.date,
    time: v.time,
    people: v.people,
    therapist: v.therapist,
    pressure: v.pressure,
    name: v.name.trim(),
    contactMethod: v.method,
    contact: v.method ? contactValue(v.method, v) : null,
  };
}

export function bookingSummary(v: BookingValues, lang: Locale): [string, string][] {
  const f = copy.fields;
  const p = toBookingPayload(v);
  return [
    [f.treatment[lang], `${getItem(v.treatment).name[lang]} · ${copy.minutes[lang](v.duration)}`],
    [f.when[lang], v.date && v.time ? `${v.date} · ${v.time}` : "—"],
    [f.people[lang], String(v.people)],
    [f.therapist[lang], copy.therapists[v.therapist][lang]],
    [f.pressure[lang], copy.pressures[v.pressure][lang]],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${copy.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
  ];
}
