"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { bookingSummary, samplePrice, toBookingPayload, validateBooking, type BookingErrors, type BookingField, type BookingValues } from "../booking";
import { tharaConfig } from "../config";
import { booking as b, picker } from "../content";
import { getItem } from "../menu";
import { scrollToId, useBooking } from "./BookingContext";
import styles from "./Form.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";
type Choice = "therapist" | "pressure" | "method";

/** Step two: preferences and contact, with the hero choices summarised alongside. */
export function BookingForm({ lang }: { lang: Locale }) {
  const { values, update, today, nowMinutes } = useBooking();
  const f = b.fields;
  const id = useId();
  const fid = (name: BookingField) => `${id}-${name}`;
  const isDemo = !tharaConfig.bookingEndpoint;

  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const check = () => validateBooking(values, lang, today || "0000-00-00", nowMinutes);
  const errors: BookingErrors = attempted ? check() : {};
  const errorList = Object.entries(errors) as [BookingField, string][];

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(check()).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) return setStatus("preview");
    setStatus("sending");
    try {
      const res = await fetch(tharaConfig.bookingEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toBookingPayload(values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const err = (name: BookingField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;
  const described = (name: BookingField) => (errors[name] ? `${fid(name)}-error` : undefined);
  const tag = <span className={styles.tag}>{b.required[lang]}</span>;

  const choices = (name: Choice, options: Record<string, Record<Locale, string>>) => (
    <div className={styles.choices} id={fid(name)} tabIndex={-1}>
      {Object.keys(options).map((key) => (
        <label key={key} className={styles.choice}>
          <input type="radio" name={name} value={key} checked={values[name] === key} onChange={() => update({ [name]: key } as Partial<BookingValues>)} />
          <span>{options[key][lang]}</span>
        </label>
      ))}
    </div>
  );

  // Errors on the hero fields link back to the picker.
  const heroField = (name: BookingField) => ["duration", "date", "time", "people"].includes(name);

  const choice = (
    <aside className={styles.choiceCard} aria-labelledby={`${id}-choice`}>
      <h3 id={`${id}-choice`}>{b.yourChoice[lang]}</h3>
      <p className={styles.choiceName}>{getItem(values.treatment).name[lang]}</p>
      <p>
        {b.minutes[lang](values.duration)} · {values.people} {lang === "th" ? "คน" : values.people === 1 ? "person" : "people"}
      </p>
      <p>{values.date && values.time ? `${values.date} · ${values.time}` : "—"}</p>
      <p className={styles.choiceTotal}>
        <span>{picker.total[lang]}</span>
        <strong>{formatTHB(samplePrice(values.treatment, values.duration, values.people), lang)}</strong>
      </p>
      <button type="button" className={styles.link} onClick={() => scrollToId("top")}>
        ↑ {b.change[lang]}
      </button>
    </aside>
  );

  if (status === "preview" || status === "sent") {
    const preview = status === "preview";
    return (
      <div className={styles.layout}>
        {choice}
        <div className={styles.card}>
          <p className={styles.flag}>{preview ? "Demo · Preview" : "Received"}</p>
          <h2 ref={resultRef} tabIndex={-1} className={styles.title}>
            {preview ? b.preview.title[lang] : b.sent.title[lang]}
          </h2>
          <p className={styles.muted}>{preview ? b.preview.body[lang] : b.sent.body[lang]}</p>
          <dl className={styles.summary}>
            {bookingSummary(values, lang).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {preview ? (
            <button type="button" className={styles.secondary} onClick={() => setStatus("editing")}>
              {b.preview.edit[lang]}
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      {choice}
      <div className={styles.card}>
        <h2 className={styles.title}>{b.title[lang]}</h2>
        <p className={styles.muted}>{b.intro[lang]}</p>
        {isDemo ? <p className={styles.demo}>{b.demoMode[lang]}</p> : null}

        <form onSubmit={onSubmit} noValidate className={styles.form}>
          {errorList.length ? (
            <div ref={summaryRef} tabIndex={-1} role="alert" className={styles.errorSummary}>
              <p>{b.errors.summary[lang]}</p>
              <ul>
                {errorList.map(([name, message]) => (
                  <li key={name}>
                    {heroField(name) ? (
                      <button type="button" className={styles.inlineLink} onClick={() => scrollToId("top")}>
                        {message}
                      </button>
                    ) : (
                      <a href={`#${fid(name)}`}>{message}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {status === "failed" ? (
            <p role="alert" className={styles.errorSummary}>
              {b.failed[lang]}
            </p>
          ) : null}

          <div className={styles.row2}>
            <fieldset className={styles.fieldset}>
              <legend>{f.therapist[lang]}</legend>
              {choices("therapist", b.therapists)}
            </fieldset>
            <fieldset className={styles.fieldset}>
              <legend>{f.pressure[lang]}</legend>
              {choices("pressure", b.pressures)}
            </fieldset>
          </div>

          <div className={styles.field}>
            <label htmlFor={fid("name")}>
              {f.name[lang]} {tag}
            </label>
            <input
              id={fid("name")}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update({ name: e.target.value })}
              aria-invalid={!!errors.name || undefined}
              aria-describedby={described("name")}
            />
            {err("name")}
          </div>

          <fieldset className={styles.fieldset} aria-describedby={described("method")}>
            <legend>
              {f.method[lang]} {tag}
            </legend>
            {choices("method", b.methods)}
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
                      onChange={(e) => update({ [key]: e.target.value } as Partial<BookingValues>)}
                      aria-invalid={!!errors[key] || undefined}
                      aria-describedby={described(key)}
                    />
                    {err(key)}
                  </div>
                );
              })()
            : null}

          <label className={styles.check} htmlFor={fid("consent")}>
            <input
              id={fid("consent")}
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={(e) => update({ consent: e.target.checked })}
              aria-invalid={!!errors.consent || undefined}
              aria-describedby={described("consent")}
            />
            <span>{f.consent[lang]}</span>
          </label>
          {err("consent")}

          <p className={styles.privacy}>{b.privacy[lang]}</p>

          <button type="submit" className={styles.submit} disabled={status === "sending"}>
            {status === "sending" ? b.sending[lang] : isDemo ? b.submitDemo[lang] : b.submit[lang]}
          </button>
        </form>
      </div>
    </div>
  );
}
