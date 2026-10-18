import Image from "next/image";
import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { detail as d, explorer as t } from "../content";
import { listingImages } from "../listingImages";
import { areas, type Listing } from "../listings";
import { BackToResults } from "./Explorer";
import { ViewingForm } from "./ViewingForm";
import styles from "./Plot.module.css";

export function ListingDetail({ lang, listing: l }: { lang: Locale; listing: Listing }) {
  const photos = listingImages[l.ref];
  const area = areas.find((a) => a.id === l.area)!;
  const facts: [string, string][] = [
    [d.facts.price[lang], `${formatTHB(l.price, lang)}${l.deal === "rent" ? ` ${t.perMonth[lang]}` : ""}`],
    [d.facts.type[lang], `${t.types[l.type][lang]} · ${t.deals[l.deal][lang]}`],
    [d.facts.size[lang], `${l.size} m²${l.land ? ` · ${t.land[lang](l.land)}` : ""}`],
    [d.facts.rooms[lang], `${l.beds === 0 ? t.studio[lang] : t.bedsShort[lang](l.beds)} · ${t.bathsShort[lang](l.baths)}${l.floor ? ` · ${t.floor[lang](l.floor)}` : ""}`],
    [d.facts.transit[lang], l.transit[lang]],
    [d.facts.available[lang], t.available[l.available][lang]],
    [d.facts.furnished[lang], l.furnished ? d.furnishedYes[lang] : d.furnishedNo[lang]],
  ];

  return (
    <article className="plot-wrap">
      <BackToResults lang={lang} label={d.back[lang]} />
      <header className={styles.detailHead}>
        <p className={styles.cardMeta}>
          <span>{l.ref}</span>
          <span>{area.label[lang]}</span>
          <span className={styles.sampleInline}>{t.sampleTag[lang]}</span>
        </p>
        <h1>{l.title[lang]}</h1>
      </header>

      <div className={styles.gallery} data-count={photos.length}>
        {photos.map((src, i) => (
          <div key={src.src} className={styles.galleryItem}>
            <Image src={src} alt="" priority={i === 0} placeholder="blur" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <p className={styles.hint}>{d.photoNote[lang]}</p>

      <div className={styles.detailGrid}>
        <div>
          <dl className={styles.facts}>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.detailLists}>
            <div>
              <h2>{d.features[lang]}</h2>
              <ul>
                {l.features[lang].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>{d.notes[lang]}</h2>
              <ul>
                {l.notes[lang].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ViewingForm lang={lang} listingRef={l.ref} />
      </div>
    </article>
  );
}
