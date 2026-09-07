import { headers } from "next/headers";

const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);

export async function isLocalRequest() {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const hostHeader = forwardedHost ?? requestHeaders.get("host") ?? "";
  const hostname = hostHeader.split(":")[0].toLowerCase();

  return localHosts.has(hostname);
}
