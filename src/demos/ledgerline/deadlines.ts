/**
 * Monthly Thai filing deadlines (e-filing), computed from a Bangkok date.
 * Deadlines that land on a weekend move to the next Monday; public holidays
 * are not modelled, which the UI says plainly. Pure and unit tested.
 */
import { addDays, toUTC } from "@/lib/dates";

export type DeadlineId = "wht" | "sso" | "vat";

/** Day of the month each return is due, for the previous month's activity. */
export const monthlyRules: { id: DeadlineId; day: number }[] = [
  { id: "wht", day: 15 },
  { id: "sso", day: 15 },
  { id: "vat", day: 23 },
];

export type Deadline = { id: DeadlineId; date: string; daysLeft: number; moved: boolean; period: string };

const iso = (y: number, m: number, d: number) => new Date(Date.UTC(y, m, d)).toISOString().slice(0, 10);

/** Rolls Saturday/Sunday forward to Monday. */
export function rollWeekend(date: string): { date: string; moved: boolean } {
  const day = new Date(toUTC(date)).getUTCDay();
  if (day === 6) return { date: addDays(date, 2), moved: true };
  if (day === 0) return { date: addDays(date, 1), moved: true };
  return { date, moved: false };
}

/** The next occurrence of every monthly deadline on or after `today`, soonest first. */
export function upcomingDeadlines(today: string): Deadline[] {
  const t = new Date(toUTC(today));
  const out: Deadline[] = [];
  for (const rule of monthlyRules) {
    for (let offset = 0; offset < 2; offset++) {
      const y = t.getUTCFullYear();
      const m = t.getUTCMonth() + offset;
      const { date, moved } = rollWeekend(iso(y, m, rule.day));
      if (date >= today) {
        // The return covers the month before the deadline month (yyyy-mm).
        const period = new Date(Date.UTC(y, m - 1, 1)).toISOString().slice(0, 7);
        out.push({ id: rule.id, date, moved, period, daysLeft: Math.round((toUTC(date) - toUTC(today)) / 86_400_000) });
        break;
      }
    }
  }
  return out.sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
}
