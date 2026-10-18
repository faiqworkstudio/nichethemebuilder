import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { baiJamjuree } from "@/demos/plot-property/fonts";
import "@/demos/plot-property/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // Sample listings must never be indexed as if they were real properties.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default async function PlotRootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={`plot ${baiJamjuree.variable}`}>{children}</body>
    </html>
  );
}
