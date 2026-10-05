type Localized = { fr: string; en: string };

/** French typography: the space before : ; ? ! » never breaks onto a new line. */
export function frSpaces(text: string): string {
  return text.replace(/ ([:;!?»])/g, " $1").replace(/« /g, "« ");
}

/** Pick the localized string, applying French spacing rules when needed. */
export function localize(value: Localized, language: "fr" | "en"): string {
  return language === "fr" ? frSpaces(value.fr) : value.en;
}
