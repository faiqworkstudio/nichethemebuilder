import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { demoMetadata } from "@/lib/seo";
import { plotConfig } from "@/demos/plot-property/config";
import { explorer, nav } from "@/demos/plot-property/content";
import { DemoNotice, Footer, Header } from "@/demos/plot-property/components/Chrome";
import { ListingDetail } from "@/demos/plot-property/components/ListingDetail";
import { listingImages } from "@/demos/plot-property/listingImages";
import { getListing, listings } from "@/demos/plot-property/listings";

type Props = { params: Promise<{ lang: string; ref: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => listings.map((l) => ({ lang, ref: l.ref })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, ref } = (await params) as { lang: Locale; ref: string };
  const listing = getListing(ref);
  if (!listing) return {};
  return demoMetadata({
    basePath: plotConfig.basePath,
    lang,
    path: `/listings/${ref}`,
    title: `${listing.title[lang]} (${explorer.sampleTag[lang]}) | ${plotConfig.name[lang]}`,
    description: `${explorer.sampleTag[lang]} ${listing.ref}: ${listing.title[lang]} — ${listing.transit[lang]}.`,
    siteName: { th: "พล็อต พร็อพเพอร์ตี้ (ตัวอย่าง)", en: "Plot Property (concept demo)" },
    image: listingImages[ref][0],
  });
}

export default async function ListingPage({ params }: Props) {
  const { lang, ref } = (await params) as { lang: Locale; ref: string };
  const listing = getListing(ref);
  if (!listing) notFound();
  return (
    <>
      <a href="#main" className="plot-skip">
        {nav.skip[lang]}
      </a>
      <DemoNotice lang={lang} />
      <Header lang={lang} onHome={false} />
      <main id="main" tabIndex={-1}>
        <ListingDetail lang={lang} listing={listing} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
