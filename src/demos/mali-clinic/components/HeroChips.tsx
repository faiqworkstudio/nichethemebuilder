"use client";

import type { Locale } from "@/lib/i18n";
import { hero } from "../content";
import { concerns } from "../treatments";
import { useConcerns } from "./ConcernContext";
import styles from "./Mali.module.css";

/** Concern chips in the hero: picking one filters the treatment list and jumps to it. */
export function HeroChips({ lang }: { lang: Locale }) {
  const { selected, toggle } = useConcerns();
  const pick = (id: (typeof concerns)[number]["id"]) => {
    const wasSelected = selected.includes(id);
    toggle(id);
    if (!wasSelected) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("treatments")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  };
  return (
    <div className={styles.heroChips}>
      <p id="hero-chips-label">{hero.chipsLabel[lang]}</p>
      <div role="group" aria-labelledby="hero-chips-label">
        {concerns.map((c) => (
          <button key={c.id} type="button" aria-pressed={selected.includes(c.id)} onClick={() => pick(c.id)} className={styles.chip}>
            {c.label[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
