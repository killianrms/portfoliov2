import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 404 for URLs that match no route at all (the root layout lives under [lang]).
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "404 - Killian RAMUS",
  robots: { index: false },
};

const themeScript = `(function(){var d=false;try{var t=localStorage.getItem("theme");d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;}catch(e){}document.documentElement.classList.add(d?"dark":"light");})();`;

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <main className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 md:px-10">
          <p className="type-label flex items-center gap-2 text-accent-ink">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            exit code 404
          </p>
          <p className="type-display mt-6 text-[42vw] md:text-[22rem]" aria-hidden="true">404</p>
          <h1 className="type-wide mt-4 text-3xl md:text-5xl">Page not found.</h1>
          <p className="mt-4 max-w-xl text-muted">
            This page doesn&apos;t exist or has moved. <span lang="fr">Cette page n&apos;existe pas ou a été déplacée.</span>
          </p>
          <Link
            href="/"
            className="type-label mt-10 flex h-12 w-fit items-center gap-6 bg-accent px-5 text-on-accent transition-transform hover:-translate-y-0.5"
          >
            ← Home
          </Link>
        </main>
      </body>
    </html>
  );
}
