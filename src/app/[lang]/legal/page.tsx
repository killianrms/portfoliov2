import type { Metadata } from "next";
import LegalNotice from "@/components/LegalNotice";
import { alternates, isLanguage, ogImage } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const title = lang === "fr" ? "Mentions légales et confidentialité" : "Legal notice & privacy";
  const description =
    lang === "fr"
      ? "Éditeur, hébergeur, données personnelles et cookies du portfolio de Killian RAMUS."
      : "Publisher, host, personal data and cookies for Killian RAMUS's portfolio.";
  const links = alternates("/legal", lang);
  return { title, description, alternates: links, openGraph: { url: links.canonical, title, description, images: ogImage(lang) } };
}

export default function LegalPage() {
  return <LegalNotice />;
}
