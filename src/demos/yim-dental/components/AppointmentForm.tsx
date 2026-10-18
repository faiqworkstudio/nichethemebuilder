"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import {
  appointmentSummary,
  emptyDetails,
  toAppointmentPayload,
  validateAppointment,
  type AppointmentErrors,
  type AppointmentField,
  type AppointmentValues,
  type Reason,
} from "../appointment";
import { yimConfig } from "../config";
import { form } from "../content";
import { useYim } from "./YimContext";
import styles from "./Form.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";
type Local = Omit<AppointmentValues, "reason" | "urgency">;
type Choice = "patient" | "days" | "time" | "sso" | "method";

export function AppointmentForm({ lang }: { lang: Locale }) {
  const f = form.fields;
  const id = useId();
  const fid = (name: AppointmentField) => `${id}-${name}`;
  const isDemo = !yimConfig.appointmentEndpoint;

  // Reason and urgency come from the urgency guide / treatment table; the rest is local.
  const { reason, urgency, setReason, setUrgency } = useYim();
  const [local, setLocal] = useState<Local>(emptyDetails);
  const values: AppointmentValues = { ...local, reason, urgency };
  const set = <K extends keyof Local>(key: K, value: Local[K]) => setLocal((l) => ({ ...l, [key]: value }));

  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const errors: AppointmentErrors = attempted ? validateAppointment(values, lang) : {};
  const errorList = Object.entries(errors) as [AppointmentField, string][];

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateAppointment(values, lang)).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) return setStatus("preview");
    setStatus("sending");
    try {
      const res = await fetch(yimConfig.appointmentEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toAppointmentPayload(values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const err = (name: AppointmentField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;
  const described = (name: AppointmentField) => (errors[name] ? `${fid(name)}-error` : undefined);
  const tag = (required = true) => <span className={styles.tag}>{required ? form.required[lang] : form.optional[lang]}</span>;

  const choices = (name: Choice, options: Record<string, Record<Locale, string>>) => (
    <div className={styles.choices} id={fid(name)} tabIndex={-1}>
      {Object.keys(options).map((key) => (
        <label key={key} className={styles.choice}>
          <input type="radio" name={name} value={key} checked={local[name] === key} onChange={() => set(name, key as Local[typeof name])} />
          <span>{options[key][lang]}</span>
        </label>
      ))}
    </div>
  );

  if (status === "preview" || status === "sent") {
    const preview = status === "preview";
    return (
      <div className={styles.card}>
        <p className={styles.flag}>{preview ? "Demo · Preview" : "Received"}</p>
        <h3 ref={resultRef} tabIndex={-1} className={styles.title}>
          {preview ? form.preview.title[lang] : form.sent.title[lang]}
        </h3>
        <p className={styles.muted}>{preview ? form.preview.body[lang] : form.sent.body[lang]}</p>
        <dl className={styles.summary}>
          {appointmentSummary(values, lang).map(([k, v]) => (
            <div key={k + v}>
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

        {urgency ? (
          <p className={styles.urgency} data-urgency={urgency}>
            <span>{form.urgencyNote[lang]}</span> <strong>{form.urgencyLabels[urgency][lang]}</strong>
            <button type="button" onClick={() => setUrgency(null)} aria-label={lang === "th" ? "ลบผลประเมิน" : "Remove urgency result"}>
              ×
            </button>
          </p>
        ) : null}

        <fieldset className={styles.fieldset} aria-describedby={described("reason")}>
          <legend>
            {f.reason[lang]} {tag()}
          </legend>
          <div className={styles.choices} id={fid("reason")} tabIndex={-1}>
            {(Object.keys(form.reasons) as Reason[]).map((r) => (
              <label key={r} className={styles.choice}>
                <input type="radio" name="reason" value={r} checked={reason === r} onChange={() => setReason(r)} />
                <span>{form.reasons[r][lang]}</span>
              </label>
            ))}
          </div>
          {err("reason")}
        </fieldset>

        <div className={styles.row2}>
          <fieldset className={styles.fieldset}>
            <legend>{f.patient[lang]}</legend>
            {choices("patient", form.patients)}
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>{f.sso[lang]}</legend>
            {choices("sso", form.sso)}
          </fieldset>
        </div>

        <div className={styles.row2}>
          <fieldset className={styles.fieldset} aria-describedby={described("days")}>
            <legend>
              {f.days[lang]} {tag()}
            </legend>
            {choices("days", form.days)}
            {err("days")}
          </fieldset>
          <fieldset className={styles.fieldset} aria-describedby={described("time")}>
            <legend>
              {f.time[lang]} {tag()}
            </legend>
            {choices("time", form.times)}
            {err("time")}
          </fieldset>
        </div>

        <div className={styles.field}>
          <label htmlFor={fid("name")}>
            {f.name[lang]} {tag()}
          </label>
          <input
            id={fid("name")}
            name="name"
            autoComplete="name"
            value={local.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={described("name")}
          />
          {err("name")}
        </div>

        <fieldset className={styles.fieldset} aria-describedby={described("method")}>
          <legend>
            {f.method[lang]} {tag()}
          </legend>
          {choices("method", form.methods)}
          {err("method")}
        </fieldset>

        {local.method ? (
          (() => {
            const key = local.method === "line" ? "lineId" : local.method;
            return (
              <div className={styles.field}>
                <label htmlFor={fid(key)}>
                  {f[key][lang]} {tag()}
                </label>
                <input
                  id={fid(key)}
                  name={key}
                  type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                  inputMode={key === "phone" ? "tel" : undefined}
                  autoComplete={key === "email" ? "email" : key === "phone" ? "tel" : "off"}
                  autoCapitalize="none"
                  value={local[key]}
                  onChange={(e) => set(key, e.target.value)}
                  aria-invalid={!!errors[key] || undefined}
                  aria-describedby={described(key)}
                />
                {err(key)}
              </div>
            );
          })()
        ) : null}

        <label className={styles.check}>
          <input type="checkbox" name="nervous" checked={local.nervous} onChange={(e) => set("nervous", e.target.checked)} />
          <span>{f.nervous[lang]}</span>
        </label>

        <label className={styles.check} htmlFor={fid("consent")}>
          <input
            id={fid("consent")}
            type="checkbox"
            name="consent"
            checked={local.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={!!errors.consent || undefined}
            aria-describedby={described("consent")}
          />
          <span>{f.consent[lang]}</span>
        </label>
        {err("consent")}

        <p className={styles.privacy}>{form.privacy[lang]}</p>

        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? form.sending[lang] : isDemo ? form.submitDemo[lang] : form.submit[lang]}
        </button>
      </form>
    </div>
  );
}
