import type { Locale } from "@/lib/i18n";
import { senConfig } from "./config";

export const homePath = (lang: Locale) => `${senConfig.basePath}/${lang}`;
export const projectPath = (lang: Locale, slug: string) => `${senConfig.basePath}/${lang}/projects/${slug}`;
