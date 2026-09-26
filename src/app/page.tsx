import { Metadata } from 'next';
import { DISTRICTS } from '@/data';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Bursa Kiralık Asansör | Mobil Asansör Kiralama',
  description: 'Bursa’da 15. kata kadar mobil asansör kiralama. 7/24 hizmet: Nilüfer, Mudanya, Osmangazi, Yıldırım, Gürsu ve tüm Bursa ilçeleri. 0505 608 07 00.',
  alternates: {
    canonical: 'https://bursakiralikasansor.com/',
  },
  openGraph: {
    title: 'Bursa Kiralık Asansör | Mobil Asansör Kiralama',
    description: 'Bursa’da 15. kata kadar mobil asansör kiralama. 7/24 hizmet: Nilüfer, Mudanya, Osmangazi, Yıldırım, Gürsu ve tüm Bursa ilçeleri. 0505 608 07 00.',
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
        "@type": "Organization",
        "@id": "https://bursakiralikasansor.com/#organization",
        "name": "Bursa Kiralık Asansör CNC Evden Eve Nakliyat",
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
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+905056080700",
            "contactType": "customer service",
            "areaServed": { "@type": "City", "name": "Bursa", "addressCountry": "TR" },
            "availableLanguage": ["Turkish"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        ],
        "areaServed": DISTRICTS.filter((district) => district.slug !== "bursa-merkez").map((district) => ({
          "@type": "AdministrativeArea",
          "name": district.name,
          "containedInPlace": { "@type": "City", "name": "Bursa", "addressCountry": "TR" }
        })),
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
        "sameAs": [
          "https://maps.app.goo.gl/W5D6w9hQQ39QvVy29",
          "https://share.google/7NMadojGkWXunqIYz",
          "https://www.facebook.com/bursakiralikasansor"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://bursavipevdeneve.com/#organization",
        "name": "Bursa VIP Evden Eve Nakliyat",
        "alternateName": "Bursa VIP Nakliyat",
        "url": "https://bursavipevdeneve.com",
        "telephone": "+905056080700",
        "description": "Bursa VIP Evden Eve Nakliyat - Asansörlü, lüks ambalajlı, marangozlu ve VIP güvenceli ev taşıma hizmetleri. Bursa Kiralık Asansör kardeş kuruluşu.",
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
