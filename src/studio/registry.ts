import { maliShowcase } from "@/demos/mali-clinic/showcase";
import { plotShowcase } from "@/demos/plot-property/showcase";
import { senShowcase } from "@/demos/sen-studio/showcase";
import { soiShowcase } from "@/demos/soi-nine/showcase";
import { tharaShowcase } from "@/demos/thara-spa/showcase";
import { yimShowcase } from "@/demos/yim-dental/showcase";
import type { DemoEntry } from "./types";

/**
 * Every demo registers itself here — one import per demo folder. Order is the
 * order shown on the showcase page.
 */
export const demos: DemoEntry[] = [senShowcase, maliShowcase, soiShowcase, yimShowcase, tharaShowcase, plotShowcase];
