/** Contact-field validation shared by every demo's forms. */

const LINE_ID = /^[a-z0-9._-]{4,20}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Accepts Thai numbers like 081 234 5678, 02-123-4567 or +66 81 234 5678. */
export function normaliseThaiPhone(raw: string): string | null {
  let digits = raw.replace(/[\s().-]/g, "");
  if (digits.startsWith("+66")) digits = "0" + digits.slice(3);
  return /^0\d{8,9}$/.test(digits) ? digits : null;
}

/** LINE IDs may be typed with a leading @ (official accounts). */
export const isLineId = (raw: string) => LINE_ID.test(raw.trim().replace(/^@/, ""));

export const isEmail = (raw: string) => EMAIL.test(raw.trim());

export type ContactMethod = "line" | "phone" | "email";

/** Returns the cleaned contact value for the chosen method, or null if invalid. */
export function contactValue(method: ContactMethod, v: { lineId: string; phone: string; email: string }) {
  if (method === "line") return isLineId(v.lineId) ? v.lineId.trim() : null;
  if (method === "phone") return normaliseThaiPhone(v.phone);
  return isEmail(v.email) ? v.email.trim() : null;
}
