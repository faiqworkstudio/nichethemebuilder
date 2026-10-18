import { Mitr, Niramit } from "next/font/google";

// Both Thai-designed families with matching Latin: Mitr's soft geometry for
// friendly, confident headings; Niramit's humanist shapes for easy reading.
export const mitr = Mitr({ subsets: ["thai", "latin"], weight: ["400", "500", "600"], variable: "--font-yim-display", display: "swap" });
export const niramit = Niramit({ subsets: ["thai", "latin"], weight: ["400", "500", "600"], variable: "--font-yim-body", display: "swap" });
