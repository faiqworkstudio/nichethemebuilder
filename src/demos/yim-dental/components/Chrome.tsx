import Link from "next/link";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { yimConfig } from "../config";
import { demoNotice, footer, nav, visit } from "../content";
import styles from "./Yim.module.css";

/** A smile drawn as one stroke inside a rounded tooth-ish square. */
export function SmileMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="36" height="36" rx="12" fill="currentColor" />
      <path d="M11 18c2.5 7 15.5 7 18 0" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="29.5" cy="12" r="2.4" fill="#f5c84c" />
    </svg>
  );
}

export function DemoNotice({ lang }: { lang: Locale }) {
  return (
    <p className={styles.notice}>
      <strong>Demo</strong> {demoNotice[lang]}
    </p>
  );
}

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className={styles.headerBar}>
      <div className={`yim-wrap ${styles.header}`}>
        <Link href={`${yimConfig.basePath}/${lang}`} className={styles.brand}>
          <SmileMark className={styles.mark} />
          <span>{yimConfig.name[lang]}</span>
        </Link>
        <nav aria-label={nav.label[lang]} className={styles.nav}>
          <ul>
            {nav.items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} data-alert={item.id === "urgent" || undefined}>
                  {item[lang]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <LocaleSwitch
            basePath={yimConfig.basePath}
            lang={lang}
            label={nav.langLabel[lang]}
            classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
          />
          <a href="#book" className={styles.headerCta}>
            {nav.cta[lang]}
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const { contact } = yimConfig;
  return (
    <footer className={styles.footer}>
      <div className={`yim-wrap ${styles.footerGrid}`}>
        <div>
          <p className={styles.footerBrand}>
            <SmileMark className={styles.footerMark} />
            {yimConfig.name[lang]}
          </p>
          <p className={styles.footerSmall}>{visit.address[lang]}</p>
        </div>
        <ul className={styles.footerContact}>
          <li>
            <span>{lang === "th" ? "โทร" : "Phone"}</span>
            {contact.phone ? <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> : <em>{visit.notConnected[lang]}</em>}
          </li>
          <li>
            <span>LINE</span>
            {contact.lineUrl ? <a href={contact.lineUrl}>{contact.lineId ?? "LINE"}</a> : <em>{visit.notConnected[lang]}</em>}
          </li>
        </ul>
        <div className={styles.footerSmall}>
          <p>{footer.disclaimer[lang]}</p>
          <p>{footer.credits[lang]}</p>
        </div>
        <div className={styles.footerStudio}>
          <p>
            {footer.builtBy[lang]} <strong>{studio.name}</strong>
          </p>
          <Link href="/" prefetch={false}>
            {footer.back[lang]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
