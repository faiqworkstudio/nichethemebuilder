"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { senConfig } from "../config";
import { budgetBands, form, planner, sections, type PlannerScope, type PlannerType } from "../content";
import {
  AREA_MAX,
  AREA_MIN,
  DETAILS_MAX,
  emptyEnquiry,
  estimate,
  formatTHB,
  plannerToEnquiryType,
  summaryRows,
  summaryText,
  toPayload,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryField,
  type EnquiryValues,
} from "../enquiry";
import type { BudgetBand } from "../projects";
import { SectionHead } from "./SectionHead";
import styles from "./QuotePath.module.css";

type Status = "editing" | "sending" | "preview" | "sent" | "failed";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function QuotePath({ lang }: { lang: Locale }) {
  const s = sections.quote;
  const [values, setValues] = useState<EnquiryValues>(() => emptyEnquiry(lang));
  const [budgetNote, setBudgetNote] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Project pages link here with ?type=condo|house|office to pre-select the type.
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type && type in form.types) {
      // Reading the URL is only possible after mount; this syncs it once.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValues((v) => (v.type ? v : { ...v, type: type as EnquiryValues["type"] }));
    }
  }, []);

  const applyEstimate = (band: BudgetBand, type: PlannerType) => {
    setValues((v) => ({ ...v, budget: band, type: v.type || plannerToEnquiryType(type) }));
    setBudgetNote(true);
    formRef.current?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    formRef.current?.querySelector<HTMLSelectElement>("select[name=budget]")?.focus({ preventScroll: true });
  };

  return (
    <section className={styles.section} aria-labelledby="enquiry">
      <div className="sen-wrap">
        <SectionHead id="enquiry" sheet={s.sheet} title={s.title[lang]} />
        <div className={styles.layout}>
          <Planner lang={lang} onUse={applyEstimate} />
          <EnquiryForm
            lang={lang}
            values={values}
            setValues={setValues}
            formRef={formRef}
            budgetNote={budgetNote}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Budget planner ---------------- */

function Planner({ lang, onUse }: { lang: Locale; onUse: (band: BudgetBand, type: PlannerType) => void }) {
  const [type, setType] = useState<PlannerType>("condo");
  const [scope, setScope] = useState<PlannerScope>("full");
  const [area, setArea] = useState("60");
  const id = useId();

  const result = estimate(type, scope, Number(area));
  const isDesign = scope === "design";

  return (
    <aside className={styles.planner} aria-labelledby={`${id}-title`}>
      <h3 id={`${id}-title`} className={styles.blockTitle}>
        {planner.title[lang]}
      </h3>
      <p className={styles.muted}>{planner.intro[lang]}</p>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>{planner.type[lang]}</legend>
        <div className={styles.segments}>
          {(Object.keys(planner.types) as PlannerType[]).map((t) => (
            <label key={t} className={styles.segment}>
              <input type="radio" name={`${id}-type`} value={t} checked={type === t} onChange={() => setType(t)} />
              <span>{planner.types[t][lang]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.field}>
        <label htmlFor={`${id}-area`} className={styles.label}>
          {planner.area[lang]}
        </label>
        <input
          id={`${id}-area`}
          type="number"
          inputMode="numeric"
          min={AREA_MIN}
          max={AREA_MAX}
          step={1}
          value={area}
          onChange={(e) => setArea(e.target.value)}
          aria-invalid={!result || undefined}
          aria-describedby={!result ? `${id}-area-error` : undefined}
          className={styles.input}
        />
        {!result ? (
          <p id={`${id}-area-error`} className={styles.error}>
            {planner.areaError[lang]}
          </p>
        ) : null}
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>{planner.scope[lang]}</legend>
        <div className={styles.scopeList}>
          {(Object.keys(planner.scopes) as PlannerScope[]).map((sc) => (
            <label key={sc} className={styles.scopeOption}>
              <input type="radio" name={`${id}-scope`} value={sc} checked={scope === sc} onChange={() => setScope(sc)} />
              <span>
                <strong>{planner.scopes[sc][lang]}</strong>
                <small>{planner.scopeHint[sc][lang]}</small>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.result} aria-live="polite">
        <p className="sen-mono">{isDesign ? planner.resultDesign[lang] : planner.result[lang]}</p>
        {result ? (
          <>
            <p className={styles.resultValue}>
              {formatTHB(result.low, lang)} – {formatTHB(result.high, lang)}
            </p>
            <p className={styles.resultRate}>
              {formatTHB(result.rate[0], lang)}–{formatTHB(result.rate[1], lang)} {planner.perSqm[lang]}
            </p>
          </>
        ) : (
          <p className={styles.resultValue}>—</p>
        )}
      </div>

      {result && !isDesign ? (
        <button type="button" className={styles.secondaryButton} onClick={() => onUse(result.band, type)}>
          {planner.use[lang]}
        </button>
      ) : null}

      <p className={styles.disclaimer}>{planner.disclaimer[lang]}</p>
    </aside>
  );
}

/* ---------------- Enquiry form ---------------- */

type FormProps = {
  lang: Locale;
  values: EnquiryValues;
  setValues: React.Dispatch<React.SetStateAction<EnquiryValues>>;
  formRef: React.RefObject<HTMLFormElement | null>;
  budgetNote: boolean;
};

function EnquiryForm({ lang, values, setValues, formRef, budgetNote }: FormProps) {
  const f = form.fields;
  const id = useId();
  const fid = (name: EnquiryField) => `${id}-${name}`;
  const isDemo = !senConfig.enquiryEndpoint;

  const [status, setStatus] = useState<Status>("editing");
  const [attempted, setAttempted] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  // Errors are only shown after the first submit attempt, then update live.
  const errors: EnquiryErrors = attempted ? validateEnquiry(values, lang) : {};
  const errorList = Object.entries(errors) as [EnquiryField, string][];

  const set = <K extends EnquiryField>(key: K, value: EnquiryValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  useEffect(() => {
    if (status === "preview" || status === "sent") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validateEnquiry(values, lang)).length > 0) {
      // Wait for the summary to render before moving focus to it.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    if (isDemo) {
      setCopyState("idle");
      setStatus("preview");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(senConfig.enquiryEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(toPayload(values)),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText(values, lang));
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  const describedBy = (name: EnquiryField, hint?: boolean) =>
    [hint ? `${fid(name)}-hint` : "", errors[name] ? `${fid(name)}-error` : ""].filter(Boolean).join(" ") || undefined;

  const fieldError = (name: EnquiryField) =>
    errors[name] ? (
      <p id={`${fid(name)}-error`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;

  const tag = (required?: boolean) => (
    <span className={styles.tag}>{required ? form.required[lang] : form.optional[lang]}</span>
  );

  if (status === "preview" || status === "sent") {
    const isPreview = status === "preview";
    return (
      <div className={styles.formPanel}>
        <div className={styles.resultPanel}>
          <p className={`sen-mono ${isPreview ? styles.demoFlag : styles.sentFlag}`}>
            {isPreview ? "Demo · Preview" : "OK"}
          </p>
          <h3 ref={resultRef} tabIndex={-1} className={styles.blockTitle}>
            {isPreview ? form.preview.title[lang] : form.success.title[lang]}
          </h3>
          <p className={styles.muted}>{isPreview ? form.preview.body[lang] : form.success.body[lang]}</p>
          <dl className={styles.summary}>
            {summaryRows(values, lang).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {isPreview ? (
            <div className={styles.actions}>
              <button type="button" className={styles.secondaryButton} onClick={copySummary}>
                {form.preview.copy[lang]}
              </button>
              <button type="button" className={styles.textButton} onClick={() => setStatus("editing")}>
                {form.preview.edit[lang]}
              </button>
              <p role="status" className={styles.copyStatus}>
                {copyState === "copied" ? form.preview.copied[lang] : copyState === "failed" ? form.preview.copyFailed[lang] : ""}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formPanel}>
      <h3 className={styles.blockTitle}>{form.title[lang]}</h3>
      <p className={styles.muted}>{form.intro[lang]}</p>
      {isDemo ? (
        <p className={styles.demoNote}>
          <span className="sen-mono">Demo</span>
          {form.demoMode[lang]}
        </p>
      ) : null}

      <form ref={formRef} onSubmit={onSubmit} noValidate className={styles.form} aria-describedby={`${id}-privacy`}>
        {errorList.length > 0 ? (
          <div ref={summaryRef} tabIndex={-1} className={styles.errorSummary} role="alert">
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
          <p role="alert" className={styles.failure}>
            {form.failure[lang]}
          </p>
        ) : null}

        {/* Project */}
        <fieldset className={styles.fieldset} aria-describedby={describedBy("type")}>
          <legend className={styles.label}>
            {f.type[lang]} {tag(true)}
          </legend>
          <div className={styles.segments} id={fid("type")} tabIndex={-1}>
            {(Object.keys(form.types) as (keyof typeof form.types)[]).map((t) => (
              <label key={t} className={styles.segment}>
                <input type="radio" name="type" value={t} checked={values.type === t} onChange={() => set("type", t)} />
                <span>{form.types[t][lang]}</span>
              </label>
            ))}
          </div>
          {fieldError("type")}
        </fieldset>

        <div className={styles.row2}>
          <div className={styles.field}>
            <label htmlFor={fid("location")} className={styles.label}>
              {f.location[lang]} {tag(true)}
            </label>
            <input
              id={fid("location")}
              name="location"
              type="text"
              autoComplete="address-level2"
              value={values.location}
              onChange={(e) => set("location", e.target.value)}
              aria-invalid={!!errors.location || undefined}
              aria-describedby={describedBy("location", true)}
              className={styles.input}
            />
            <p id={`${fid("location")}-hint`} className={styles.hint}>
              {f.locationHint[lang]}
            </p>
            {fieldError("location")}
          </div>
          <div className={styles.field}>
            <label htmlFor={fid("size")} className={styles.label}>
              {f.size[lang]} {tag()}
            </label>
            <input
              id={fid("size")}
              name="size"
              type="number"
              inputMode="numeric"
              min={5}
              max={5000}
              value={values.size}
              onChange={(e) => set("size", e.target.value)}
              aria-invalid={!!errors.size || undefined}
              aria-describedby={describedBy("size")}
              className={styles.input}
            />
            {fieldError("size")}
          </div>
        </div>

        <div className={styles.row2}>
          <div className={styles.field}>
            <label htmlFor={fid("budget")} className={styles.label}>
              {f.budget[lang]} {tag(true)}
            </label>
            <select
              id={fid("budget")}
              name="budget"
              value={values.budget}
              onChange={(e) => set("budget", e.target.value as EnquiryValues["budget"])}
              aria-invalid={!!errors.budget || undefined}
              aria-describedby={describedBy("budget")}
              className={styles.input}
            >
              <option value="">{f.budgetPlaceholder[lang]}</option>
              {budgetBands.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label[lang]}
                </option>
              ))}
            </select>
            {budgetNote && values.budget ? (
              <p className={styles.hint} role="status">
                {planner.used[lang]}
              </p>
            ) : null}
            {fieldError("budget")}
          </div>
          <div className={styles.field}>
            <label htmlFor={fid("timeline")} className={styles.label}>
              {f.timeline[lang]} {tag(true)}
            </label>
            <select
              id={fid("timeline")}
              name="timeline"
              value={values.timeline}
              onChange={(e) => set("timeline", e.target.value as EnquiryValues["timeline"])}
              aria-invalid={!!errors.timeline || undefined}
              aria-describedby={describedBy("timeline")}
              className={styles.input}
            >
              <option value="">{f.timelinePlaceholder[lang]}</option>
              {(Object.keys(form.timelines) as (keyof typeof form.timelines)[]).map((t) => (
                <option key={t} value={t}>
                  {form.timelines[t][lang]}
                </option>
              ))}
            </select>
            {fieldError("timeline")}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor={fid("details")} className={styles.label}>
            {f.details[lang]} {tag()}
          </label>
          <textarea
            id={fid("details")}
            name="details"
            rows={4}
            value={values.details}
            onChange={(e) => set("details", e.target.value)}
            aria-invalid={!!errors.details || undefined}
            aria-describedby={describedBy("details", true)}
            className={styles.input}
          />
          <p id={`${fid("details")}-hint`} className={styles.hint}>
            {f.detailsHint[lang]}{" "}
            <span className={values.details.length > DETAILS_MAX ? styles.over : undefined}>
              ({values.details.length}/{DETAILS_MAX})
            </span>
          </p>
          {fieldError("details")}
        </div>

        {/* Contact */}
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.field}>
          <label htmlFor={fid("name")} className={styles.label}>
            {f.name[lang]} {tag(true)}
          </label>
          <input
            id={fid("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={describedBy("name")}
            className={styles.input}
          />
          {fieldError("name")}
        </div>

        <fieldset className={styles.fieldset} aria-describedby={describedBy("method")}>
          <legend className={styles.label}>
            {f.method[lang]} {tag(true)}
          </legend>
          <div className={styles.segments} id={fid("method")} tabIndex={-1}>
            {(Object.keys(form.methods) as (keyof typeof form.methods)[]).map((m) => (
              <label key={m} className={styles.segment}>
                <input type="radio" name="method" value={m} checked={values.method === m} onChange={() => set("method", m)} />
                <span>{form.methods[m][lang]}</span>
              </label>
            ))}
          </div>
          {fieldError("method")}
        </fieldset>

        {values.method === "line" ? (
          <div className={styles.field}>
            <label htmlFor={fid("lineId")} className={styles.label}>
              {f.lineId[lang]} {tag(true)}
            </label>
            <input
              id={fid("lineId")}
              name="lineId"
              type="text"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              value={values.lineId}
              onChange={(e) => set("lineId", e.target.value)}
              aria-invalid={!!errors.lineId || undefined}
              aria-describedby={describedBy("lineId")}
              className={styles.input}
            />
            {fieldError("lineId")}
          </div>
        ) : null}
        {values.method === "phone" ? (
          <div className={styles.field}>
            <label htmlFor={fid("phone")} className={styles.label}>
              {f.phone[lang]} {tag(true)}
            </label>
            <input
              id={fid("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              aria-invalid={!!errors.phone || undefined}
              aria-describedby={describedBy("phone", true)}
              className={styles.input}
            />
            <p id={`${fid("phone")}-hint`} className={styles.hint}>
              {f.phoneHint[lang]}
            </p>
            {fieldError("phone")}
          </div>
        ) : null}
        {values.method === "email" ? (
          <div className={styles.field}>
            <label htmlFor={fid("email")} className={styles.label}>
              {f.email[lang]} {tag(true)}
            </label>
            <input
              id={fid("email")}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={!!errors.email || undefined}
              aria-describedby={describedBy("email")}
              className={styles.input}
            />
            {fieldError("email")}
          </div>
        ) : null}

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>{f.replyLang[lang]}</legend>
          <div className={styles.segments}>
            {(["th", "en"] as const).map((l) => (
              <label key={l} className={styles.segment}>
                <input type="radio" name="replyLang" value={l} checked={values.replyLang === l} onChange={() => set("replyLang", l)} />
                <span>{form.replyLangs[l][lang]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.field}>
          <label className={styles.check} htmlFor={fid("consent")}>
            <input
              id={fid("consent")}
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={(e) => set("consent", e.target.checked)}
              aria-invalid={!!errors.consent || undefined}
              aria-describedby={describedBy("consent")}
            />
            <span>{f.consent[lang]}</span>
          </label>
          {fieldError("consent")}
        </div>

        <p id={`${id}-privacy`} className={styles.privacy}>
          {form.privacy[lang]}
        </p>

        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? form.sending[lang] : isDemo ? form.submitDemo[lang] : form.submit[lang]}
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}
