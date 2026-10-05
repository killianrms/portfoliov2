import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import ClientProviders from "@/components/ClientProviders";
import { translations } from "@/data/translations";
import { LANGUAGES, SITE_URL, alternates, isLanguage } from "@/lib/i18n";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9eaec" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d11" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const t = translations[lang];
  const home = alternates("/", lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t["meta.title"], template: "%s - Killian RAMUS" },
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

// Applied before first paint so the theme never flashes or remounts the app:
// the saved choice if there is one, otherwise the device setting.
const themeScript = `(function(){var d=false;try{var t=localStorage.getItem("theme");d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;}catch(e){}document.documentElement.classList.add(d?"dark":"light");})();`;

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
    <html lang={lang} className={`${archivo.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ClientProviders language={lang}>{children}</ClientProviders>
      </body>
    </html>
  );
}
