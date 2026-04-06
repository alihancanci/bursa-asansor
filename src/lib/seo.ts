const DEFAULT_SITE_URL = "https://bursakiralikasansor.com";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && typeof envUrl === "string") {
    return normalizeSiteUrl(envUrl);
  }

  if (typeof window !== "undefined") {
    return normalizeSiteUrl(window.location.origin);
  }

  return DEFAULT_SITE_URL;
}

export function getCanonicalUrl(pathname: string) {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${cleanPath}`;
}

export function getAbsoluteAssetUrl(assetPath: string) {
  const cleanPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${cleanPath}`;
}
