/**
 * Pure stay-request logic for Soi Nine House (unit tested). Dates are ISO
 * yyyy-mm-dd strings compared in UTC so time zones can't shift a night.
 */
import { contactValue, type ContactMethod } from "@/lib/contact";
import { addDays, nightsBetween, todayInBangkok, toUTC } from "@/lib/dates";
import type { Locale } from "@/lib/i18n";
import { request } from "./content";
import { getRoom, nightlyRooms, type RoomId } from "./rooms";

export const MAX_NIGHTS = 28;

export { addDays, nightsBetween, todayInBangkok };

/** Rooms that fit the party size (nightly rooms only). */
export const roomsFor = (guests: number) => nightlyRooms.filter((r) => r.sleeps >= guests);

/** Illustrative total for the planner — never presented as a real price. */
export const sampleTotal = (room: RoomId, nights: number) => getRoom(room).sampleRate * nights;

export type StayValues = {
  room: RoomId | "";
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  requests: string;
  consent: boolean;
};

export type StayField = keyof StayValues;
export type StayErrors = Partial<Record<StayField, string>>;

export const REQUESTS_MAX = 500;

export const emptyStay = (): StayValues => ({
  room: "",
  checkIn: "",
  checkOut: "",
  guests: 2,
  name: "",
  method: "",
  lineId: "",
  phone: "",
  email: "",
  requests: "",
  consent: false,
});

export function validateStay(v: StayValues, lang: Locale, today: string): StayErrors {
  const e: StayErrors = {};
  const m = request.errors;
  if (!v.checkIn || Number.isNaN(toUTC(v.checkIn))) e.checkIn = m.checkIn[lang];
  else if (v.checkIn < today) e.checkIn = m.past[lang];
  const nights = v.checkIn && v.checkOut ? nightsBetween(v.checkIn, v.checkOut) : null;
  const monthly = v.room !== "" && !!getRoom(v.room).monthly;
  if (!v.checkOut || nights === null) e.checkOut = m.checkOut[lang];
  else if (nights < 1) e.checkOut = m.order[lang];
  else if (monthly && nights < MAX_NIGHTS) e.checkOut = m.tooShort[lang];
  else if (!monthly && nights > MAX_NIGHTS) e.checkOut = m.tooLong[lang];
  if (!v.room) e.room = m.room[lang];
  else if (getRoom(v.room).sleeps < v.guests) e.guests = m.guests[lang];
  if (!v.name.trim()) e.name = m.name[lang];
  if (!v.method) e.method = m.method[lang];
  else if (!contactValue(v.method, v)) {
    const key = v.method === "line" ? "lineId" : v.method;
    e[key] = m[key][lang];
  }
  if (v.requests.length > REQUESTS_MAX) e.requests = m.requests[lang];
  if (!v.consent) e.consent = m.consent[lang];
  return e;
}

export function toStayPayload(v: StayValues) {
  return {
    room: v.room,
    checkIn: v.checkIn,
    checkOut: v.checkOut,
    nights: nightsBetween(v.checkIn, v.checkOut),
    guests: v.guests,
    name: v.name.trim(),
    contactMethod: v.method,
    contact: v.method ? contactValue(v.method, v) : null,
    requests: v.requests.trim(),
  };
}

export function staySummary(v: StayValues, lang: Locale): [string, string][] {
  const f = request.fields;
  const p = toStayPayload(v);
  const rows: [string, string][] = [
    [f.room[lang], v.room ? getRoom(v.room).name[lang] : "—"],
    [f.checkIn[lang], v.checkIn],
    [f.checkOut[lang], `${v.checkOut} (${request.nights[lang](p.nights ?? 0)})`],
    [f.guests[lang], String(v.guests)],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${request.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
  ];
  if (p.requests) rows.push([f.requests[lang], p.requests]);
  return rows;
}
