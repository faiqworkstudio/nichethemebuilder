"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { neighbourhood as n, places } from "../content";
import chinatown from "../assets/chinatown.jpg";
import temple from "../assets/temple.jpg";
import food from "../assets/thai-food.jpg";
import cafe from "../assets/cafe.jpg";
import styles from "./Soi.module.css";

const photos: Record<string, StaticImageData> = { chinatown, temple, food, cafe };

/** Sketch map + journal entries; hovering or focusing an entry lights up its pin. */
export function Neighbourhood({ lang }: { lang: Locale }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={styles.journal}>
      <figure className={styles.mapWrap}>
        <svg viewBox="0 0 100 80" className={styles.map} role="img" aria-label={n.mapLabel[lang]}>
          {/* River and main roads, drawn loosely by hand. */}
          <path d="M-2 40 C 10 46, 14 62, 8 82" className={styles.river} />
          <path d="M8 76 C 30 70, 55 62, 102 66" className={styles.road} />
          <path d="M30 -2 C 40 20, 56 36, 70 82" className={styles.road} />
          <path d="M44 30 C 60 26, 80 32, 102 30" className={styles.roadThin} />
          <text x="3" y="56" className={styles.riverLabel} transform="rotate(68 3 56)">
            {n.river[lang]}
          </text>
          <g className={styles.home} transform="translate(46 60)">
            <rect x="-3" y="-3" width="6" height="6" rx="1" />
          </g>
          <text x="50" y="57" className={styles.homeLabel}>
            {n.you[lang]}
          </text>
          {places.map((p) => (
            <g key={p.n} className={styles.pin} data-active={active === p.n || undefined} transform={`translate(${p.x} ${p.y})`}>
              <circle r="3.4" />
              <text y="1.2">{p.n}</text>
            </g>
          ))}
        </svg>
        <figcaption>{n.notToScale[lang]}</figcaption>
      </figure>

      <ol className={styles.places}>
        {places.map((p) => (
          <li
            key={p.n}
            className={styles.place}
            data-has-image={p.image ? true : undefined}
            onMouseEnter={() => setActive(p.n)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(p.n)}
            onBlur={() => setActive(null)}
            tabIndex={0}
          >
            {p.image ? (
              <div className={styles.placeImage}>
                <Image src={photos[p.image]} alt={p.imageAlt?.[lang] ?? ""} placeholder="blur" fill sizes="(max-width: 900px) 90vw, 30vw" style={{ objectFit: "cover" }} />
              </div>
            ) : null}
            <p className={styles.placeMeta}>
              <span className={styles.placeNo}>{p.n}</span>
              {p.time[lang]}
            </p>
            <h3>{p.name[lang]}</h3>
            <p>{p.body[lang]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
