/** Pure viewing-request logic for Plot Property (unit tested). */
import { contactValue, type ContactMethod } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { viewing as copy } from "./content";
import type { Listing } from "./listings";

export type ViewingValues = {
  when: keyof typeof copy.when | "";
  move: keyof typeof copy.move | "";
  name: string;
  method: ContactMethod | "";
  lineId: string;
  phone: string;
  email: string;
  consent: boolean;
};

export type ViewingField = keyof ViewingValues;
export type ViewingErrors = Partial<Record<ViewingField, string>>;

export const emptyViewing = (): ViewingValues => ({ when: "", move: "", name: "", method: "", lineId: "", phone: "", email: "", consent: false });

export function validateViewing(v: ViewingValues, lang: Locale): ViewingErrors {
  const e: ViewingErrors = {};
  const m = copy.errors;
  if (!v.when) e.when = m.when[lang];
  if (!v.move) e.move = m.move[lang];
  if (!v.name.trim()) e.name = m.name[lang];
  if (!v.method) e.method = m.method[lang];
  else if (!contactValue(v.method, v)) {
    const key = v.method === "line" ? "lineId" : v.method;
    e[key] = m[key][lang];
  }
  if (!v.consent) e.consent = m.consent[lang];
  return e;
}

export function toViewingPayload(listing: Listing, v: ViewingValues) {
  return {
    listing: listing.ref,
    when: v.when,
    timeframe: v.move,
    name: v.name.trim(),
    contactMethod: v.method,
    contact: v.method ? contactValue(v.method, v) : null,
  };
}

export function viewingSummary(listing: Listing, v: ViewingValues, lang: Locale): [string, string][] {
  const f = copy.fields;
  const p = toViewingPayload(listing, v);
  return [
    [copy.listing[lang], `${listing.ref} · ${listing.title[lang]}`],
    [f.when[lang], v.when ? copy.when[v.when][lang] : "—"],
    [listing.deal === "rent" ? f.move[lang] : f.buy[lang], v.move ? copy.move[v.move][lang] : "—"],
    [f.name[lang], p.name],
    [f.method[lang], v.method ? `${copy.methods[v.method][lang]}: ${p.contact ?? ""}` : "—"],
  ];
}
