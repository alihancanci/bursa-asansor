import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Bursa Mobil Asansör Kiralama | 7/24 Asansörlü Nakliyat",
    template: "%s | Bursa Mobil Asansör",
  },
  description: "Bursa'da 7/24 mobil asansör kiralama ve asansörlü nakliyat hizmeti. 15. kata kadar operatörlü güvenli taşıma çözümleri.",
  metadataBase: new URL("https://bursakiralikasansor.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Bursa Mobil Asansör",
    title: "Bursa Mobil Asansör Kiralama",
    description: "Bursa'da 7/24 mobil asansör kiralama ve asansörlü nakliyat hizmeti.",
    images: ["/opengraph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Mobil Asansör Kiralama",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J2E99G4FY2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J2E99G4FY2');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
