"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LANG, STORAGE_KEY, tr, type Lang } from "./config";
import { dictionary, type Dict } from "./dictionary";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** UI dictionary for the active language. */
  t: Dict;
  /** Pick between an English and Japanese string for the active language. */
  pick: (en: string, jp?: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Hydrate from storage / browser preference once on mount.
  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem(STORAGE_KEY) as Lang | null)
        : null;
    if (stored === "en" || stored === "jp") {
      setLangState(stored);
    } else if (
      typeof navigator !== "undefined" &&
      navigator.language?.toLowerCase().startsWith("ja")
    ) {
      setLangState("jp");
    }
  }, []);

  // Keep <html lang> and storage in sync.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "jp" ? "ja" : "en";
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "en" ? "jp" : "en"),
    [lang, setLang],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: dictionary[lang],
      pick: (en, jp) => tr(lang, en, jp),
    }),
    [lang, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
