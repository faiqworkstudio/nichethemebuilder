"use client";

import { useId, useState } from "react";
import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { services } from "../content";
import { estimateFee, type Volume } from "../fees";
import styles from "./Ledger.module.css";

export function FeeEstimator({ lang }: { lang: Locale }) {
  const t = services.estimator;
  const id = useId();
  const [volume, setVolume] = useState<Volume>("small");
  const [vat, setVat] = useState(false);
  const [employees, setEmployees] = useState(0);
  const [lo, hi] = estimateFee(volume, vat, employees);

  return (
    <section className={styles.estimator} aria-labelledby={`${id}-title`}>
      <h3 id={`${id}-title`}>{t.title[lang]}</h3>
      <fieldset>
        <legend>{t.volume[lang]}</legend>
        <div className={styles.options}>
          {(Object.keys(t.volumes) as Volume[]).map((v) => (
            <label key={v}>
              <input type="radio" name={`${id}-volume`} checked={volume === v} onChange={() => setVolume(v)} />
              <span>{t.volumes[v][lang]}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className={styles.check}>
        <input type="checkbox" checked={vat} onChange={(e) => setVat(e.target.checked)} />
        <span>{t.vat[lang]}</span>
      </label>
      <div className={styles.range}>
        <label htmlFor={`${id}-staff`}>
          {t.employees[lang]} <output htmlFor={`${id}-staff`}>{employees}</output>
        </label>
        <input id={`${id}-staff`} type="range" min={0} max={20} step={1} value={employees} onChange={(e) => setEmployees(Number(e.target.value))} aria-valuetext={String(employees)} />
      </div>
      <p className={styles.estimate} aria-live="polite">
        <span>{t.result[lang]}</span>
        <strong>
          {formatTHB(lo, lang)} – {formatTHB(hi, lang)}
        </strong>
      </p>
      <p className={styles.small}>{t.larger[lang]}</p>
      <p className={styles.small}>{t.note[lang]}</p>
    </section>
  );
}
