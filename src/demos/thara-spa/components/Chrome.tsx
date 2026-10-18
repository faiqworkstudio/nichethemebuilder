import Link from "next/link";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { tharaConfig } from "../config";
import { demoNotice, footer, nav, visitInfo } from "../content";
import styles from "./Thara.module.css";

/** Three ripples — ธารา means "stream". */
export function RippleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 24" aria-hidden="true" focusable="false">
      {[4, 11, 18].map((y, i) => (
        <path key={y} d={`M2 ${y}c5-4 9 4 14 0s9-4 14 0 6 3 8 1`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity={1 - i * 0.25} />
      ))}
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

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className={`thara-wrap ${styles.header}`}>
      <Link href={`${tharaConfig.basePath}/${lang}`} className={styles.brand}>
        <RippleMark className={styles.mark} />
        <span className={styles.brandLatin}>Thara</span>
        <span className={styles.brandThai} lang="th">
          ธารา
        </span>
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
      <LocaleSwitch
        basePath={tharaConfig.basePath}
        lang={lang}
        label={nav.langLabel[lang]}
        classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
        labels={{ th: "ไทย", en: "English" }}
      />
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const { contact } = tharaConfig;
  return (
    <footer className={styles.footer}>
      <div className={`thara-wrap ${styles.footerGrid}`}>
        <div>
          <RippleMark className={styles.footerMark} />
          <p className={styles.footerName}>{tharaConfig.name[lang]}</p>
          <p className={styles.footerSmall}>{visitInfo.address[lang]}</p>
          <p className={styles.footerSmall}>{visitInfo.hours[lang]}</p>
        </div>
        <ul className={styles.footerContact}>
          <li>
            <span>LINE</span>
            {contact.lineUrl ? <a href={contact.lineUrl}>{contact.lineId ?? "LINE"}</a> : <em>{visitInfo.notConnected[lang]}</em>}
          </li>
          <li>
            <span>{lang === "th" ? "โทร" : "Phone"}</span>
            {contact.phone ? <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> : <em>{visitInfo.notConnected[lang]}</em>}
          </li>
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
