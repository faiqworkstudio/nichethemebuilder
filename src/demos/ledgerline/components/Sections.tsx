import Image, { type StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n";
import { faqs, hero, intro, month, principles, services, stories } from "../content";
import signing from "../assets/signing.jpg";
import cafe from "../assets/cafe-counter.jpg";
import bags from "../assets/bags.jpg";
import founder from "../assets/founder.jpg";
import meeting from "../assets/meeting.jpg";
import { DeadlineCard } from "./DeadlineCard";
import { FeeEstimator } from "./FeeEstimator";
import { IntroForm } from "./IntroForm";
import styles from "./Ledger.module.css";

const storyImages: Record<string, StaticImageData> = { cafe, founder, bags };

/** Footnote marker linking to the notes list in the footer. */
function Note({ n }: { n: number }) {
  return (
    <sup className={styles.noteRef}>
      <a href={`#note-${n}`} aria-label={`Note ${n}`}>
        {n}
      </a>
    </sup>
  );
}

/** Renders ¹/² in copy as footnote links. */
function withNotes(text: string) {
  return text.split(/([¹²])/).map((part, i) => (part === "¹" ? <Note key={i} n={1} /> : part === "²" ? <Note key={i} n={2} /> : part));
}

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section className={`ledger-wrap ${styles.hero}`} aria-labelledby="hero-title">
      <p className={styles.issue}>{hero.issue[lang]}</p>
      <div className={styles.heroGrid}>
        <div>
          <h1 id="hero-title">{hero.title[lang]}</h1>
          <p className={styles.standfirst}>{hero.standfirst[lang]}</p>
          <a href="#intro" className={styles.primary}>
            {hero.cta[lang]} →
          </a>
        </div>
        <DeadlineCard lang={lang} />
      </div>
      <figure className={styles.heroFigure}>
        <div className={styles.heroImage}>
          <Image src={signing} alt={hero.imageAlt[lang]} priority placeholder="blur" fill sizes="(max-width: 1240px) 100vw, 1240px" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
        </div>
      </figure>
    </section>
  );
}

export function Stories({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="stories">
      <div className="ledger-wrap">
        <header className={styles.sectionHead}>
          <p className={styles.kicker}>{stories.kicker[lang]}</p>
          <h2 id="stories">{stories.title[lang]}</h2>
        </header>
        <div className={styles.stories}>
          {stories.items.map((s, i) => (
            <article key={s.id} className={styles.story} data-flip={i % 2 === 1 || undefined} aria-labelledby={`story-${s.id}`}>
              <figure className={styles.storyImage}>
                <Image src={storyImages[s.image]} alt={s.imageAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className={styles.storyText}>
                <p className={styles.storyLabel}>{stories.label[lang]}</p>
                <h3 id={`story-${s.id}`}>{s.question[lang]}</h3>
                <p className={styles.who}>— {s.who[lang]}</p>
                <dl className={styles.storyParts}>
                  <div>
                    <dt>{stories.heads.situation[lang]}</dt>
                    <dd>
                      {s.situation[lang]}
                      {s.id === "cafe" ? <Note n={1} /> : null}
                    </dd>
                  </div>
                  <div>
                    <dt>{stories.heads.work[lang]}</dt>
                    <dd>
                      {s.work[lang]}
                      {s.id === "founder" ? <Note n={2} /> : null}
                    </dd>
                  </div>
                  <div>
                    <dt>{stories.heads.after[lang]}</dt>
                    <dd>{s.after[lang]}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services({ lang }: { lang: Locale }) {
  return (
    <section className={`${styles.section} ${styles.servicesBand}`} aria-labelledby="services">
      <div className={`ledger-wrap ${styles.servicesGrid}`}>
        <div>
          <p className={styles.kicker}>{services.kicker[lang]}</p>
          <h2 id="services" className={styles.h2}>
            {services.title[lang]}
          </h2>
          <ol className={styles.serviceList}>
            {services.items.map((s, i) => (
              <li key={s.name.en}>
                <span aria-hidden="true">{["i", "ii", "iii", "iv"][i]}.</span>
                <div>
                  <h3>{s.name[lang]}</h3>
                  <p>{s.body[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <FeeEstimator lang={lang} />
      </div>
    </section>
  );
}

export function Month({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="month">
      <div className={`ledger-wrap ${styles.monthGrid}`}>
        <div>
          <p className={styles.kicker}>{month.kicker[lang]}</p>
          <h2 id="month" className={styles.h2}>
            {month.title[lang]}
          </h2>
          <ol className={styles.month}>
            {month.steps.map((s) => (
              <li key={s.day.en}>
                <span>{s.day[lang]}</span>
                <p>{s.body[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.monthSide}>
          <figure className={styles.monthImage}>
            <Image src={meeting} alt={month.imageAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
          </figure>
          <h3>{principles.title[lang]}</h3>
          <ul className={styles.principles}>
            {principles.items.map((p) => (
              <li key={p.en}>{p[lang]}</li>
            ))}
          </ul>
          <p className={styles.placeholder}>{principles.auditor[lang]}</p>
        </div>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className={`ledger-wrap ${styles.faqGrid}`}>
        <h2 id="faq" className={styles.h2}>
          {lang === "th" ? "คำถามที่ถามบ่อย" : "Questions, answered"}
        </h2>
        <div>
          {faqs.map((item) => (
            <details key={item.q.en} className={styles.faqItem}>
              <summary>{item.q[lang]}</summary>
              <p>{withNotes(item.a[lang])}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Intro({ lang }: { lang: Locale }) {
  return (
    <section id="intro" className={`${styles.section} ${styles.introSection}`} aria-labelledby="intro-title">
      <div className="ledger-wrap">
        <div className={styles.introGrid}>
          <div>
            <h2 id="intro-title" className={styles.h2}>
              {intro.title[lang]}
            </h2>
            <p className={styles.standfirst}>{intro.lead[lang]}</p>
          </div>
          <IntroForm lang={lang} />
        </div>
      </div>
    </section>
  );
}
