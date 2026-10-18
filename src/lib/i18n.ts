export const locales = ["th", "en"] as const;
export type Locale = (typeof locales)[number];

/** A value provided in every supported locale. */
export type L<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const otherLocale = (locale: Locale): Locale => (locale === "th" ? "en" : "th");

export const ogLocale: L = { th: "th_TH", en: "en_US" };
