"use client";

import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { menuCopy as t } from "../content";
import { menu } from "../menu";
import { scrollToId, useBooking } from "./BookingContext";
import styles from "./Thara.module.css";

/** A printed-menu style price board; each price line can start a booking. */
export function MenuBoard({ lang }: { lang: Locale }) {
  const { chooseTreatment, update } = useBooking();
  return (
    <ul className={styles.board}>
      {menu.map((item) => (
        <li key={item.id} className={styles.boardItem}>
          <h3>
            {item.name[lang]}
            <span lang={lang === "th" ? "en" : "th"}>{item.alt[lang]}</span>
          </h3>
          <p>{item.body[lang]}</p>
          <p className={styles.wear}>{item.wear[lang]}</p>
          <ul className={styles.prices}>
            {Object.entries(item.prices).map(([mins, price]) => (
              <li key={mins}>
                <span>
                  {mins} {t.min[lang]}
                </span>
                <span className={styles.leader} aria-hidden="true" />
                <span>{formatTHB(price, lang)}</span>
                <button
                  type="button"
                  onClick={() => {
                    chooseTreatment(item.id);
                    update({ duration: Number(mins), time: "" });
                    scrollToId("top");
                  }}
                >
                  {t.book[lang]}
                  <span className="visually-hidden">
                    {" "}
                    {item.name[lang]} {mins} {t.min[lang]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
