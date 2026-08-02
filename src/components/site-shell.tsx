"use client";

import { motion } from "framer-motion";
import { ArrowUp, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AboutSection,
  BlogSection,
  CTASection,
  ContactSection,
  FAQSection,
  FooterSection,
  FounderLinkSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  TrustSection,
  WhyChooseUsSection,
} from "@/components/sections";
import { Chatbot } from "@/components/chatbot";

export function SiteShell() {
  const [locale, setLocale] = useState<"en" | "de">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mounted, setMounted] = useState(false);

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
  }, [pathname]);

  const navItems = locale === "de" ? ["Start", "Leistungen", "Website-Pläne", "Branchen", "Über uns", "Blog", "Kontakt"] : ["Home", "Services", "Website Plans", "Industries", "About", "Blog", "Contact"];
  const navLinks = navItems.map((item) => {
    if (item === "Leistungen" || item === "Services") return "/services";
    if (item === "Website-Pläne" || item === "Website Plans") return "/website-plans";
    return `#${item.toLowerCase()}`;
  });
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
      {mounted ? <motion.div className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-blue-600" initial={false} animate={{ scaleX: 1 }} /> : null}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
            The Digital Move
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
            {navItems.map((item, index) => (
              <a key={item} href={navLinks[index]} className="transition hover:text-blue-600">
                {item}
              </a>
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
            <a href="#contact" className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex">
              {locale === "de" ? "Gespräch vereinbaren" : "Start Our Conversation"}
            </a>
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
              {navItems.map((item, index) => (
                <a key={item} href={navLinks[index]} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
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
      <Chatbot />


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
