import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { faqs, goodToKnow, hero, menuCopy, visitCopy, visitInfo } from "../content";
import overhead from "../assets/overhead.jpg";
import footSpa from "../assets/foot-spa.jpg";
import thaiMassage from "../assets/thai-massage.jpg";
import gardenRoom from "../assets/garden-room.jpg";
import oil from "../assets/oil.jpg";
import diffuser from "../assets/diffuser.jpg";
import { BookingForm } from "./BookingForm";
import { MenuBoard } from "./MenuBoard";
import { Picker } from "./Picker";
import styles from "./Thara.module.css";

const stepImages = { foot: footSpa, thai: thaiMassage, garden: gardenRoom } as const;

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section id="top" className={`thara-wrap ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.heroImage}>
        <Image src={overhead} alt={hero.imageAlt[lang]} priority placeholder="blur" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.heroSide}>
        <p className={styles.kicker}>{hero.kicker[lang]}</p>
        <h1 id="hero-title">{hero.title[lang]}</h1>
        <p className={styles.sub}>{hero.sub[lang]}</p>
        <Picker lang={lang} />
      </div>
    </section>
  );
}

export function Menu({ lang }: { lang: Locale }) {
  return (
    <section className={styles.menuBand} aria-labelledby="menu">
      <div className="thara-wrap">
        <div className={styles.menuHead}>
          <h2 id="menu" className={styles.h2}>
            {menuCopy.title[lang]}
          </h2>
          <p>{menuCopy.intro[lang]}</p>
        </div>
        <MenuBoard lang={lang} />
        <p className={styles.menuNote}>{menuCopy.sampleNote[lang]}</p>
      </div>
    </section>
  );
}

export function Visit({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="visit">
      <div className="thara-wrap">
        <h2 id="visit" className={styles.h2}>
          {visitCopy.title[lang]}
        </h2>
        <ol className={styles.visitSteps}>
          {visitCopy.steps.map((step, i) => (
            <li key={step.title.en}>
              <div className={styles.visitImage}>
                <Image src={stepImages[step.image as keyof typeof stepImages]} alt={visitCopy.alts[step.image as keyof typeof visitCopy.alts][lang]} placeholder="blur" fill sizes="(max-width: 860px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <p className={styles.stepNo}>{String(i + 1).padStart(2, "0")}</p>
              <h3>{step.title[lang]}</h3>
              <p>{step.body[lang]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function GoodToKnow({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="good-to-know">
      <div className={`thara-wrap ${styles.know}`}>
        <div className={styles.knowImage}>
          <Image src={oil} alt="" placeholder="blur" fill sizes="(max-width: 860px) 100vw, 35vw" style={{ objectFit: "cover" }} />
        </div>
        <div>
          <h2 id="good-to-know" className={styles.h2}>
            {goodToKnow.title[lang]}
          </h2>
          <dl className={styles.knowList}>
            {goodToKnow.items.map((item) => (
              <div key={item.title.en}>
                <dt>{item.title[lang]}</dt>
                <dd>{item.body[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Book({ lang }: { lang: Locale }) {
  return (
    <section id="book" className={styles.section} aria-label={lang === "th" ? "ยืนยันการจอง" : "Confirm booking"}>
      <div className="thara-wrap">
        <BookingForm lang={lang} />
      </div>
    </section>
  );
}

export function FaqAndFind({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className={`thara-wrap ${styles.faqGrid}`}>
        <div>
          <h2 id="faq" className={styles.h2}>
            {lang === "th" ? "คำถามที่พบบ่อย" : "Questions"}
          </h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q.en}>
                <summary>{item.q[lang]}</summary>
                <p>{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
        <aside className={styles.find}>
          <div className={styles.findImage}>
            <Image src={diffuser} alt="" placeholder="blur" fill sizes="(max-width: 860px) 60vw, 25vw" style={{ objectFit: "cover" }} />
          </div>
          <h2 className={styles.h3}>{visitInfo.title[lang]}</h2>
          <p>{visitInfo.address[lang]}</p>
          <p>{visitInfo.transit[lang]}</p>
          <p>{visitInfo.hours[lang]}</p>
        </aside>
      </div>
    </section>
  );
}
