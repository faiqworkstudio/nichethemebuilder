import Link from "next/link";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { plotConfig } from "../config";
import { demoNotice, footer, nav } from "../content";
import styles from "./Plot.module.css";

/** A floor-plan square with one red room. */
export function PlotMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="1.5" y="1.5" width="29" height="29" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 1.5v18M1.5 19.5h29" stroke="currentColor" strokeWidth="3" />
      <rect x="18" y="21" width="11" height="8" fill="#d0021b" />
    </svg>
  );
}

export function DemoNotice({ lang }: { lang: Locale }) {
  return (
    <p className={styles.notice}>
      <strong>DEMO</strong> {demoNotice[lang]}
    </p>
  );
}

export function Header({ lang, onHome = true }: { lang: Locale; onHome?: boolean }) {
  const home = `${plotConfig.basePath}/${lang}`;
  return (
    <header className={styles.header}>
      <div className={`plot-wrap ${styles.headerInner}`}>
        <Link href={home} className={styles.brand}>
          <PlotMark className={styles.mark} />
          <span>{plotConfig.name[lang]}</span>
        </Link>
        <nav aria-label={nav.label[lang]} className={styles.nav}>
          <ul>
            {nav.items.map((item) => (
              <li key={item.id}>
                <a href={onHome ? `#${item.id}` : `${home}#${item.id}`}>{item[lang]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitch
          basePath={plotConfig.basePath}
          lang={lang}
          label={nav.langLabel[lang]}
          classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
        />
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const { contact } = plotConfig;
  const row = (label: string, value: string | null, href: string | null) => (
    <li>
      <span>{label}</span>
      {value && href ? <a href={href}>{value}</a> : <em>{footer.notConnected[lang]}</em>}
    </li>
  );
  return (
    <footer className={styles.footer}>
      <div className={`plot-wrap ${styles.footerGrid}`}>
        <p className={styles.footerBrand}>
          <PlotMark className={styles.footerMark} />
          {plotConfig.name[lang]}
        </p>
        <ul className={styles.footerContact}>
          {row("LINE", contact.lineId, contact.lineUrl)}
          {row(lang === "th" ? "โทร" : "Phone", contact.phone, contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : null)}
          {row("Email", contact.email, contact.email ? `mailto:${contact.email}` : null)}
        </ul>
        <p className={styles.footerSmall}>
          {demoNotice[lang]} {footer.credits[lang]}
        </p>
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
