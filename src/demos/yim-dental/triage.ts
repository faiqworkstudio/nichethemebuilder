/** Pure "Is it urgent?" logic for Yim Dental (unit tested). General guidance, not diagnosis. */

export type Pain = "none" | "comes-goes" | "constant";

export type TriageAnswers = {
  /** Spreading facial swelling, fever, or trouble breathing or swallowing. */
  redFlags: boolean | null;
  /** A tooth knocked out or broken in an accident. */
  injury: boolean | null;
  /** Bleeding that hasn't stopped after 20 minutes of pressure. */
  bleeding: boolean | null;
  pain: Pain | null;
};

export type Urgency = "emergency" | "today" | "soon" | "routine";

export const emptyTriage: TriageAnswers = { redFlags: null, injury: null, bleeding: null, pain: null };

/** Returns null until every question is answered. Red flags always win. */
export function assessUrgency(a: TriageAnswers): Urgency | null {
  if (a.redFlags === true) return "emergency";
  if (a.redFlags === null || a.injury === null || a.bleeding === null || a.pain === null) return null;
  if (a.injury || a.bleeding || a.pain === "constant") return "today";
  if (a.pain === "comes-goes") return "soon";
  return "routine";
}
