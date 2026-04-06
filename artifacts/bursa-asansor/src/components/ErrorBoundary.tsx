"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // Here you would typically log to an external service like Sentry
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-navy flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-navy-light rounded-3xl shadow-2xl p-8 text-center border border-slate-200 dark:border-white/10">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
            </div>
            
            <h1 className="text-2xl font-display font-bold text-secondary dark:text-white mb-4">
              Bir Şeyler Ters Gitti
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Üzgünüz, beklenmedik bir hata oluştu. Sayfayı yenilemeyi veya ana sayfaya dönmeyi deneyebilirsiniz.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary/20"
              >
                <RefreshCcw className="w-4 h-4" />
                Sayfayı Yenile
              </button>
              
              <Link href="/" className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 font-bold py-3 px-6 rounded-xl transition-all">
                  <Home className="w-4 h-4" />
                  Ana Sayfaya Dön
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 p-4 bg-slate-100 dark:bg-black/20 rounded-xl text-left overflow-auto max-h-40">
                <code className="text-xs text-red-500 font-mono">
                  {this.state.error.toString()}
                </code>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
