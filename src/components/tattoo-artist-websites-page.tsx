"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Compass,
  GalleryVerticalEnd,
  ImageIcon,
  LayoutTemplate,
  MapPin,
  MessageCircleMore,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { FooterSection, Pill, SectionHeading } from "@/components/sections";
import { PageWithHeader } from "@/components/page-with-header";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      className="rounded-[1.6rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.28)] backdrop-blur"
    >
      <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}

function MockBrowser({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <div className="rounded-[1.6rem] border border-white/40 bg-slate-950/95 p-3 shadow-[0_24px_70px_-25px_rgba(2,6,23,0.65)]">
      <div className="rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%),linear-gradient(145deg,_#111827_0%,_#0f172a_100%)] p-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-300">
            {eyebrow}
          </span>
        </div>
        <div className="mt-4 overflow-hidden rounded-[1rem] border border-white/10 bg-white/95">
          <div className={`h-28 bg-gradient-to-r ${accent} p-4`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs text-slate-200">A premium tattoo artist website</p>
              </div>
              <div className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white">
                Online
              </div>
            </div>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-3">
              <div className="h-16 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-14 rounded-2xl bg-slate-100" />
                <div className="h-14 rounded-2xl bg-slate-100" />
              </div>
            </div>
            <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-4">
              <div className="h-3 w-16 rounded-full bg-slate-200" />
              <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-200" />
              <div className="mt-4 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-3 text-sm text-white">
                Book a consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TattooArtistWebsitesPage({ locale = "en" }: { locale?: "en" | "de" }) {
  const isDe = locale === "de";

  const copy = isDe
    ? {
        eyebrow: "Websites für Tattoo-Künstler",
        title: "Deine Kunst verdient mehr als Social Media.",
        intro: "Deine Tattoos erzählen unglaubliche Geschichten. Deine Website sollte es auch tun. Eine hochwertige Website für Tattoo-Künstler hilft dir, deine Portfolioarbeit besser zu zeigen, mehr Buchungen zu erhalten und ein ebenso einzigartiges Online-Erlebnis zu schaffen wie deine Arbeit.",
        introAlt: "Das ist nicht nur ein Marketing-Tool. Es ist ein hochwertiger digitaler Ort, an dem Kunden deine Arbeit entdecken, deinen Stil verstehen und sich mit Vertrauen an dich wenden können.",
        cta: "Lass uns über dein Studio sprechen",
        secondary: "Warum ich diese Seiten baue",
        section1Eyebrow: "Warum viele Tattoo-Studios Chancen verlieren",
        section1Title: "Instagram ist stark. Aber es ist keine langfristige Grundlage.",
        section1Description: "Posts verschwinden. Algorithmen ändern sich. Kunden können deine Arbeit nicht einfach durchsuchen. Und ein Buchungsprozess wird schnell unübersichtlich.",
        section2Eyebrow: "Was deine Website enthalten könnte",
        section2Title: "Ein digitales Zuhause, das auf deine Kunst und deinen Buchungsprozess abgestimmt ist",
        section2Description: "Die besten Websites für Tattoo-Studios wirken ruhig, hochwertig und leicht zu bedienen. Sie helfen Kunden, deine Arbeiten zu entdecken, deinen Stil zu verstehen und dich ohne Reibung zu kontaktieren.",
        section3Eyebrow: "Besucher in Kunden verwandeln",
        section3Title: "Ein klarer Weg von Interesse bis Buchung",
        section3Description: "Wenn eine Website durchdacht wirkt, bewegen sich Besucher natürlich von Bewunderung zu Anfrage.",
        section4Eyebrow: "Wie deine Website deinem Geschäft hilft",
        section4Title: "Eine stärkere Online-Präsenz, die für dich arbeitet, auch wenn du gerade nicht online bist",
        section4Description: "Eine hochwertige Website ist nicht nur ein digitales Portfolio. Sie ist ein Geschäftsasset, das weiterarbeitet, wenn du tatuierst, reist oder ausruhst.",
        section5Eyebrow: "Was eine großartige Tattoo-Website ausmacht",
        section5Title: "Moderne UX, schöne Erzählung und eine nahtlose Buchungserfahrung",
        section5Description: "Die stärksten Designs wirken mühelos. Große Bilder, klare Hierarchie, dunkle Premium-Töne und intuitive Navigation führen den Besucher natürlich durch die Seite.",
        section6Eyebrow: "Warum ich diese Websites baue",
        section6Title: "Ich liebe es, Künstlern zu helfen, ihre Arbeit online wunderschön zu präsentieren",
        section6Description: "Statt Zeit in breite Werbung zu investieren, konzentriere ich mich auf eine kleine Zahl von Unternehmen, an die ich wirklich glaube.",
        section7Eyebrow: "Häufig gestellte Fragen",
        section7Title: "Fragen, die Tattoo-Künstler oft stellen, bevor sie in eine Website investieren",
        section7Description: "Ziel ist es, die Entscheidung klar, bedacht und zu deinem gewünschten Wachstum passend zu gestalten.",
        finalEyebrow: "Lass uns etwas Schönes bauen",
        finalTitle: "Lass deine Kunst der Welt zeigen.",
        finalBody: "Wenn du dich für das einsetzt, was du erschaffst, würde ich dir gerne helfen, es online zu präsentieren. Lass uns ein Gespräch führen.",
        finalButton: "Lass uns etwas Schönes bauen",
        footerLocale: "de",
      }
    : {
        eyebrow: "Tattoo artist websites",
        title: "Your Art Deserves More Than Social Media.",
        intro: "Your tattoos tell incredible stories. Your website should too. A refined tattoo artist website helps you showcase your portfolio, attract more bookings, and create an online experience as distinctive as your work.",
        introAlt: "This is not about chasing trends. It is about building a premium tattoo studio website that helps clients discover your work, understand your process, and choose you with confidence.",
        cta: "Let's Talk About Your Studio",
        secondary: "Why I build these sites",
        section1Eyebrow: "Why most tattoo studios miss opportunities",
        section1Title: "Instagram is powerful. But it is not a long-term foundation.",
        section1Description: "Posts disappear. Algorithms change. Clients cannot search your work efficiently. And a booking flow can become fragmented across stories, DMs and spreadsheets.",
        section2Eyebrow: "What your website could include",
        section2Title: "A digital home designed around your art and your booking flow",
        section2Description: "The best tattoo studio websites feel calm, premium and easy to use. They help clients browse your work, understand your style and contact you without friction.",
        section3Eyebrow: "Turn visitors into clients",
        section3Title: "A clear path from interest to booking",
        section3Description: "When a website feels considered, visitors move naturally from admiration to enquiry.",
        section4Eyebrow: "How your website helps your business grow",
        section4Title: "A stronger online presence that works for you long after the post is gone",
        section4Description: "A premium website is not just a digital brochure. It is a business asset that keeps working whenever you are tattooing, travelling or resting.",
        section5Eyebrow: "What makes a great tattoo website",
        section5Title: "Modern UX, beautiful storytelling and a seamless booking experience",
        section5Description: "The strongest designs feel effortless. Big images, clear hierarchy, dark premium tones and intuitive navigation guide the visitor naturally.",
        section6Eyebrow: "Why I am building these websites",
        section6Title: "I genuinely love helping artists present their work beautifully online",
        section6Description: "Rather than spending my time on broad advertising, I am investing it in a small number of businesses I believe in.",
        section7Eyebrow: "Frequently asked questions",
        section7Title: "Questions tattoo artists often ask before they invest in a website",
        section7Description: "The goal is to make the decision feel clear, thoughtful and aligned with the way you want to grow.",
        finalEyebrow: "Let's build something beautiful",
        finalTitle: "Let's Showcase Your Art To The World.",
        finalBody: "If you love what you create, I would love to help you present it online. Let's have a conversation.",
        finalButton: "Let's Build Something Beautiful",
        footerLocale: "en",
      };

  const offerings = [
    {
      icon: GalleryVerticalEnd,
      title: "Portfolio Gallery",
      description: "Showcase your best work with a gallery that feels as refined as the art itself.",
    },
    {
      icon: Palette,
      title: "Artist Profiles",
      description: "Present your story, specialties, signature styles, and the values behind your work.",
    },
    {
      icon: BookOpenText,
      title: "Booking Requests",
      description: "Turn curiosity into enquiries with a clean consultation flow that works on mobile.",
    },
    {
      icon: MapPin,
      title: "Google Maps",
      description: "Help locals discover your studio and make the next step feel effortless.",
    },
    {
      icon: MessageCircleMore,
      title: "WhatsApp",
      description: "Make it simple for clients to ask questions, share references, and start a conversation.",
    },
    {
      icon: ImageIcon,
      title: "Instagram Feed",
      description: "Connect your content so your website and social presence feel like one premium experience.",
    },
  ];

  const growthPoints = isDe
    ? [
        "Auf Google gefunden werden",
        "Vertrauen aufbauen, bevor Kunden schreiben",
        "Mehr Beratungsanfragen erhalten",
        "Wiederkehrende Fragen reduzieren",
        "Deine beste Arbeit professionell zeigen",
        "Eine stärkere Markenidentität schaffen",
        "Buchungsanfragen rund um die Uhr annehmen",
        "Deine Online-Präsenz selbst kontrollieren",
      ]
    : [
        "Be discovered on Google",
        "Build trust before clients message you",
        "Receive more consultation requests",
        "Reduce repetitive questions",
        "Showcase your best work professionally",
        "Create a stronger brand identity",
        "Accept booking requests 24/7",
        "Own your online presence",
      ];

  const journeySteps = isDe
    ? [
        "Besucher entdeckt deine Arbeit",
        "Sicht deine Portfolio-Seiten",
        "Liest Bewertungen und Studiodetails",
        "Lernt deine Künstler kennen",
        "Bucht eine Beratung",
        "Wird Kunde",
      ]
    : [
        "Visitor discovers your work",
        "Views your portfolio",
        "Reads reviews and studio details",
        "Learns about your artists",
        "Books consultation",
        "Becomes a client",
      ];

  return (
    <PageWithHeader>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] text-slate-900">
        <section className="relative px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <Sparkles className="mr-2 h-4 w-4" />
                {copy.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                {copy.intro}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                {copy.introAlt}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/website-plans#lead-form" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_-12px_rgba(37,99,235,0.65)] transition hover:-translate-y-0.5">
                  {copy.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link href="#why-work-with-me" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                  {copy.secondary}
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Pill>tattoo artist website</Pill>
                <Pill>tattoo studio website</Pill>
                <Pill>tattoo website design</Pill>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(37,99,235,0.18),_transparent_60%)] blur-3xl" />
              <div className="rounded-[2.25rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_-22px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                <div className="rounded-[1.8rem] border border-slate-200/70 bg-[linear-gradient(135deg,_#101828_0%,_#0f172a_45%,_#1e3a8a_100%)] p-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(145deg,_#111827_0%,_#0f172a_100%)] p-4">
                    <div className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-slate-200">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Global reach, local trust
                    </div>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div className="rounded-[1.15rem] border border-white/10 bg-white/10 p-3">
                        <div className="h-28 rounded-[0.95rem] bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.25),_transparent_28%),linear-gradient(135deg,_#1f2937_0%,_#111827_100%)]" />
                        <div className="mt-3 h-2 w-16 rounded-full bg-white/25" />
                        <div className="mt-2 h-2 w-full rounded-full bg-white/15" />
                        <div className="mt-2 h-2 w-4/5 rounded-full bg-white/15" />
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-[1.15rem] border border-white/10 bg-white/10 p-3">
                          <div className="h-2 w-20 rounded-full bg-white/25" />
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="h-16 rounded-[0.9rem] bg-gradient-to-br from-slate-700 via-slate-800 to-blue-950" />
                            <div className="h-16 rounded-[0.9rem] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950" />
                          </div>
                        </div>
                        <div className="rounded-[1.15rem] border border-white/10 bg-gradient-to-r from-blue-600/30 to-cyan-400/25 p-4 text-sm text-white">
                          <div className="font-semibold">Booking enquiries while you work</div>
                          <div className="mt-2 text-sm text-slate-200">A tattoo studio booking website keeps your calendar moving, even when you are busy tattooing.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_22px_65px_-28px_rgba(15,23,42,0.2)] backdrop-blur sm:p-10">
            <SectionHeading
              eyebrow={copy.section1Eyebrow}
              title={copy.section1Title}
              description={copy.section1Description}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Clients cannot find your work easily</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">A tattoo portfolio website gives people a clear place to browse your style, your stories and your availability.</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Trust is harder to build in a feed</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">A thoughtful website for tattoo artists creates a more professional first impression that supports bookings, not just awareness.</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Your work deserves structure</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">A beautiful website helps you organise your portfolio, talk about your process, and guide clients towards the right next step.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.section2Eyebrow}
              title={copy.section2Title}
              description={copy.section2Description}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {offerings.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#0f172a_0%,_#111827_40%,_#1d4ed8_100%)] p-8 text-white shadow-[0_22px_70px_-26px_rgba(15,23,42,0.35)] sm:p-10">
            <SectionHeading
              eyebrow={copy.section3Eyebrow}
              title={copy.section3Title}
              description={copy.section3Description}
              align="center"
              tone="light"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-7 backdrop-blur">
                <div className="space-y-4 text-sm text-slate-100">
                  {journeySteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-cyan-200">
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                  <div className="inline-flex rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{isDe ? "SEO für Tattoo-Künstler" : "SEO for tattoo artists"}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-100">{isDe ? "Die richtige Struktur und die passenden Worte helfen deiner Arbeit dabei, in Suchanfragen wie Tattoo-Portfolio, Website für Tattoo-Studios oder lokale Stile sichtbar zu werden." : "The right structure and copy help your work appear in searches for tattoo artist portfolio, tattoo studio website, and local styles that matter to your clients."}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                  <div className="inline-flex rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
                    <Star className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{isDe ? "Markenorientierte Erfahrung" : "Brand-first experience"}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-100">{isDe ? "Deine Website wird zur Erweiterung deines Studios: visuell selbstbewusst, emotional stimmig und genau auf deine Identität zugeschnitten." : "Your website becomes an extension of your studio: visually confident, emotionally resonant and tailored to your identity."}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.section4Eyebrow}
              title={copy.section4Title}
              description={copy.section4Description}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {growthPoints.map((point) => (
                <div key={point} className="rounded-[1.6rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-slate-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_22px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="What makes a great tattoo website"
                  title="Modern UX, beautiful storytelling and a seamless booking experience"
                  description="The strongest designs feel effortless. Big images, clear hierarchy, dark premium tones and intuitive navigation guide the visitor naturally."
                />
                <div className="mt-8 space-y-4 text-base leading-8 text-slate-600">
                  <p>Large images let your portfolio breathe. Fast loading keeps the experience calm and polished. Responsive layout ensures visitors see the same quality on mobile and desktop.</p>
                  <p>A thoughtful tattoo website design also respects your process: artist pages, before & after stories, aftercare information and clear contact options all make the next step easier.</p>
                </div>
              </div>
              <div className="space-y-4">
                <MockBrowser eyebrow="Portfolio" title="Homepage" accent="from-slate-700 via-slate-900 to-blue-900" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <MockBrowser eyebrow="Gallery" title="Work" accent="from-slate-800 via-slate-900 to-slate-700" />
                  <MockBrowser eyebrow="Booking" title="Consultation" accent="from-blue-700 via-blue-900 to-slate-950" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#0f172a_0%,_#111827_40%,_#1d4ed8_100%)] p-8 text-white shadow-[0_24px_70px_-24px_rgba(15,23,42,0.35)] sm:p-10">
            <SectionHeading
              eyebrow={copy.section6Eyebrow}
              title={copy.section6Title}
              description={copy.section6Description}
              align="center"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-7 backdrop-blur">
                <p className="text-base leading-8 text-slate-100">
                  Hi, I&apos;m Baala. Founder of The Digital Move. I genuinely love building beautiful websites. Tattoo artists create permanent art. I simply want to help present that art beautifully online.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-100">
                  This is not about selling a service. It is about creating something we are both proud of. A thoughtful website should feel like a natural extension of the work itself.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-cyan-400/20 bg-white/10 p-7 backdrop-blur">
                <div className="flex items-center gap-3 text-cyan-100">
                  <LayoutTemplate className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.28em]">Built with intention</span>
                </div>
                <div className="mt-6 space-y-4 text-sm text-slate-100">
                  {[
                    "Founder-led collaboration",
                    "Built with passion",
                    "Personal attention to detail",
                    "Modern technology and fast performance",
                    "No templates, no shortcuts",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-work-with-me" className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why work with me"
              title="A founder-led approach with a premium finish"
              description="Every website is designed from scratch, built with care and shaped around how your business actually works."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Founder-led", "You work directly with the person shaping the experience rather than a large anonymous team."],
                ["Built with passion", "I care deeply about the quality of the final result and the feeling it creates."],
                ["Modern technology", "Fast, responsive, accessible and SEO-conscious by default."],
                ["No templates", "Every experience is designed with your identity and your portfolio in mind."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-[1.6rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_22px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur sm:p-10">
            <SectionHeading
              eyebrow={copy.section7Eyebrow}
              title={copy.section7Title}
              description={copy.section7Description}
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {[
                [
                  "Do I need a website if I already have Instagram?",
                  "Instagram is excellent for visibility. A website gives you permanence, discovery, trust and a clearer path to enquiries. It becomes the home for your portfolio and your studio details.",
                ],
                [
                  "Can clients request appointments online?",
                  "Yes. A tattoo studio booking website can include a consultation enquiry form, WhatsApp integration and clear next steps so clients can reach out without friction.",
                ],
                [
                  "Will my website work on mobile?",
                  "Absolutely. Mobile-first layout, fast loading and a clear booking flow are essential for modern tattoo websites and for local discovery.",
                ],
                [
                  "Can I update my portfolio later?",
                  "Yes. I build websites that are easy to evolve as your work grows, your style develops and your studio changes over time.",
                ],
                [
                  "Can you showcase different tattoo styles?",
                  "Yes. I can structure your work around blackwork, realism, fine line, Japanese, traditional and other specialties in a way that is easy to navigate.",
                ],
                [
                  "Can I connect Instagram?",
                  "Yes. I can connect your social presence so your website feels like an extension of your brand rather than a disconnected brochure.",
                ],
              ].map(([question, answer]) => (
                <div key={question} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2.2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-[0_24px_70px_-28px_rgba(15,23,42,0.2)] sm:p-10">
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              {copy.finalEyebrow}
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {copy.finalTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {copy.finalBody}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/website-plans#lead-form" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_-12px_rgba(37,99,235,0.65)] transition hover:-translate-y-0.5">
                {copy.finalButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/founder" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                {isDe ? "Meine Geschichte lesen" : "Read My Story"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection locale={isDe ? "de" : "en"} />
    </PageWithHeader>
  );
}
