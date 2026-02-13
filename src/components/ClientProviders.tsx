"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SpotlightCursor = dynamic(() => import("./SpotlightCursor"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        {isDesktop && <SpotlightCursor />}
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
