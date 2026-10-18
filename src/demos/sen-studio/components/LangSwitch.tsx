"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { locales, type Locale } from "@/lib/i18n";
import { senConfig } from "../config";
import styles from "./Chrome.module.css";

const names: Record<Locale, { short: string; full: string }> = {
  th: { short: "TH", full: "ภาษาไทย" },
  en: { short: "EN", full: "English" },
};

/**
 * Switches between /th and /en versions of the same page, keeping the
 * current section anchor so visitors stay where they were.
 */
export function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() ?? `${senConfig.basePath}/${lang}`;
  const prefix = `${senConfig.basePath}/${lang}`;
  const rest = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : "";

  const keepHash = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;
    if (hash) event.currentTarget.href = event.currentTarget.href.split("#")[0] + hash;
  };

  return (
    <nav aria-label={label} className={styles.lang}>
      {locales.map((code) => {
        const current = code === lang;
        return current ? (
          <span key={code} aria-current="true" className={styles.langCurrent} lang={code} title={names[code].full}>
            {names[code].short}
          </span>
        ) : (
          <a
            key={code}
            href={`${senConfig.basePath}/${code}${rest}`}
            hrefLang={code}
            lang={code}
            onClick={keepHash}
            className={styles.langLink}
          >
            <span aria-hidden="true">{names[code].short}</span>
            <span className="sen-visually-hidden">{names[code].full}</span>
          </a>
        );
      })}
    </nav>
  );
}
