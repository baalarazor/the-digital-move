"use client";

import dynamic from "next/dynamic";
import { ArrowUp, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FounderLinkSection,
  HeroSection,
  TrustSection,
} from "@/components/home-above-fold";
import { healthcareNavItems } from "@/lib/healthcare";

const AboutSection = dynamic(() => import("@/components/sections").then((mod) => mod.AboutSection));
const BlogSection = dynamic(() => import("@/components/sections").then((mod) => mod.BlogSection));
const CTASection = dynamic(() => import("@/components/sections").then((mod) => mod.CTASection));
const ContactSection = dynamic(() => import("@/components/sections").then((mod) => mod.ContactSection));
const FAQSection = dynamic(() => import("@/components/sections").then((mod) => mod.FAQSection));
const FooterSection = dynamic(() => import("@/components/sections").then((mod) => mod.FooterSection));
const IndustriesSection = dynamic(() => import("@/components/sections").then((mod) => mod.IndustriesSection));
const ProcessSection = dynamic(() => import("@/components/sections").then((mod) => mod.ProcessSection));
const ServicesSection = dynamic(() => import("@/components/sections").then((mod) => mod.ServicesSection));
const WhyChooseUsSection = dynamic(() => import("@/components/sections").then((mod) => mod.WhyChooseUsSection));

const DeferredChatbot = dynamic(
  () => import("@/components/chatbot").then((mod) => mod.Chatbot),
  { ssr: false, loading: () => null },
);

export function SiteShell() {
  const [locale, setLocale] = useState<"en" | "de">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileHealthcareOpen, setMobileHealthcareOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileEngagementOpen, setMobileEngagementOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedLocale = (window.localStorage.getItem("tdm-locale") as "en" | "de" | null) ?? "en";
    const savedCookieConsent = window.localStorage.getItem("tdm-cookie-consent") === "accepted";

    setLocale(savedLocale);
    setCookieAccepted(savedCookieConsent);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;

    const onScroll = () => setShowBackToTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  useEffect(() => {
    window.localStorage.setItem("tdm-locale", locale);
  }, [locale]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileHealthcareOpen(false);
    setMobileMoreOpen(false);
    setMobileEngagementOpen(false);
  }, [pathname]);

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
  const healthcareLabel = "Healthcare Solutions";
  const healthcareOverviewLabel = "Overview";
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
      <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
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
        className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-left text-slate-700 dark:border-slate-700 dark:text-slate-200"
        aria-expanded={open}
      >
        <span className="font-semibold">{label}</span>
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>
      {open ? (
        <div className="ml-2 flex flex-col gap-2 border-l border-slate-200 pl-3 dark:border-slate-700">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
  const handleLocaleChange = (nextLocale: "en" | "de") => {
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

  const acceptCookies = () => {
    window.localStorage.setItem("tdm-cookie-consent", "accepted");
    setCookieAccepted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300">
      {mounted ? <div className="fixed inset-x-0 top-0 z-50 h-1 bg-blue-600" /> : null}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
            The Digital Move
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
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
              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                <Link href="/healthcare" className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800">
                  {healthcareOverviewLabel}
                </Link>
                <div className="my-2 h-px bg-slate-100 dark:bg-slate-700" />
                {healthcareNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
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
            <Link href="/#contact" className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex">
              {locale === "de" ? "Gespräch vereinbaren" : "Start Our Conversation"}
            </Link>
            <button
              className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
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
              <a href="https://wa.me/491755017453" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-emerald-700 hover:text-emerald-900">
                WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="home">
        <HeroSection locale={locale} />
        <FounderLinkSection />
        <TrustSection locale={locale} />
        <AboutSection locale={locale} />
        <ServicesSection locale={locale} />
        <IndustriesSection locale={locale} />
        <WhyChooseUsSection locale={locale} />
        <ProcessSection locale={locale} />
        <BlogSection locale={locale} />
        <FAQSection locale={locale} />
        <CTASection locale={locale} />
        <ContactSection locale={locale} />
      </main>

      <FooterSection locale={locale} />
      <DeferredChatbot />


      {showBackToTop ? (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 inline-flex items-center rounded-full border border-slate-200 bg-white p-4 text-slate-700 shadow-lg transition hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}

      {!cookieAccepted ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We use cookies to improve your experience and remember your theme preferences.
            </p>
            <button onClick={acceptCookies} className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Accept Cookies
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
