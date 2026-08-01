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
import Link from "next/link";
import { useEffect, useState } from "react";
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
    preferredPlan: "Growth",
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

  const handleSubmit = async (event: React.FormEvent) => {
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
        heroBadge: "Premium-Websites • Keine Vorabkosten • Monatlicher Support",
        heroTitle: "Professionelle Website. Keine Vorabkosten für die Entwicklung.",
        heroDescription: "Starten Sie mit einer schnellen, modernen Website für Ihr Unternehmen in nur 7 Tagen. Alles ist inklusive – Hosting, Sicherheit, Wartung und Support – in einem einfachen monatlichen Abo.",
        heroPrimary: "Kostenlose Beratung anfordern",
        heroSecondary: "Preise ansehen",
        heroPills: ["Mobil optimiert", "SEO bereit", "Schnell geladen", "Sichere Hosting", "DSGVO freundlich"],
        whyEyebrow: "Warum dieses Modell?",
        whyTitle: "Eine schlauere Art, eine Premium-Website zu bekommen",
        whyDescription: "Traditionelle Agenturen verlangen große Vorabkosten, bevor sie überhaupt beginnen. Wir drehen dieses Modell um, damit Sie schneller starten, flexibel bleiben und nur zahlen, wenn Sie wachsen.",
        pricingEyebrow: "Preise",
        pricingTitle: "Einfache Pläne für echte Unternehmen",
        pricingDescription: "Wählen Sie den passenden Unterstützungs- und Wachstumsumfang für Ihre aktuelle Situation und skalieren Sie bei Bedarf.",
        processEyebrow: "Prozess",
        processTitle: "Von der ersten Beratung bis zum Launch – wir halten es einfach",
        processDescription: "Ein klarer Prozess gibt Ihnen Zuversicht in jedem Schritt und hält Ihr Projekt ohne unnötige Hürden am Laufen.",
        includedEyebrow: "Inkludiert",
        includedTitle: "Alles, was Sie brauchen, um professionell online aufzutreten",
        includedDescription: "Von Hosting und Sicherheit bis hin zu SEO und Support – Ihr Abo ist darauf ausgelegt, Reibung zu reduzieren und Ihre Website für Ihr Unternehmen arbeiten zu lassen.",
        whyChooseEyebrow: "Warum wir?",
        whyChooseTitle: "Premium-Qualität, klarer Prozess und echter Geschäftswert",
        whyChooseDescription: "Wir kombinieren durchdachtes Design, schnelle Lieferung, starke SEO und laufenden Support, damit Ihre Website zu einem echten geschäftlichen Asset wird.",
        faqEyebrow: "FAQ",
        faqTitle: "Fragen, die Geschäftsinhaber meist haben",
        faqDescription: "Hier sind die häufigsten Fragen, bevor Sie starten.",
        leadEyebrow: "Kostenlose Beratung",
        leadTitle: "Erzählen Sie uns von Ihrem Unternehmen – wir empfehlen den passenden Website-Plan.",
        leadDescription: "Ohne Druck, ohne Fachchinesisch und ohne Verpflichtung. Einfach ein klares Gespräch über Ihre Ziele und wie wir Ihnen helfen können.",
        businessName: "Firmenname *",
        contactPerson: "Ansprechpartner *",
        email: "E-Mail *",
        phone: "Telefonnummer *",
        businessType: "Branche",
        website: "Website (optional)",
        currentWebsite: "Aktuelle Website",
        businessAddress: "Geschäftsadresse",
        preferredPlan: "Bevorzugter Plan",
        domainOwnership: "Besitzen Sie die Domain?",
        budget: "Budget",
        details: "Projektdetails",
        consent: "Ich stimme zu, dass man mich zu meinem Website-Projekt kontaktiert.",
        submit: "Kostenlose Website-Beratung anfordern",
        submitSuccess: "Danke! Wir melden uns in Kürze bei Ihnen.",
        ctaHeading: "Bereit, Ihr Unternehmen online wachsen zu lassen?",
        ctaDescription: "Lassen Sie uns eine Website bauen, die hochwertig wirkt, besser konvertiert und monatlich unterstützt wird.",
        ctaButton: "Website bauen lassen",
        stats: [
          { value: "7 Tage", label: "Typische Launch-Zeit" },
          { value: "24/7", label: "Support-Verfügbarkeit" },
          { value: "100%", label: "Transparente Preise" },
        ],
        industries: ["Zahnärzte", "Anwälte", "Physiotherapeuten", "Kliniken", "Salons", "Restaurants", "Cafés", "Buchhalter"],
      }
    : {
        heroBadge: "Premium websites • No upfront cost • Monthly support",
        heroTitle: "Professional Website. No Upfront Development Cost.",
        heroDescription: "Launch a fast, modern website for your business in as little as 7 days. Everything is included—hosting, security, maintenance and support—from one simple monthly subscription.",
        heroPrimary: "Get My Free Consultation",
        heroSecondary: "See Pricing",
        heroPills: ["Mobile Optimized", "SEO Ready", "Fast Loading", "Secure Hosting", "GDPR Friendly"],
        whyEyebrow: "Why this model?",
        whyTitle: "A smarter way to get a premium website",
        whyDescription: "Traditional agencies ask for big upfront investment before they even begin. We flip that model so you can launch faster, stay flexible and pay as you grow.",
        pricingEyebrow: "Pricing",
        pricingTitle: "Simple plans designed for real businesses",
        pricingDescription: "Choose the level of support and growth that fits your current needs, then scale when you are ready.",
        processEyebrow: "Process",
        processTitle: "From first conversation to launch, we keep it simple",
        processDescription: "A clear process gives you confidence at every step and keeps your project moving without unnecessary friction.",
        includedEyebrow: "What’s included",
        includedTitle: "Everything you need to look professional online",
        includedDescription: "From hosting and security to SEO and support, your subscription is designed to remove friction and keep your website working for you.",
        whyChooseEyebrow: "Why choose us",
        whyChooseTitle: "Premium quality, clear process and real business value",
        whyChooseDescription: "We combine thoughtful design, fast delivery, strong SEO and ongoing support so your website becomes a working asset for the business.",
        faqEyebrow: "FAQ",
        faqTitle: "Questions business owners usually ask",
        faqDescription: "Here are the most common questions before getting started.",
        leadEyebrow: "Free consultation",
        leadTitle: "Tell us about your business and we’ll recommend the right website plan.",
        leadDescription: "No pressure, no jargon, and no obligation. Just a clear conversation about your goals and how we can help.",
        businessName: "Business Name *",
        contactPerson: "Contact Person *",
        email: "Email *",
        phone: "Phone Number *",
        businessType: "Business Type",
        website: "Website (optional)",
        currentWebsite: "Current Website",
        businessAddress: "Business Address",
        preferredPlan: "Preferred Plan",
        domainOwnership: "Do you own the domain?",
        budget: "Budget",
        details: "Project Details",
        consent: "I agree to be contacted about my website project.",
        submit: "Get My Free Website Consultation",
        submitSuccess: "Thanks! We will be in touch shortly.",
        ctaHeading: "Ready to grow your business online?",
        ctaDescription: "Let’s build a website that feels premium, converts better and stays supported month after month.",
        ctaButton: "Let’s Build Your Website",
        stats: [
          { value: "7 days", label: "Typical launch time" },
          { value: "24/7", label: "Support availability" },
          { value: "100%", label: "Transparent pricing" },
        ],
        industries: ["Dentists", "Lawyers", "Physiotherapists", "Clinics", "Salons", "Restaurants", "Cafés", "Accountants"],
      };

  const pricingTiers = isGerman
    ? [
        {
          name: "Starter",
          price: "€99/Monat",
          highlight: false,
          description: "Eine saubere, moderne Website für lokale Unternehmen, die schnell eine professionelle Online-Präsenz aufbauen möchten.",
          bullets: [
            "5-seitige responsive Website",
            "Kontaktformular",
            "Domain inklusive",
            "Hosting inklusive",
            "SSL-Zertifikat",
            "Grundlegende SEO",
            "Google Maps",
            "WhatsApp-Integration",
            "Monatliche Backups",
            "Kleine Content-Updates",
          ],
          cta: "Jetzt starten",
          ctaHref: "#lead-form",
        },
        {
          name: "Growth",
          price: "€149/Monat",
          highlight: true,
          description: "Perfekt für Unternehmen, die mehr Sichtbarkeit, bessere Conversions und laufenden Support möchten.",
          bullets: [
            "Alles aus Starter",
            "KI-Chat-Assistent",
            "Performance-Optimierung",
            "Erweiterte SEO",
            "Google Analytics",
            "Monatliche Website-Updates",
            "Blog-Setup",
            "Geschwindigkeitsoptimierung",
            "Priorisierter Support",
          ],
          cta: "Kostenlose Beratung buchen",
          ctaHref: "#lead-form",
        },
        {
          name: "Premium",
          price: "€249/Monat",
          description: "Für Unternehmen, die ein Premium-Digitalerlebnis mit erweiterten Buchungen und Integrationen brauchen.",
          bullets: [
            "Alles aus Growth",
            "Online-Buchung",
            "Mehrsprachige Unterstützung",
            "Individuelle Integrationen",
            "Monatliche SEO-Reports",
            "Unbegrenzte Content-Updates",
            "Priorisierte Umsetzung",
          ],
          cta: "Lass uns bauen",
          ctaHref: "#lead-form",
        },
      ]
    : [
        {
          name: "Starter",
          price: "€99/month",
          highlight: false,
          description: "A clean, modern website for local businesses that want a professional online presence fast.",
          bullets: [
            "5-page responsive website",
            "Contact form",
            "Domain included",
            "Hosting included",
            "SSL certificate",
            "Basic SEO",
            "Google Maps",
            "WhatsApp integration",
            "Monthly backup",
            "Minor content updates",
          ],
          cta: "Start Today",
          ctaHref: "#lead-form",
        },
        {
          name: "Growth",
          price: "€149/month",
          highlight: true,
          description: "Perfect for businesses that want stronger visibility, better conversion and ongoing support.",
          bullets: [
            "Everything in Starter",
            "AI chat assistant",
            "Performance optimisation",
            "Advanced SEO",
            "Google Analytics",
            "Monthly website updates",
            "Blog setup",
            "Speed optimisation",
            "Priority support",
          ],
          cta: "Book Free Consultation",
          ctaHref: "#lead-form",
        },
        {
          name: "Premium",
          price: "€249/month",
          description: "For businesses that need a premium digital experience with advanced bookings and integrations.",
          bullets: [
            "Everything in Growth",
            "Online booking",
            "Multi-language support",
            "Custom integrations",
            "Monthly SEO reports",
            "Unlimited content updates",
            "Priority turnaround",
          ],
          cta: "Let's Build It",
          ctaHref: "#lead-form",
        },
      ];

  const processSteps = isGerman
    ? [
        { title: "Kostenlose Beratung", description: "Wir lernen Ihr Unternehmen, Ihre Ziele und Ihren Idealkunden kennen." },
        { title: "Wir gestalten", description: "Wir formen die Website-Struktur, Botschaft und visuelle Richtung." },
        { title: "Sie prüfen", description: "Sie prüfen das Konzept und geben Feedback vor dem Launch." },
        { title: "Wir starten", description: "Wir gehen live mit einer polierten, schnellen und konversionsstarken Website." },
        { title: "Wir pflegen", description: "Updates, Support und Hosting bleiben in Ihrem Plan inklusive." },
      ]
    : [
        { title: "Free Consultation", description: "We learn about your business, goals and ideal client." },
        { title: "We Design", description: "We shape the site structure, messaging and visual direction." },
        { title: "You Review", description: "You review the concept and give feedback before launch." },
        { title: "We Launch", description: "We go live with a polished, fast and conversion-ready website." },
        { title: "We Maintain", description: "Updates, support and hosting stay included in your plan." },
      ];

  const includedFeatures = isGerman
    ? [
        { icon: Globe2, title: "Hosting", description: "Schnelles, zuverlässiges Hosting ist in jedem Plan enthalten." },
        { icon: ShieldCheck, title: "Sicherheit", description: "SSL, Schutz und sichere Infrastruktur sind bereits integriert." },
        { icon: Layers3, title: "Backups", description: "Regelmäßige Backups, damit Ihr Unternehmen geschützt bleibt." },
        { icon: Headphones, title: "Support", description: "Freundlicher Support, wann immer Sie Hilfe oder Updates brauchen." },
        { icon: Wrench, title: "Updates", description: "Halten Sie Inhalte, Angebote und Botschaften ohne zusätzliche Kosten aktuell." },
        { icon: BarChart3, title: "Performance", description: "Optimiert für Geschwindigkeit, Mobile-Experience und Core Web Vitals." },
        { icon: Search, title: "SEO", description: "Mit integrierter Struktur, Meta-Daten und Sichtbarkeitsverbesserungen." },
        { icon: Bot, title: "KI-Funktionen", description: "Optionale KI-Assistenten und intelligente Lead-Capture-Erlebnisse." },
      ]
    : [
        { icon: Globe2, title: "Hosting", description: "Fast, reliable hosting included in every plan." },
        { icon: ShieldCheck, title: "Security", description: "SSL, protection and secure infrastructure built in." },
        { icon: Layers3, title: "Backups", description: "Regular backups so your business stays protected." },
        { icon: Headphones, title: "Support", description: "Friendly support whenever you need help or updates." },
        { icon: Wrench, title: "Updates", description: "Keep content, offers and messaging fresh without extra fees." },
        { icon: BarChart3, title: "Performance", description: "Optimised for speed, mobile experience and core web vitals." },
        { icon: Search, title: "SEO", description: "Built-in structure, metadata and visibility improvements." },
        { icon: Bot, title: "AI Features", description: "Optional AI assistant and smart lead capture experiences." },
      ];

  const whyChooseUs = isGerman
    ? [
        { icon: Zap, title: "Schnelle Lieferung", description: "Starten Sie in nur 7 Tagen mit einem optimierten Onboarding-Prozess." },
        { icon: Crown, title: "Premium-Design", description: "Eine moderne, glaubwürdige und vertrauenswürdige Erfahrung." },
        { icon: BadgeCheck, title: "Transparente Preise", description: "Keine Überraschungen, keine versteckten Setup-Gebühren und keine teuren Überraschungen." },
        { icon: Building2, title: "Fokus auf lokale Unternehmen", description: "Wir verstehen die Bedürfnisse von Zahnärzten, Anwälten, Kliniken, Salons und KMU." },
        { icon: MonitorSmartphone, title: "Mobile First", description: "Jede Website ist so gebaut, dass sie auf jedem Gerät hervorragend funktioniert." },
        { icon: ShieldCheck, title: "Sichere Infrastruktur", description: "Zuverlässiges Hosting, Schutz und Backups sind inklusive." },
      ]
    : [
        { icon: Zap, title: "Fast Delivery", description: "Launch in as little as 7 days with a streamlined onboarding flow." },
        { icon: Crown, title: "Premium Design", description: "A polished experience that feels modern, credible and trustworthy." },
        { icon: BadgeCheck, title: "Transparent Pricing", description: "No surprises, no hidden setup fees and no expensive surprises." },
        { icon: Building2, title: "Local Business Focus", description: "We understand the needs of dentists, lawyers, clinics, salons and SMEs." },
        { icon: MonitorSmartphone, title: "Mobile First", description: "Every website is built to perform beautifully on any device." },
        { icon: ShieldCheck, title: "Secure Infrastructure", description: "Reliable hosting, protection and backups are all included." },
      ];

  const faqItems = isGerman
    ? [
        {
          question: "Kann ich meine eigene Domain nutzen?",
          answer: "Ja, absolut. Wenn Sie bereits eine Domain besitzen, verbinden wir sie. Wenn nicht, helfen wir Ihnen gerne bei der Registrierung.",
        },
        {
          question: "Was, wenn ich bereits eine Website habe?",
          answer: "Wir können sie neu gestalten, neu aufbauen oder aufwerten – je nachdem, was Sie am meisten verbessern möchten.",
        },
        {
          question: "Kann ich jederzeit kündigen?",
          answer: "Ja. Unsere Pläne sind flexibel, und Sie können bei Bedarf mit Frist pausieren oder kündigen.",
        },
        {
          question: "Besitze ich meinen Content?",
          answer: "Ja. Der gesamte für Ihre Website erstellte Content bleibt Ihr Eigentum, und wir machen die Übergabe einfach.",
        },
        {
          question: "Wie lange dauert es?",
          answer: "Die meisten Projekte gehen innerhalb von 7 bis 21 Tagen live – abhängig vom Umfang und Ihrer Feedback-Geschwindigkeit.",
        },
        {
          question: "Können Sie meine aktuelle Website neu gestalten?",
          answer: "Ja. Wir können eine bestehende Website modernisieren und sowohl Design als auch Performance verbessern.",
        },
      ]
    : [
        {
          question: "Can I use my own domain?",
          answer: "Absolutely. If you already own a domain, we can connect it. If not, we can help you register one.",
        },
        {
          question: "What if I already have a website?",
          answer: "We can redesign, rebuild or upgrade it, depending on what you need to improve most.",
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes. Our plans are flexible, and you can pause or cancel with notice if your needs change.",
        },
        {
          question: "Do I own my content?",
          answer: "Yes. All content created for your website remains yours, and we make handover straightforward.",
        },
        {
          question: "How long does it take?",
          answer: "Most projects launch within 7 to 21 days depending on the scope and your feedback speed.",
        },
        {
          question: "Can you redesign my current website?",
          answer: "Yes. We can modernise an existing website and improve both design and performance.",
        },
      ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] text-slate-900">
      <SiteHeader locale={locale} setLocale={setLocale} />

      <main className="overflow-hidden">
        <section className="px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl"
            >
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
                <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
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

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.22)] backdrop-blur"
            >
              <img src="/hero-illustration.svg" alt="Website mockup illustration" className="w-full rounded-[1.5rem]" />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-slate-50/70 px-6 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700">
            {copy.industries.map((item) => (
              <div key={item} className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Check className="mr-2 h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.whyEyebrow}
              title={copy.whyTitle}
              description={copy.whyDescription}
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-slate-900">Traditional Agency</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  {[
                    "€2,000–€5,000 upfront",
                    "Expensive maintenance",
                    "Hosting extra",
                    "Slow delivery",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-rose-50 px-4 py-3 text-rose-700">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700">✕</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white shadow-[0_24px_45px_-18px_rgba(37,99,235,0.55)]"
              >
                <h3 className="text-2xl font-semibold">The Digital Move</h3>
                <div className="mt-6 space-y-4 text-sm text-blue-50">
                  {[
                    "No upfront development cost",
                    "Affordable monthly subscription",
                    "Hosting included",
                    "Updates included",
                    "Security included",
                    "Fast delivery",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
                      <Check className="h-5 w-5 text-cyan-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.pricingEyebrow}
              title={copy.pricingTitle}
              description={copy.pricingDescription}
              align="center"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {pricingTiers.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-3xl border p-8 shadow-sm ${plan.highlight ? "border-blue-300 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white shadow-[0_24px_45px_-18px_rgba(37,99,235,0.55)]" : "border-slate-200 bg-white text-slate-900"}`}
                >
                  {plan.highlight ? (
                    <div className="mb-4 inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-50">
                      Most Popular
                    </div>
                  ) : null}
                  <h3 className={`text-2xl font-semibold ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  <p className={`mt-3 text-sm leading-7 ${plan.highlight ? "text-blue-50" : "text-slate-600"}`}>{plan.description}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className={`text-4xl font-semibold ${plan.highlight ? "text-white" : "text-slate-950"}`}>{plan.price}</span>
                  </div>
                  <ul className="mt-7 space-y-3 text-sm">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? "text-cyan-100" : "text-blue-600"}`} />
                        <span className={plan.highlight ? "text-blue-50" : "text-slate-600"}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.ctaHref} className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${plan.highlight ? "bg-white text-blue-700 hover:bg-slate-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  <Clock3 className="mr-2 h-4 w-4" />
                  Limited onboarding slots each month
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Most businesses get started within a single week.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our process is structured, fast and collaborative—so you can go live quickly without sacrificing quality or clarity.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {copy.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.processEyebrow}
              title={copy.processTitle}
              description={copy.processDescription}
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.includedEyebrow}
              title={copy.includedTitle}
              description={copy.includedDescription}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {includedFeatures.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={copy.whyChooseEyebrow}
              title={copy.whyChooseTitle}
              description={copy.whyChooseDescription}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseUs.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow={copy.faqEyebrow}
              title={copy.faqTitle}
              description={copy.faqDescription}
            />
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {copy.leadTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {copy.leadDescription}
              </p>

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
                    <option>Starter</option>
                    <option>Growth</option>
                    <option>Premium</option>
                    <option>Not Sure Yet</option>
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
              <h3 className="text-2xl font-semibold">Why businesses choose this model</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                {[
                  "Response within 24 hours",
                  "Free consultation",
                  "No obligation",
                  "Fixed monthly pricing",
                  "Professional support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                    <Check className="h-5 w-5 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Satisfaction promise</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">We work closely with you to make sure the website is polished, effective and built around your business goals.</p>
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
          Get Started
        </a>
      </div>

      <FooterSection locale="en" />
    </div>
  );
}
