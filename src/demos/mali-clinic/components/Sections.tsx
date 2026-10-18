import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { maliConfig } from "../config";
import { doctors, faqs, firstVisit, hero, promises, treatmentsCopy, visit } from "../content";
import handsJar from "../assets/hands-jar.jpg";
import serum from "../assets/serum-eucalyptus.jpg";
import facial from "../assets/facial-gloves.jpg";
import bottles from "../assets/bottles-aloe.jpg";
import { ConsultForm } from "./ConsultForm";
import { HeroChips } from "./HeroChips";
import { TreatmentFinder } from "./TreatmentFinder";
import styles from "./Mali.module.css";

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section className={`mali-wrap ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.heroText}>
        <p className={styles.eyebrow}>{hero.eyebrow[lang]}</p>
        <h1 id="hero-title" className={styles.heroTitle}>
          {hero.title[lang]}
        </h1>
        <p className={styles.heroBody}>{hero.body[lang]}</p>
        <a href="#book" className={styles.primary}>
          {hero.cta[lang]}
        </a>
        <HeroChips lang={lang} />
      </div>
      <div className={styles.heroArt}>
        <div className={styles.arch}>
          <Image src={handsJar} alt={hero.imageAlt[lang]} priority placeholder="blur" fill sizes="(max-width: 860px) 90vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 60%" }} />
        </div>
        <div className={styles.circle}>
          <Image src={serum} alt={hero.insetAlt[lang]} placeholder="blur" fill sizes="200px" style={{ objectFit: "cover", objectPosition: "50% 55%" }} />
        </div>
        <p className={styles.heroNote}>{hero.note[lang]}</p>
      </div>
    </section>
  );
}

export function FirstVisit({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="first-visit">
      <div className={`mali-wrap ${styles.visitSteps}`}>
        <h2 id="first-visit" className={styles.h2}>
          {firstVisit.title[lang]}
        </h2>
        <ol>
          {firstVisit.steps.map((s, i) => (
            <li key={s.title.en}>
              <span className={styles.stepDot} aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Treatments({ lang }: { lang: Locale }) {
  return (
    <section className={`${styles.section} ${styles.treatmentsBand}`} aria-labelledby="treatments">
      <div className="mali-wrap">
        <div className={styles.sectionHead}>
          <h2 id="treatments" className={styles.h2}>
            {treatmentsCopy.title[lang]}
          </h2>
          <p>{treatmentsCopy.intro[lang]}</p>
        </div>
        <TreatmentFinder lang={lang} />
        <p className={styles.disclaimer}>{treatmentsCopy.disclaimer[lang]}</p>
      </div>
    </section>
  );
}

export function Promises({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="promises">
      <div className={`mali-wrap ${styles.promises}`}>
        <div className={styles.promiseImage}>
          <Image src={facial} alt={promises.imageAlt[lang]} placeholder="blur" fill sizes="(max-width: 860px) 90vw, 40vw" style={{ objectFit: "cover", objectPosition: "45% 40%" }} />
        </div>
        <div>
          <h2 id="promises" className={styles.h2}>
            {promises.title[lang]}
          </h2>
          <ul className={styles.promiseList}>
            {promises.items.map((p) => (
              <li key={p.title.en}>
                <h3>{p.title[lang]}</h3>
                <p>{p.body[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Doctors({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="doctors">
      <div className={`mali-wrap ${styles.doctors}`}>
        <div className={styles.sectionHead}>
          <h2 id="doctors" className={styles.h2}>
            {doctors.title[lang]}
          </h2>
          <p>{doctors.intro[lang]}</p>
        </div>
        <ul className={styles.doctorSlots}>
          {doctors.slots.map((slot) => (
            <li key={slot.role.en} className={styles.doctorSlot}>
              <span className={styles.placeholderTag}>{doctors.placeholderTag[lang]}</span>
              <div className={styles.portrait} aria-hidden="true" />
              <p className={styles.doctorRole}>{slot.role[lang]}</p>
              {slot.lines[lang].map((line) => (
                <p key={line} className={styles.doctorLine}>
                  {line}
                </p>
              ))}
            </li>
          ))}
          <li className={styles.doctorNote}>
            <p>{doctors.note[lang]}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function VisitAndBook({ lang }: { lang: Locale }) {
  const { contact } = maliConfig;
  return (
    <section className={styles.section} aria-labelledby="visit">
      <div className={`mali-wrap ${styles.visitGrid}`}>
        <div className={styles.visitInfo}>
          <h2 id="visit" className={styles.h2}>
            {visit.title[lang]}
          </h2>
          <p className={styles.address}>{visit.address[lang]}</p>
          <p>{visit.transit[lang]}</p>
          <h3 className={styles.hoursTitle}>{visit.hoursTitle[lang]}</h3>
          <dl className={styles.hours}>
            {visit.hours.map((h) => (
              <div key={h.days.en}>
                <dt>{h.days[lang]}</dt>
                <dd>{typeof h.time === "string" ? h.time : h.time[lang]}</dd>
              </div>
            ))}
          </dl>
          {contact.lineUrl ? (
            <a href={contact.lineUrl} className={styles.lineButton}>
              {visit.line[lang]}
            </a>
          ) : (
            <p className={styles.lineOff}>
              <span>LINE</span> {visit.notConnected[lang]}
            </p>
          )}
          <div className={styles.visitImage}>
            <Image src={bottles} alt="" placeholder="blur" fill sizes="(max-width: 860px) 90vw, 30vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div id="book" className={styles.book}>
          <ConsultForm lang={lang} />
        </div>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className={`mali-wrap ${styles.faq}`}>
        <h2 id="faq" className={styles.h2}>
          {lang === "th" ? "คำถามที่พบบ่อย" : "Questions people ask"}
        </h2>
        <div>
          {faqs.map((item) => (
            <details key={item.q.en} className={styles.faqItem}>
              <summary>
                {item.q[lang]}
                <span className={styles.plus} aria-hidden="true" />
              </summary>
              <p>{item.a[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
