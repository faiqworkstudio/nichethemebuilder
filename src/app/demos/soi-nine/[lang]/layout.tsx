import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { fraunces, notoSerifThai, sarabun } from "@/demos/soi-nine/fonts";
import "@/demos/soi-nine/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // A fictional property must not appear in search results next to real hotels.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = { themeColor: "#2a211c" };

export default async function SoiRootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={`soi ${fraunces.variable} ${notoSerifThai.variable} ${sarabun.variable}`}>{children}</body>
    </html>
  );
}
