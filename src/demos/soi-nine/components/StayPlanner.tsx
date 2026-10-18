"use client";

import { useId } from "react";
import type { Locale } from "@/lib/i18n";
import { addDays, MAX_NIGHTS, nightsBetween, roomsFor } from "../booking";
import { planner } from "../content";
import { scrollToId, useStay } from "./StayContext";
import styles from "./Soi.module.css";

/** Date + guest bar under the hero. Feeds the room catalogue and request form. */
export function StayPlanner({ lang }: { lang: Locale }) {
  const { checkIn, checkOut, guests, today, update } = useStay();
  const id = useId();
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : null;
  const valid = nights !== null && nights >= 1 && nights <= MAX_NIGHTS;
  const fits = roomsFor(guests).length;

  const setCheckIn = (value: string) => {
    // Keep check-out sensible when check-in moves past it.
    const out = checkOut && value && checkOut <= value ? addDays(value, 1) : checkOut;
    update({ checkIn: value, checkOut: out });
  };

  return (
    <form
      className={styles.planner}
      aria-labelledby={`${id}-title`}
      onSubmit={(e) => {
        e.preventDefault();
        scrollToId("rooms");
      }}
    >
      <h2 id={`${id}-title`} className="visually-hidden">
        {planner.title[lang]}
      </h2>
      <label className={styles.plannerField}>
        <span>{planner.checkIn[lang]}</span>
        <input type="date" min={today || undefined} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </label>
      <label className={styles.plannerField}>
        <span>{planner.checkOut[lang]}</span>
        <input
          type="date"
          min={checkIn ? addDays(checkIn, 1) : today || undefined}
          value={checkOut}
          onChange={(e) => update({ checkOut: e.target.value })}
        />
      </label>
      <label className={styles.plannerField}>
        <span>{planner.guests[lang]}</span>
        <select value={guests} onChange={(e) => update({ guests: Number(e.target.value) })}>
          {[1, 2, 3].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className={styles.plannerGo}>
        {planner.go[lang]}
      </button>
      <p className={styles.plannerStatus} aria-live="polite">
        {checkIn && checkOut && !valid ? (
          <span className={styles.warn}>{planner.invalid[lang]}</span>
        ) : (
          <>
            {valid ? <strong>{planner.nights[lang](nights!)} · </strong> : null}
            {planner.fits[lang](fits)} · {planner.sampleNote[lang]}
          </>
        )}
      </p>
    </form>
  );
}
