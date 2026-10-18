import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { soiConfig } from "../config";
import { faqs, gettingHere, hero, house, neighbourhood, roomsCopy } from "../content";
import teak from "../assets/teak-room.jpg";
import lobby from "../assets/lobby.jpg";
import breakfast from "../assets/breakfast.jpg";
import dining from "../assets/dining.jpg";
import { Neighbourhood } from "./Neighbourhood";
import { RequestForm } from "./RequestForm";
import { RoomCatalogue } from "./RoomCatalogue";
import { StayPlanner } from "./StayPlanner";
import styles from "./Soi.module.css";

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image src={teak} alt={hero.imageAlt[lang]} priority placeholder="blur" fill sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={`soi-wrap ${styles.heroText}`}>
        <p className={styles.heroKicker}>{hero.kicker[lang]}</p>
        <h1 id="hero-title">{hero.title[lang]}</h1>
        <p>{hero.body[lang]}</p>
      </div>
    </section>
  );
}

export function PlannerBar({ lang }: { lang: Locale }) {
  return (
    <div className={`soi-wrap ${styles.plannerWrap}`}>
      <StayPlanner lang={lang} />
    </div>
  );
}

export function Rooms({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="rooms">
      <div className="soi-wrap">
        <div className={styles.head}>
          <h2 id="rooms" className={styles.h2}>
            {roomsCopy.title[lang]}
          </h2>
          <p>{roomsCopy.intro[lang]}</p>
        </div>
        <RoomCatalogue lang={lang} />
      </div>
    </section>
  );
}

export function House({ lang }: { lang: Locale }) {
  return (
    <section className={styles.houseBand} aria-labelledby="house">
      <div className={`soi-wrap ${styles.house}`}>
        <div className={styles.houseText}>
          <h2 id="house" className={styles.h2}>
            {house.title[lang]}
          </h2>
          <p className={styles.lead}>{house.lead[lang]}</p>
          <div className={styles.houseLists}>
            <div>
              <h3>{house.amenitiesTitle[lang]}</h3>
              <ul>
                {house.amenities[lang].map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{house.rulesTitle[lang]}</h3>
              <ul>
                {house.rules[lang].map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.houseImages}>
          <div className={styles.houseA}>
            <Image src={lobby} alt={house.lobbyAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 90vw, 40vw" style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.houseB}>
            <Image src={breakfast} alt={house.breakfastAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 45vw, 22vw" style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.houseC}>
            <Image src={dining} alt={house.diningAlt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 45vw, 22vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Journal({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="neighbourhood">
      <div className="soi-wrap">
        <div className={styles.head}>
          <div>
            <p className={styles.kicker}>{neighbourhood.kicker[lang]}</p>
            <h2 id="neighbourhood" className={styles.h2}>
              {neighbourhood.title[lang]}
            </h2>
          </div>
          <p>{neighbourhood.intro[lang]}</p>
        </div>
        <Neighbourhood lang={lang} />
      </div>
    </section>
  );
}

export function Request({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-label={lang === "th" ? "คำขอจองห้องพัก" : "Stay request"}>
      <div id="request" className={`soi-wrap ${styles.requestGrid}`}>
        <RequestForm lang={lang} />
        <aside className={styles.requestAside}>
          {soiConfig.bookingProviderUrl ? (
            <a href={soiConfig.bookingProviderUrl} className={styles.primary}>
              {roomsCopy.provider[lang]} →
            </a>
          ) : null}
          <h2 id="getting-here" className={styles.h3}>
            {gettingHere.title[lang]}
          </h2>
          <p className={styles.address}>{gettingHere.address[lang]}</p>
          <dl className={styles.routes}>
            {gettingHere.routes.map((r) => (
              <div key={r.from.en}>
                <dt>{r.from[lang]}</dt>
                <dd>{r.how[lang]}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className={`soi-wrap ${styles.faq}`}>
        <h2 id="faq" className={styles.h2}>
          {lang === "th" ? "ก่อนมาพัก" : "Before you come"}
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
