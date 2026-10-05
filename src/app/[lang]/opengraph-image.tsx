import { ImageResponse } from "next/og";
import { LANGUAGES } from "@/lib/i18n";

export const alt = "Killian RAMUS - DevOps & automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

// Fonts are fetched at build time. If Google Fonts is unreachable the image
// still renders with the default font, so the build never breaks.
async function loadFont(query: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${query}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const fr = (await params).lang === "fr";
  const [display, body, mono] = await Promise.all([
    loadFont("Archivo:wdth,wght@62.5,900"),
    loadFont("Archivo:wght@700"),
    loadFont("JetBrains+Mono:wght@500"),
  ]);

  const fonts = [
    display && { name: "Display", data: display, weight: 900 as const, style: "normal" as const },
    body && { name: "Body", data: body, weight: 700 as const, style: "normal" as const },
    mono && { name: "Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ].filter((f) => f !== null);

  const family = (name: string, loaded: unknown) => (loaded ? { fontFamily: name } : {});

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#6a2cff",
          color: "#f5f3fa",
          padding: "64px 72px",
          ...family("Body", body),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 3, color: "#ddd1ff", ...family("Mono", mono) }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ffbf1f" }} />
          {fr ? "EN ALTERNANCE CHEZ ITESOFT · POLYTECH MONTPELLIER" : "WORK-STUDY AT ITESOFT · POLYTECH MONTPELLIER"}
        </div>
        <div style={{ display: "flex", fontSize: 182, lineHeight: 0.85, fontWeight: 900, ...family("Display", display) }}>
          KILLIAN RAMUS
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid rgba(245, 243, 250, 0.3)", paddingTop: 28 }}>
          <div style={{ display: "flex", fontSize: 40 }}>
            {fr ? "Élève-ingénieur DevOps · automatisation et CI/CD" : "DevOps engineering student · automation & CI/CD"}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#ddd1ff", ...family("Mono", mono) }}>killianrms.com</div>
        </div>
      </div>
    ),
    fonts.length > 0 ? { ...size, fonts } : size
  );
}
