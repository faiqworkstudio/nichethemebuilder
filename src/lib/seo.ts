import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { ogLocale, otherLocale, type Locale, type L } from "./i18n";

/** Canonical, hreflang alternates and social tags for a bilingual demo page. */
export function demoMetadata({
  basePath,
  lang,
  path = "",
  title,
  description,
  siteName,
  image,
}: {
  /** e.g. "/demos/mali-clinic" */
  basePath: string;
  lang: Locale;
  /** Path after /{lang}, e.g. "" or "/projects/x". */
  path?: string;
  title: string;
  description: string;
  siteName: L;
  image: StaticImageData;
}): Metadata {
  const url = (l: Locale) => `${basePath}/${l}${path}`;
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
      siteName: siteName[lang],
      locale: ogLocale[lang],
      alternateLocale: ogLocale[otherLocale(lang)],
      type: "website",
      images: [{ url: image.src, width: image.width, height: image.height }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
