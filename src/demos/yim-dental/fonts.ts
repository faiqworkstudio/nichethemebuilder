import { Mitr, Niramit, Nunito, Nunito_Sans } from "next/font/google";

// Per-script stacks. English: Nunito's rounded, friendly headings and Nunito
// Sans for reading. Thai: Mitr's soft geometry for headings, Niramit's
// humanist shapes for body text. Each script gets a face designed for it.
export const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-yim-latin-display", display: "swap" });
export const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-yim-latin-body", display: "swap" });
export const mitr = Mitr({ subsets: ["thai"], weight: ["400", "500", "600"], variable: "--font-yim-display", display: "swap" });
export const niramit = Niramit({ subsets: ["thai"], weight: ["400", "500", "600"], variable: "--font-yim-body", display: "swap" });
