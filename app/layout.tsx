import "./globals.css";
import type { Metadata } from "next";
import { resolveRequestClient } from "@/lib/clients/server";
import { buildClientMetadata, buildSiteJsonLd } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Press Kit",
  description: "Artist press kit",
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = await resolveRequestClient();

    if (!client) {
      console.error("[layout:generateMetadata] No client resolved for this host — check PRESS_KIT_CLIENT_SLUG env var or domain config");
      return fallbackMetadata;
    }

    return buildClientMetadata(client);
  } catch (error) {
    console.error("[layout:generateMetadata] Unexpected error:", error);
    return fallbackMetadata;
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}

async function RootLayoutContent({ children }: { children: React.ReactNode }) {
  let siteJsonLd: ReturnType<typeof buildSiteJsonLd> | null = null;
  let htmlLang = "fr";

  try {
    const client = await resolveRequestClient();

    if (!client) {
      console.error("[layout:RootLayoutContent] No client resolved — rendering without JSON-LD");
    } else {
      htmlLang = client.slug.endsWith("-en") ? "en" : "fr";
      siteJsonLd = buildSiteJsonLd(client);
    }
  } catch (error) {
    console.error("[layout:RootLayoutContent] Unexpected error:", error);
  }

  return (
    <html lang={htmlLang}>
      <body>
        {children}
        {siteJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
          />
        ) : null}
      </body>
    </html>
  );
}
