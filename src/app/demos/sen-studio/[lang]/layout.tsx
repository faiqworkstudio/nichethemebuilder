import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { studio } from "@/config/studio";
import { isLocale, locales } from "@/lib/i18n";
import { instrumentSans, plexMono, plexThai, plexThaiLooped } from "@/demos/sen-studio/fonts";
import "@/demos/sen-studio/theme.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  // A fictional business should not compete in search results with real studios.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#eceeeb",
};

export default async function SenRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body className={`sen ${instrumentSans.variable} ${plexThai.variable} ${plexThaiLooped.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
