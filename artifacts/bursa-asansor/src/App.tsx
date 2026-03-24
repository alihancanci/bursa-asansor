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
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        {/* Dynamic catch-all for /:district-:service */}
        <Route path="/:slug" component={ServicePage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

const SUPPORTED_LANGS = ["tr", "en", "ar", "ru"];

function LanguageRouter({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [basePath, setBasePath] = useState(import.meta.env.BASE_URL.replace(/\/$/, ""));

  useEffect(() => {
    // Determine language from URL path
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    const potentialLang = segments[0] || "tr";

    let activeLang = "tr";
    let newBase = import.meta.env.BASE_URL.replace(/\/$/, "");

    if (SUPPORTED_LANGS.includes(potentialLang) && potentialLang !== "tr") {
      activeLang = potentialLang;
      newBase = `${newBase}/${activeLang}`;
    }

    if (i18n.language !== activeLang) {
      i18n.changeLanguage(activeLang);
    }
    
    setBasePath(newBase);
  }, [i18n]);

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
