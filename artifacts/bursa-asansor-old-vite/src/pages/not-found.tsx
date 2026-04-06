import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { getCanonicalUrl } from "@/lib/seo";

export default function NotFound() {
  const canonicalUrl = getCanonicalUrl("/404");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Helmet>
        <title>Sayfa Bulunamadı (404) | Bursa Mobil Asansör</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. Bursa Mobil Asansör ana sayfasına dönerek hizmetlerimizi inceleyebilirsiniz." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Sayfa Bulunamadı</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Aradığınız sayfa kaldırılmış olabilir veya adres hatalı yazılmış olabilir.
          </p>
          <Link href="/" className="inline-flex mt-5 text-sm font-semibold text-primary hover:underline">
            Ana sayfaya dön
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
