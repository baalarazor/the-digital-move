"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Cpu,
  Compass,
  FileText,
  Globe2,
  HeartHandshake,
  Layers3,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

type LocaleProps = {
  locale: "en" | "de";
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "default" }: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`mb-3 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${isLight ? "border-white/20 bg-white/10 text-slate-100" : "border-blue-200 bg-blue-50 text-blue-700"}`}>
        <Sparkles className="mr-2 h-4 w-4" />
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isLight ? "text-white" : "text-slate-900"}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${isLight ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

export function SectionCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
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
        signature: "Baala",
        pills: ["Gründergeführt", "Mit Sorgfalt gebaut", "Modernes Design", "Persönlicher Support"],
      }
    : {
        badge: "Founder-led • Premium web design • No upfront cost",
        headline: "Crafting Refined Websites,",
        highlight: "One Business at a Time.",
        subheadline: "Hi, I’m Baala. I create thoughtful digital experiences for local businesses and help selected founders launch with confidence through a founder-led collaboration built with care.",
        primary: "❤️ Join My Founder Initiative",
        secondary: "Read My Story →",
        quote: "Built with passion. Offered with purpose.",
        signature: "Baala",
        pills: ["Founder-led", "Crafted with care", "Modern design", "Personal support"],
      };

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-8 lg:px-10 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
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
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} className="mt-6 rounded-2xl border border-[#d9cbb7] bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#2d5b4d]" /> {locale === "de" ? "Mit Leidenschaft gebaut" : "Built with Passion"}</span>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} className="mt-3 rounded-2xl border border-[#d9cbb7] bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#2d5b4d]" /> {locale === "de" ? "Schnell geliefert" : "Delivered Fast"}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FounderLinkSection() {
  return (
    <section className="px-6 pb-12 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-[0_24px_55px_-24px_rgba(15,23,42,0.2)] sm:p-10 lg:flex-row lg:items-center lg:justify-between"
      >
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
      </motion.div>
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

export function ServicesSection({ locale }: LocaleProps) {
  const services = locale === "de"
    ? [
        {
          title: "KI-Automatisierung",
          description: "Ersetzen Sie repetitive Aufgaben durch KI, die mit Ihrem Team und Ihren Systemen zusammenarbeitet.",
          features: ["KI-Copiloten", "Intelligente Workflows", "Entscheidungshilfe"],
          icon: Bot,
          href: "/services/ai-automation",
        },
        {
          title: "Workflow-Automatisierung",
          description: "Koordinieren Sie Freigaben, E-Mails, CRM-Updates und Dokumentenabläufe ohne Reibung.",
          features: ["n8n", "E-Mail-Automatisierung", "CRM-Automatisierung"],
          icon: Workflow,
          href: "/services/workflow-automation",
        },
        {
          title: "KI-Chatbots",
          description: "Bieten Sie Kunden und Mitarbeitenden sofortige Antworten über Website- und WhatsApp-Assistenten.",
          features: ["Website-Chatbot", "WhatsApp-Bot", "Wissensassistent"],
          icon: MessageCircleMore,
          href: "/services/ai-automation",
        },
        {
          title: "Webseitenentwicklung",
          description: "Starten Sie hochwertige Websites, die auf jedem Gerät gut funktionieren und konvertieren.",
          features: ["Landingpages", "Unternehmensseiten", "SEO-freundlich"],
          icon: Globe2,
          href: "/services/website-development",
        },
        {
          title: "Individuelle Software",
          description: "Erstellen Sie interne Dashboards, Reporting-Tools und Automatisierungsplattformen für Ihr Unternehmen.",
          features: ["Dashboards", "ERP-Integrationen", "Reporting"],
          icon: Cpu,
          href: "/services/custom-software",
        },
        {
          title: "Systemintegration",
          description: "Verbinden Sie die Tools, die Ihr Team bereits nutzt, ohne unnötige Umwege.",
          features: ["Microsoft 365", "Google Workspace", "Slack", "Jira", "REST APIs"],
          icon: Layers3,
          href: "/services/system-integration",
        },
      ]
    : [
        {
          title: "AI Automation",
          description: "Replace repetitive manual tasks with AI workflows, automated data capture, and intelligent process orchestration.",
          features: ["AI copilots", "Smart workflows", "Decision support"],
          icon: Bot,
          href: "/services/ai-automation",
        },
        {
          title: "Workflow Automation",
          description: "Coordinate approvals, emails, CRM updates, invoices, and handoffs without friction.",
          features: ["n8n", "Email automation", "CRM automation"],
          icon: Workflow,
          href: "/services/workflow-automation",
        },
        {
          title: "AI Chatbots",
          description: "Give customers and employees instant answers through website and WhatsApp assistants while capturing leads and support requests.",
          features: ["Website chatbot", "WhatsApp bot", "Knowledge assistant"],
          icon: MessageCircleMore,
          href: "/services/ai-automation",
        },
        {
          title: "Website Development",
          description: "Launch conversion-focused websites, landing pages, and digital experiences built for SEO, lead generation, and growth.",
          features: ["Landing pages", "Corporate sites", "SEO friendly"],
          icon: Globe2,
          href: "/services/website-development",
        },
        {
          title: "Custom Software",
          description: "Create internal dashboards, reporting tools, and automation platforms tailored to your business.",
          features: ["Dashboards", "ERP integrations", "Reporting"],
          icon: Cpu,
          href: "/services/custom-software",
        },
        {
          title: "System Integration",
          description: "Connect your CRM, email, collaboration tools, and APIs so data flows automatically across your organization.",
          features: ["Microsoft 365", "Google Workspace", "Slack", "Jira", "REST APIs"],
          icon: Layers3,
          href: "/services/system-integration",
        },
      ];

  return (
    <section id="services" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Leistungen" : "Services"}
          title={locale === "de" ? "Für ambitionierte Teams, die schneller wachsen wollen" : "Built for ambitious teams that want to move faster"}
          description={locale === "de" ? "Jedes Projekt verbindet Strategie, Automatisierungsdesign und hochwertige Umsetzung in einer einzigen Erfahrung." : "Every engagement blends strategy, automation design, and product-quality implementation into a single delivery experience."}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {service.features.map((item) => (
                  <li key={item} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={service.href} className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800">
                {locale === "de" ? "Mehr erfahren" : "Learn more"}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                {locale === "de" ? "Spezial-landing pages" : "Specialist landing pages"}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                {locale === "de" ? "Später weitere Branchen hinzufügen" : "Add more industries later"}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                {locale === "de"
                  ? "Die Auswahl lässt sich später erweitern, wenn du weitere thematisch ähnliche Seiten für andere Dienstleistungsbereiche ergänzen möchtest."
                  : "This section is ready to grow as you add more service-led pages for other industries later on."}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/tattoo-artist-websites" className="rounded-[1.3rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-sm font-semibold text-slate-900">{locale === "de" ? "Tattoo-Artist-Websites" : "Tattoo Artist Websites"}</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">{locale === "de" ? "Aktiv und bereit für weitere Anpassungen." : "Live and ready for future customisation."}</div>
            </Link>
            <div className="rounded-[1.3rem] border border-dashed border-slate-300 bg-white/70 p-5 text-slate-500">
              <div className="text-sm font-semibold text-slate-700">{locale === "de" ? "Restaurant-Websites" : "Restaurant Websites"}</div>
              <div className="mt-2 text-sm leading-7">{locale === "de" ? "Bald verfügbar" : "Coming soon"}</div>
            </div>
            <div className="rounded-[1.3rem] border border-dashed border-slate-300 bg-white/70 p-5 text-slate-500">
              <div className="text-sm font-semibold text-slate-700">{locale === "de" ? "Wellness-Websites" : "Wellness Websites"}</div>
              <div className="mt-2 text-sm leading-7">{locale === "de" ? "Bald verfügbar" : "Coming soon"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection({ locale }: LocaleProps) {
  const industries = locale === "de" ? null : [
    {
      title: "Healthcare",
      shortDesc: "Modern patient experiences and workflow resilience",
      fullDesc: "We build modern patient experiences through automated appointment reminders, digital pre-registration, and insurance verification—reducing no-shows and administrative overhead by 40–50%. Our workflow systems coordinate clinical handoffs between departments, ensuring no critical patient information falls through the cracks."
    },
    {
      title: "Restaurants",
      shortDesc: "Reservation and service automation that feels effortless",
      fullDesc: "We automate reservation routing to available staff, send table readiness alerts to diners, and manage follow-up communications. Real-time kitchen workflow updates keep staff aligned on order priorities, reducing manual call-handling, speeding seating times, and improving repeat bookings."
    },
    {
      title: "Law Firms",
      shortDesc: "Document-based workflows with AI support",
      fullDesc: "We automate client intake, document categorization, deadline tracking, billing triggers, and approval routing. AI-powered document analysis identifies key clauses and flags compliance issues, reducing manual review time by 60% while ensuring deadlines are never missed."
    },
    {
      title: "Real Estate",
      shortDesc: "Lead capture and follow-up automation",
      fullDesc: "We route property inquiries directly to agents, trigger virtual tours automatically, schedule showings without manual intervention, and nurture prospects with timely follow-ups. Automated lead scoring prioritizes hot prospects and reduces time-to-close by weeks."
    },
    {
      title: "Recruitment",
      shortDesc: "Resume analysis and candidate journey orchestration",
      fullDesc: "We automate resume screening using AI to identify top candidates in seconds, send interview confirmations with meeting links, and track candidates across interview stages. Automated status updates reduce communication gaps while scoring systems ensure only relevant candidates reach hiring managers."
    },
    {
      title: "Accounting",
      shortDesc: "Faster reporting and client communication",
      fullDesc: "We automate invoice workflows, expense categorization, approval chains, and client report generation. Automated reconciliation flags discrepancies before reports go out, reducing month-end close time by 30–40% while scheduled digest emails keep clients informed without manual outreach."
    },
    {
      title: "Construction",
      shortDesc: "Operations visibility and approvals",
      fullDesc: "We automate purchase orders, site inspection sign-offs, safety alerts, and progress reporting. Automated approval chains keep projects moving without waiting for manager sign-off, real-time safety notifications prevent incidents, and leadership always has current project status."
    },
    {
      title: "Education",
      shortDesc: "Student onboarding and internal systems",
      fullDesc: "We automate enrollment workflows to process applications in hours, collect required documents with automated reminders, register students based on prerequisites, and notify staff for preparation. Automated parent communication keeps families informed of milestones, reducing admissions burden by 50%."
    },
    {
      title: "Logistics",
      shortDesc: "Shipment visibility and process coordination",
      fullDesc: "We automate tracking updates sent at each shipment milestone, assign drivers based on route optimization, capture proof-of-delivery automatically, and alert support to delays in real time. Automated exception handling reroutes shipments early, reducing complaints by 40%."
    },
    {
      title: "Retail",
      shortDesc: "Ecommerce support and customer journeys",
      fullDesc: "We automate order processing, inventory alerts, shipping notifications, and returns workflows end-to-end. Personalized follow-up campaigns remind customers of abandoned carts, recommend related products, and request reviews. This reduces cart abandonment by 15–20% and increases repeat purchases by 30%."
    },
    {
      title: "Manufacturing",
      shortDesc: "Operational workflows and reporting",
      fullDesc: "We automate production schedules, route quality checks to supervisors, send equipment maintenance alerts before failures, and generate operational dashboards updated in real time. Automated alerts prevent machinery downtime and quality checks happen systematically without manual oversight."
    },
    {
      title: "Small Businesses",
      shortDesc: "Simple steps to scale with confidence",
      fullDesc: "We automate customer follow-ups after purchase, send invoice reminders to reduce payment delays, onboard employees with digital checklists, and route routine approvals without founder involvement. These automations give small teams the operational backbone of larger companies, freeing up time for revenue-generating activities."
    }
  ];

  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Branchen" : "Industries"}
          title={locale === "de" ? "Vertrauen Sie auf Lösungen, die schnellere Abläufe und klarere Kundenerlebnisse ermöglichen" : "Trusted by businesses that need faster operations and clearer customer journeys"}
          description={locale === "de" ? "Wir liefern digitale Werkzeuge, bessere Kundenkontaktpunkte und verlässlichere Prozesse für Dienstleister, lokale Geschäfte, Praxen und wachstumsorientierte Teams." : "We deliver digital tools, stronger customer touchpoints, and more reliable processes for service providers, local businesses, clinics, and growing teams."}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industries?.map((industry) => (
            <div key={industry.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">{industry.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-700">{industry.shortDesc}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{industry.fullDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ locale }: LocaleProps) {
  const copy = locale === "de"
    ? {
        eyebrow: "Über uns",
        title: "Wir gestalten Geschäftssysteme, die den digitalen Arbeitsalltag einfacher machen",
        description: "The Digital Move hilft Teams, repetitive Prozesse durch intelligente digitale Systeme, moderne Kundenerlebnisse und messbare Geschäftsergebnisse zu ersetzen, indem wir KI-Automatisierung, Workflow-Automatisierung, Website-Entwicklung und CRM-Integrationen liefern.",
        pill1: "Mission-gesteuert",
        pill2: "Ausführungsstark",
        pill3: "Skalierbar",
        vision: "Vision",
        visionText: "Unternehmen durch KI-Automatisierung, Workflow-Integration und digitale Transformationsberatung stärken.",
        approach: "Ansatz",
        approachText: "Eine Mischung aus Strategie, Produktdenken und schneller technischer Umsetzung.",
        outcome: "Ergebnis",
        outcomeText: "Weniger manuelle Arbeit, klarere Abläufe und messbares Umsatzwachstum.",
      }
    : {
        eyebrow: "About",
        title: "We design business systems that make digital work feel simple",
        description: "The Digital Move helps teams replace repetitive processes with intelligent digital systems, modern customer experiences, and measurable business outcomes by delivering AI automation, workflow automation, website development, and CRM integration.",
        pill1: "Mission-led",
        pill2: "Execution-focused",
        pill3: "Built to scale",
        vision: "Vision",
        visionText: "Empowering businesses through AI automation, workflow integration, and digital transformation consulting.",
        approach: "Approach",
        approachText: "A blend of strategy, product thinking, and fast technical delivery.",
        outcome: "Outcome",
        outcomeText: "Less manual effort, clearer operations, and measurable revenue growth.",
      };

  return (
    <section id="about" className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill>{copy.pill1}</Pill>
            <Pill>{copy.pill2}</Pill>
            <Pill>{copy.pill3}</Pill>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-blue-700">{copy.vision}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{copy.visionText}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-700">{copy.approach}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{copy.approachText}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
              <p className="text-sm font-medium text-slate-700">{copy.outcome}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{copy.outcomeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogSection({ locale }: LocaleProps) {
  const posts = locale === "de"
    ? [
        {
          title: "Von manuellen Abläufen zu KI-gestütztem Wachstum",
          description: "Ein praktischer Leitfaden zur Erkennung der Prozesse, die den größten Hebel liefern.",
        },
        {
          title: "Was gute Automatisierung im Jahr 2026 ausmacht",
          description: "Die gemeinsamen Muster erfolgreicher Automatisierungsprogramme und wie man Komplexität vermeidet.",
        },
        {
          title: "Warum moderne Websites auch in einer KI-geprägten Welt noch wichtig sind",
          description: "Wie eine durchdachte digitale Erfahrung Vertrauen, Conversion und operative Klarheit stärkt.",
        },
      ]
    : [
        {
          title: "From manual operations to AI-assisted growth",
          description: "A practical guide to identifying the workflows that create the most leverage.",
        },
        {
          title: "What good automation looks like in 2026",
          description: "The common patterns behind successful automation programs and how to avoid complexity.",
        },
        {
          title: "Why modern websites still matter in a AI-first world",
          description: "How a thoughtful digital experience supports trust, conversion, and operational clarity.",
        },
      ];

  return (
    <section id="blog" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Blog" : "Blog"}
          title={locale === "de" ? "Einblicke für Entscheider:innen, die smarter arbeiten wollen" : "Insights for leaders building a smarter operation"}
          description={locale === "de" ? "Wir teilen praktische Geschichten und Ideen, die Automatisierung, Design und Wachstum verbinden." : "We share practical stories and ideas that connect automation, design, and growth."}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">Insights</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection({ locale }: LocaleProps) {
  const features = locale === "de"
    ? [
        {
          title: "Automatisierung zuerst",
          description: "Wir gestalten von Anfang an wirkungsorientiert und beseitigen Engpässe statt neue Komplexität zu schaffen.",
          icon: Sparkles,
        },
        {
          title: "KI-gesteuert",
          description: "Dein Prozess wird anpassungsfähiger, schneller und einfacher skalierbar durch intelligente Automatisierungsebenen.",
          icon: Bot,
        },
        {
          title: "Schnelle Lieferung",
          description: "Wir bewegen uns schnell, ohne Qualität zu opfern – mit einem pragmatischen und transparenten Ansatz.",
          icon: Zap,
        },
        {
          title: "Skalierbare Lösungen",
          description: "Was wir heute bauen, ist bereit für die nächste Wachstumsphase, Integrationen und Datenreife.",
          icon: ShieldCheck,
        },
      ]
    : [
        {
          title: "Automation First",
          description: "We design for impact from the start, removing bottlenecks rather than adding complexity.",
          icon: Sparkles,
        },
        {
          title: "AI Driven",
          description: "Your process becomes more adaptive, faster, and easier to scale with smart automation layers.",
          icon: Bot,
        },
        {
          title: "Fast Delivery",
          description: "We move quickly without sacrificing quality, using a pragmatic and transparent delivery approach.",
          icon: Zap,
        },
        {
          title: "Scalable Solutions",
          description: "What we build today is ready for the next phase of growth, integrations, and data maturity.",
          icon: ShieldCheck,
        },
      ];

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Warum wir?" : "Why Choose Us"}
          title={locale === "de" ? "Ein Premium-Partner für Transformationsprojekte" : "A premium partner for transformation projects"}
          description={locale === "de" ? "Wir verbinden Strategie, Entwicklung und KI-Implementierung zu einer klar fokussierten Partnerschaft." : "We combine strategy, development, and AI implementation into one focused partnership."}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ locale }: LocaleProps) {
  const steps = locale === "de"
    ? [
        ["Entdecken", "Verstehen Sie den aktuellen manuellen Prozess und erkennen Sie Potenziale."],
        ["Gestalten", "Erstellen Sie einen digitalen Workflow, ein gutes Nutzererlebnis und einen Automatisierungsplan."],
        ["Automatisieren", "Setzen Sie KI, Bots, Integrationen und produktionsreife Workflows um."],
        ["Skalieren", "Messen Sie Ergebnisse, verbessern Sie schnell und erweitern Sie die Nutzung im Unternehmen."],
      ]
    : [
        ["Discover", "Understand the current manual process and identify opportunities."],
        ["Design", "Create a refined digital workflow, experience, and automation blueprint."],
        ["Automate", "Implement AI, bots, integrations, and product-ready workflows."],
        ["Scale", "Measure performance, improve fast, and expand across the organization."],
      ];

  return (
    <section className="bg-[linear-gradient(135deg,_#eff6ff_0%,_#ffffff_100%)] px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Unser Prozess" : "Our Process"}
          title={locale === "de" ? "Ein klarer Weg von der Idee zur Wirkung" : "A clear path from idea to impact"}
          description={locale === "de" ? "Wir halten die Reise von der ersten Workshop-Session bis zum Launch fokussiert, transparent und messbar." : "We keep the journey focused, transparent, and measurable from the first workshop to launch."}
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ locale }: LocaleProps) {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Über The Digital Move" : "About The Digital Move"}
          title={locale === "de" ? "Unternehmen dabei unterstützen, über manuelle Arbeit hinauszuwachsen" : "Helping businesses move beyond manual work"}
          description={locale === "de" ? "Jedes Unternehmen beginnt mit manuellen Prozessen, aber Wachstum sollte nicht von Tabellenkalkulationen, wiederholender Administration und getrennten Systemen abhängen." : "Every business begins with manual processes, but growth should not depend on spreadsheets, repetitive admin, and disconnected systems."}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-slate-700">
              {locale === "de"
                ? "The Digital Move wurde gegründet, um Unternehmen dabei zu helfen, die Art und Weise, wie sie arbeiten, zu modernisieren. Wir arbeiten mit Startups und kleinen bis mittelgroßen Unternehmen zusammen, um wiederkehrende manuelle Arbeit durch intelligente digitale Lösungen zu ersetzen."
                : "The Digital Move was founded to help businesses modernize the way they work. We partner with startups and small-to-medium businesses to replace repetitive manual work with intelligent digital solutions."}
            </p>
            <p className="mt-6 text-base leading-8 text-slate-700">
              {locale === "de"
                ? "Ob das Bauen einer modernen Website, die Automatisierung von Geschäftsprozessen, die Integration bestehender Systeme oder die Einführung KI-gestützter Assistenten ist – unser Ziel ist einfach: Ihrem Unternehmen dabei zu helfen, smarter, schneller und effizienter zu arbeiten."
                : "Whether it is building a modern website, automating business workflows, integrating existing systems, or implementing AI-powered assistants, our goal is simple: help your business work smarter, faster, and more efficiently."}
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{locale === "de" ? "Über die Gründerin" : "About the Founder"}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{locale === "de" ? "Hallo, ich bin Baala Murugan" : "Hi, I&apos;m Baala Murugan"}</h3>
              <p className="mt-4 text-sm leading-8 text-slate-700">
                {locale === "de"
                  ? "Ich bin Software Quality Engineer und Automation Specialist mit über 9 Jahren Erfahrung in der Entwicklung skalierbarer Automatisierungslösungen und der Verbesserung der Softwarequalität für technologiegetriebene Unternehmen mit hohem Wachstum."
                  : "I&apos;m a Software Quality Engineer and Automation Specialist with over 9 years of experience building scalable automation solutions and improving software quality for high-growth technology companies."}
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{locale === "de" ? "Was wir tun" : "What We Do"}</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• {locale === "de" ? "KI-gestützte Geschäftsautomatisierung" : "AI-Powered Business Automation"}</li>
                <li>• {locale === "de" ? "Workflow-Automatisierung (n8n)" : "Workflow Automation (n8n)"}</li>
                <li>• {locale === "de" ? "Website-Design & Entwicklung" : "Website Design & Development"}</li>
                <li>• {locale === "de" ? "KI-Chatbots & virtuelle Assistenten" : "AI Chatbots & Virtual Assistants"}</li>
                <li>• {locale === "de" ? "CRM & Systemintegrationen" : "CRM & System Integrations"}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{locale === "de" ? "Unsere Mission" : "Our Mission"}</p>
              <p className="mt-3 text-xl font-semibold text-slate-900">{locale === "de" ? "Unternehmen dabei unterstützen, von manuellen Abläufen zu intelligenter Automatisierung zu kommen." : "Helping businesses move from manual operations to intelligent automation."}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{locale === "de" ? "Unsere Vision" : "Our Vision"}</p>
              <p className="mt-3 text-xl font-semibold text-slate-900">{locale === "de" ? "Ein vertrauenswürdiger Partner für digitale Transformation zu werden, der Unternehmen durch KI, Automatisierung und moderne Software stärkt." : "To become a trusted digital transformation partner that empowers businesses through AI, automation, and modern software."}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{locale === "de" ? "Warum mit uns arbeiten?" : "Why Work With Us?"}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{locale === "de" ? "Unternehmensorientierter Ansatz" : "Business-first approach"}</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{locale === "de" ? "Moderne KI-Lösungen" : "Modern AI solutions"}</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{locale === "de" ? "Automatisierungsorientierte Denkweise" : "Automation-focused mindset"}</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{locale === "de" ? "Skalierbare Technologie" : "Scalable technology"}</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{locale === "de" ? "Langfristiger Technologiepartner" : "Long-term technology partner"}</span>
          </div>
          <p className="mt-8 text-xl font-semibold text-slate-900">{locale === "de" ? "Jede digitale Transformation beginnt mit einem Schritt." : "Every digital transformation starts with one step."}</p>
          <p className="mt-2 text-lg font-semibold text-blue-600">{locale === "de" ? "Machen Sie Ihren digitalen Schritt." : "Make Your Digital Move."}</p>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ locale }: LocaleProps) {
  const items = locale === "de"
    ? [
        {
          question: "Was ist Workflow-Automatisierung?",
          answer: "Workflow-Automatisierung verbindet Aufgaben, Freigaben, Daten und Kommunikationen, damit sich wiederkehrende Arbeiten automatisch erledigen lassen – mit weniger Fehlern und schnellerer Abwicklung.",
        },
        {
          question: "Kann KI mein Unternehmen automatisieren?",
          answer: "Ja. Wir nutzen KI, um Informationen zu strukturieren, Entscheidungen vorzuschlagen, Fragen zu beantworten und Aktionen in den Workflows auszulösen, auf die Ihr Team angewiesen ist.",
        },
        {
          question: "Bauen Sie Websites?",
          answer: "Ja, natürlich. Wir gestalten und bauen hochwertige Websites, Landingpages und Portale, die schnell, zugänglich und konversionsorientiert sind.",
        },
        {
          question: "Integrieren Sie bestehende Software?",
          answer: "Ja. Wir verbinden Plattformen wie Microsoft 365, Google Workspace, Slack, Jira, CRMs und andere interne oder externe Systeme.",
        },
        {
          question: "Wie lange dauert ein Projekt?",
          answer: "Die meisten Projekte starten mit einer Erkundungsphase in Wochen und gehen dann in die Umsetzung über – mit einem Zeitrahmen, der an Größe und Komplexität angepasst ist.",
        },
      ]
    : [
        {
          question: "What is workflow automation?",
          answer: "Workflow automation connects tasks, approvals, data, and communications so repetitive work happens automatically with fewer errors and faster turnaround.",
        },
        {
          question: "Can AI automate my business?",
          answer: "Yes. We use AI to structure information, suggest decisions, answer questions, and trigger actions inside the workflows your team depends on.",
        },
        {
          question: "Do you build websites?",
          answer: "Absolutely. We design and build premium websites, landing pages, and portals that are fast, accessible, and conversion focused.",
        },
        {
          question: "Do you integrate existing software?",
          answer: "Yes. We connect platforms such as Microsoft 365, Google Workspace, Slack, Jira, CRMs, and other internal or third-party systems.",
        },
        {
          question: "How long does a project take?",
          answer: "Most engagements start with discovery in weeks and then move into delivery with a timeline tailored to the size and complexity of the project.",
        },
      ];

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={locale === "de" ? "FAQ" : "FAQ"}
          title={locale === "de" ? "Fragen, die wir oft hören" : "Questions we hear often"}
          description={locale === "de" ? "Hier ist ein kurzer Überblick, wie wir Automatisierung, Websites und Integrationen angehen." : "Here is a quick overview of how we approach automation, websites, and integrations."}
          align="center"
        />
        <div className="mt-12 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold text-slate-900">{item.question}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection({ locale }: LocaleProps) {
  return (
    <section className="px-6 pb-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 p-10 text-white shadow-[0_30px_80px_-20px_rgba(37,99,235,0.35)] sm:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-100">{locale === "de" ? "Bereit für den nächsten Schritt" : "Ready to Move"}</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{locale === "de" ? "Bereit, Ihren digitalen Schritt zu machen?" : "Ready to make your digital move?"}</h2>
            <p className="mt-4 text-lg text-blue-50">{locale === "de" ? "Erhalten Sie einen Plan für digitale Transformation und Automatisierung, der manuelle Aufgaben in zuverlässige Wachstumstreiber verwandelt." : "Get a digital transformation plan and automation roadmap that turns manual tasks into reliable growth drivers."}</p>
          </div>
          <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:scale-[1.01]">
            {locale === "de" ? "Beratung buchen" : "Book Consultation"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ locale }: LocaleProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    // Capture the form element synchronously to avoid React event pooling issues
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      // Submit directly to Formspree endpoint (no server required)
      const response = await fetch("https://formspree.io/f/xzdnvjgk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || err.message || "Unable to send inquiry.");
      }

      setStatus("success");
      setMessage("Thanks! Your inquiry has been sent successfully. We will be in touch shortly.");
      // Reset the captured form element
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send inquiry.");
    }
  };

  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow={locale === "de" ? "Kontakt" : "Contact"}
            title={locale === "de" ? "Lassen Sie uns die nächste Version Ihres Unternehmens aufbauen" : "Let’s build the next version of your business"}
            description={locale === "de" ? "Wir sind bereit, Ihren Automatisierungsplan, Website-Fahrplan und Integrationsplan zu erarbeiten, damit Ihr Unternehmen echten Schwung gewinnt." : "We’re ready to scope your automation roadmap, website development plan, and systems integration strategy for measurable business momentum."}
          />
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <a href="mailto:scbaala@gmail.com" className="flex items-center transition hover:text-blue-600">
              <FileText className="mr-3 h-5 w-5 text-blue-600" /> scbaala@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/baala-murugan/" target="_blank" rel="noreferrer" className="flex items-center transition hover:text-blue-600">
              <ShieldCheck className="mr-3 h-5 w-5 text-blue-600" /> LinkedIn: baala-murugan
            </a>
            <a href="tel:+491755017453" className="flex items-center transition hover:text-blue-600">
              <Compass className="mr-3 h-5 w-5 text-blue-600" /> +49 175 5017453
            </a>
            {/* Physical address removed per request */}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              <span className="mb-2 block">{locale === "de" ? "Name" : "Name"}</span>
              <input name="name" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Your name" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              <span className="mb-2 block">{locale === "de" ? "E-Mail" : "Email"}</span>
              <input name="email" type="email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="you@company.com" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              <span className="mb-2 block">{locale === "de" ? "Unternehmen" : "Company"}</span>
              <input name="company" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Your company" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              <span className="mb-2 block">{locale === "de" ? "Nachricht" : "Message"}</span>
              <textarea name="message" rows={5} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Describe the process you want to improve and the business outcome you expect." />
            </label>
          </div>
          <button type="submit" disabled={status === "loading"} className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
            {status === "loading" ? "Sending..." : "Submit"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          {message ? (
            <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-600" : "text-rose-600"}`}>{message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export function FooterSection({ locale }: LocaleProps) {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-semibold text-slate-950">The Digital Move</p>
          <p className="mt-2 text-sm text-slate-600">{locale === "de" ? "Unternehmen dabei unterstützen, von manuellen Abläufen zu intelligenter Automatisierung zu kommen." : "Helping businesses move from manual operations to intelligent automation."}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <Link href="/services" className="transition hover:text-blue-600">{locale === "de" ? "Leistungen" : "Services"}</Link>
          <Link href="#contact" className="transition hover:text-blue-600">{locale === "de" ? "Kontakt" : "Contact"}</Link>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-600">GitHub</a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© The Digital Move. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="transition hover:text-blue-600">{locale === "de" ? "Datenschutz" : "Privacy Policy"}</Link>
          <Link href="/terms" className="transition hover:text-blue-600">{locale === "de" ? "Nutzungsbedingungen" : "Terms"}</Link>
        </div>
      </div>
    </footer>
  );
}
