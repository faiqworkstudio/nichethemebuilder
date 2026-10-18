import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { explorer, faqs, hero, how, renting } from "../content";
import { areas } from "../listings";
import facade from "../assets/facade.jpg";
import { Explorer } from "./Explorer";
import styles from "./Plot.module.css";

function SectionHead({ index, id, title, intro }: { index: string; id: string; title: string; intro?: string }) {
  return (
    <div className={styles.head}>
      <p className={styles.index} aria-hidden="true">
        {index}
      </p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className={styles.headIntro}>{intro}</p> : null}
    </div>
  );
}

export function Hero({ lang }: { lang: Locale }) {
  return (
    <section className={`plot-wrap ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.heroText}>
        <p className={styles.index} aria-hidden="true">
          {hero.index}
        </p>
        <h1 id="hero-title">
          {hero.title[lang].split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h1>
        <p className={styles.heroBody}>{hero.body[lang]}</p>
        {/* A plain GET form: works before JavaScript loads, and the explorer reads the same query. */}
        <form method="get" action="#listings" className={styles.quick} aria-label={hero.quick[lang]}>
          <div className={styles.segmented}>
            {(["rent", "sale"] as const).map((d, i) => (
              <label key={d}>
                <input type="radio" name="deal" value={d} defaultChecked={i === 0} />
                <span>{explorer.deals[d][lang]}</span>
              </label>
            ))}
          </div>
          <label className="visually-hidden" htmlFor="quick-area">
            {explorer.area[lang]}
          </label>
          <select id="quick-area" name="area" defaultValue="all">
            <option value="all">{explorer.anyArea[lang]}</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label[lang]}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.primary}>
            {hero.go[lang]} →
          </button>
        </form>
      </div>
      <div className={styles.heroImage}>
        <Image src={facade} alt={hero.imageAlt[lang]} priority placeholder="blur" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
}

export function Listings({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="listings">
      <div className="plot-wrap">
        <SectionHead index={explorer.index} id="listings" title={explorer.title[lang]} />
        <Explorer lang={lang} />
      </div>
    </section>
  );
}

export function Renting({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="renting">
      <div className="plot-wrap">
        <SectionHead index={renting.index} id="renting" title={renting.title[lang]} intro={renting.intro[lang]} />
        <table className={styles.costTable}>
          <thead>
            <tr>
              <th scope="col">{renting.cols.item[lang]}</th>
              <th scope="col">{renting.cols.typical[lang]}</th>
              <th scope="col">{renting.cols.note[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {renting.rows.map((r) => (
              <tr key={r.item.en}>
                <th scope="row">{r.item[lang]}</th>
                <td>{r.typical[lang]}</td>
                <td>{r.note[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function How({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="how">
      <div className="plot-wrap">
        <SectionHead index={how.index} id="how" title={how.title[lang]} />
        <ol className={styles.how}>
          {how.items.map((item, i) => (
            <li key={item.title.en}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title[lang]}</h3>
              <p>{item.body[lang]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Locale }) {
  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className="plot-wrap">
        <SectionHead index="05" id="faq" title={lang === "th" ? "คำถาม" : "Questions"} />
        <div className={styles.faq}>
          {faqs.map((item) => (
            <details key={item.q.en}>
              <summary>{item.q[lang]}</summary>
              <p>{item.a[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
