import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { resolveRequestClient } from "@/lib/clients/server";
import { templateThemes } from "@/data/templates";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Press kit preview";

export default async function OpenGraphImage() {
  const client = await resolveRequestClient();

  if (!client) {
    notFound();
  }

  const heroFile = await readFile(path.join(process.cwd(), "public", client.heroImage));
  const extension = path.extname(client.heroImage).slice(1).toLowerCase();
  const mimeType = extension === "jpg" ? "jpeg" : extension;
  const heroUrl = `data:image/${mimeType};base64,${heroFile.toString("base64")}`;
  const theme = templateThemes[client.defaultTheme];
  const primaryCta = client.pressKit.navigation.cta.label;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${theme.background} 0%, #140d0b 40%, #2f1b12 100%)`,
          color: theme.text,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              `radial-gradient(circle at 14% 16%, rgb(${theme.accentRgb} / 0.22), transparent 25%), radial-gradient(circle at 84% 18%, rgba(255,255,255,0.10), transparent 22%), radial-gradient(circle at 74% 84%, rgb(${theme.accentRgb} / 0.20), transparent 28%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 470,
            height: 630,
            display: "flex",
            overflow: "hidden",
          }}
        >
          <img
            src={heroUrl}
            alt={`${client.name} hero`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
            inset: 0,
            display: "flex",
            background:
              `linear-gradient(90deg, ${theme.background}F5 0%, ${theme.background}99 35%, ${theme.background}33 100%)`,
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "54px 58px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: theme.accentSoft,
              fontSize: 22,
              letterSpacing: 3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 9999,
                background: theme.accent,
                display: "flex",
              }}
            />
            {client.city} • {client.country}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 84,
                lineHeight: 0.92,
                letterSpacing: -3,
                fontWeight: 900,
              }}
            >
              <span>{client.name.toUpperCase()}</span>
              <span style={{ color: theme.accentSoft }}>PRESS KIT</span>
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.34,
                color: "rgba(255,255,255,0.92)",
                maxWidth: 660,
              }}
            >
              {client.description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                borderRadius: 9999,
                background: theme.accent,
                color: theme.background,
                fontSize: 21,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.3,
              }}
            >
              {primaryCta}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 21,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              {client.domain ?? client.vercelSubdomain}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
