"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { formatTHB } from "@/lib/format";
import { MAX_NIGHTS, nightsBetween, sampleTotal } from "../booking";
import { roomsCopy as t } from "../content";
import { roomImages } from "../roomImages";
import { rooms, type RoomId } from "../rooms";
import { scrollToId, useStay } from "./StayContext";
import styles from "./Soi.module.css";

/** Tabbed room catalogue (WAI-ARIA tabs with arrow-key support). */
export function RoomCatalogue({ lang }: { lang: Locale }) {
  const { checkIn, checkOut, guests, update } = useStay();
  const [active, setActive] = useState<RoomId>("teak");
  const tabs = useRef<Record<string, HTMLButtonElement | null>>({});
  const room = rooms.find((r) => r.id === active)!;
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : null;
  const validNights = nights !== null && nights >= 1 && nights <= MAX_NIGHTS ? nights : null;
  const fits = room.sleeps >= guests;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? rooms.length - 1 : (index + delta + rooms.length) % rooms.length;
    setActive(rooms[next].id);
    tabs.current[rooms[next].id]?.focus();
  };

  return (
    <div className={styles.catalogue}>
      <div role="tablist" aria-label={t.tabsLabel[lang]} className={styles.tabs}>
        {rooms.map((r, i) => (
          <button
            key={r.id}
            ref={(el) => {
              tabs.current[r.id] = el;
            }}
            role="tab"
            id={`tab-${r.id}`}
            aria-selected={active === r.id}
            aria-controls={`panel-${r.id}`}
            tabIndex={active === r.id ? 0 : -1}
            onClick={() => setActive(r.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={styles.tab}
            data-unfit={r.sleeps < guests || undefined}
          >
            <span className={styles.tabNo}>{String(i + 1).padStart(2, "0")}</span>
            <span>{r.name[lang]}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${room.id}`} aria-labelledby={`tab-${room.id}`} className={styles.panel} tabIndex={0}>
        <div className={styles.panelImage}>
          <Image key={room.id} src={roomImages[room.id]} alt={room.alt[lang]} placeholder="blur" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.panelText}>
          <h3>{room.name[lang]}</h3>
          <p className={styles.tagline}>{room.tagline[lang]}</p>
          <dl className={styles.specs}>
            <div>
              <dt>{t.size[lang]}</dt>
              <dd>{room.size} m²</dd>
            </div>
            <div>
              <dt>{t.bed[lang]}</dt>
              <dd>{room.bed[lang]}</dd>
            </div>
            <div>
              <dt>{t.sleeps[lang]}</dt>
              <dd>{t.people[lang](room.sleeps)}</dd>
            </div>
            <div>
              <dt>{t.view[lang]}</dt>
              <dd>{room.view[lang]}</dd>
            </div>
          </dl>
          <ul className={styles.roomDetails}>
            {room.details[lang].map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className={styles.rate}>
            <p>
              <span>
                {t.from[lang]} <em>({t.sampleTag[lang]})</em>
              </span>
              <strong>
                {formatTHB(room.monthly ?? room.sampleRate, lang)} {room.monthly ? t.perMonth[lang] : t.perNight[lang]}
              </strong>
            </p>
            {!room.monthly && validNights ? (
              <p>
                <span>{t.total[lang](validNights)}</span>
                <strong>{formatTHB(sampleTotal(room.id, validNights), lang)}</strong>
              </p>
            ) : null}
          </div>
          {!fits ? <p className={styles.warn}>{t.tooSmall[lang]}</p> : null}
          <button
            type="button"
            className={styles.primary}
            onClick={() => {
              update(room.monthly ? { room: room.id, note: t.monthlyNote[lang] } : { room: room.id });
              scrollToId("request");
            }}
          >
            {room.monthly ? t.monthlyAsk[lang] : t.request[lang]} →
          </button>
        </div>
      </div>
    </div>
  );
}
