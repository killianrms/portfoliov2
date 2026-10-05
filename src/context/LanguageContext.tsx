"use client";

import { createContext, useContext, useCallback, useMemo, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { translations, type TranslationKey } from "@/data/translations";
import { frSpaces } from "@/lib/typo";
import { localePath, switchLocalePath, type Language } from "@/lib/i18n";

export type { Language };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  /** Prefix an internal path with the current language ("/projects/x" -> "/fr/projects/x"). */
  path: (href: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// The language comes from the URL: English at "/", French under "/fr".
export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  const router = useRouter();

  const toggleLanguage = useCallback(() => {
    const { pathname, hash } = window.location;
    router.push(switchLocalePath(pathname, language === "fr" ? "en" : "fr") + hash, { scroll: false });
  }, [language, router]);

  const t = useCallback(
    (key: TranslationKey): string => {
      const text = translations[language][key] || key;
      return language === "fr" ? frSpaces(text) : text;
    },
    [language]
  );

  const path = useCallback((href: string) => localePath(href, language), [language]);

  const value = useMemo(() => ({ language, toggleLanguage, t, path }), [language, toggleLanguage, t, path]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
