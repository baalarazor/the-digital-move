"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, HeartHandshake, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FooterSection, Pill, SectionHeading } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";

export function FounderPage() {
  const [locale, setLocale] = useState<"en" | "de">("en");

  useEffect(() => {
    const savedLocale = (window.localStorage.getItem("tdm-locale") as "en" | "de" | null) ?? "en";
    setLocale(savedLocale);
  }, []);

  const copy = locale === "de"
    ? {
        eyebrow: "Geschichte des Gründers",
        title: "Mit Haltung schöne Websites bauen.",
        intro: "Hallo, ich bin Baala. Ich habe The Digital Move gegründet, weil ich es genieße, moderne Websites zu schaffen, die lokalen Unternehmen helfen, sich mit Stil und Klarheit online zu präsentieren.",
        why: "Warum ich das gestartet habe",
        whyTitle: "Ich glaube, dass gute Arbeit erst Vertrauen verdient, bevor sie Geld verdient.",
        whyDescription: "The Digital Move ist mein Weg, Qualität durch Sorgfalt, Design und ein ruhiges, persönliches Vorgehen zu beweisen.",
        body1: "Ich habe dieses Studio gegründet, weil ich moderne, durchdachte Websites mit großer Freude baue. Ich liebe die Details eines polierten Layouts, die Klarheit eines starken visuellen Systems und die Wirkung, die eine starke Online-Präsenz auf ein kleines Unternehmen haben kann.",
        body2: "Statt Unternehmen mit Druck oder unnötigem Verkaufsgerede zu begegnen, wollte ich einen persönlicheren und eleganteren Beginn schaffen. Deshalb begleite ich ausgewählte Unternehmen in einer besonderen Gründer-Initiative, die auf Vertrauen, Sorgfalt und echter Zusammenarbeit beruht.",
        body3: "Dabei geht es nicht um Billigkeit. Es geht darum, Vertrauen aufzubauen, die Qualität unserer Arbeit zu zeigen und dauerhafte Beziehungen zu schaffen, die über ein einzelnes Projekt hinausgehen.",
        cta: "Die Gründer-Initiative entdecken",
        highlightsTitle: "Was diese Haltung ausmacht",
        highlights: [
          "Gründer-gesteuertes Design und Strategie",
          "Ein persönlicher Ansatz für jede Website",
          "Premium-Qualität ohne die typischen Agentur-Hürden",
          "Eine langfristige Beziehung, die auf Vertrauen aufbaut",
        ],
      }
    : {
        eyebrow: "Founder story",
        title: "Crafting thoughtful websites with intention.",
        intro: "Hi, I’m Baala. I started The Digital Move because I love creating modern websites that help local businesses feel polished, credible and visible online.",
        why: "Why I started",
        whyTitle: "I believe great work should earn trust before it earns money.",
        whyDescription: "The Digital Move is my way of proving quality through care, clarity and considered design.",
        body1: "I started this studio because I genuinely enjoy building modern, thoughtful websites. I love the detail of a polished layout, the calm confidence of a strong visual system, and the impact a great online presence can have on a small local business.",
        body2: "Rather than asking businesses to trust me through pressure or polished sales language, I wanted to create a more human and elegant way to begin. That is why I invite a small number of businesses into a founder-led initiative built around trust, care and partnership.",
        body3: "It is not about being inexpensive. It is about building trust, showing the quality of our work, and forming lasting relationships with businesses that value craftsmanship and care.",
        cta: "Explore the Founder Initiative",
        highlightsTitle: "What this approach stands for",
        highlights: [
          "Founder-led design and strategy",
          "A personal approach to every website",
          "Premium quality without the usual agency friction",
          "A long-term relationship built on trust",
        ],
      };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] text-slate-900">
      <SiteHeader locale={locale} setLocale={setLocale} />

      <main className="overflow-hidden">
        <section className="px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <HeartHandshake className="mr-2 h-4 w-4" />
                {copy.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                {copy.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  locale === "de" ? "Gründer-gesteuert" : "Founder-led",
                  locale === "de" ? "Premium-Qualität" : "Premium quality",
                  locale === "de" ? "Lokales Geschäftsverständnis" : "Local business focus",
                  locale === "de" ? "Mit Leidenschaft gebaut" : "Built with passion",
                ].map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative mx-auto w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_-22px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-slate-950 p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/baala.jpg"
                      alt="Baala portrait"
                      fill
                      className="object-cover object-center"
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 560px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-[1.15rem] border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
                      <p className="text-sm font-semibold">Every business deserves a digital home.</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-200">— Baala</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow={copy.why}
                title={copy.whyTitle}
                description={copy.whyDescription}
              />
              <div className="mt-8 space-y-4 text-base leading-8 text-slate-600">
                <p>{copy.body1}</p>
                <p>{copy.body2}</p>
                <p>{copy.body3}</p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white">
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                <Sparkles className="mr-2 h-4 w-4" />
                {copy.highlightsTitle}
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{locale === "de" ? "Was diese Haltung ausmacht" : "What this approach stands for"}</h3>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                {copy.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/website-plans" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-50">
                {copy.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection locale={locale} />
    </div>
  );
}
