const BIRTH = new Date(2004, 5, 28); // 28 juin 2004
const ITESOFT_START = new Date(2025, 8, 1); // septembre 2025

export function getAge(now = new Date()): number {
  let age = now.getFullYear() - BIRTH.getFullYear();
  const m = now.getMonth() - BIRTH.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < BIRTH.getDate())) age--;
  return age;
}

export function getWorkStudyDuration(language: "fr" | "en", now = new Date()): string {
  const months =
    (now.getFullYear() - ITESOFT_START.getFullYear()) * 12 +
    (now.getMonth() - ITESOFT_START.getMonth());
  if (months < 1) return language === "fr" ? "< 1 mois" : "< 1 mo";
  if (months < 12) return `${months} ${language === "fr" ? "mois" : "mo"}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const y = language === "fr" ? `${years} an${years > 1 ? "s" : ""}` : `${years} yr${years > 1 ? "s" : ""}`;
  if (rem === 0) return y;
  return `${y} ${rem} ${language === "fr" ? "mois" : "mo"}`;
}
