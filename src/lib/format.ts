import type { Locale } from "./i18n";

export const formatTHB = (n: number, lang: Locale) =>
  new Intl.NumberFormat(lang === "th" ? "th-TH" : "en-GB", {
    style: "currency",
    currency: "THB",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(n);
