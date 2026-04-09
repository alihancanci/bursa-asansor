import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bursa Kiralık Asansör Nakliyat',
    short_name: 'Bursa Asansör',
    description: 'Bursa kiralık asansör ve evden eve nakliyat hizmetleri. 15. kata kadar asansör kiralama.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon'
      }
    ],
  }
}
