"use client";

import { useId } from "react";
import { toMinutes } from "@/lib/dates";
import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { MAX_PEOPLE, samplePrice, startTimes } from "../booking";
import { booking as b, picker as p } from "../content";
import { durationsFor, menu, type TreatmentId } from "../menu";
import { scrollToId, useBooking } from "./BookingContext";
import styles from "./Thara.module.css";

/** The booking "ticket" in the hero: treatment, length, date, time, people. */
export function Picker({ lang }: { lang: Locale }) {
  const { values, update, chooseTreatment, today, nowMinutes } = useBooking();
  const id = useId();
  const lengths = durationsFor(values.treatment);
  const times = startTimes(values.duration).filter(
    (t) => !(values.date && values.date === today && nowMinutes !== undefined && toMinutes(t) <= nowMinutes),
  );

  return (
    <section className={styles.ticket} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.ticketTitle}>
        {p.title[lang]}
      </h2>

      <div className={styles.ticketField}>
        <label htmlFor={`${id}-treatment`}>{p.treatment[lang]}</label>
        <select id={`${id}-treatment`} value={values.treatment} onChange={(e) => chooseTreatment(e.target.value as TreatmentId)}>
          {menu.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name[lang]}
            </option>
          ))}
        </select>
      </div>

      <fieldset className={styles.ticketField}>
        <legend>{p.duration[lang]}</legend>
        <div className={styles.lengths}>
          {lengths.map((d) => (
            <label key={d} className={styles.length}>
              <input type="radio" name={`${id}-duration`} checked={values.duration === d} onChange={() => update({ duration: d, time: "" })} />
              <span>{b.minutes[lang](d)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.ticketRow}>
        <div className={styles.ticketField}>
          <label htmlFor={`${id}-date`}>{p.date[lang]}</label>
          <input id={`${id}-date`} type="date" min={today || undefined} value={values.date} onChange={(e) => update({ date: e.target.value, time: "" })} />
        </div>
        <div className={styles.ticketField}>
          <label htmlFor={`${id}-time`}>{p.time[lang]}</label>
          <select id={`${id}-time`} value={values.time} onChange={(e) => update({ time: e.target.value })}>
            <option value="">{p.timePlaceholder[lang]}</option>
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.ticketField}>
        <span id={`${id}-people`}>{p.people[lang]}</span>
        <div className={styles.stepper} role="group" aria-labelledby={`${id}-people`}>
          <button type="button" onClick={() => update({ people: Math.max(1, values.people - 1) })} disabled={values.people <= 1} aria-label={lang === "th" ? "ลดจำนวนคน" : "Fewer people"}>
            −
          </button>
          <output aria-live="polite">{values.people}</output>
          <button type="button" onClick={() => update({ people: Math.min(MAX_PEOPLE, values.people + 1) })} disabled={values.people >= MAX_PEOPLE} aria-label={lang === "th" ? "เพิ่มจำนวนคน" : "More people"}>
            +
          </button>
        </div>
      </div>

      <div className={styles.ticketTotal} aria-live="polite">
        <span>{p.total[lang]}</span>
        <strong>{formatTHB(samplePrice(values.treatment, values.duration, values.people), lang)}</strong>
      </div>
      <p className={styles.ticketNote}>{p.sample[lang]}</p>

      <button type="button" className={styles.primary} onClick={() => scrollToId("book")}>
        {p.next[lang]} ↓
      </button>
    </section>
  );
}
