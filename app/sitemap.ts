import type { MetadataRoute } from "next";
import { resolveRequestClient } from "@/lib/clients/server";
import { buildClientSitemapEntries } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = await resolveRequestClient();

  if (!client) {
    return [];
  }

  return buildClientSitemapEntries(client);
}
