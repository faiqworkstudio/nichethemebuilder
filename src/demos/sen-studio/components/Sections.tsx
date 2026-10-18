import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { expectations, faqs, hero, principles, processImages, roles, sections, services, steps } from "../content";
import { projects } from "../projects";
import carpentry from "../assets/process-carpentry.jpg";
import drawing from "../assets/process-drawing.jpg";
import stripout from "../assets/process-stripout.jpg";
import { SectionHead } from "./SectionHead";
import styles from "./Sections.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export function Hero({ lang }: { lang: Locale }) {
  const lead = projects[0];
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`sen-wrap ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <p className={`sen-mono ${styles.kicker}`}>{hero.kicker[lang]}</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            {hero.title[lang]}
          </h1>
          <p className={styles.heroBody}>{hero.body[lang]}</p>
          <a href="#enquiry" className={styles.primaryCta}>
            {hero.cta[lang]}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure className={styles.heroFigure}>
          <div className={styles.dimension} aria-hidden="true">
            <span>4 200</span>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={lead.images[0].src}
              alt={lead.images[0].alt[lang]}
              priority
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 58vw"
              fill
              style={{ objectFit: "cover", objectPosition: "60% 50%" }}
            />
          </div>
          <figcaption className="sen-mono">{hero.imageCaption[lang]}</figcaption>
        </figure>
      </div>
      <div className="sen-wrap">
        <dl className={styles.titleBlock}>
          {hero.titleBlock.map((item) => (
            <div key={item.label.en}>
              <dt className="sen-mono">{item.label[lang]}</dt>
              <dd>{item.value[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Services({ lang }: { lang: Locale }) {
  const s = sections.services;
  return (
    <section className={styles.section} aria-labelledby="services">
      <div className="sen-wrap">
        <SectionHead id="services" sheet={s.sheet} title={s.title[lang]} intro={s.intro[lang]} />
        <div className={styles.scheduleHead} aria-hidden="true">
          <span className="sen-mono">{s.cols.service[lang]}</span>
          <span className="sen-mono">{s.cols.included[lang]}</span>
          <span className="sen-mono">{s.cols.duration[lang]}</span>
        </div>
        <ol className={styles.schedule}>
          {services.map((service, i) => (
            <li key={service.name.en} className={styles.scheduleRow}>
              <div className={styles.serviceName}>
                <span className="sen-mono">{pad(i + 1)}</span>
                <h3>{service.name[lang]}</h3>
              </div>
              <p className={styles.serviceSummary}>{service.summary[lang]}</p>
              <div className={styles.serviceIncluded}>
                <h4 className="sen-visually-hidden">{s.cols.included[lang]}</h4>
                <ul>
                  {service.included[lang].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className={styles.serviceDuration}>
                <span className="sen-visually-hidden">{s.cols.duration[lang]}: </span>
                {service.duration[lang]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Studio({ lang }: { lang: Locale }) {
  const s = sections.studio;
  return (
    <section className={styles.studio} aria-labelledby="studio">
      <div className={`sen-wrap ${styles.studioGrid}`}>
        <div className={styles.studioImage}>
          <Image
            src={carpentry}
            alt={s.imageAlt[lang]}
            placeholder="blur"
            sizes="(max-width: 860px) 100vw, 40vw"
            fill
            style={{ objectFit: "cover", objectPosition: "62% 50%" }}
          />
        </div>
        <div className={styles.studioText}>
          <SectionHead id="studio" sheet={s.sheet} title={s.title[lang]} tone="dark" />
          <p className={styles.studioLead}>{s.lead[lang]}</p>
          <ol className={styles.principles}>
            {principles.map((p, i) => (
              <li key={p.title.en}>
                <span className="sen-mono">{pad(i + 1)}</span>
                <h3>{p.title[lang]}</h3>
                <p>{p.body[lang]}</p>
              </li>
            ))}
          </ol>
          <div className={styles.roles}>
            <h3 className="sen-mono">{s.rolesTitle[lang]}</h3>
            <dl>
              {roles.map((r) => (
                <div key={r.role.en}>
                  <dt>{r.role[lang]}</dt>
                  <dd>{r.does[lang]}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.rolesNote}>{s.rolesNote[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process({ lang }: { lang: Locale }) {
  const s = sections.process;
  return (
    <section className={styles.section} aria-labelledby="process">
      <div className="sen-wrap">
        <SectionHead id="process" sheet={s.sheet} title={s.title[lang]} />
        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title.en} className={styles.step}>
              <span className={`sen-mono ${styles.stepNo}`}>{pad(i + 1)}</span>
              <h3>{step.title[lang]}</h3>
              <p>{step.body[lang]}</p>
              <p className={styles.stepOutput}>
                <span className="sen-mono">{s.youGet[lang]}</span>
                {step.output[lang]}
              </p>
            </li>
          ))}
        </ol>
        <div className={styles.processFoot}>
          <figure className={styles.processWide}>
            <div className={styles.ratio32}>
              <Image src={drawing} alt={processImages.drawing[lang]} placeholder="blur" fill sizes="(max-width: 860px) 100vw, 45vw" style={{ objectFit: "cover" }} />
            </div>
          </figure>
          <figure className={styles.processNarrow}>
            <div className={styles.ratio45}>
              <Image src={stripout} alt={processImages.stripout[lang]} placeholder="blur" fill sizes="(max-width: 860px) 100vw, 25vw" style={{ objectFit: "cover", objectPosition: "60% 50%" }} />
            </div>
          </figure>
          <div className={styles.notes}>
            <h3 className="sen-mono">{s.expectTitle[lang]}</h3>
            <ol>
              {expectations.map((note, i) => (
                <li key={i}>
                  <span className="sen-mono">{i + 1}.</span>
                  <p>{note[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Locale }) {
  const s = sections.faq;
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className={`sen-wrap ${styles.faqGrid}`}>
        <SectionHead id="faq" sheet={s.sheet} title={s.title[lang]} />
        <div className={styles.faqList}>
          {faqs.map((item) => (
            <details key={item.q.en} className={styles.faqItem}>
              <summary>
                <span>{item.q[lang]}</span>
                <span className={styles.faqIcon} aria-hidden="true" />
              </summary>
              <p>{item.a[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
