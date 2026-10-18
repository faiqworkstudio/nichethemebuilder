import type { Locale } from "@/lib/i18n";
import { maliConfig } from "./config";

export const maliHome = (lang: Locale) => `${maliConfig.basePath}/${lang}`;
