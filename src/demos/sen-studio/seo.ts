import type { Metadata } from "next";
import { ogLocale, otherLocale, type Locale } from "@/lib/i18n";
import heroImage from "./assets/ari-bedroom.jpg";

/** Shared metadata builder: canonical, hreflang alternates and social tags. */
export function senMetadata({
  lang,
  path,
  title,
  description,
}: {
  lang: Locale;
  /** Path after /demos/sen-studio/{lang}, e.g. "" or "/projects/ari-townhouse". */
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = (l: Locale) => `/demos/sen-studio/${l}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url(lang),
      languages: { [lang]: url(lang), [otherLocale(lang)]: url(otherLocale(lang)) },
    },
    openGraph: {
      title,
      description,
      url: url(lang),
      siteName: lang === "th" ? "เส้น สตูดิโอ (ตัวอย่าง)" : "Sen Studio (concept demo)",
      locale: ogLocale[lang],
      alternateLocale: ogLocale[otherLocale(lang)],
      type: "website",
      images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
