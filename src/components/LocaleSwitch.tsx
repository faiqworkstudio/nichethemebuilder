"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { locales, type Locale } from "@/lib/i18n";

const names: Record<Locale, { short: string; full: string }> = {
  th: { short: "TH", full: "ภาษาไทย" },
  en: { short: "EN", full: "English" },
};

type Props = {
  /** Demo base path, e.g. "/demos/sen-studio". */
  basePath: string;
  lang: Locale;
  label: string;
  classNames: { nav?: string; current?: string; link?: string };
  /** Visible text per locale; defaults to TH / EN. Plain data so server components can pass it. */
  labels?: Partial<Record<Locale, string>>;
};

/**
 * Links to the same page in the other locale, keeping the current #section.
 * Shared by all demos; each demo styles it through `classNames`.
 */
export function LocaleSwitch({ basePath, lang, label, classNames, labels = {} }: Props) {
  const display = (code: Locale) => labels[code] ?? names[code].short;
  const pathname = usePathname() ?? `${basePath}/${lang}`;
  const prefix = `${basePath}/${lang}`;
  const rest = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : "";

  const keepHash = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;
    if (hash) event.currentTarget.href = event.currentTarget.href.split("#")[0] + hash;
  };

  return (
    <nav aria-label={label} className={classNames.nav}>
      {locales.map((code) =>
        code === lang ? (
          <span key={code} aria-current="true" className={classNames.current} lang={code} title={names[code].full}>
            {display(code)}
          </span>
        ) : (
          <a key={code} href={`${basePath}/${code}${rest}`} hrefLang={code} lang={code} onClick={keepHash} className={classNames.link}>
            <span aria-hidden="true">{display(code)}</span>
            <span className="visually-hidden">{names[code].full}</span>
          </a>
        ),
      )}
    </nav>
  );
}
