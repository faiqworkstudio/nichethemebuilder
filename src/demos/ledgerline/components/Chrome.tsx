import Link from "next/link";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { ledgerConfig } from "../config";
import { demoNotice, footer, footnotes, nav } from "../content";
import styles from "./Ledger.module.css";

export function DemoNotice({ lang }: { lang: Locale }) {
  return (
    <p className={styles.notice}>
      <em>Demo.</em> {demoNotice[lang]}
    </p>
  );
}

/** A masthead rather than a navbar: name, rule, sections. */
export function Masthead({ lang }: { lang: Locale }) {
  return (
    <header className={`ledger-wrap ${styles.masthead}`}>
      <div className={styles.mastTop}>
        <Link href={`${ledgerConfig.basePath}/${lang}`} className={styles.brand}>
          Ledgerline
          <span lang="th">เลดเจอร์ไลน์</span>
        </Link>
        <div className={styles.mastActions}>
          <LocaleSwitch
            basePath={ledgerConfig.basePath}
            lang={lang}
            label={nav.langLabel[lang]}
            classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
            labels={{ th: "ภาษาไทย", en: "English" }}
          />
          <a href="#intro" className={styles.mastCta}>
            {nav.cta[lang]}
          </a>
        </div>
      </div>
      <nav aria-label={nav.label[lang]} className={styles.nav}>
        <ul>
          {nav.items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item[lang]}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const { contact } = ledgerConfig;
  const row = (label: string, value: string | null, href: string | null) => (
    <li>
      <span>{label}</span>
      {value && href ? <a href={href}>{value}</a> : <em>{footer.notConnected[lang]}</em>}
    </li>
  );
  return (
    <footer className={styles.footer}>
      <div className="ledger-wrap">
        <section className={styles.notes} aria-labelledby="notes-title">
          <h2 id="notes-title">{footer.notes[lang]}</h2>
          <ol>
            {footnotes.map((note) => (
              <li key={note.n} id={`note-${note.n}`}>
                <span>{note.n}</span>
                {note.text[lang]}
              </li>
            ))}
          </ol>
        </section>
        <div className={styles.footerGrid}>
          <div>
            <p className={styles.footerBrand}>{ledgerConfig.name[lang]}</p>
            <p className={styles.small}>{footer.address[lang]}</p>
          </div>
          <ul className={styles.footerContact}>
            {row("LINE", contact.lineId, contact.lineUrl)}
            {row(lang === "th" ? "โทร" : "Phone", contact.phone, contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : null)}
            {row("Email", contact.email, contact.email ? `mailto:${contact.email}` : null)}
          </ul>
          <p className={styles.small}>
            {demoNotice[lang]} {footer.credits[lang]}
          </p>
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
