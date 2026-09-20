import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör | Evden Eve Nakliyat & Mobil Asansör',
  description: 'Bursa kiralık asansör ve evden eve nakliyat hizmeti. Nilüfer, Osmangazi, Yıldırım ve Mudanya başta olmak üzere 15. kata kadar güvenli taşıma: 0505 608 07 00.',
  alternates: {
    canonical: 'https://bursakiralikasansor.com/',
  },
  openGraph: {
    title: 'Bursa Kiralık Asansör | Evden Eve Nakliyat & Mobil Asansör',
    description: 'Bursa kiralık asansör ve evden eve nakliyat hizmeti. Nilüfer, Osmangazi, Yıldırım ve Mudanya başta olmak üzere 15. kata kadar güvenli taşıma: 0505 608 07 00.',
    url: 'https://bursakiralikasansor.com/',
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
        "alternateName": [
          "Bursa CNC Asansör Kiralama",
          "CNC Asansörlü Nakliyat Bursa",
          "Bursa CNC Asansör"
        ],
        "url": "https://bursakiralikasansor.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bursakiralikasansor.com/opengraph.jpg",
          "width": 1200,
          "height": 630
        },
        "image": "https://bursakiralikasansor.com/opengraph.jpg",
        "telephone": "+905056080700",
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
          "latitude": "40.18614",
          "longitude": "29.0796141"
        },
        "areaServed": [
          {"@type": "City", "name": "Osmangazi", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Nilüfer", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Yıldırım", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Mudanya", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Gürsu", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Kestel", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Gemlik", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "İnegöl", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "İznik", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Mustafakemalpaşa", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Karacabey", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Orhangazi", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Yenişehir", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Büyükorhan", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Harmancık", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Keles", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}},
          {"@type": "City", "name": "Orhaneli", "containedInPlace": {"@type": "AdministrativeArea", "name": "Bursa", "addressCountry": "TR"}}
        ],
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
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+905056080700",
            "contactType": "customer service",
            "areaServed": "TR",
            "availableLanguage": ["Turkish", "English", "Arabic"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        ],
        "potentialAction": [
          {
            "@type": "CommunicateAction",
            "name": "WhatsApp Hızlı Fiyat Al",
            "target": "https://wa.me/905056080700?text=Merhaba,%20Bursa'da%20asansör%20ve%20nakliyat%20fiyatı%20almak%20istiyorum."
          },
          {
            "@type": "ReserveAction",
            "name": "Acil Mobil Asansör Çağır",
            "target": "tel:+905056080700"
          }
        ],
        "hasMap": "https://maps.app.goo.gl/W5D6w9hQQ39QvVy29",
        "sameAs": [
          "https://maps.app.goo.gl/W5D6w9hQQ39QvVy29",
          "https://share.google/7NMadojGkWXunqIYz",
          "https://bursavipevdeneve.com",
          "https://www.facebook.com/bursakiralikasansor"
        ],
        "relatedLink": [
          "https://bursavipevdeneve.com"
        ]
      },
      {
        "@type": "MovingCompany",
        "@id": "https://bursavipevdeneve.com/#organization",
        "name": "Bursa VIP Evden Eve Nakliyat",
        "alternateName": "Bursa VIP Nakliyat",
        "url": "https://bursavipevdeneve.com",
        "telephone": "+905056080700",
        "priceRange": "₺₺₺",
        "description": "Bursa VIP Evden Eve Nakliyat - Asansörlü, lüks ambalajlı, marangozlu ve VIP güvenceli ev taşıma hizmetleri. Bursa Kiralık Asansör kardeş kuruluşu.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bursa Merkez",
          "addressLocality": "Bursa",
          "addressRegion": "Bursa",
          "postalCode": "16000",
          "addressCountry": "TR"
        },
        "sameAs": [
          "https://bursavipevdeneve.com",
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
