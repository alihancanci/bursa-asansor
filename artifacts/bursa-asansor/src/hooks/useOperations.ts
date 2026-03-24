import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchOperations, type Operation } from "@/lib/airtable";

const isAirtableConfigured = () =>
  Boolean(import.meta.env.VITE_AIRTABLE_API_KEY && import.meta.env.VITE_AIRTABLE_BASE_ID);

/** Fetch recent operations (optionally filtered by district). */
export function useOperations(opts?: {
  limit?: number;
  districtSlug?: string;
}) {
  return useQuery<{ records: Operation[]; nextOffset?: string }>({
    queryKey: ["operations", opts?.districtSlug, opts?.limit],
    queryFn: () =>
      isAirtableConfigured()
        ? fetchOperations(opts)
        : Promise.resolve({ records: DEMO_OPERATIONS }),
    staleTime: 1000 * 60 * 5, // 5 min
    retry: 1,
  });
}

/** Infinite operations list — used on the /operasyonlar archive page. */
export function useInfiniteOperations(districtSlug?: string) {
  return useInfiniteQuery<{ records: Operation[]; nextOffset?: string }>({
    queryKey: ["operations-infinite", districtSlug],
    queryFn: ({ pageParam }) =>
      isAirtableConfigured()
        ? fetchOperations({ limit: 9, districtSlug, offset: pageParam as string | undefined })
        : Promise.resolve({ records: DEMO_OPERATIONS }),
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    initialPageParam: undefined,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

// Shown when Airtable is not yet configured (dev / preview env)
const DEMO_OPERATIONS: Operation[] = [
  {
    id: "demo-1",
    photoUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    district: "nilufer",
    districtName: "Nilüfer",
    neighborhood: "Fethiye",
    description: "10. katta özel asansör kurulumu. Eşyalar güvenle teslim edildi.",
    timestamp: new Date(Date.now() - 1 * 86400000).toISOString(),
    seoAltText: "Bursa Nilüfer Fethiye kiralık mobil asansör kurulumu",
  },
  {
    id: "demo-2",
    photoUrl: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e3?w=600&q=80",
    district: "osmangazi",
    districtName: "Osmangazi",
    neighborhood: "Hürriyet",
    description: "3+1 daire taşıması. Tüm eşyalar hasarsız tamamlandı.",
    timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
    seoAltText: "Bursa Osmangazi Hürriyet kiralık mobil asansör kurulumu",
  },
  {
    id: "demo-3",
    photoUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    district: "yildirim",
    districtName: "Yıldırım",
    neighborhood: "Yeşil",
    description: "İnşaat malzeme taşıması, 8. kat beton bloğu.",
    timestamp: new Date(Date.now() - 3 * 86400000).toISOString(),
    seoAltText: "Bursa Yıldırım Yeşil kiralık mobil asansör kurulumu",
  },
];
