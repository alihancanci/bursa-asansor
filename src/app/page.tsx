import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör CNC Evden Eve Nakliyat',
  description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama ve CNC evden eve nakliyat hizmeti. 7/24 operatör desteği için hemen ulaşın.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bursa Kiralık Asansör CNC Evden Eve Nakliyat',
    description: 'Bursa genelinde 15. kata kadar güvenli ve profesyonel mobil asansör kiralama ve CNC evden eve nakliyat hizmeti.',
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
        "name": "Bursa Kiralık Asansör CNC",
        "description": "Bursa Kiralık Asansör CNC Evden Eve Nakliyat Hizmetleri",
        "publisher": {
          "@id": "https://bursakiralikasansor.com/#organization"
        }
      },
      {
        "@type": "MovingCompany",
        "@id": "https://bursakiralikasansor.com/#organization",
        "name": "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
        "alternateName": "CNC Asansörlü Nakliyat Bursa",
        "url": "https://bursakiralikasansor.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bursakiralikasansor.com/opengraph.jpg",
          "width": 1200,
          "height": 630
        },
        "image": "https://bursakiralikasansor.com/opengraph.jpg",
        "telephone": "+905053297533",
        "email": "info@bursakiralikasansor.com",
        "priceRange": "₺₺",
        "currenciesAccepted": "TRY",
        "paymentAccepted": "Cash, Credit Card",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bursa Merkez",
          "addressLocality": "Bursa",
          "addressRegion": "Bursa",
          "postalCode": "16000",
          "addressCountry": "TR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 50,
          "bestRating": 5,
          "worstRating": 1
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
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
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bursa Asansör ve Nakliyat Hizmetleri",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kiralık Mobil Asansör"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Evden Eve Asansörlü Nakliyat"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "İnşaat Cephe Asansörü"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Saatlik Asansör Kiralama"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Ofis Taşımacılığı"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Moloz İndirme Asansörü"}}
          ]
        },
        "knowsAbout": [
          "Asansörlü Nakliyat", "Mobil Asansör Kiralama", "Dar Sokak Asansörü",
          "Evden Eve Nakliyat Bursa", "İnşaat Asansörü", "Eşya Taşıma Asansörü"
        ],
        // TODO: Google Business Profile açıldığında sameAs'a ekle: "https://maps.app.goo.gl/XXXXX"
        // TODO: Yandex Maps profilini oluşturunca ekle: "https://yandex.com.tr/maps/-/XXXXX"
        "sameAs": [
          "https://www.facebook.com/bursakiralikasansor"
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
