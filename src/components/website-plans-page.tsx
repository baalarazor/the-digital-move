"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Check,
  Clock3,
  Crown,
  Globe2,
  Headphones,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { FooterSection, Pill, SectionHeading } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";

type Locale = "en" | "de";

type FormState = {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  website: string;
  currentWebsite: string;
  businessAddress: string;
  preferredPlan: string;
  domainOwnership: string;
  timeline: string;
  budget: string;
  details: string;
  consent: boolean;
};

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
    >
      <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}

export function WebsitePlansPage() {
  const [form, setForm] = useState<FormState>({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    website: "",
    currentWebsite: "",
    businessAddress: "",
    preferredPlan: "Passion",
    domainOwnership: "Yes",
    timeline: "As soon as possible",
    budget: "",
    details: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = (window.localStorage.getItem("tdm-locale") as "en" | "de" | null) ?? "en";
    setLocale(savedLocale);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.consent) {
      setError("Please confirm that you agree to be contacted.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: form.contactPerson,
          email: form.email,
          phone: form.phone,
          businessName: form.businessName,
          businessType: form.businessType,
          website: form.website,
          currentWebsite: form.currentWebsite,
          businessAddress: form.businessAddress,
          preferredPlan: form.preferredPlan,
          domainOwnership: form.domainOwnership,
          timeline: form.timeline,
          budget: form.budget,
          notes: form.details,
          challenge: "Website plan enquiry",
          company: form.businessName,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error ?? "We could not submit your request right now.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not submit your request right now.");
    } finally {
      setSubmitting(false);
    }
  };

  const isGerman = locale === "de";

  const copy = isGerman
    ? {
        heroBadge: "Founder-led passion project • Premium-Websites • Mit Haltung gebaut",
        heroTitle: "Eine Website sollte wie ein echter Anfang wirken.",
        heroDescription: "Ich baue ein kleines Studio rund um das Gefühl, dass großartige Websites persönlich, ruhig und ehrlich sein sollten. Die Gründer-Initiative begleitet ausgewählte Unternehmen mit Klarheit, Sorgfalt und echtem Fokus.",
        heroPrimary: "An meiner Gründer-Initiative teilnehmen",
        heroSecondary: "Meine Geschichte lesen",
        heroPills: ["Ausgewählte Unternehmen", "Founder-led", "Mit viel Sorgfalt", "Mit Absicht gebaut"],
        founderEyebrow: "Warum das entsteht",
        founderTitle: "Ich baue keine Maschine. Ich baue ein ruhiges Stück Vertrauen.",
        founderDescription: [
          "Bei The Digital Move geht es nicht nur um Websites. Es geht darum, Menschen mit einem starken digitalen Zuhause zu unterstützen.",
          "Ich gestalte moderne, sorgfältig ausgearbeitete Websites mit Klarheit, Ruhe und langfristiger Qualität.",
          "Statt nur zu versprechen, was ich kann, möchte ich lieber zeigen, dass ein guter Start ohne unnötigen Druck möglich ist.",
        ],
        planEyebrow: "Die Gründer-Initiative",
        planTitle: "Eine Website-Erfahrung mit Haltung für die Unternehmen, die ich gerne begleite.",
        planDescription: "Das ist kein Abo und kein klassischer Servicevertrag. Es ist eine bewusste Einladung, mit einer kleinen Zahl von Unternehmen zusammenzuarbeiten, deren Arbeit verdient, klar gesehen und mit Sorgfalt gebaut zu werden.",
        planNote: "Nur ausgewählte Anfragen",
        planNoteText: "Ich arbeite bewusst klein und nur mit Projekten, die zu meiner Art von Arbeit passen.",
        journeyEyebrow: "Teil meiner Reise werden",
        journeyTitle: "Ich suche Unternehmen, die Wert auf Handwerk, Klarheit und Mut legen.",
        journeyDescription: "Die Unternehmen, mit denen ich gerne arbeite, sind oft klein, ehrlich und bereit, sich neu zu zeigen.",
        missionEyebrow: "Die Mission",
        missionTitle: "Mit Leidenschaft gebaut. Mit Absicht angeboten.",
        missionDescription: "Statt Geld für Werbung auszugeben, investiere ich meine Zeit in die Erstellung außergewöhnlicher Websites für eine kleine Gruppe von Unternehmen, an die ich glaube. Ich glaube, dass jedes große Unternehmen eine digitale Präsenz verdient, die die Leidenschaft hinter ihm widerspiegelt. Statt Unternehmen zu bitten, meinen Worten zu vertrauen, würde ich lieber Vertrauen verdienen, indem ich Arbeit erschaffe, die für sich spricht. Jede Website, die ich baue, ist mehr als ein Projekt. Sie ist der Beginn einer Beziehung.",
        letterEyebrow: "Ein Brief von mir",
        letterText: "Wenn ich etwas baue, dann nicht nur für den Bildschirm. Ich baue es für das Gefühl, das ein Unternehmen in Menschen auslöst, wenn es endlich klar und elegant sichtbar wird. Ich möchte, dass diese erste Website nicht nur gut aussieht, sondern wirklich zu Ihrem Unternehmen passt – und zu dem, was Sie eines Tages werden wollen.",
        faqEyebrow: "FAQ",
        faqTitle: "Die Fragen, die wir am häufigsten hören",
        faqDescription: "Hier sind die wichtigsten Antworten, bevor Sie sich bewerben.",
        leadEyebrow: "Bewerbung",
        leadTitle: "Bewerben Sie sich für den Passion-Plan",
        leadDescription: "Ich prüfe jede Anfrage sorgfältig und gehe nur mit Unternehmen weiter, die wirklich zur nächsten Phase passen.",
        businessName: "Unternehmensname *",
        contactPerson: "Kontaktperson *",
        email: "E-Mail *",
        phone: "Telefonnummer *",
        businessType: "Branche",
        website: "Website (optional)",
        currentWebsite: "Aktuelle Website",
        businessAddress: "Adresse",
        consent: "Ich verstehe, dass diese Initiative nur für ausgewählte Unternehmen gilt.",
        submit: "Meine Geschichte teilen",
        submitSuccess: "Vielen Dank. Ich melde mich bald bei Ihnen.",
        ctaHeading: "Lassen Sie uns etwas schaffen, das wirklich zählt.",
        ctaDescription: "Ich möchte nicht die größte Agentur werden. Ich möchte hochwertige Websites schaffen, die lokale Unternehmen mit Klarheit, Stil und Haltung nach vorne bringen.",
        ctaButton: "Gespräch vereinbaren",
      }
    : {
        heroBadge: "Founder-led passion project • Premium websites • Built with purpose",
        heroTitle: "A website should feel like a true beginning.",
        heroDescription: "I’m building a small studio around the idea that great websites should feel personal, calm and honest. The founder initiative helps selected businesses begin with confidence, care and a clear sense of direction.",
        heroPrimary: "Join My Founder Initiative",
        heroSecondary: "Read my story",
        heroPills: ["Selected businesses only", "Founder-led", "Crafted with care", "Built with intention"],
        founderEyebrow: "Why this exists",
        founderTitle: "I’m not building a machine. I’m building a quiet kind of trust.",
        founderDescription: [
          "At The Digital Move, this is about more than websites. It is about helping people show up with a strong digital home.",
          "I create modern, carefully considered websites with clarity, calm and lasting quality.",
          "Instead of selling the usual pitch, I would rather show what a thoughtful first step can look like.",
        ],
        planEyebrow: "The Passion Plan",
        planTitle: "A founder-sponsored website experience for the businesses I want to help.",
        planDescription: "This is not a subscription and not a typical service package. It is a deliberate invitation to work with a small number of companies whose work deserves to be seen clearly and built with care.",
        planNote: "Selected requests only",
        planNoteText: "I work intentionally small and only with projects that feel aligned with the kind of work I want to create.",
        journeyEyebrow: "Become Part of My Journey",
        journeyTitle: "I’m looking for businesses that value craft, clarity and courage.",
        journeyDescription: "The businesses I choose to work with are often small, honest and ready to show up in a more meaningful way.",
        missionEyebrow: "The Mission",
        missionTitle: "Built with Passion. Offered with Purpose.",
        missionDescription: "Rather than spending money on advertising, I’m investing my time in creating exceptional websites for a small group of businesses I believe in. I believe every great business deserves a digital presence that reflects the passion behind it. Instead of asking businesses to trust my words, I’d rather earn that trust by creating work that speaks for itself. Every website I build is more than a project. It is the beginning of a relationship.",
        letterEyebrow: "A letter from me",
        letterText: "When I build something, I am not only thinking about the screen. I am thinking about the feeling a business creates in people when it finally appears with clarity and elegance. I want this first website to feel like it belongs to your business, and to the future you are building.",
        faqEyebrow: "FAQ",
        faqTitle: "The questions we hear most often",
        faqDescription: "Here are the answers that matter before you apply.",
        leadEyebrow: "Application",
        leadTitle: "Apply for the Passion Plan",
        leadDescription: "I review each request carefully and only move forward with businesses that feel like the right fit for the next phase.",
        businessName: "Business Name *",
        contactPerson: "Contact Name *",
        email: "Email *",
        phone: "Phone *",
        businessType: "Business Category",
        website: "Existing Website",
        currentWebsite: "Current Website",
        businessAddress: "Business Address",
        consent: "I understand this initiative is limited to selected businesses.",
        submit: "Share Your Story",
        submitSuccess: "Thank you. I will be in touch shortly.",
        ctaHeading: "Let’s create something that truly matters.",
        ctaDescription: "I’m not trying to become the biggest web agency. I’m focused on creating thoughtful websites that help local businesses grow with confidence and character.",
        ctaButton: "Start Our Conversation",
      };

  const planHighlights = isGerman
    ? [
        { icon: BadgeCheck, title: "Eine Website mit Haltung", description: "Ich gestalte jede Website bewusst, damit sie nicht nur gut aussieht, sondern auch wirklich zu der Marke passt." },
        { icon: Clock3, title: "Keine unnötige Eile", description: "Die erste Phase ist klar organisiert, damit der Prozess ruhig und verständlich bleibt." },
        { icon: Crown, title: "Persönlicher Fokus", description: "Ich arbeite eng mit Ihnen zusammen und bleibe bei der Qualität, die wir gemeinsam schaffen." },
      ]
    : [
        { icon: BadgeCheck, title: "A website with character", description: "Every site is designed with care so it feels aligned with the business and the people behind it." },
        { icon: Clock3, title: "No rushed process", description: "The first phase is structured to feel calm, clear and manageable from the start." },
        { icon: Crown, title: "Personal attention", description: "I stay close to the work and care deeply about how the final experience feels." },
      ];

  const journeyCards = isGerman
    ? [
        { title: "Gründer mit einer echten Geschichte", description: "Unternehmen, die ihre Arbeit mit Würde zeigen möchten, statt nur laut zu sein." },
        { title: "Lokale Dienstleister", description: "Kleine Betriebe, die einen besseren digitalen Eindruck verdienen, ohne sich in ein großes Marketing-Setup zu verlieren." },
        { title: "Unternehmen mit Mut zum Neubeginn", description: "Menschen, die bereit sind, ihre Marke bewusst neu zu definieren und die Zukunft ernst zu nehmen." },
      ]
    : [
        { title: "Founders with a real story", description: "Businesses that want to present their work with dignity rather than noise." },
        { title: "Local service providers", description: "Smaller companies that deserve a better digital first impression without turning into a marketing machine." },
        { title: "Businesses ready for a fresh start", description: "People who are ready to define their brand more intentionally and step into the next chapter with care." },
      ];

  const missionPoints = isGerman
    ? [
        { title: "Sichtbarkeit", description: "Eine gute Website hilft Menschen, Ihr Unternehmen schnell und ruhig zu verstehen." },
        { title: "Werte", description: "Jede Seite soll die Art widerspiegeln, wie Ihr Unternehmen arbeitet und lebt." },
        { title: "Vertrauen", description: "Die beste digitale Präsenz fühlt sich ehrlich an – und macht den ersten Eindruck leichter." },
      ]
    : [
        { title: "Visibility", description: "A strong website helps people understand your business quickly and calmly." },
        { title: "Values", description: "Every page should reflect the way your company works and the standards it stands for." },
        { title: "Trust", description: "The strongest first impression feels honest, grounded and easy to believe in." },
      ];

  const faqItems = isGerman
    ? [
        { question: "Wer ist berechtigt?", answer: "Wir prüfen jede Anfrage individuell. Das Angebot richtet sich vor allem an lokale Unternehmen, die ihre erste professionelle Online-Präsenz aufbauen möchten." },
        { question: "Was passiert nach 3 Monaten?", answer: "Wenn Sie mit uns arbeiten möchten, können wir mit einem einfachen monatlichen Plan weiterlaufen. Wenn nicht, können wir die Website sauber übergeben oder auslaufen lassen." },
        { question: "Kann ich meine Domain behalten?", answer: "Ja. Wenn Sie bereits eine Domain haben, übernehmen wir die Verbindung. Wenn nicht, können wir Ihnen bei der Einrichtung helfen." },
        { question: "Kann ich Änderungen anfordern?", answer: "Ja. Wir arbeiten mit klaren Revisionen und einem strukturierten Feedback-Prozess, damit die Website wirklich zu Ihnen passt." },
        { question: "Kann ich jederzeit upgraden?", answer: "Ja. Wir können jederzeit auf einen erweiterten Plan wechseln, wenn Ihr Unternehmen mehr Funktionen oder mehr Support braucht." },
        { question: "Besitze ich meinen Content?", answer: "Ja. Alle Inhalte, die für Ihre Website erstellt wurden, bleiben Ihr Eigentum und werden sauber übergeben." },
      ]
    : [
        { question: "Who is eligible?", answer: "We review each request individually. This initiative is mainly for local businesses that want a thoughtful first website and a strong foundation for growth." },
        { question: "What happens after 3 months?", answer: "If you want to continue, we can move to a simple monthly plan. If not, we can hand over the site or transition it smoothly." },
        { question: "Can I keep my domain?", answer: "Yes. If you already own a domain, we can connect it. If not, we can help you set one up." },
        { question: "Can I request changes?", answer: "Yes. We work with clear revisions and a structured feedback process so the website fits your business well." },
        { question: "Can I upgrade anytime?", answer: "Yes. We can move you to a broader plan whenever you need more features, support or growth capacity." },
        { question: "Do I own my content?", answer: "Yes. All content created for your website remains yours and is handed over clearly at the end of the project." },
      ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] text-slate-900">
      <SiteHeader locale={locale} setLocale={setLocale} />

      <main className="overflow-hidden">
        <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_42%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <Sparkles className="mr-2 h-4 w-4" />
                {copy.heroBadge}
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                {copy.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_-12px_rgba(37,99,235,0.65)] transition hover:-translate-y-0.5">
                  {copy.heroPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                  {copy.heroSecondary}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {copy.heroPills.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="relative">
              <div className="absolute left-6 top-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute bottom-8 right-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.22)] backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-950 p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                    <Image src="/baala.jpg" alt="Baala founder portrait" fill className="object-cover object-center" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-white/10" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                      Founder-led
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 rounded-[1.15rem] border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
                      <p className="text-sm font-semibold">Every business deserves a digital home.</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-200">— Baala</p>
                    </div>
                  </div>
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-5 top-20 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                    <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-200" /> {isGerman ? "Mit Leidenschaft gebaut" : "Built with Passion"}</span>
                  </motion.div>
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                    <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-cyan-200" /> {isGerman ? "Schnell geliefert" : "Delivered Fast"}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-slate-50/70 px-6 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700">
            {[
              "Beautiful design",
              "Fast delivery",
              "Personal support",
              "Modern stack",
              "Local business focus",
            ].map((item) => (
              <div key={item} className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Check className="mr-2 h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading eyebrow={copy.founderEyebrow} title={copy.founderTitle} description={copy.founderDescription[0]} />
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                {copy.founderDescription.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 font-semibold tracking-[0.3em] text-slate-600">— The Digital Move</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-[#f7efe6] via-white to-[#e6f1ea] p-6">
                <div className="absolute right-5 top-5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Founder
                </div>
                <div className="rounded-[1.4rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(45,91,77,0.14),_transparent_45%),linear-gradient(135deg,_#ffffff_0%,_#f4eee4_100%)] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">A quieter kind of growth</p>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-slate-900">Built with intention, not urgency.</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">We are choosing to invest in local businesses first, because trust matters and beautiful websites should feel grounded, clear and lasting.</p>
                  <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-slate-500">— Baala</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-200 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_24px_45px_-18px_rgba(15,23,42,0.35)] sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
                  <Sparkles className="mr-2 h-4 w-4" />
                  {copy.planEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{copy.planTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">{copy.planDescription}</p>
              </div>
              <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.4, repeat: Infinity }} className="inline-flex items-center rounded-full border border-emerald-400/30 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                <Zap className="mr-2 h-4 w-4" />
                {copy.planNote}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="journey" className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow={copy.planEyebrow} title={copy.planTitle} description={copy.planDescription} align="center" />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {planHighlights.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_45px_-18px_rgba(15,23,42,0.35)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{copy.planNote}</p>
              <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-200">{copy.planNoteText}</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading eyebrow={copy.journeyEyebrow} title={copy.journeyTitle} description={copy.journeyDescription} align="center" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {journeyCards.map((card, index) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">0{index + 1}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-0 py-20 sm:px-0 lg:px-0">
          <div className="border-y border-[#dcd0bf] bg-[linear-gradient(135deg,_#fcf7ef_0%,_#f4ebde_100%)] px-6 py-16 text-slate-900 shadow-[0_24px_45px_-18px_rgba(76,64,44,0.2)] sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <SectionHeading eyebrow={copy.missionEyebrow} title={copy.missionTitle} description={copy.missionDescription} />
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {missionPoints.map((item) => (
                  <div key={item.title} className="rounded-[1.4rem] border border-[#d9cbb7] bg-white/80 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{copy.letterEyebrow}</p>
            <blockquote className="mt-6 text-2xl leading-10 text-slate-800 sm:text-3xl">
              “{copy.letterText}”
            </blockquote>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">— Baala</p>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading eyebrow={copy.faqEyebrow} title={copy.faqTitle} description={copy.faqDescription} />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-form" className="px-6 pb-24 pt-8 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_45px_-18px_rgba(15,23,42,0.15)] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                {copy.leadEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{copy.leadTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{copy.leadDescription}</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input required value={form.businessName} onChange={(event) => setForm((current) => ({ ...current, businessName: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.businessName} />
                  <input required value={form.contactPerson} onChange={(event) => setForm((current) => ({ ...current, contactPerson: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.contactPerson} />
                  <input required type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.email} />
                  <input required value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.phone} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input value={form.businessType} onChange={(event) => setForm((current) => ({ ...current, businessType: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.businessType} />
                  <input value={form.website} onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.website} />
                </div>
                <input value={form.currentWebsite} onChange={(event) => setForm((current) => ({ ...current, currentWebsite: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.currentWebsite} />
                <input value={form.businessAddress} onChange={(event) => setForm((current) => ({ ...current, businessAddress: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={copy.businessAddress} />
                <div className="grid gap-4 md:grid-cols-3">
                  <select value={form.preferredPlan} onChange={(event) => setForm((current) => ({ ...current, preferredPlan: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400">
                    <option>Passion</option>
                    <option>Business</option>
                    <option>Growth AI</option>
                    <option>Not sure yet</option>
                  </select>
                  <select value={form.domainOwnership} onChange={(event) => setForm((current) => ({ ...current, domainOwnership: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <select value={form.timeline} onChange={(event) => setForm((current) => ({ ...current, timeline: event.target.value }))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400">
                    <option>As soon as possible</option>
                    <option>Within 30 days</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <input value={form.budget} onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Budget" />
                <textarea value={form.details} onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))} rows={4} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder="Project Details" />
                <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <input type="checkbox" checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600" />
                  <span>{copy.consent}</span>
                </label>
                {error ? <p className="text-sm text-rose-600">{error}</p> : null}
                {submitted ? <p className="text-sm text-emerald-600">{copy.submitSuccess}</p> : null}
                <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
                  {submitting ? (isGerman ? "Wird gesendet..." : "Sending...") : copy.submit}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white">
              <h3 className="text-2xl font-semibold">Why businesses choose us</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                {[
                  "No development cost",
                  "No hosting cost",
                  "Built with passion",
                  "Fast turnaround",
                  "Modern technologies",
                  "Personal support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                    <Check className="h-5 w-5 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Why it feels different</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">We are investing in quality, trust and long-term relationships rather than pushing a generic sales pitch.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white shadow-[0_24px_45px_-18px_rgba(37,99,235,0.55)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">{copy.ctaHeading}</h2>
              <p className="mt-2 text-sm leading-7 text-blue-50">{copy.ctaDescription}</p>
            </div>
            <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-50">
              {copy.ctaButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg">
          <Rocket className="h-4 w-4" />
          {locale === "de" ? "Jetzt bewerben" : "Apply Now"}
        </a>
      </div>

      <FooterSection locale={locale} />
    </div>
  );
}
