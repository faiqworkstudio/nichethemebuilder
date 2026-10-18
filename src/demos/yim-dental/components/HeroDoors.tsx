"use client";

import type { Locale } from "@/lib/i18n";
import { hero } from "../content";
import { useYim } from "./YimContext";
import styles from "./Yim.module.css";

/** Three task-first entry points. Each is a real link; JS adds the matching library filter. */
export function HeroDoors({ lang }: { lang: Locale }) {
  const { setCategory } = useYim();
  return (
    <nav aria-label={hero.doorsLabel[lang]} className={styles.doors}>
      <p className={styles.doorsLabel}>{hero.doorsLabel[lang]}</p>
      <ul>
        {hero.doors.map((door, i) => (
          <li key={door.id}>
            <a
              href={door.href}
              className={styles.door}
              data-tone={door.id}
              onClick={() => {
                if (door.id === "checkup") setCategory("checkup");
                if (door.id === "straighten") setCategory("straighten");
              }}
            >
              <span className={styles.doorNo} aria-hidden="true">
                {i + 1}
              </span>
              <span className={styles.doorTitle}>{door.title[lang]}</span>
              <span className={styles.doorBody}>{door.body[lang]}</span>
              <span className={styles.doorArrow} aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
