"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Language } from "@/lib/i18n";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

export default function ClientProviders({ language, children }: { language: Language; children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider language={language}>
        <SkipLink />
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
