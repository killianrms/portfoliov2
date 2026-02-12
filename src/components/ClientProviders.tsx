"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
import MotionProvider from "./MotionProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

// GSAP is ~20KB gzipped — only load on desktop where the cursor is visible
const SpotlightCursor = dynamic(() => import("./SpotlightCursor"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MotionProvider>
          <Navbar />
          <SpotlightCursor />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
