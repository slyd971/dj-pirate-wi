import type { ClientConfig } from "@/data/clients/types";

const localHostnames = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);

export function normalizeHostname(hostname?: string | null) {
  return (hostname ?? "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .split("/")[0]
    .split(":")[0];
}

export function isLocalHostname(hostname?: string | null) {
  return localHostnames.has(normalizeHostname(hostname));
}

export function matchesHostname(
  hostname?: string | null,
  configuredHostname?: string | null
) {
  const normalizedHostname = normalizeHostname(hostname);
  const normalizedConfiguredHostname = normalizeHostname(configuredHostname);

  if (!normalizedHostname || !normalizedConfiguredHostname) {
    return false;
  }

  return (
    normalizedHostname === normalizedConfiguredHostname ||
    normalizedHostname === `www.${normalizedConfiguredHostname}` ||
    normalizedHostname.endsWith(`.${normalizedConfiguredHostname}`)
  );
}

export function getPrimaryHostname(client: ClientConfig) {
  return client.domain ?? client.vercelSubdomain;
}

export function getCanonicalUrl(client: ClientConfig, path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalBase = client.seo.canonical ?? `https://${getPrimaryHostname(client)}`;

  return new URL(normalizedPath, canonicalBase).toString();
}
