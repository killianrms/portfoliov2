export type Language = "fr" | "en";

export const LANGUAGES: Language[] = ["en", "fr"];

export const SITE_URL = "https://killianrms.com";

export function isLanguage(value: string): value is Language {
  return (LANGUAGES as string[]).includes(value);
}

/**
 * Public URL of an internal path in a language. English lives at the root,
 * French under /fr: ("/projects/x", "fr") -> "/fr/projects/x", ("/#about", "fr") -> "/fr#about".
 */
export function localePath(href: string, language: Language): string {
  if (language === "en" || !href.startsWith("/")) return href;
  if (href === "/") return "/fr";
  if (href.startsWith("/#")) return "/fr" + href.slice(1);
  return "/fr" + href;
}

/** The same page in the other language, from a browser pathname. */
export function switchLocalePath(pathname: string, target: Language): string {
  const bare = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  return localePath(bare, target);
}

/** Open Graph image of a language (child pages that set openGraph must repeat it). */
export function ogImage(language: Language) {
  return [{ url: `/${language}/opengraph-image`, width: 1200, height: 630, alt: "Killian RAMUS" }];
}

/** canonical + hreflang alternates for a language-independent path like "/legal". */
export function alternates(path: string, language: Language) {
  const en = path;
  const fr = localePath(path, "fr");
  return {
    canonical: language === "fr" ? fr : en,
    languages: { en, fr, "x-default": en },
  };
}
