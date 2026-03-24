import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { installGlobalClickTracking, trackPageView } from "@/lib/analytics";
import { SocialProofToast } from "./SocialProofToast";

export function Layout({ children }: { children: ReactNode }) {
  const [pathname] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Install once: global click tracking for tel:/wa.me links
  useEffect(() => {
    const cleanup = installGlobalClickTracking();
    return cleanup;
  }, []);

  // Track SPA route changes as page_view
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <SocialProofToast />
    </div>
  );
}
