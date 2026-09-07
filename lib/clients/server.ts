import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getClientBySlug as getLocalClientBySlug } from "@/data/clients";
import {
  getDefaultClient,
  getClientByHost as getLocalClientByHost,
  getDeploymentClient,
  getDeploymentClientSlug,
} from "@/lib/clients";
import { isLocalHostname, matchesHostname, normalizeHostname } from "@/lib/domains";

export type ClientSlugSearchParams = {
  client?: string;
  artist?: string;
};

export function getRequestedClientSlug(searchParams?: ClientSlugSearchParams) {
  return searchParams?.client ?? searchParams?.artist ?? null;
}

export async function getRequestHostname() {
  const requestHeaders = await headers();
  return normalizeHostname(
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
  );
}

export async function resolveRequestClient(slug?: string | null) {
  const hostname = await getRequestHostname();
  const normalizedSlug = slug?.toLowerCase() ?? null;
  const isLocal = isLocalHostname(hostname);
  const deploymentSlug = getDeploymentClientSlug();
  const requestedLocalClient = getLocalClientBySlug(normalizedSlug);
  const localHostClient = getLocalClientByHost(hostname);
  const requestedClientForHost =
    !isLocal && requestedLocalClient && localHostClient
      ? [
          requestedLocalClient.domain,
          requestedLocalClient.vercelSubdomain,
          ...(requestedLocalClient.domainAliases ?? []),
        ].some((host) => matchesHostname(hostname, host))
        ? requestedLocalClient
        : null
      : null;

  if (!isLocal) {
    console.log(`[resolveRequestClient] hostname=${hostname} deploymentSlug=${deploymentSlug ?? "none"}`);
  }

  const client =
    (isLocal ? requestedLocalClient : null) ??
    requestedClientForHost ??
    (isLocal && !normalizedSlug ? getDefaultClient() : null) ??
    localHostClient ??
    (isLocal ? requestedLocalClient : null) ??
    (!isLocal && deploymentSlug
      ? getDeploymentClient()
      : null) ??
    (isLocal ? getDefaultClient() : null);

  if (!isLocal && !client) {
    console.error(`[resolveRequestClient] No client found for hostname=${hostname} deploymentSlug=${deploymentSlug ?? "none"} — set PRESS_KIT_CLIENT_SLUG env var in Vercel`);
  }

  return client;
}

export async function getRequiredRequestClient(slug?: string | null) {
  const client = await resolveRequestClient(slug);

  if (!client) {
    notFound();
  }

  return client;
}
