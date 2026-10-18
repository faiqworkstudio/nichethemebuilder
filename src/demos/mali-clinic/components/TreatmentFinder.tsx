"use client";

import type { Locale } from "@/lib/i18n";
import { treatmentsCopy as t } from "../content";
import { concerns, treatments } from "../treatments";
import { useConcerns } from "./ConcernContext";
import styles from "./Mali.module.css";

/** Concern list on the left, matching treatments as expandable cards on the right. */
export function TreatmentFinder({ lang }: { lang: Locale }) {
  const { selected, toggle, set } = useConcerns();
  const visible = selected.length ? treatments.filter((tr) => tr.concerns.some((c) => selected.includes(c))) : treatments;

  return (
    <div className={styles.finder}>
      <div className={styles.finderSide}>
        <p className={styles.finderLabel} id="finder-label">
          {t.filterLabel[lang]}
        </p>
        <div role="group" aria-labelledby="finder-label" className={styles.concernList}>
          {concerns.map((c) => (
            <button key={c.id} type="button" aria-pressed={selected.includes(c.id)} onClick={() => toggle(c.id)} className={styles.concernButton}>
              <span className={styles.concernTick} aria-hidden="true" />
              <span>
                <strong>{c.label[lang]}</strong>
                <small>{c.hint[lang]}</small>
              </span>
            </button>
          ))}
        </div>
        <div className={styles.finderMeta}>
          <p aria-live="polite">{t.count[lang](visible.length)}</p>
          {selected.length ? (
            <button type="button" className={styles.textButton} onClick={() => set([])}>
              {t.all[lang]}
            </button>
          ) : null}
        </div>
        {selected.length ? (
          <a href="#book" className={styles.finderBook}>
            {t.addToConsult[lang]} →
          </a>
        ) : null}
      </div>

      <ul className={styles.treatmentList}>
        {visible.map((tr) => (
          <li key={tr.id}>
            <details className={styles.treatment} open={tr.id === "consult" || undefined}>
              <summary>
                <span className={styles.treatmentName}>{tr.name[lang]}</span>
                <span className={styles.treatmentTags}>
                  {tr.concerns.length === concerns.length
                    ? lang === "th"
                      ? "ทุกเรื่อง"
                      : "Every concern"
                    : tr.concerns.map((c) => concerns.find((x) => x.id === c)!.label[lang]).join(" · ")}
                </span>
                <span className={styles.plus} aria-hidden="true" />
              </summary>
              <div className={styles.treatmentBody}>
                <p>{tr.summary[lang]}</p>
                <dl className={styles.treatmentFacts}>
                  <div>
                    <dt>{t.facts.length[lang]}</dt>
                    <dd>{tr.length[lang]}</dd>
                  </div>
                  <div>
                    <dt>{t.facts.downtime[lang]}</dt>
                    <dd>{tr.downtime[lang]}</dd>
                  </div>
                  <div>
                    <dt>{t.facts.course[lang]}</dt>
                    <dd>{tr.course[lang]}</dd>
                  </div>
                </dl>
                <div className={styles.treatmentCols}>
                  <div>
                    <h4>{t.steps[lang]}</h4>
                    <ol>
                      {tr.steps[lang].map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4>{t.tellUs[lang]}</h4>
                    <p>{tr.tellUs[lang]}</p>
                    <p className={styles.price}>{t.price[lang]}</p>
                  </div>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
