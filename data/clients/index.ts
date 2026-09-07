import { djPirateClient } from "@/data/clients/dj-pirate";
import type { ClientConfig } from "@/data/clients/types";

export const clientRegistry = [djPirateClient] as const;
export const deploymentClientSlug = djPirateClient.slug;

export type ClientSlug = (typeof clientRegistry)[number]["slug"];

const clientsBySlug = new Map<string, ClientConfig>();

for (const client of clientRegistry) {
  clientsBySlug.set(client.slug.toLowerCase(), client);

  for (const alias of client.slugAliases ?? []) {
    clientsBySlug.set(alias.toLowerCase(), client);
  }
}

export function getClients(): ClientConfig[] {
  return [...clientRegistry];
}

export function getClientBySlug(slug?: string | null): ClientConfig | null {
  if (!slug) return null;

  return clientsBySlug.get(slug.toLowerCase()) ?? null;
}
