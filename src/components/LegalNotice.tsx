"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { frSpaces } from "@/lib/typo";
import { ArrowIcon } from "./Icons";

type Section = { title: string; body: string[] };

// Legal notice required by French law (LCEN, art. 6) and the information
// owed to people who use the contact form (GDPR, art. 13).
const content: Record<"fr" | "en", { title: string; updated: string; sections: Section[] }> = {
  fr: {
    title: "Mentions légales et confidentialité",
    updated: "Dernière mise à jour : septembre 2026",
    sections: [
      {
        title: "Éditeur du site",
        body: [
          "Ce site est le portfolio personnel de Killian Ramus, édité à titre non professionnel.",
          "Directeur de la publication : Killian Ramus.",
          "Contact : killian.ramus@gmail.com, le formulaire de contact du site ou LinkedIn (linkedin.com/in/killianrms).",
        ],
      },
      {
        title: "Hébergement",
        body: [
          "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
          "Contact : privacy@vercel.com, vercel.com/contact.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        body: [
          "Les textes, visuels et le code présentés sur ce site sont la propriété de Killian Ramus, sauf mention contraire. Les logos et marques cités appartiennent à leurs propriétaires respectifs.",
        ],
      },
      {
        title: "Données personnelles",
        body: [
          "Le formulaire de contact collecte votre nom, votre adresse email et votre message. Ces données servent uniquement à vous répondre ; elles ne sont ni revendues ni utilisées à des fins commerciales.",
          "Responsable du traitement : Killian Ramus. Base légale : votre demande de contact (intérêt légitime à y répondre).",
          "Destinataires : Killian Ramus uniquement. Les messages transitent par Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, service d'envoi d'emails) et le site est hébergé par Vercel, deux sous-traitants situés aux États-Unis.",
          "Transferts hors de l'Union européenne : Vercel et Resend sont certifiés au Data Privacy Framework UE-États-Unis et encadrent leurs transferts par les clauses contractuelles types de la Commission européenne.",
          "Journaux techniques : comme tout hébergeur, Vercel enregistre des données de connexion (adresse IP, date, page demandée) pour assurer la sécurité et le bon fonctionnement du site. Je ne les exploite pas.",
          "Durée de conservation : les échanges sont conservés au maximum 3 ans après le dernier contact.",
          "Vos droits : vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement, en écrivant à killian.ramus@gmail.com. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).",
        ],
      },
      {
        title: "Cookies",
        body: [
          "Ce site n'utilise aucun cookie. Il mesure son audience avec Vercel Web Analytics, qui ne dépose pas de cookie et ne permet pas de vous identifier : seules des statistiques agrégées (pages vues, pays, type d'appareil) sont produites, à seule fin de mesurer la fréquentation. Votre choix de langue et de thème (clair ou sombre) est enregistré dans votre navigateur. Ni l'un ni l'autre ne nécessite de consentement.",
        ],
      },
    ],
  },
  en: {
    title: "Legal notice & privacy",
    updated: "Last updated: September 2026",
    sections: [
      {
        title: "Publisher",
        body: [
          "This website is the personal portfolio of Killian Ramus, published on a non-professional basis.",
          "Publication director: Killian Ramus.",
          "Contact: killian.ramus@gmail.com, the contact form on this site or LinkedIn (linkedin.com/in/killianrms).",
        ],
      },
      {
        title: "Hosting",
        body: [
          "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.",
          "Contact: privacy@vercel.com, vercel.com/contact.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "The text, visuals and code on this site belong to Killian Ramus unless stated otherwise. Logos and brands mentioned belong to their respective owners.",
        ],
      },
      {
        title: "Personal data",
        body: [
          "The contact form collects your name, email address and message. They are only used to reply to you and are never sold or used for marketing.",
          "Data controller: Killian Ramus. Legal basis: your contact request (legitimate interest in answering it).",
          "Recipients: Killian Ramus only. Messages are sent through Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, email delivery service) and the site is hosted by Vercel, both processors based in the United States.",
          "Transfers outside the EU: Vercel and Resend are certified under the EU-U.S. Data Privacy Framework and use the European Commission's Standard Contractual Clauses.",
          "Server logs: like any host, Vercel records connection data (IP address, date, requested page) for security and reliability. I do not use them.",
          "Retention: messages are kept for up to 3 years after the last exchange.",
          "Your rights: you can ask to access, correct or delete your data, or object to its processing, by writing to killian.ramus@gmail.com. You can also lodge a complaint with the CNIL, the French data protection authority (cnil.fr).",
        ],
      },
      {
        title: "Cookies",
        body: [
          "This site uses no cookies. It measures traffic with Vercel Web Analytics, which sets no cookie and cannot identify you: it only produces aggregated statistics (page views, country, device type), solely to measure audience. Your language and theme (light or dark) choice is stored in your browser. Neither requires consent."
        ],
      },
    ],
  },
};

export default function LegalNotice() {
  const { language, t, path } = useLanguage();
  const c = content[language];
  const fix = (s: string) => (language === "fr" ? frSpaces(s) : s);

  return (
    <article className="pt-14">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:px-10">
        <Link href={path("/")} className="type-label group mt-8 inline-flex items-center gap-2 py-2 text-muted hover:text-foreground transition-colors">
          <ArrowIcon size={14} className="rotate-180 transition-transform group-hover:-translate-x-1" />
          {t("legal.back")}
        </Link>
        <h1 className="type-wide mt-8 max-w-4xl text-balance text-[2.1rem] sm:text-5xl">{c.title}</h1>
        <p className="type-label mt-4 text-muted">{fix(c.updated)}</p>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {c.sections.map((s) => (
            <section key={s.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <h2 className="type-label flex items-center gap-3 text-muted md:col-span-3">
                <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                {s.title}
              </h2>
              <div className="max-w-3xl space-y-3 leading-relaxed text-foreground/80 md:col-span-9">
                {s.body.map((p) => (
                  <p key={p}>{fix(p)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
