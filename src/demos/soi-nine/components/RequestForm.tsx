"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { REQUESTS_MAX, staySummary, toStayPayload, validateStay, type StayErrors, type StayField, type StayValues } from "../booking";
import { soiConfig } from "../config";
import { request as r } from "../content";
import { rooms, type RoomId } from "../rooms";
import { useStay } from "./StayContext";
import styles from "./Form.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";

export function RequestForm({ lang }: { lang: Locale }) {
  const f = r.fields;
  const id = useId();
  const fid = (name: StayField) => `${id}-${name}`;
  const isDemo = !soiConfig.requestEndpoint;

  // Dates, guests, room and note are shared with the planner and catalogue.
  const stay = useStay();
  const [local, setLocal] = useState({ name: "", method: "" as StayValues["method"], lineId: "", phone: "", email: "", consent: false });
  const values: StayValues = {
    ...local,
    room: stay.room,
    checkIn: stay.checkIn,
    checkOut: stay.checkOut,
    guests: stay.guests,
    requests: stay.note,
  };
  const set = <K extends keyof typeof local>(key: K, value: (typeof local)[K]) => setLocal((l) => ({ ...l, [key]: value }));

  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const today = stay.today || "0000-00-00";
  const errors: StayErrors = attempted ? validateStay(values, lang, today) : {};
  const errorList = Object.entries(errors) as [StayField, string][];

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateStay(values, lang, today)).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) return setStatus("preview");
    setStatus("sending");
    try {
      const res = await fetch(soiConfig.requestEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toStayPayload(values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const err = (name: StayField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;
  const described = (name: StayField) => (errors[name] ? `${fid(name)}-error` : undefined);
  const tag = (required = true) => <span className={styles.tag}>{required ? r.required[lang] : r.optional[lang]}</span>;
  const contactKey = local.method === "line" ? "lineId" : local.method === "phone" ? "phone" : "email";

  if (status === "preview" || status === "sent") {
    const preview = status === "preview";
    return (
      <div className={styles.card}>
        <p className={styles.flag}>{preview ? "Demo · Preview" : "Received"}</p>
        <h3 ref={resultRef} tabIndex={-1} className={styles.title}>
          {preview ? r.preview.title[lang] : r.sent.title[lang]}
        </h3>
        <p className={styles.muted}>{preview ? r.preview.body[lang] : r.sent.body[lang]}</p>
        <dl className={styles.summary}>
          {staySummary(values, lang).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {preview ? (
          <button type="button" className={styles.secondary} onClick={() => setStatus("editing")}>
            {r.preview.edit[lang]}
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{r.title[lang]}</h3>
      <p className={styles.muted}>{r.intro[lang]}</p>
      {isDemo ? <p className={styles.demo}>{r.demoMode[lang]}</p> : null}

      <form onSubmit={onSubmit} noValidate className={styles.form}>
        {errorList.length ? (
          <div ref={summaryRef} tabIndex={-1} role="alert" className={styles.errorSummary}>
            <p>{r.errors.summary[lang]}</p>
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
            {r.failed[lang]}
          </p>
        ) : null}

        <div className={styles.grid3}>
          <div className={styles.field}>
            <label htmlFor={fid("checkIn")}>
              {f.checkIn[lang]} {tag()}
            </label>
            <input
              id={fid("checkIn")}
              name="checkIn"
              type="date"
              min={stay.today || undefined}
              value={stay.checkIn}
              onChange={(e) => stay.update({ checkIn: e.target.value })}
              aria-invalid={!!errors.checkIn || undefined}
              aria-describedby={described("checkIn")}
            />
            {err("checkIn")}
          </div>
          <div className={styles.field}>
            <label htmlFor={fid("checkOut")}>
              {f.checkOut[lang]} {tag()}
            </label>
            <input
              id={fid("checkOut")}
              name="checkOut"
              type="date"
              min={stay.checkIn || stay.today || undefined}
              value={stay.checkOut}
              onChange={(e) => stay.update({ checkOut: e.target.value })}
              aria-invalid={!!errors.checkOut || undefined}
              aria-describedby={described("checkOut")}
            />
            {err("checkOut")}
          </div>
          <div className={styles.field}>
            <label htmlFor={fid("guests")}>{f.guests[lang]}</label>
            <select
              id={fid("guests")}
              name="guests"
              value={stay.guests}
              onChange={(e) => stay.update({ guests: Number(e.target.value) })}
              aria-invalid={!!errors.guests || undefined}
              aria-describedby={described("guests")}
            >
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            {err("guests")}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor={fid("room")}>
            {f.room[lang]} {tag()}
          </label>
          <select
            id={fid("room")}
            name="room"
            value={stay.room}
            onChange={(e) => stay.update({ room: e.target.value as RoomId | "" })}
            aria-invalid={!!errors.room || undefined}
            aria-describedby={described("room")}
          >
            <option value="">{f.roomPlaceholder[lang]}</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name[lang]}
              </option>
            ))}
          </select>
          {err("room")}
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
          <div className={styles.options} id={fid("method")} tabIndex={-1}>
            {(Object.keys(r.methods) as (keyof typeof r.methods)[]).map((m) => (
              <label key={m} className={styles.option}>
                <input type="radio" name="method" value={m} checked={local.method === m} onChange={() => set("method", m)} />
                <span>{r.methods[m][lang]}</span>
              </label>
            ))}
          </div>
          {err("method")}
        </fieldset>

        {local.method ? (
          <div className={styles.field}>
            <label htmlFor={fid(contactKey)}>
              {f[contactKey][lang]} {tag()}
            </label>
            <input
              id={fid(contactKey)}
              name={contactKey}
              type={contactKey === "email" ? "email" : contactKey === "phone" ? "tel" : "text"}
              inputMode={contactKey === "phone" ? "tel" : undefined}
              autoComplete={contactKey === "email" ? "email" : contactKey === "phone" ? "tel" : "off"}
              autoCapitalize="none"
              value={local[contactKey]}
              onChange={(e) => set(contactKey, e.target.value)}
              aria-invalid={!!errors[contactKey] || undefined}
              aria-describedby={described(contactKey)}
            />
            {err(contactKey)}
          </div>
        ) : null}

        <div className={styles.field}>
          <label htmlFor={fid("requests")}>
            {f.requests[lang]} {tag(false)}
          </label>
          <textarea
            id={fid("requests")}
            name="requests"
            rows={3}
            value={stay.note}
            onChange={(e) => stay.update({ note: e.target.value })}
            aria-invalid={!!errors.requests || undefined}
            aria-describedby={described("requests")}
          />
          <p className={styles.hint}>
            {stay.note.length}/{REQUESTS_MAX}
          </p>
          {err("requests")}
        </div>

        <label className={styles.check} htmlFor={fid("consent")}>
          <input
            id={fid("consent")}
            type="checkbox"
            checked={local.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={!!errors.consent || undefined}
            aria-describedby={described("consent")}
          />
          <span>{f.consent[lang]}</span>
        </label>
        {err("consent")}

        <p className={styles.privacy}>{r.privacy[lang]}</p>

        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? r.sending[lang] : isDemo ? r.submitDemo[lang] : r.submit[lang]}
        </button>
      </form>
    </div>
  );
}
