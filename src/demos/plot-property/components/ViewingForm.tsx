"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { plotConfig } from "../config";
import { viewing as v } from "../content";
import { getListing } from "../listings";
import { emptyViewing, toViewingPayload, validateViewing, viewingSummary, type ViewingErrors, type ViewingField, type ViewingValues } from "../viewing";
import styles from "./Plot.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";
type Choice = "when" | "move" | "method";

export function ViewingForm({ lang, listingRef }: { lang: Locale; listingRef: string }) {
  const listing = getListing(listingRef)!;
  const f = v.fields;
  const id = useId();
  const fid = (name: ViewingField) => `${id}-${name}`;
  const isDemo = !plotConfig.viewingEndpoint;

  const [values, setValues] = useState<ViewingValues>(emptyViewing);
  const set = <K extends ViewingField>(key: K, value: ViewingValues[K]) => setValues((x) => ({ ...x, [key]: value }));
  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const errors: ViewingErrors = attempted ? validateViewing(values, lang) : {};
  const errorList = Object.entries(errors) as [ViewingField, string][];

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateViewing(values, lang)).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) return setStatus("preview");
    setStatus("sending");
    try {
      const res = await fetch(plotConfig.viewingEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toViewingPayload(listing, values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const err = (name: ViewingField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;
  const described = (name: ViewingField) => (errors[name] ? `${fid(name)}-error` : undefined);
  const tag = <span className={styles.tag}>{v.required[lang]}</span>;
  const choices = (name: Choice, options: Record<string, Record<Locale, string>>) => (
    <div className={styles.segmented} id={fid(name)} tabIndex={-1}>
      {Object.keys(options).map((key) => (
        <label key={key}>
          <input type="radio" name={name} value={key} checked={values[name] === key} onChange={() => set(name, key as ViewingValues[typeof name])} />
          <span>{options[key][lang]}</span>
        </label>
      ))}
    </div>
  );

  if (status === "preview" || status === "sent") {
    const preview = status === "preview";
    return (
      <div className={styles.formCard}>
        <p className={styles.flag}>{preview ? "Demo · Preview" : "Received"}</p>
        <h2 ref={resultRef} tabIndex={-1} className={styles.formTitle}>
          {preview ? v.preview.title[lang] : v.sent.title[lang]}
        </h2>
        <p className={styles.muted}>{preview ? v.preview.body[lang] : v.sent.body[lang]}</p>
        <dl className={styles.summary}>
          {viewingSummary(listing, values, lang).map(([k, val]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{val}</dd>
            </div>
          ))}
        </dl>
        {preview ? (
          <button type="button" className={styles.secondary} onClick={() => setStatus("editing")}>
            {v.preview.edit[lang]}
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.formCard} id="viewing">
      <h2 className={styles.formTitle}>{v.title[lang]}</h2>
      <p className={styles.muted}>{v.intro[lang]}</p>
      {isDemo ? <p className={styles.demo}>{v.demoMode[lang]}</p> : null}
      <form onSubmit={onSubmit} noValidate className={styles.form}>
        {errorList.length ? (
          <div ref={summaryRef} tabIndex={-1} role="alert" className={styles.errorSummary}>
            <p>{v.errors.summary[lang]}</p>
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
            {v.failed[lang]}
          </p>
        ) : null}

        <fieldset className={styles.filter} aria-describedby={described("when")}>
          <legend>
            {f.when[lang]} {tag}
          </legend>
          {choices("when", v.when)}
          {err("when")}
        </fieldset>
        <fieldset className={styles.filter} aria-describedby={described("move")}>
          <legend>
            {listing.deal === "rent" ? f.move[lang] : f.buy[lang]} {tag}
          </legend>
          {choices("move", v.move)}
          {err("move")}
        </fieldset>
        <div className={styles.filter}>
          <label htmlFor={fid("name")}>
            {f.name[lang]} {tag}
          </label>
          <input
            id={fid("name")}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={described("name")}
          />
          {err("name")}
        </div>
        <fieldset className={styles.filter} aria-describedby={described("method")}>
          <legend>
            {f.method[lang]} {tag}
          </legend>
          {choices("method", v.methods)}
          {err("method")}
        </fieldset>
        {values.method
          ? (() => {
              const key = values.method === "line" ? "lineId" : values.method;
              return (
                <div className={styles.filter}>
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
        <label className={styles.toggle} htmlFor={fid("consent")}>
          <input
            id={fid("consent")}
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={!!errors.consent || undefined}
            aria-describedby={described("consent")}
          />
          <span>{f.consent[lang]}</span>
        </label>
        {err("consent")}
        <p className={styles.hint}>{v.privacy[lang]}</p>
        <button type="submit" className={styles.primary} disabled={status === "sending"}>
          {status === "sending" ? v.sending[lang] : isDemo ? v.submitDemo[lang] : v.submit[lang]}
        </button>
      </form>
    </div>
  );
}
