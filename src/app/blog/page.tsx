import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

import { getCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Asansör Kiralama Tüyoları & Blog | Bursa Kiralık Asansör CNC',
  description: 'Taşınırken nelere dikkat edilmeli? Kiralık asansör fiyatları nasıl belirlenir? Hepsi ve daha fazlası uzman makalelerimizle blog bölümünde.',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
  openGraph: {
    title: 'Asansör Kiralama Tüyoları & Blog | Bursa Kiralık Asansör CNC',
    description: 'Taşınırken nelere dikkat edilmeli? Kiralık asansör fiyatları nasıl belirlenir?',
    url: getCanonicalUrl('/blog'),
  }
};

export default function BlogIndex() {
  return <BlogIndexClient />;
}
