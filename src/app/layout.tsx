import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ClientProviders } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Bursa Kiralık Asansör ve Evden Eve Nakliyat | 7/24 Asansörlü Nakliyat",
    template: "%s | Bursa Kiralık Asansör ve Evden Eve Nakliyat",
  },
  description: "Bursa'da 7/24 mobil asansör kiralama ve asansörlü nakliyat hizmeti. 15. kata kadar operatörlü güvenli taşıma çözümleri.",
  metadataBase: new URL("https://bursakiralikasansor.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Bursa Kiralık Asansör ve Evden Eve Nakliyat",
    title: "Bursa Kiralık Asansör ve Evden Eve Nakliyat Hizmetleri",
    description: "Bursa'da 7/24 mobil asansör kiralama ve asansörlü nakliyat hizmeti.",
    images: ["/opengraph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Kiralık Asansör ve Evden Eve Nakliyat Hizmetleri",
    description: "Bursa'da 7/24 mobil asansör kiralama ve asansörlü nakliyat hizmeti.",
    images: ["/opengraph.jpg"],
  },
  robots: "index,follow,max-image-preview:large",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body suppressHydrationWarning className="bg-white dark:bg-[#071320] text-slate-900 dark:text-slate-200">
        <ClientProviders>
          {children}
        </ClientProviders>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J2E99G4FY2"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J2E99G4FY2');
          `}
        </Script>
      </body>
    </html>
  );
}
