import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { THEME_SCRIPT } from "@/lib/theme";

// 404 for URLs that match no route at all (the root layout lives under [lang]).
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "404 | Killian RAMUS",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="antialiased">
        <main className="canvas-dots mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 md:px-10">
          <p className="type-label flex items-center gap-2.5 text-accent-ink">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            exit code 404
          </p>
          <p className="type-display mt-6 text-[42vw] md:text-[22rem]" aria-hidden="true">404</p>
          <h1 className="type-headline mt-4 text-3xl md:text-5xl">Page not found</h1>
          <p className="mt-4 max-w-xl text-muted">
            This page doesn&apos;t exist or has moved. <span lang="fr">Cette page n&apos;existe pas ou a été déplacée.</span>
          </p>
          <Link
            href="/"
            className="btn btn-primary mt-10 w-fit"
          >
            ← Home
          </Link>
        </main>
      </body>
    </html>
  );
}
