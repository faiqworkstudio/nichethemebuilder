import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { mitr, niramit, nunito, nunitoSans } from "@/demos/yim-dental/fonts";
import "@/demos/yim-dental/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // A fictional clinic should not appear in search results next to real ones.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default async function YimRootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={`yim ${nunito.variable} ${nunitoSans.variable} ${mitr.variable} ${niramit.variable}`}>{children}</body>
    </html>
  );
}
