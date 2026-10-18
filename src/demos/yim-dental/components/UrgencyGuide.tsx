"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { yimConfig } from "../config";
import { urgent as u } from "../content";
import { assessUrgency, emptyTriage, type Pain, type TriageAnswers } from "../triage";
import { scrollToId, useYim } from "./YimContext";
import styles from "./Yim.module.css";

type YesNo = "redFlags" | "injury" | "bleeding";

/** Four quick questions → general guidance on how soon to be seen. */
export function UrgencyGuide({ lang }: { lang: Locale }) {
  const [answers, setAnswers] = useState<TriageAnswers>(emptyTriage);
  const { setReason, setUrgency } = useYim();
  const result = assessUrgency(answers);
  const phone = yimConfig.contact.phone;

  const yesNo = (key: YesNo) => (
    <fieldset className={styles.question} key={key}>
      <legend>{u.questions[key][lang]}</legend>
      <div className={styles.answers}>
        {([true, false] as const).map((value) => (
          <label key={String(value)} className={styles.answer}>
            <input
              type="radio"
              name={`triage-${key}`}
              checked={answers[key] === value}
              onChange={() => setAnswers((a) => ({ ...a, [key]: value }))}
            />
            <span>{value ? u.yes[lang] : u.no[lang]}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <div className={styles.guide}>
      <div className={styles.questions}>
        {yesNo("redFlags")}
        {answers.redFlags !== true ? (
          <>
            {yesNo("injury")}
            {yesNo("bleeding")}
            <fieldset className={styles.question}>
              <legend>{u.questions.pain[lang]}</legend>
              <div className={styles.answers}>
                {(Object.keys(u.pain) as Pain[]).map((p) => (
                  <label key={p} className={styles.answer}>
                    <input type="radio" name="triage-pain" checked={answers.pain === p} onChange={() => setAnswers((a) => ({ ...a, pain: p }))} />
                    <span>{u.pain[p][lang]}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        ) : null}
      </div>

      <div className={styles.result} data-urgency={result ?? "none"} aria-live="polite">
        {result ? (
          <>
            <p className={styles.resultTag}>{lang === "th" ? "คำแนะนำ" : "Guidance"}</p>
            <h3>{u.results[result].title[lang]}</h3>
            <p>{u.results[result].body[lang]}</p>
            <div className={styles.resultActions}>
              {result === "emergency" ? (
                <a href="tel:1669" className={styles.dangerButton}>
                  1669
                </a>
              ) : (
                <>
                  {result === "today" ? (
                    phone ? (
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className={styles.primary}>
                        {u.call[lang]}
                      </a>
                    ) : (
                      <p className={styles.callOff}>{u.callOff[lang]}</p>
                    )
                  ) : null}
                  <button
                    type="button"
                    className={result === "today" ? styles.secondary : styles.primary}
                    onClick={() => {
                      setReason(result === "routine" ? "checkup" : "pain");
                      setUrgency(result);
                      scrollToId("book");
                    }}
                  >
                    {u.book[lang]}
                  </button>
                </>
              )}
              <button type="button" className={styles.textButton} onClick={() => setAnswers(emptyTriage)}>
                {u.reset[lang]}
              </button>
            </div>
          </>
        ) : (
          <p className={styles.waiting}>{u.waiting[lang]}</p>
        )}
        <p className={styles.guideNote}>{u.disclaimer[lang]}</p>
      </div>
    </div>
  );
}
