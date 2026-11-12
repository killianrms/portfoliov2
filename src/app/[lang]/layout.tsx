import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import ClientProviders from "@/components/ClientProviders";
import { translations } from "@/data/translations";
import { LANGUAGES, SITE_URL, alternates, isLanguage } from "@/lib/i18n";
import { THEME_COLOR, THEME_SCRIPT } from "@/lib/theme";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Only /en (served at "/") and /fr exist; everything is prerendered.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Dark is the default theme; ThemeContext updates this when the visitor switches.
  themeColor: THEME_COLOR.dark,
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const t = translations[lang];
  const home = alternates("/", lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t["meta.title"], template: "%s | Killian RAMUS" },
    description: t["meta.description"],
    keywords: ["Killian RAMUS", "portfolio", "DevOps", "CI/CD", "automation", "automatisation", "Polytech Montpellier", "ITESOFT", "alternance"],
    alternates: home,
    icons: { apple: "/apple-touch-icon.png" },
    openGraph: {
      type: "website",
      url: home.canonical,
      title: t["meta.title"],
      description: t["meta.description"],
      siteName: "Killian RAMUS",
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: { card: "summary_large_image", title: t["meta.title"], description: t["meta.description"] },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    // Dark by default. The inline script switches to light before first paint
    // for visitors who chose it, hence suppressHydrationWarning on <html>.
    <html lang={lang} className={`${archivo.variable} ${jetbrains.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="antialiased">
        <ClientProviders language={lang}>{children}</ClientProviders>
        {/* Cookieless, anonymous audience measurement (no consent banner needed) */}
        <Analytics />
      </body>
    </html>
  );
}
