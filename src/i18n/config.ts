export type Lang = "en" | "jp";

export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "apm-lang";

/** Pick a localized value, falling back to English when a JP string is absent. */
export function tr(lang: Lang, en: string, jp?: string): string {
  return lang === "jp" ? jp ?? en : en;
}
