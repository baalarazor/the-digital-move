"use client";

import { ArrowRight, Check, HeartHandshake, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

type LocaleProps = {
  locale: "en" | "de";
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

export function HeroSection({ locale }: LocaleProps) {
  const copy = locale === "de"
    ? {
        badge: "Gründergeführt • Premium-Webdesign • Mit Haltung gebaut",
        headline: "Refinierte Websites schaffen,",
        highlight: "ein Unternehmen nach dem anderen.",
        subheadline: "Hallo, ich bin Baala. Ich gestalte durchdachte digitale Erlebnisse für lokale Unternehmen und begleite ausgewählte Partner mit Ruhe, Qualität und echter Sorgfalt.",
        primary: "❤️ An meiner Gründer-Initiative teilnehmen",
        secondary: "Meine Geschichte lesen →",
        quote: "Jedes Unternehmen verdient ein digitales Zuhause.",
        pills: ["Gründergeführt", "Mit Sorgfalt gebaut", "Modernes Design", "Persönlicher Support"],
      }
    : {
        badge: "Founder-led • Premium web design • Built with purpose",
        headline: "Crafting Refined Websites,",
        highlight: "One Business at a Time.",
        subheadline: "Hi, I'm Baala. I create thoughtful digital experiences for local businesses and help selected founders launch with confidence through a founder-led collaboration built with care.",
        primary: "❤️ Join My Founder Initiative",
        secondary: "Read My Story →",
        quote: "Built with passion. Offered with purpose.",
        pills: ["Founder-led", "Crafted with care", "Modern design", "Personal support"],
      };

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-8 lg:px-10 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
            <HeartHandshake className="mr-2 h-4 w-4" />
            {copy.badge}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {copy.headline} <span className="text-blue-600">{copy.highlight}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            {copy.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/website-plans" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_-12px_rgba(37,99,235,0.65)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-12px_rgba(14,165,233,0.7)]">
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/0 to-white/20 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center">
                {copy.primary}
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link href="/founder" className="group inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              <span className="flex items-center">
                {copy.secondary}
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {copy.pills.map((pill) => (
              <Pill key={pill}>{pill}</Pill>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-0 rounded-[2.3rem] bg-[radial-gradient(circle,_rgba(45,91,77,0.18),_transparent_60%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_-22px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <div className="absolute inset-x-8 top-6 h-24 rounded-[1.6rem] bg-gradient-to-r from-[#eef5ef] via-white to-[#f8eee0] blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#f7efe3_0%,_#f8faf8_100%)] p-6">
              <div className="rounded-[1.4rem] border border-[#d9cbb7] bg-white/80 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d5b4d]">{locale === "de" ? "Mit Haltung gebaut" : "Built with intention"}</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-slate-900">{copy.quote}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{locale === "de" ? "Jede Website wird sorgfältig geplant, gestaltet und mit ruhiger Klarheit umgesetzt." : "Every website is planned, designed and delivered with calm clarity and care."}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#d9cbb7] bg-[#f7efe3] px-3 py-1 text-sm font-medium text-slate-700">{locale === "de" ? "Gründergeführt" : "Founder-led"}</span>
                  <span className="rounded-full border border-[#d9cbb7] bg-[#f7efe3] px-3 py-1 text-sm font-medium text-slate-700">{locale === "de" ? "Persönlich" : "Personal"}</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[#d9cbb7] bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#2d5b4d]" /> {locale === "de" ? "Mit Leidenschaft gebaut" : "Built with Passion"}</span>
              </div>
              <div className="mt-3 rounded-2xl border border-[#d9cbb7] bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#2d5b4d]" /> {locale === "de" ? "Schnell geliefert" : "Delivered Fast"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FounderLinkSection() {
  return (
    <section className="px-6 pb-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-[0_24px_55px_-24px_rgba(15,23,42,0.2)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Meet the Founder
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Why I started this studio
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A closer look at the philosophy behind The Digital Move and the way we build with intention.
          </p>
        </div>
        <Link href="/founder" className="group inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700">
          Read My Story
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

export function TrustSection({ locale }: LocaleProps) {
  const items = locale === "de"
    ? [
        "KI-gestützte Lösungen",
        "Workflow-Automatisierung",
        "Individuelle Software",
        "Websites",
        "Digitale Transformation",
        "Geschäftsprozess-Automatisierung",
      ]
    : [
        "AI Powered",
        "Workflow Automation",
        "Custom Software",
        "Websites",
        "Digital Transformation",
        "Business Process Automation",
      ];

  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700">
        {items.map((item) => (
          <div key={item} className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Check className="mr-2 h-4 w-4 text-blue-600" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}