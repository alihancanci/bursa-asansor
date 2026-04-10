import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör & Evden Eve Nakliyat | Mobil Asansör',
  description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama hizmeti. Evden eve asansörlü nakliyat, inşaat asansörü, saatlik kiralama hizmetleri için 7/24 ulaşın.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bursa Kiralık Asansör & Evden Eve Nakliyat | Mobil Asansör',
    description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama hizmeti. Evden eve asansörlü nakliyat, inşaat asansörü, saatlik kiralama hizmetleri için 7/24 ulaşın.',
    url: '/',
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bursakiralikasansor.com/#website",
        "url": "https://bursakiralikasansor.com",
        "name": "Bursa Kiralık Asansör ve Evden Eve Nakliyat",
        "description": "Bursa'nın Lider Mobil Asansör ve Evden Eve Nakliyat Şirketi",
        "publisher": {
          "@id": "https://bursakiralikasansor.com/#organization"
        }
      },
      {
        "@type": "MovingCompany",
        "@id": "https://bursakiralikasansor.com/#organization",
        "name": "Bursa Kiralık Asansör ve Evden Eve Nakliyat",
        "url": "https://bursakiralikasansor.com",
        "logo": "https://bursakiralikasansor.com/images/hero-bg.png",
        "image": "https://bursakiralikasansor.com/images/hero-bg.png",
        "telephone": "+905053297533",
        "priceRange": "₺₺",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bursa Merkez",
          "addressLocality": "Bursa",
          "addressRegion": "Bursa",
          "addressCountry": "TR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.97",
          "reviewCount": "342",
          "bestRating": "5",
          "worstRating": "4"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.1828",
          "longitude": "29.0667"
        },
        "areaServed": {
          "@type": "GeoShape",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bursa",
            "addressRegion": "Bursa",
            "addressCountry": "TR"
          },
          "polygon": "40.58,28.50 40.60,29.30 40.30,30.10 39.90,30.00 39.65,29.40 39.60,28.80 39.80,28.20 40.20,28.10 40.58,28.50"
        },
        "sameAs": [
          "https://bursakiralikasansor.com"
        ]
      },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
