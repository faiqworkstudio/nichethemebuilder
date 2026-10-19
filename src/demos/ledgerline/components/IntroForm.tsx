"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { ledgerConfig } from "../config";
import { intro as t } from "../content";
import { emptyIntro, introSummary, toIntroPayload, validateIntro, type IntroErrors, type IntroField, type IntroValues, type Need } from "../introCall";
import styles from "./Ledger.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";
type Choice = "stage" | "structure" | "revenue" | "language" | "method";

export function IntroForm({ lang }: { lang: Locale }) {
  const f = t.fields;
  const id = useId();
  const fid = (name: IntroField) => `${id}-${name}`;
  const isDemo = !ledgerConfig.introEndpoint;

  const [values, setValues] = useState<IntroValues>(() => emptyIntro(lang));
  const set = <K extends IntroField>(key: K, value: IntroValues[K]) => setValues((v) => ({ ...v, [key]: value }));
  const toggleNeed = (n: Need) => setValues((v) => ({ ...v, needs: v.needs.includes(n) ? v.needs.filter((x) => x !== n) : [...v.needs, n] }));
  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const errors: IntroErrors = attempted ? validateIntro(values, lang) : {};
  const errorList = Object.entries(errors) as [IntroField, string][];

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateIntro(values, lang)).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) return setStatus("preview");
    setStatus("sending");
    try {
      const res = await fetch(ledgerConfig.introEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toIntroPayload(values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const err = (name: IntroField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;
  const described = (name: IntroField) => (errors[name] ? `${fid(name)}-error` : undefined);
  const tag = <span className={styles.tag}>{t.required[lang]}</span>;
  const choices = (name: Choice, options: Record<string, Record<Locale, string>>) => (
    <div className={styles.options} id={fid(name)} tabIndex={-1}>
      {Object.keys(options).map((key) => (
        <label key={key}>
          <input type="radio" name={name} value={key} checked={values[name] === key} onChange={() => set(name, key as IntroValues[typeof name])} />
          <span>{options[key][lang]}</span>
        </label>
      ))}
    </div>
  );

  if (status === "preview" || status === "sent") {
    const preview = status === "preview";
    return (
      <div className={styles.formBox}>
        <p className={styles.flag}>{preview ? "Demo · Preview" : "Received"}</p>
        <h3 ref={resultRef} tabIndex={-1} className={styles.formTitle}>
          {preview ? t.preview.title[lang] : t.sent.title[lang]}
        </h3>
        <p className={styles.muted}>{preview ? t.preview.body[lang] : t.sent.body[lang]}</p>
        <dl className={styles.summary}>
          {introSummary(values, lang).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {preview ? (
          <button type="button" className={styles.secondary} onClick={() => setStatus("editing")}>
            {t.preview.edit[lang]}
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.formBox}>
      {isDemo ? <p className={styles.demo}>{t.demoMode[lang]}</p> : null}
      <form onSubmit={onSubmit} noValidate className={styles.form}>
        {errorList.length ? (
          <div ref={summaryRef} tabIndex={-1} role="alert" className={styles.errorSummary}>
            <p>{t.errors.summary[lang]}</p>
            <ul>
              {errorList.map(([name, message]) => (
                <li key={name}>
                  <a href={`#${fid(name)}`}>{message}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {status === "failed" ? (
          <p role="alert" className={styles.errorSummary}>
            {t.failed[lang]}
          </p>
        ) : null}

        <fieldset className={styles.fieldset} aria-describedby={described("stage")}>
          <legend>
            {f.stage[lang]} {tag}
          </legend>
          {choices("stage", t.stages)}
          {err("stage")}
        </fieldset>

        <fieldset className={styles.fieldset} aria-describedby={described("needs")}>
          <legend>
            {f.needs[lang]} {tag}
          </legend>
          <div className={styles.options} id={fid("needs")} tabIndex={-1}>
            {(Object.keys(t.needs) as Need[]).map((n) => (
              <label key={n}>
                <input type="checkbox" name="needs" value={n} checked={values.needs.includes(n)} onChange={() => toggleNeed(n)} />
                <span>{t.needs[n][lang]}</span>
              </label>
            ))}
          </div>
          {err("needs")}
        </fieldset>

        <fieldset className={styles.fieldset} aria-describedby={described("structure")}>
          <legend>
            {f.structure[lang]} {tag}
          </legend>
          {choices("structure", t.structures)}
          {err("structure")}
        </fieldset>

        <div className={styles.row2}>
          <fieldset className={styles.fieldset}>
            <legend>{f.revenue[lang]}</legend>
            {choices("revenue", t.revenues)}
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>{f.language[lang]}</legend>
            {choices("language", t.languages)}
          </fieldset>
        </div>

        <div className={styles.field}>
          <label htmlFor={fid("name")}>
            {f.name[lang]} {tag}
          </label>
          <input id={fid("name")} name="name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name || undefined} aria-describedby={described("name")} />
          {err("name")}
        </div>

        <fieldset className={styles.fieldset} aria-describedby={described("method")}>
          <legend>
            {f.method[lang]} {tag}
          </legend>
          {choices("method", t.methods)}
          {err("method")}
        </fieldset>

        {values.method
          ? (() => {
              const key = values.method === "line" ? "lineId" : values.method;
              return (
                <div className={styles.field}>
                  <label htmlFor={fid(key)}>
                    {f[key][lang]} {tag}
                  </label>
                  <input
                    id={fid(key)}
                    name={key}
                    type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                    inputMode={key === "phone" ? "tel" : undefined}
                    autoComplete={key === "email" ? "email" : key === "phone" ? "tel" : "off"}
                    autoCapitalize="none"
                    value={values[key]}
                    onChange={(e) => set(key, e.target.value)}
                    aria-invalid={!!errors[key] || undefined}
                    aria-describedby={described(key)}
                  />
                  {err(key)}
                </div>
              );
            })()
          : null}

        <label className={styles.check} htmlFor={fid("consent")}>
          <input id={fid("consent")} type="checkbox" name="consent" checked={values.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={!!errors.consent || undefined} aria-describedby={described("consent")} />
          <span>{f.consent[lang]}</span>
        </label>
        {err("consent")}

        <p className={styles.small}>{t.privacy[lang]}</p>
        <button type="submit" className={styles.primary} disabled={status === "sending"}>
          {status === "sending" ? t.sending[lang] : isDemo ? t.submitDemo[lang] : t.submit[lang]}
        </button>
      </form>
    </div>
  );
}
