import { Bai_Jamjuree, Schibsted_Grotesk } from "next/font/google";

// Swiss restraint with a human voice: Schibsted Grotesk (a warm grotesque)
// carries English and numbers; Bai Jamjuree, a Thai-designed sans, takes over
// glyph-by-glyph for Thai.
export const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plot-latin", display: "swap" });
export const baiJamjuree = Bai_Jamjuree({ subsets: ["thai"], weight: ["300", "400", "500", "600", "700"], variable: "--font-plot", display: "swap" });
