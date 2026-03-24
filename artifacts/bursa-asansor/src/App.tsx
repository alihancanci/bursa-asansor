import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import Operations from "@/pages/Operations";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/operasyonlar" component={Operations} />
        {/* Dynamic catch-all for /:district-:service */}
        <Route path="/:slug" component={ServicePage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

const SUPPORTED_LANGS = ["tr", "en", "ar", "ru"];

const initialPath = typeof window !== 'undefined' ? window.location.pathname : '/';
const pathSegments = initialPath.split('/').filter(Boolean);
const potentialLang = pathSegments[0] || 'tr';
const initialActiveLang = SUPPORTED_LANGS.includes(potentialLang) && potentialLang !== 'tr' ? potentialLang : 'tr';

function LanguageRouter({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  
  // Calculate base synchronously for first render
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const segments = path.split('/').filter(Boolean);
  const pLang = segments[0] || 'tr';
  const aLang = SUPPORTED_LANGS.includes(pLang) && pLang !== 'tr' ? pLang : 'tr';
  
  const envBase = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [basePath, setBasePath] = useState(aLang === 'tr' ? envBase : `${envBase}/${aLang}`);

  useEffect(() => {
    // If language doesn't match the URL, update i18n
    if (i18n.resolvedLanguage !== aLang) {
      i18n.changeLanguage(aLang);
    }
  }, [i18n, aLang]);

  return (
    <WouterRouter base={basePath}>
      {children}
    </WouterRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageRouter>
          <Router />
        </LanguageRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
