"use client";

import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { healthcareNavItems } from "@/lib/healthcare";

type Locale = "en" | "de";

type SiteHeaderProps = {
  locale: Locale;
  setLocale: (value: Locale) => void;
};

export function SiteHeader({ locale, setLocale }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHealthcareOpen, setMobileHealthcareOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileEngagementOpen, setMobileEngagementOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("tdm-locale", locale);
  }, [locale]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileHealthcareOpen(false);
    setMobileMoreOpen(false);
    setMobileEngagementOpen(false);
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

  const primaryNavItems = locale === "de"
    ? [
        { label: "Start", href: "/" },
        { label: "Leistungen", href: "/services" },
        { label: "Lösungen", href: "/solutions" },
        { label: "Branchen", href: "/industries" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Solutions", href: "/solutions" },
        { label: "Industries", href: "/industries" },
      ];

  const moreNavItems = locale === "de"
    ? [
        { label: "Standorte", href: "/locations" },
        { label: "Ressourcen", href: "/resources" },
        { label: "Über uns", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Case Studies", href: "/case-studies" },
      ]
    : [
        { label: "Locations", href: "/locations" },
        { label: "Resources", href: "/resources" },
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Case Studies", href: "/case-studies" },
      ];

  const engagementNavItems = locale === "de"
    ? [
        { label: "Preise", href: "/pricing" },
        { label: "Gründer-Initiative", href: "/website-plans" },
        { label: "Kontakt", href: "/contact" },
      ]
    : [
        { label: "Pricing", href: "/pricing" },
        { label: "Founder Initiative", href: "/website-plans" },
        { label: "Contact", href: "/contact" },
      ];

  const healthcareLabel = locale === "de" ? "Healthcare Solutions" : "Healthcare Solutions";
  const healthcareOverviewLabel = locale === "de" ? "Overview" : "Overview";
  const moreLabel = locale === "de" ? "Mehr" : "More";
  const engagementLabel = locale === "de" ? "Zusammenarbeit" : "Engage";

  const DesktopMenu = ({
    label,
    items,
  }: {
    label: string;
    items: Array<{ label: string; href: string }>;
  }) => (
    <div className="group relative">
      <button type="button" className="inline-flex items-center gap-1 transition hover:text-blue-600">
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const MobileMenuGroup = ({
    label,
    open,
    onToggle,
    items,
  }: {
    label: string;
    open: boolean;
    onToggle: () => void;
    items: Array<{ label: string; href: string }>;
  }) => (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left text-slate-700"
        aria-expanded={open}
      >
        <span className="font-semibold">{label}</span>
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>
      {open ? (
        <div className="ml-2 flex flex-col gap-2 border-l border-slate-200 pl-3">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-700">
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          The Digital Move
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {primaryNavItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
          <DesktopMenu label={moreLabel} items={moreNavItems} />
          <DesktopMenu label={engagementLabel} items={engagementNavItems} />
          <div className="group relative">
            <button type="button" className="inline-flex items-center gap-1 transition hover:text-blue-600">
              {healthcareLabel}
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link href="/healthcare" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600">
                {healthcareOverviewLabel}
              </Link>
              <div className="my-2 h-px bg-slate-100" />
              {healthcareNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
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
            {primaryNavItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <MobileMenuGroup
              label={moreLabel}
              open={mobileMoreOpen}
              onToggle={() => setMobileMoreOpen((open) => !open)}
              items={moreNavItems}
            />
            <MobileMenuGroup
              label={engagementLabel}
              open={mobileEngagementOpen}
              onToggle={() => setMobileEngagementOpen((open) => !open)}
              items={engagementNavItems}
            />
            <MobileMenuGroup
              label={healthcareLabel}
              open={mobileHealthcareOpen}
              onToggle={() => setMobileHealthcareOpen((open) => !open)}
              items={[{ label: healthcareOverviewLabel, href: "/healthcare" }, ...healthcareNavItems]}
            />
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
