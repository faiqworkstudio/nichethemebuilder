"use client";

import { useEffect, useState } from "react";
import { todayInBangkok } from "@/lib/dates";
import type { Locale } from "@/lib/i18n";
import { deadlines as t } from "../content";
import { upcomingDeadlines, type Deadline } from "../deadlines";
import styles from "./Ledger.module.css";

const monthName = (period: string, lang: Locale) =>
  new Intl.DateTimeFormat(lang === "th" ? "th-TH" : "en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${period}-01T00:00:00Z`));

const dayName = (date: string, lang: Locale) =>
  new Intl.DateTimeFormat(lang === "th" ? "th-TH" : "en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));

/** Live countdown to the next monthly filing dates, computed in the visitor's browser. */
export function DeadlineCard({ lang }: { lang: Locale }) {
  const [list, setList] = useState<Deadline[] | null>(null);
  useEffect(() => {
    // Dates depend on the visitor's "today", which a static page can't know at build time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setList(upcomingDeadlines(todayInBangkok()));
  }, []);

  return (
    <aside className={styles.deadlines} aria-labelledby="deadlines-title">
      <h2 id="deadlines-title">{t.title[lang]}</h2>
      <p className={styles.deadlinesLead}>{t.lead[lang]}</p>
      {list ? (
        <ol>
          {list.map((d) => (
            <li key={d.id}>
              <span className={styles.deadlineDays} data-soon={d.daysLeft <= 5 || undefined}>
                {t.days[lang](d.daysLeft)}
              </span>
              <span className={styles.deadlineName}>{t.names[d.id][lang]}</span>
              <span className={styles.deadlineMeta}>
                {dayName(d.date, lang)} · {t.period[lang]} {monthName(d.period, lang)}
                {d.moved ? ` · ${t.moved[lang]}` : ""}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <p className={styles.deadlineMeta}>{t.loading[lang]}</p>
      )}
      <p className={styles.deadlinesNote}>{t.note[lang]}</p>
    </aside>
  );
}
