"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialProofToast } from "@/components/SocialProofToast";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { installGlobalClickTracking, trackPageView } from "@/lib/analytics";
import "@/lib/i18n";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
      <WhatsAppButton />
    </div>
  );
}
