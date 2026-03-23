"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "@/components/animations";
import { I18nProvider } from "@/i18n";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
