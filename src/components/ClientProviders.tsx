"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "./Navbar";
import SpotlightCursor from "./SpotlightCursor";
import Footer from "./Footer";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <SpotlightCursor />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
