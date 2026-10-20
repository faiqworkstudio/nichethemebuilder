import { Mulish, Noto_Sans_Thai_Looped, Pridi } from "next/font/google";

// Pridi: a warm Thai + Latin serif with soft terminals, for headings and the menu.
// Body is a per-script stack: Mulish (soft, open) for English and the looped
// Noto Sans Thai for comfortable Thai reading.
export const pridi = Pridi({ subsets: ["thai", "latin"], weight: ["300", "400", "500"], variable: "--font-thara-display", display: "swap" });
export const mulish = Mulish({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-thara-latin", display: "swap" });
export const notoLooped = Noto_Sans_Thai_Looped({ subsets: ["thai"], weight: ["400", "500", "600"], variable: "--font-thara-body", display: "swap" });
