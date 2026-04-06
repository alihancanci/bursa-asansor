import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Blog | Taşınma Rehberi ve Asansör Kiralama Tüyoları',
  description: 'Taşınırken nelere dikkat edilmeli? Kiralık asansör fiyatları nasıl belirlenir? Hepsi ve daha fazlası uzman makalelerimizle blog bölümünde.',
  openGraph: {
    title: 'Blog | Taşınma Rehberi ve Asansör Kiralama Tüyoları',
    description: 'Taşınırken nelere dikkat edilmeli? Kiralık asansör fiyatları nasıl belirlenir?',
    url: '/blog',
  }
};

export default function BlogIndex() {
  return <BlogIndexClient />;
}
