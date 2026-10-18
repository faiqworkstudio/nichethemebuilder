import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { faqs, hero, library, nervous, paying, team, urgent, visit } from "../content";
import roomOrange from "../assets/room-orange.jpg";
import hands from "../assets/hands.jpg";
import xrayTalk from "../assets/xray-talk.jpg";
import toothbrushes from "../assets/toothbrushes.jpg";
import { AppointmentForm } from "./AppointmentForm";
import { HeroDoors } from "./HeroDoors";
import { TreatmentLibrary } from "./TreatmentLibrary";
import { UrgencyGuide } from "./UrgencyGuide";
import styles from "./Yim.module.css";

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section className={`yim-wrap ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.heroText}>
        <p className={styles.kicker}>{hero.kicker[lang]}</p>
        <h1 id="hero-title">{hero.title[lang]}</h1>
        <p className={styles.heroBody}>{hero.body[lang]}</p>
      </div>
      <figure className={styles.heroFigure}>
        <div className={styles.heroImage}>
          <Image src={roomOrange} alt={hero.imageAlt[lang]} priority placeholder="blur" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
        </div>
        <figcaption className={styles.heroTag}>{hero.tag[lang]}</figcaption>
      </figure>
      <HeroDoors lang={lang} />
    </section>
  );
}

export function Urgent({ lang }: { lang: Locale }) {
  return (
    <section className={styles.urgentBand} aria-labelledby="urgent">
      <div className="yim-wrap">
        <div className={styles.head}>
          <h2 id="urgent" className={styles.h2}>
            {urgent.title[lang]}
          </h2>
          <p>{urgent.intro[lang]}</p>
        </div>
        <UrgencyGuide lang={lang} />
      </div>
    </section>
  );
}

export function Nervous({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="nervous">
      <div className={`yim-wrap ${styles.nervous}`}>
        <div className={styles.nervousImage}>
          <Image src={hands} alt={nervous.imageAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
        </div>
        <div>
          <h2 id="nervous" className={styles.h2}>
            {nervous.title[lang]}
          </h2>
          <p className={styles.lead}>{nervous.lead[lang]}</p>
          <ul className={styles.ticks}>
            {nervous.items.map((item) => (
              <li key={item.en}>{item[lang]}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Library({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="treatments">
      <div className="yim-wrap">
        <div className={styles.head}>
          <h2 id="treatments" className={styles.h2}>
            {library.title[lang]}
          </h2>
          <p>{library.intro[lang]}</p>
        </div>
        <TreatmentLibrary lang={lang} />
      </div>
    </section>
  );
}

export function Team({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="team">
      <div className={`yim-wrap ${styles.team}`}>
        <div className={styles.teamTop}>
          <div>
            <h2 id="team" className={styles.h2}>
              {team.title[lang]}
            </h2>
            <ol className={styles.firstVisit}>
              {team.steps.map((s, i) => (
                <li key={s.en}>
                  <span aria-hidden="true">{i + 1}</span>
                  {s[lang]}
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.teamImage}>
            <Image src={xrayTalk} alt={team.imageAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <ul className={styles.slots}>
          {team.slots.map((slot) => (
            <li key={slot.role.en}>
              <span className={styles.placeholder}>{team.placeholder[lang]}</span>
              <p className={styles.slotRole}>{slot.role[lang]}</p>
              {slot.lines[lang].map((l) => (
                <p key={l} className={styles.slotLine}>
                  {l}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <p className={styles.slotNote}>{team.note[lang]}</p>
      </div>
    </section>
  );
}

export function Paying({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="paying">
      <div className={`yim-wrap ${styles.paying}`}>
        <h2 id="paying" className={styles.h2}>
          {paying.title[lang]}
        </h2>
        <ul>
          {paying.items.map((p) => (
            <li key={p.title.en}>
              <h3>{p.title[lang]}</h3>
              <p>{p.body[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Book({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="visit-title">
      <div className={`yim-wrap ${styles.bookGrid}`}>
        <div id="book" className={styles.bookForm}>
          <AppointmentForm lang={lang} />
        </div>
        <aside className={styles.visit}>
          <h2 id="visit-title" className={styles.h3}>
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
          <div className={styles.visitImage}>
            <Image src={toothbrushes} alt="" placeholder="blur" fill sizes="(max-width: 900px) 60vw, 25vw" style={{ objectFit: "cover" }} />
          </div>
        </aside>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className={`yim-wrap ${styles.faq}`}>
        <h2 id="faq" className={styles.h2}>
          {lang === "th" ? "คำถามที่ถามบ่อย" : "Good questions"}
        </h2>
        <div>
          {faqs.map((item) => (
            <details key={item.q.en} className={styles.faqItem}>
              <summary>{item.q[lang]}</summary>
              <p>{item.a[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
