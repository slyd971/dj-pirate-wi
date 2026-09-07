import { deploymentClientSlug, getClientBySlug, getClients } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import { isLocalHostname, matchesHostname, normalizeHostname } from "@/lib/domains";

export { getClientBySlug, getClients };
export type { ClientConfig };

export const defaultClientSlug = deploymentClientSlug;
const deploymentClientEnvKeys = [
  "PRESS_KIT_CLIENT_SLUG",
  "CLIENT_SLUG",
] as const;

export function getDefaultClient() {
  const localDefaultSlug = process.env.LOCAL_PRESS_KIT_CLIENT_SLUG?.trim().toLowerCase();
  const client = getClientBySlug(localDefaultSlug || defaultClientSlug);

  if (!client) {
    throw new Error(
      `Default client "${localDefaultSlug || defaultClientSlug}" is not registered.`
    );
  }

  return client;
}

export function getClientByHost(hostname?: string | null) {
  const normalizedHost = normalizeHostname(hostname);

  if (!normalizedHost) return null;

  for (const client of getClients()) {
    const configuredHosts = [
      client.domain,
      client.vercelSubdomain,
      ...(client.domainAliases ?? []),
    ];

    if (configuredHosts.some((host) => matchesHostname(normalizedHost, host))) {
      return client;
    }
  }

  return null;
}

export function getDeploymentClientSlug() {
  for (const key of deploymentClientEnvKeys) {
    const slug = process.env[key]?.trim().toLowerCase();

    if (slug) {
      return slug;
    }
  }

  return null;
}

export function getDeploymentClient() {
  return getClientBySlug(getDeploymentClientSlug());
}

export function resolveClient(hostname?: string | null, slug?: string | null) {
  const isLocal = isLocalHostname(hostname);

  return (
    (isLocal ? getClientBySlug(slug) : null) ??
    getClientByHost(hostname) ??
    (isLocal ? null : getDeploymentClient()) ??
    (isLocal ? getDefaultClient() : null)
  );
}
