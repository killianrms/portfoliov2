// All dates are "YYYY-MM-DD" strings so results don't depend on the time zone.
const BIRTH = { year: 2004, month: 6, day: 28 };
const ITESOFT_START = { year: 2025, month: 9 };

function parts(today: string) {
  const [year, month, day] = today.split("-").map(Number);
  return { year, month, day };
}

export function getAge(today: string): number {
  const now = parts(today);
  const hadBirthday = now.month > BIRTH.month || (now.month === BIRTH.month && now.day >= BIRTH.day);
  return now.year - BIRTH.year - (hadBirthday ? 0 : 1);
}

export function getWorkStudyDuration(language: "fr" | "en", today: string): string {
  const now = parts(today);
  const months = (now.year - ITESOFT_START.year) * 12 + (now.month - ITESOFT_START.month);
  const mo = language === "fr" ? "mois" : "mo";
  if (months < 1) return `< 1 ${mo}`;
  if (months < 12) return `${months} ${mo}`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const y = language === "fr" ? `${years} an${years > 1 ? "s" : ""}` : `${years} yr${years > 1 ? "s" : ""}`;
  return rest === 0 ? y : `${y} ${rest} ${mo}`;
}
