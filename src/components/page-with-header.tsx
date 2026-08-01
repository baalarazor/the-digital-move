"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";

type PageWithHeaderProps = {
  children: React.ReactNode;
};

export function PageWithHeader({ children }: PageWithHeaderProps) {
  const [locale, setLocale] = useState<"en" | "de">("en");

  useEffect(() => {
    const savedLocale = (window.localStorage.getItem("tdm-locale") as "en" | "de" | null) ?? "en";
    setLocale(savedLocale);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader locale={locale} setLocale={setLocale} />
      {children}
    </div>
  );
}
