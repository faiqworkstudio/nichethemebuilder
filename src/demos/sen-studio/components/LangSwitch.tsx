import { LocaleSwitch } from "@/components/LocaleSwitch";
import type { Locale } from "@/lib/i18n";
import { senConfig } from "../config";
import styles from "./Chrome.module.css";

export function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <LocaleSwitch
      basePath={senConfig.basePath}
      lang={lang}
      label={label}
      classNames={{ nav: styles.lang, current: styles.langCurrent, link: styles.langLink }}
    />
  );
}
