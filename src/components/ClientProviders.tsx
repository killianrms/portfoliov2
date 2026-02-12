"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";

// GSAP ~20KB — only needed on desktop for cursor effect
const SpotlightCursor = dynamic(() => import("./SpotlightCursor"), {
  ssr: false,
});

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
