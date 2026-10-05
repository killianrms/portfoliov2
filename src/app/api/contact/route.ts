import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

// Spam protection without a third-party captcha:
// - a hidden "company" field that people never see but bots fill in,
// - a minimum time between opening the page and sending,
// - a per-IP limit. It lives in memory, so it is per server instance:
//   enough to stop a script hammering one instance, not a distributed attack.
const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  try {
    const { name, email, message, company, startedAt } = await req.json();
    const now = Date.now();

    // Bots get a fake success so they don't retry.
    const looksLikeBot =
      (typeof company === "string" && company.trim() !== "") ||
      typeof startedAt !== "number" ||
      now - startedAt < MIN_FILL_MS;
    if (looksLikeBot) return NextResponse.json({ success: true });

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip, now)) {
      return NextResponse.json({ error: "Too many messages" }, { status: 429 });
    }

    if (
      typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
      !name.trim() || !message.trim() ||
      name.length > 120 || email.length > 200 || message.length > 5000 ||
      !EMAIL_RE.test(email.trim())
    ) {
      return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    // User input is escaped before going into the HTML body.
    const { error } = await resend.emails.send({
      // Set CONTACT_FROM to an address on a domain verified in Resend (e.g. "Portfolio <contact@killianrms.com>").
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: "killian.ramus@gmail.com",
      replyTo: email.trim(),
      subject: `[Portfolio] Message de ${name.replace(/[\r\n]+/g, " ").slice(0, 120)}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });
    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
