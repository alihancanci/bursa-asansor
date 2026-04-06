"use client";

export const GA_MEASUREMENT_ID = "G-J2E99G4FY2";

type GtagParams = Record<string, string | number | boolean | undefined>;

function send(eventOrCommand: string, nameOrParams?: string | GtagParams, params?: GtagParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  if (typeof nameOrParams === "string") {
    window.gtag(eventOrCommand, nameOrParams, params);
    return;
  }

  window.gtag(eventOrCommand, nameOrParams as GtagParams);
}

export function trackPageView(pathname: string) {
  send("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pathname,
  });
}

export function installGlobalClickTracking() {
  const onClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const link = target?.closest("a[href]") as HTMLAnchorElement | null;
    if (!link) return;

    const href = (link.getAttribute("href") || "").trim().toLowerCase();
    const text = (link.textContent || "").trim();

    if (href.startsWith("tel:")) {
      send("event", "telefon_tıklandı", {
        link_url: link.href,
        link_text: text,
      });
      return;
    }

    if (
      href.includes("wa.me") ||
      href.includes("api.whatsapp.com") ||
      href.includes("whatsapp.com/send")
    ) {
      send("event", "whatsapp_tıklandı", {
        link_url: link.href,
        link_text: text,
      });
    }
  };

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
