import { ImageResponse } from "next/og";
import { LANGUAGES } from "@/lib/i18n";

export const alt = "Killian RAMUS, development and project engineer";
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
    // The renderer cannot select the condensed width of a variable font, so the
    // name uses Anton, a static face close to the site's condensed Archivo.
    loadFont("Anton"),
    loadFont("Archivo:wght@700"),
    loadFont("JetBrains+Mono:wght@500"),
  ]);

  const fonts = [
    display && { name: "Display", data: display, weight: 400 as const, style: "normal" as const },
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
          backgroundColor: "#08080c",
          backgroundImage: "radial-gradient(circle at 88% 0%, rgba(106, 44, 255, 0.55), rgba(8, 8, 12, 0) 58%)",
          color: "#f2f1f7",
          padding: "56px 72px",
          ...family("Body", body),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 3, color: "#b9b6cc", ...family("Mono", mono) }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ffbf1f" }} />
          {fr ? "ALTERNANCE CHEZ ITESOFT · POLYTECH MONTPELLIER" : "WORK-STUDY AT ITESOFT · POLYTECH MONTPELLIER"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 196, lineHeight: 0.98, letterSpacing: 2, ...family("Display", display) }}>
          <div style={{ display: "flex" }}>KILLIAN</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            RAMUS
            <div style={{ width: 26, height: 150, marginLeft: 18, background: "#6a2cff" }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #34344a", paddingTop: 28 }}>
          <div style={{ display: "flex", fontSize: 32 }}>
            {fr ? "Ingénieur développement et projet · en formation DevOps" : "Development and project engineer · DevOps student"}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#b9a4ff", ...family("Mono", mono) }}>killianrms.com</div>
        </div>
      </div>
    ),
    fonts.length > 0 ? { ...size, fonts } : size
  );
}
