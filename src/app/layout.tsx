import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ClientProviders } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Bursa Kiralık Asansör CNC | 0505 608 07 00",
    template: "%s",
  },
  description: "Bursa CNC kiralık asansör hizmetleri. 15. kata kadar ulaşabilen modern yük asansörlerimizle eşyalarınızı güvenle taşıyoruz. Evden eve nakliyat, mobilya ve inşaat malzemesi taşıma.",
  metadataBase: new URL("https://bursakiralikasansor.com"),
  alternates: {
    canonical: 'https://bursakiralikasansor.com/',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
    url: "https://bursakiralikasansor.com/",
    description: "Bursa'da 7/24 mobil asansör kiralama ve profesyonel asansörlü nakliyat hizmeti.",
    images: [
      {
        url: "https://bursakiralikasansor.com/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bursa Kiralık Asansör CNC Evden Eve Nakliyat Hizmetleri",
    description: "Bursa'da 7/24 mobil asansör kiralama ve asansörlü nakliyat hizmeti.",
    images: ["https://bursakiralikasansor.com/opengraph.jpg"],
  },
  robots: "index,follow,max-image-preview:large",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "Bursa Asansör CNC",
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.json",
  // Arama motoru doğrulama kodları
  // Bing Webmaster Tools: https://www.bing.com/webmasters → Add Site → HTML Meta Tag seçeneği
  // Yandex Webmaster: https://webmaster.yandex.com → Add Site → HTML Meta Tag seçeneği
  // Bu değerleri ilgili panelden alıp güncelleyin:
  verification: {
    other: {
      // 'msvalidate.01': 'BURAYA_BING_WEBMASTER_KODUNUZU_YAZIN',
    }
  },
};

export const viewport: import('next').Viewport = {
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* PageSpeed Optimization: Preload Critical Fonts */}
        <link rel="preload" href="/fonts/dm-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outfit.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        <link rel="alternate" type="application/vnd.google-earth.kml+xml" href="https://bursakiralikasansor.com/locations.kml" />
      </head>
      <body suppressHydrationWarning className="bg-white dark:bg-[#071320] text-slate-900 dark:text-slate-200">
        <ClientProviders>
          {children}
        </ClientProviders>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J2E99G4FY2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J2E99G4FY2', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(108502604, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108502604" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

        {/* Microsoft Clarity - Session recordings & heatmaps */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wa8h3s7r2r");
          `}
        </Script>

        {/* Concise, factual summary for assistive technology and crawlers. */}
        <div className="sr-only" data-nosnippet="true">
          <section>
            <h2>Bursa Kiralık Asansör CNC — hizmet ve iletişim bilgileri</h2>
            <p>Bursa’da kiralık mobil dış cephe asansörü hizmeti veriyoruz. Asansörlerimiz 15. kata kadar erişebilir; haftanın her günü, 7/24 ulaşılabilir ve hizmet sunuyoruz.</p>
            <p>Bursa’nın 17 ilçesine hizmet veriyoruz. Öncelikli hizmet bölgelerimiz Nilüfer, Mudanya, Osmangazi, Yıldırım ve Gürsu’dur.</p>
            <p>Telefon ve WhatsApp: +90 505 608 07 00. Web sitesi: https://bursakiralikasansor.com</p>
            <p>Google İşletme Profilimiz: 5,0/5 ortalama ve 11 yorum. <a href="https://maps.app.goo.gl/W5D6w9hQQ39QvVy29">Google profilini görüntüle</a>.</p>
          </section>
        </div>
      </body>
    </html>
  );
}
