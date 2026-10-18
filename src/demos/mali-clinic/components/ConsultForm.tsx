"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { maliConfig } from "../config";
import { form } from "../content";
import {
  consultSummary,
  emptyConsult,
  toConsultPayload,
  validateConsult,
  type ConsultErrors,
  type ConsultField,
  type ConsultValues,
} from "../consult";
import { concerns } from "../treatments";
import { useConcerns } from "./ConcernContext";
import styles from "./Form.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";

export function ConsultForm({ lang }: { lang: Locale }) {
  const f = form.fields;
  const id = useId();
  const fid = (name: ConsultField) => `${id}-${name}`;
  const isDemo = !maliConfig.consultEndpoint;

  // Concerns are shared with the hero and treatment finder; the rest is local.
  const { selected, toggle } = useConcerns();
  const [rest, setRest] = useState(() => emptyConsult(lang));
  const values: ConsultValues = { ...rest, concerns: selected };
  const set = <K extends keyof typeof rest>(key: K, value: (typeof rest)[K]) => setRest((r) => ({ ...r, [key]: value }));

  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const errors: ConsultErrors = attempted ? validateConsult(values, lang) : {};
  const errorList = Object.entries(errors) as [ConsultField, string][];

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateConsult(values, lang)).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) return setStatus("preview");
    setStatus("sending");
    try {
      const res = await fetch(maliConfig.consultEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toConsultPayload(values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const err = (name: ConsultField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;
  const described = (name: ConsultField) => (errors[name] ? `${fid(name)}-error` : undefined);
  const tag = (required = true) => <span className={styles.tag}>{required ? form.required[lang] : form.optional[lang]}</span>;

  const radios = <K extends "firstTime" | "days" | "time" | "method" | "language">(
    name: K,
    options: Record<string, Record<Locale, string>>,
  ) => (
    <div className={styles.pills} id={fid(name)} tabIndex={-1}>
      {Object.keys(options).map((key) => (
        <label key={key} className={styles.pill}>
          <input
            type="radio"
            name={name}
            value={key}
            checked={rest[name] === key}
            onChange={() => set(name, key as (typeof rest)[K])}
          />
          <span>{options[key][lang]}</span>
        </label>
      ))}
    </div>
  );

  if (status === "preview" || status === "sent") {
    const preview = status === "preview";
    return (
      <div className={styles.card}>
        <p className={styles.flag}>{preview ? "Demo · Preview" : "✓"}</p>
        <h3 ref={resultRef} tabIndex={-1} className={styles.title}>
          {preview ? form.preview.title[lang] : form.sent.title[lang]}
        </h3>
        <p className={styles.muted}>{preview ? form.preview.body[lang] : form.sent.body[lang]}</p>
        <dl className={styles.summary}>
          {consultSummary(values, lang).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {preview ? (
          <button type="button" className={styles.secondary} onClick={() => setStatus("editing")}>
            {form.preview.edit[lang]}
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{form.title[lang]}</h3>
      <p className={styles.muted}>{form.intro[lang]}</p>
      {isDemo ? <p className={styles.demo}>{form.demoMode[lang]}</p> : null}

      <form onSubmit={onSubmit} noValidate className={styles.form}>
        {errorList.length ? (
          <div ref={summaryRef} tabIndex={-1} role="alert" className={styles.errorSummary}>
            <p>{form.errors.summary[lang]}</p>
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
            {form.failed[lang]}
          </p>
        ) : null}

        <fieldset className={styles.fieldset} aria-describedby={described("concerns")}>
          <legend className={styles.label}>
            {f.concerns[lang]} {tag()}
          </legend>
          <div className={styles.pills} id={fid("concerns")} tabIndex={-1}>
            {concerns.map((c) => (
              <label key={c.id} className={styles.pill}>
                <input type="checkbox" name="concerns" value={c.id} checked={selected.includes(c.id)} onChange={() => toggle(c.id)} />
                <span>{c.label[lang]}</span>
              </label>
            ))}
          </div>
          {err("concerns")}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>{f.firstTime[lang]}</legend>
          {radios("firstTime", form.firstTimeOptions)}
        </fieldset>

        <div className={styles.row2}>
          <fieldset className={styles.fieldset} aria-describedby={described("days")}>
            <legend className={styles.label}>
              {f.days[lang]} {tag()}
            </legend>
            {radios("days", form.dayOptions)}
            {err("days")}
          </fieldset>
          <fieldset className={styles.fieldset} aria-describedby={described("time")}>
            <legend className={styles.label}>
              {f.time[lang]} {tag()}
            </legend>
            {radios("time", form.timeOptions)}
            {err("time")}
          </fieldset>
        </div>

        <div className={styles.field}>
          <label htmlFor={fid("name")} className={styles.label}>
            {f.name[lang]} {tag()}
          </label>
          <input
            id={fid("name")}
            name="name"
            autoComplete="name"
            value={rest.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={described("name")}
            className={styles.input}
          />
          {err("name")}
        </div>

        <fieldset className={styles.fieldset} aria-describedby={described("method")}>
          <legend className={styles.label}>
            {f.method[lang]} {tag()}
          </legend>
          {radios("method", form.methods)}
          {err("method")}
        </fieldset>

        {rest.method ? (
          <div className={styles.field}>
            {rest.method === "line" ? (
              <>
                <label htmlFor={fid("lineId")} className={styles.label}>
                  {f.lineId[lang]} {tag()}
                </label>
                <input
                  id={fid("lineId")}
                  name="lineId"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={rest.lineId}
                  onChange={(e) => set("lineId", e.target.value)}
                  aria-invalid={!!errors.lineId || undefined}
                  aria-describedby={described("lineId")}
                  className={styles.input}
                />
                {err("lineId")}
              </>
            ) : rest.method === "phone" ? (
              <>
                <label htmlFor={fid("phone")} className={styles.label}>
                  {f.phone[lang]} {tag()}
                </label>
                <input
                  id={fid("phone")}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={rest.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={!!errors.phone || undefined}
                  aria-describedby={described("phone")}
                  className={styles.input}
                />
                {err("phone")}
              </>
            ) : (
              <>
                <label htmlFor={fid("email")} className={styles.label}>
                  {f.email[lang]} {tag()}
                </label>
                <input
                  id={fid("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={rest.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={described("email")}
                  className={styles.input}
                />
                {err("email")}
              </>
            )}
          </div>
        ) : null}

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>{f.language[lang]}</legend>
          {radios("language", form.languages)}
        </fieldset>

        <div className={styles.field}>
          <label className={styles.check} htmlFor={fid("consent")}>
            <input
              id={fid("consent")}
              type="checkbox"
              checked={rest.consent}
              onChange={(e) => set("consent", e.target.checked)}
              aria-invalid={!!errors.consent || undefined}
              aria-describedby={described("consent")}
            />
            <span>{f.consent[lang]}</span>
          </label>
          {err("consent")}
        </div>

        <p className={styles.privacy}>{form.privacy[lang]}</p>

        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? form.sending[lang] : isDemo ? form.submitDemo[lang] : form.submit[lang]}
        </button>
      </form>
    </div>
  );
}
