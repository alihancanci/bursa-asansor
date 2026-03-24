const DEFAULT_SITE_URL = "https://bursakiralikasansor.com";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function getSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl && typeof envUrl === "string") {
    return normalizeSiteUrl(envUrl);
  }

  if (typeof window !== "undefined") {
    return normalizeSiteUrl(window.location.origin);
  }

  return DEFAULT_SITE_URL;
}

function withBasePath(pathname: string) {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

  if (!normalizedBase) {
    return cleanPath;
  }

  return cleanPath === "/" ? normalizedBase : `${normalizedBase}${cleanPath}`;
}

export function getCanonicalUrl(pathname: string) {
  return `${getSiteUrl()}${withBasePath(pathname)}`;
}

export function getAbsoluteAssetUrl(assetPath: string) {
  return `${getSiteUrl()}${withBasePath(assetPath)}`;
}
