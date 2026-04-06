import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör & Evden Eve Asansörlü Nakliyat | Mobil Asansör',
  description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama hizmeti. Evden eve asansörlü nakliyat, inşaat asansörü, saatlik kiralama hizmetleri için 7/24 ulaşın.',
  openGraph: {
    title: 'Bursa Kiralık Asansör & Evden Eve Asansörlü Nakliyat | Mobil Asansör',
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.1828",
          "longitude": "29.0667"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "40.1828",
            "longitude": "29.0667"
          },
          "geoRadius": "50000"
        },
        "sameAs": [
          "https://bursakiralikasansor.com"
        ]
      }
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
