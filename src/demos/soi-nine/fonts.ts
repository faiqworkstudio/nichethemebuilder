import { Fraunces, Noto_Serif_Thai, Sarabun } from "next/font/google";

// Fraunces carries the editorial, slightly old-fashioned hotel voice for Latin
// headings; Noto Serif Thai takes over glyph-by-glyph for Thai headings.
// Sarabun is a familiar, highly readable Thai + Latin text face.
export const fraunces = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-soi-display", display: "swap" });
export const notoSerifThai = Noto_Serif_Thai({ subsets: ["thai"], weight: ["300", "400", "500"], variable: "--font-soi-thai-display", display: "swap" });
export const sarabun = Sarabun({ subsets: ["thai", "latin"], weight: ["300", "400", "500", "600"], variable: "--font-soi-body", display: "swap" });
