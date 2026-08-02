"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Locale = "en" | "de";

type SiteHeaderProps = {
  locale: Locale;
  setLocale: (value: Locale) => void;
};

export function SiteHeader({ locale, setLocale }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("tdm-locale", locale);
  }, [locale]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);

    const currentPath = pathname ?? "/";
    if (currentPath === "/tattoo-artist-websites") {
      router.push(nextLocale === "de" ? "/de/tattoo-artist-websites" : "/tattoo-artist-websites");
      return;
    }

    if (currentPath === "/de/tattoo-artist-websites") {
      router.push(nextLocale === "en" ? "/tattoo-artist-websites" : "/de/tattoo-artist-websites");
      return;
    }

    if (currentPath.startsWith("/de/") && nextLocale === "en") {
      router.push(currentPath.replace(/^\/de/, ""));
      return;
    }
  };

  const navItems = locale === "de"
    ? [
        { label: "Start", href: "/" },
        { label: "Leistungen", href: "/services" },
        { label: "Website-Pläne", href: "/website-plans" },
        { label: "Branchen", href: "/#industries" },
        { label: "Über uns", href: "/#about" },
        { label: "Blog", href: "/#blog" },
        { label: "Kontakt", href: "/#contact" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Website Plans", href: "/website-plans" },
        { label: "Industries", href: "/#industries" },
        { label: "About", href: "/#about" },
        { label: "Blog", href: "/#blog" },
        { label: "Contact", href: "/#contact" },
      ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          The Digital Move
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => handleLocaleChange("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${locale === "en" ? "bg-blue-600 text-white" : "text-slate-700"}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLocaleChange("de")}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${locale === "de" ? "bg-blue-600 text-white" : "text-slate-700"}`}
            >
              DE
            </button>
          </div>
          <a href="https://wa.me/491755017453" target="_blank" rel="noreferrer" className="hidden rounded-full border border-emerald-500 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/20 sm:inline-flex">
            WhatsApp
          </a>
          <Link href="/website-plans#lead-form" className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:inline-flex">
            {locale === "de" ? "Gespräch vereinbaren" : "Start Our Conversation"}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href="https://wa.me/491755017453" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-emerald-700">
              WhatsApp
            </a>
            <Link href="/website-plans#lead-form" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20">
              {locale === "de" ? "Gespräch vereinbaren" : "Start Our Conversation"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
