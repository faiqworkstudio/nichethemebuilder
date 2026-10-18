import Link from "next/link";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { maliConfig } from "../config";
import { demoNotice, footer, nav, visit } from "../content";
import styles from "./Chrome.module.css";

/** Five-petal jasmine mark (มะลิ). */
export function JasmineMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="20" cy="11" rx="5.2" ry="8.5" transform={`rotate(${r} 20 20)`} fill="currentColor" opacity="0.9" />
      ))}
      <circle cx="20" cy="20" r="3.2" fill="#e9c46a" />
    </svg>
  );
}

export function DemoNotice({ lang }: { lang: Locale }) {
  return (
    <p className={styles.notice}>
      <span className={styles.noticeTag}>Demo</span>
      {demoNotice[lang]}
    </p>
  );
}

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className={`mali-wrap ${styles.header}`}>
      <Link href={`${maliConfig.basePath}/${lang}`} className={styles.brand}>
        <JasmineMark className={styles.mark} />
        <span>
          <span className={styles.brandName}>{maliConfig.name[lang]}</span>
          <span className={styles.brandSub}>{lang === "th" ? "Mali Skin Clinic" : "มะลิ สกินคลินิก"}</span>
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
      <div className={styles.actions}>
        <LocaleSwitch
          basePath={maliConfig.basePath}
          lang={lang}
          label={nav.langLabel[lang]}
          classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
          labels={{ th: "ไทย" }}
        />
        <a href="#book" className={styles.cta}>
          {nav.cta[lang]}
        </a>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const { contact } = maliConfig;
  return (
    <footer className={styles.footer}>
      <div className={`mali-wrap ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <JasmineMark className={styles.footerMark} />
          <p className={styles.footerName}>{maliConfig.name[lang]}</p>
          <p>{visit.address[lang]}</p>
        </div>
        <ul className={styles.footerContact}>
          <li>
            <span>LINE</span>
            {contact.lineUrl ? <a href={contact.lineUrl}>{contact.lineId ?? "LINE"}</a> : <em>{visit.notConnected[lang]}</em>}
          </li>
          <li>
            <span>{lang === "th" ? "โทร" : "Phone"}</span>
            {contact.phone ? <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> : <em>{visit.notConnected[lang]}</em>}
          </li>
        </ul>
        <div className={styles.footerNotes}>
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
