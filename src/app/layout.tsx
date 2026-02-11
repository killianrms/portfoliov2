import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
