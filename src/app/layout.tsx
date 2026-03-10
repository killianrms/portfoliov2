import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  title: "Killian RAMUS - Portfolio",
  description:
    "Portfolio de Killian RAMUS - Développeur Créatif & Passionné de Cybersécurité. Création d'expériences interactives et sécurisées.",
  keywords: [
    "Killian RAMUS",
    "portfolio",
    "développeur",
    "cybersécurité",
    "Java",
    "Python",
    "React",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    url: "https://killianrms.com",
    title: "Killian RAMUS - Portfolio",
    description: "Développeur Créatif & Passionné de Cybersécurité. Création d'expériences interactives et sécurisées.",
    siteName: "Killian RAMUS",
    images: [{ url: "https://killianrms.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Killian RAMUS - Portfolio",
    description: "Développeur Créatif & Passionné de Cybersécurité.",
    images: ["https://killianrms.com/og-image.png"],
  },
  metadataBase: new URL("https://killianrms.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
