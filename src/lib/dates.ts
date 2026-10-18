/**
 * Date helpers shared by booking demos. Dates are ISO yyyy-mm-dd strings
 * compared in UTC so a visitor's time zone can never shift a day.
 */

export const toUTC = (iso: string) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
};

export const isIsoDate = (iso: string) => !Number.isNaN(toUTC(iso));

export function nightsBetween(checkIn: string, checkOut: string): number | null {
  const a = toUTC(checkIn);
  const b = toUTC(checkOut);
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  return Math.round((b - a) / 86_400_000);
}

export const addDays = (iso: string, days: number) => new Date(toUTC(iso) + days * 86_400_000).toISOString().slice(0, 10);

/** Today in Bangkok (UTC+7), as yyyy-mm-dd. */
export const todayInBangkok = (now = new Date()) => new Date(now.getTime() + 7 * 3_600_000).toISOString().slice(0, 10);

/** Minutes since midnight ↔ "HH:MM". */
export const toMinutes = (hhmm: string) => {
  const m = /^(\d{2}):(\d{2})$/.exec(hhmm);
  return m ? +m[1] * 60 + +m[2] : NaN;
};
export const toHHMM = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
