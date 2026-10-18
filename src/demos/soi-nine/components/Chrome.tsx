import Link from "next/link";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { soiConfig } from "../config";
import { demoNotice, footer, gettingHere, nav } from "../content";
import styles from "./Soi.module.css";

/** The house sign: a numeral 9 in a keyhole arch. */
export function HouseMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 40" aria-hidden="true" focusable="false">
      <path d="M2 39V16a14 14 0 0 1 28 0v23Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="16" y="29" textAnchor="middle" fontSize="16" fontFamily="Georgia, serif" fill="currentColor">
        9
      </text>
    </svg>
  );
}

export function DemoNotice({ lang }: { lang: Locale }) {
  return (
    <p className={styles.notice}>
      <span>Demo</span> {demoNotice[lang]}
    </p>
  );
}

/** Header sits over the hero photograph (part of the hero, not a floating bar). */
export function Header({ lang }: { lang: Locale }) {
  return (
    <header className={`soi-wrap ${styles.header}`}>
      <Link href={`${soiConfig.basePath}/${lang}`} className={styles.brand}>
        <HouseMark className={styles.mark} />
        <span>{soiConfig.name[lang]}</span>
      </Link>
      <nav aria-label={nav.label[lang]} className={styles.nav}>
        <ul>
          {nav.items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item[lang]}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.headerActions}>
        <LocaleSwitch
          basePath={soiConfig.basePath}
          lang={lang}
          label={nav.langLabel[lang]}
          classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
        />
        <a href="#request" className={styles.headerCta}>
          {nav.cta[lang]}
        </a>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const { contact } = soiConfig;
  const line = (label: string, value: string | null, href: string | null) => (
    <li>
      <span>{label}</span>
      {value && href ? <a href={href}>{value}</a> : <em>{footer.notConnected[lang]}</em>}
    </li>
  );
  return (
    <footer className={styles.footer}>
      <div className={`soi-wrap ${styles.footerGrid}`}>
        <div>
          <HouseMark className={styles.footerMark} />
          <p className={styles.footerName}>{soiConfig.name[lang]}</p>
          <p className={styles.footerSmall}>{gettingHere.address[lang]}</p>
        </div>
        <ul className={styles.footerContact}>
          {line("LINE", contact.lineId, contact.lineUrl)}
          {line("Email", contact.email, contact.email ? `mailto:${contact.email}` : null)}
          {line(lang === "th" ? "โทร" : "Phone", contact.phone, contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : null)}
        </ul>
        <p className={styles.footerSmall}>{footer.credits[lang]}</p>
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
