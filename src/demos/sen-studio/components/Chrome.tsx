import Link from "next/link";
import { studio } from "@/config/studio";
import type { Locale } from "@/lib/i18n";
import { senConfig } from "../config";
import { demoNotice, footer, nav } from "../content";
import { homePath } from "../paths";
import { LangSwitch } from "./LangSwitch";
import styles from "./Chrome.module.css";

export function DemoNotice({ lang }: { lang: Locale }) {
  return (
    <div className={styles.notice}>
      <p className="sen-wrap">
        <span className={styles.noticeTag}>Demo</span> {demoNotice[lang]}
      </p>
    </div>
  );
}

/** Wordmark: Latin name with the Thai word เส้น ("line") set against a ruled stroke. */
export function Wordmark({ lang }: { lang: Locale }) {
  return (
    <span className={styles.wordmark}>
      <span className={styles.wordmarkLatin}>Sen</span>
      <span className={styles.wordmarkRule} aria-hidden="true" />
      <span className={styles.wordmarkThai} lang="th">
        เส้น
      </span>
      <span className="sen-visually-hidden">{lang === "th" ? " สตูดิโอ" : " Studio"}</span>
    </span>
  );
}

export function SiteHeader({ lang, onHome = true }: { lang: Locale; onHome?: boolean }) {
  const home = homePath(lang);
  // On project pages the section links point back to the home page anchors.
  const anchor = (id: string) => (onHome ? `#${id}` : `${home}#${id}`);

  return (
    <header className={styles.header}>
      <div className={`sen-wrap ${styles.headerInner}`}>
        <Link href={home} className={styles.brand} aria-label={senConfig.name[lang]}>
          <Wordmark lang={lang} />
        </Link>
        <nav aria-label={nav.label[lang]} className={styles.nav}>
          <ul>
            {nav.items.map((item) => (
              <li key={item.id}>
                <a href={anchor(item.id)}>{item[lang]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <LangSwitch lang={lang} label={nav.langLabel[lang]} />
          <a href={anchor("enquiry")} className={styles.headerCta}>
            {nav.cta[lang]}
          </a>
        </div>
      </div>
    </header>
  );
}

function ContactLine({ label, href, value, lang }: { label: string; href: string | null; value: string | null; lang: Locale }) {
  return (
    <li>
      <span className="sen-mono">{label}</span>
      {href && value ? (
        <a href={href}>{value}</a>
      ) : (
        <span className={styles.muted}>{footer.notConnected[lang]}</span>
      )}
    </li>
  );
}

export function SiteFooter({ lang }: { lang: Locale }) {
  const { contact } = senConfig;
  return (
    <footer className={styles.footer}>
      <div className={`sen-wrap ${styles.footerGrid}`}>
        <div className={styles.footerMark}>
          <Wordmark lang={lang} />
          <p>{senConfig.name[lang === "th" ? "en" : "th"]}</p>
        </div>
        <div>
          <h2 className="sen-mono">{footer.contactTitle[lang]}</h2>
          <ul className={styles.contactList}>
            <ContactLine label="LINE" href={contact.lineUrl} value={contact.lineId} lang={lang} />
            <ContactLine label="Email" href={contact.email ? `mailto:${contact.email}` : null} value={contact.email} lang={lang} />
            <ContactLine
              label={lang === "th" ? "โทร" : "Phone"}
              href={contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : null}
              value={contact.phone}
              lang={lang}
            />
          </ul>
          <a href={`${homePath(lang)}#enquiry`} className={styles.footerCta}>
            {nav.cta[lang]} →
          </a>
        </div>
        <div className={styles.footerNotes}>
          <p>{footer.address[lang]}</p>
          <p>{footer.credits[lang]}</p>
        </div>
        <div className={styles.footerStudio}>
          <p>
            {footer.builtBy[lang]} <strong>{studio.name}</strong>
          </p>
          {/* Different root layout: skip prefetching the shell's fonts and styles. */}
          <Link href="/" prefetch={false}>
            {footer.backToPortfolio[lang]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
