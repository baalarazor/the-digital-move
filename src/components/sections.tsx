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
};

type LocaleProps = {
  locale: "en" | "de";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
        <Sparkles className="mr-2 h-4 w-4" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
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
        badge: "KI • Automatisierung • Digitale Transformation",
        headline: "Machen Sie Ihren",
        highlight: "digitalen Schritt",
        subheadline: "Wir helfen Unternehmen, manuelle Abläufe durch intelligente Automatisierung, moderne Websites und smarte Integrationen zu ersetzen.",
        primary: "Kostenlose Beratung buchen",
        secondary: "Leistungen entdecken",
        pill1: "KI-gestützt",
        pill2: "Workflow-Automatisierung",
        pill3: "Individuelle Software",
      }
    : {
        badge: "AI • Automation • Digital Transformation",
        headline: "Make Your",
        highlight: "Digital Move",
        subheadline: "We help businesses replace manual operations with intelligent automation, polished websites, and smart integrations that scale.",
        primary: "Book a Free Consultation",
        secondary: "Explore Services",
        pill1: "AI Powered",
        pill2: "Workflow Automation",
        pill3: "Custom Software",
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
            <Zap className="mr-2 h-4 w-4" />
            {copy.badge}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {copy.headline} <span className="text-blue-600">{copy.highlight}</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            {copy.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              {copy.primary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              {copy.secondary}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill>{copy.pill1}</Pill>
            <Pill>{copy.pill2}</Pill>
            <Pill>{copy.pill3}</Pill>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.22)]"
        >
          <Image
            src="/hero-illustration.svg"
            alt="Illustration of business workflows becoming digital and automated"
            width={780}
            height={620}
            priority
            className="w-full rounded-[1.5rem]"
          />
        </motion.div>
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

export function ServicesSection({ locale }: LocaleProps) {
  const services = locale === "de"
    ? [
        {
          title: "KI-Automatisierung",
          description: "Ersetzen Sie repetitive Aufgaben durch KI, die mit Ihrem Team und Ihren Systemen zusammenarbeitet.",
          features: ["KI-Copiloten", "Intelligente Workflows", "Entscheidungshilfe"],
          icon: Bot,
        },
        {
          title: "Workflow-Automatisierung",
          description: "Koordinieren Sie Freigaben, E-Mails, CRM-Updates und Dokumentenabläufe ohne Reibung.",
          features: ["n8n", "E-Mail-Automatisierung", "CRM-Automatisierung"],
          icon: Workflow,
        },
        {
          title: "KI-Chatbots",
          description: "Bieten Sie Kunden und Mitarbeitenden sofortige Antworten über Website- und WhatsApp-Assistenten.",
          features: ["Website-Chatbot", "WhatsApp-Bot", "Wissensassistent"],
          icon: MessageCircleMore,
        },
        {
          title: "Webseitenentwicklung",
          description: "Starten Sie hochwertige Websites, die auf jedem Gerät gut funktionieren und konvertieren.",
          features: ["Landingpages", "Unternehmensseiten", "SEO-freundlich"],
          icon: Globe2,
        },
        {
          title: "Individuelle Software",
          description: "Erstellen Sie interne Dashboards, Reporting-Tools und Automatisierungsplattformen für Ihr Unternehmen.",
          features: ["Dashboards", "ERP-Integrationen", "Reporting"],
          icon: Cpu,
        },
        {
          title: "Systemintegration",
          description: "Verbinden Sie die Tools, die Ihr Team bereits nutzt, ohne unnötige Umwege.",
          features: ["Microsoft 365", "Google Workspace", "Slack", "Jira", "REST APIs"],
          icon: Layers3,
        },
      ]
    : [
        {
          title: "AI Automation",
          description: "Replace repetitive manual tasks with AI that works across your team and systems.",
          features: ["AI copilots", "Smart workflows", "Decision support"],
          icon: Bot,
        },
        {
          title: "Workflow Automation",
          description: "Coordinate approvals, emails, CRM updates, documents, and handoffs without friction.",
          features: ["n8n", "Email automation", "CRM automation"],
          icon: Workflow,
        },
        {
          title: "AI Chatbots",
          description: "Give customers and employees instant answers through website and WhatsApp assistants.",
          features: ["Website chatbot", "WhatsApp bot", "Knowledge assistant"],
          icon: MessageCircleMore,
        },
        {
          title: "Website Development",
          description: "Launch high-converting websites that look premium and perform beautifully on every device.",
          features: ["Landing pages", "Corporate sites", "SEO friendly"],
          icon: Globe2,
        },
        {
          title: "Custom Software",
          description: "Create internal dashboards, reporting tools, and automation platforms made for your business.",
          features: ["Dashboards", "ERP integrations", "Reporting"],
          icon: Cpu,
        },
        {
          title: "System Integration",
          description: "Connect the tools your team already uses without forcing painful process changes.",
          features: ["Microsoft 365", "Google Workspace", "Slack", "Jira", "REST APIs"],
          icon: Layers3,
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection({ locale }: LocaleProps) {
  const industries = locale === "de"
    ? [
        ["Gesundheitswesen", "Moderne Patientenerfahrungen und belastbare Arbeitsabläufe"],
        ["Restaurants", "Reservierungs- und Serviceautomatisierung, die mühelos wirkt"],
        ["Anwaltskanzleien", "Dokumentenbasierte Workflows mit KI-Unterstützung"],
        ["Immobilien", "Lead-Erfassung und Follow-up-Automatisierung"],
        ["Recruiting", "Lebenslaufanalyse und Bewerberprozess-Automatisierung"],
        ["Buchhaltung", "Schnellere Berichte und Kundenkommunikation"],
        ["Bau", "Mehr Transparenz und bessere Freigaben"],
        ["Bildung", "Studierenden-Onboarding und interne Systeme"],
        ["Logistik", "Sichtbarkeit von Sendungen und Prozesskoordination"],
        ["Retail", "E-Commerce-Support und Kundenjourneys"],
        ["Produktion", "Operationale Workflows und Reporting"],
        ["Kleine Unternehmen", "Einfache Schritte zum sicheren Skalieren"],
      ]
    : [
        ["Healthcare", "Modern patient experiences and workflow resilience"],
        ["Restaurants", "Reservation and service automation that feels effortless"],
        ["Law Firms", "Document-based workflows with AI support"],
        ["Real Estate", "Lead capture and follow-up automation"],
        ["Recruitment", "Resume analysis and candidate journey orchestration"],
        ["Accounting", "Faster reporting and client communication"],
        ["Construction", "Operations visibility and approvals"],
        ["Education", "Student onboarding and internal systems"],
        ["Logistics", "Shipment visibility and process coordination"],
        ["Retail", "Ecommerce support and customer journeys"],
        ["Manufacturing", "Operational workflows and reporting"],
        ["Small Businesses", "Simple steps to scale with confidence"],
      ];

  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Branchen" : "Industries"}
          title={locale === "de" ? "Vertrauenswürdig in Branchen, die Geschwindigkeit und Struktur brauchen" : "Trusted across sectors that need speed and structure"}
          description={locale === "de" ? "Wir passen jede Umsetzung an die Realität Ihrer Branche, Ihrer Dokumente und Ihrer Kundenerwartungen an." : "We tailor every rollout to the realities of your industry, your documents, and your customer expectations."}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
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
        title: "Wir gestalten humane Systeme, die den Alltag leichter machen",
        description: "The Digital Move hilft Teams, sich von repetitiven Prozessen zu lösen und Klarheit, bessere Kundenerlebnisse und messbaren Fortschritt zu schaffen.",
        pill1: "Mission-gesteuert",
        pill2: "Ausführungsstark",
        pill3: "Skalierbar",
        vision: "Vision",
        visionText: "Unternehmen durch KI, Automatisierung und digitale Transformation stärken.",
        approach: "Ansatz",
        approachText: "Eine Mischung aus Strategie, Produktdenken und praktischer Umsetzung.",
        outcome: "Ergebnis",
        outcomeText: "Weniger manuelle Arbeit, klarere Abläufe und bessere Erfahrungen für Kunden und Mitarbeitende.",
      }
    : {
        eyebrow: "About",
        title: "We design humane systems that make work feel lighter",
        description: "The Digital Move helps teams replace repetitive processes with clarity, better customer moments, and measurable momentum.",
        pill1: "Mission-led",
        pill2: "Execution-focused",
        pill3: "Built to scale",
        vision: "Vision",
        visionText: "Empowering businesses through AI, automation, and digital transformation.",
        approach: "Approach",
        approachText: "A blend of strategy, product thinking, and hands-on implementation.",
        outcome: "Outcome",
        outcomeText: "Less manual effort, clearer operations, and better client and employee experiences.",
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

export function CareerSection({ locale }: LocaleProps) {
  const roles = [
    {
      title: "Software Developers",
      description: "Frontend, backend, full stack, mobile, AI, and cloud engineers.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "Python", "Java", ".NET"],
    },
    {
      title: "AI & Automation Specialists",
      description: "Build intelligent business workflows and AI-powered solutions.",
      skills: ["n8n", "OpenAI", "AI Agents", "RAG Systems", "LangChain", "Workflow Automation"],
    },
    {
      title: "UI/UX Designers",
      description: "Design beautiful and intuitive digital experiences for modern businesses.",
      skills: ["Figma", "User Experience", "User Interface Design", "Design Systems", "Prototyping"],
    },
    {
      title: "Content Creators & Copywriters",
      description: "Help businesses tell their brand story with clear and persuasive content.",
      skills: ["Website Copy", "Blogs", "SEO Content", "Technical Writing", "Product Content"],
    },
    {
      title: "Digital Marketing Specialists",
      description: "Drive growth with modern digital marketing strategies and measurement.",
      skills: ["SEO", "Google Ads", "Meta Ads", "LinkedIn Marketing", "Analytics", "Email Marketing"],
    },
    {
      title: "Graphic Designers",
      description: "Create visual content that strengthens brands and supports campaigns.",
      skills: ["Adobe Creative Suite", "Canva", "Brand Identity", "Social Media Graphics", "Motion Graphics"],
    },
  ];

  return (
    <section id="careers" className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={locale === "de" ? "Karriere" : "Careers"}
          title={locale === "de" ? "Werde Teil unseres Talentnetzwerks" : "Join our talent network"}
          description={locale === "de" ? "Wir bauen eine Community talentierter Freelancer, Kreativer und Technologieprofis, die echte Geschäftsprobleme lösen wollen." : "We are building a community of talented freelancers, creators, and technology professionals who want to solve meaningful business problems."}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">{locale === "de" ? "Gestalten Sie die Zukunft des digitalen Geschäfts mit uns" : "Build the future of digital business with us"}</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              {locale === "de"
                ? "Bei The Digital Move helfen wir Unternehmen, manuelle Prozesse in intelligente digitale Lösungen zu verwandeln. Ob Entwickler:in, Designer:in, Marketingexpert:in oder KI-Spezialist:in — wir freuen uns über Zusammenarbeit an spannenden Kundenprojekten."
                : "At The Digital Move, we help businesses transform manual processes into intelligent digital solutions. Whether you're a developer, designer, marketer, or AI specialist, we'd love to collaborate with you on exciting client projects."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>{locale === "de" ? "Flexible Projekte" : "Flexible Projects"}</Pill>
              <Pill>{locale === "de" ? "Remote-Kollaboration" : "Remote Collaboration"}</Pill>
              <Pill>{locale === "de" ? "Langfristige Partnerschaften" : "Long-Term Partnerships"}</Pill>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{locale === "de" ? "Aktuelle Möglichkeiten" : "Current opportunities"}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              <li>• {locale === "de" ? "Freiberuflicher Full-Stack-Entwickler" : "Freelance Full Stack Developer"}</li>
              <li>• {locale === "de" ? "React / Next.js-Entwickler" : "React / Next.js Developer"}</li>
              <li>• {locale === "de" ? "KI-Automatisierungs-Spezialist (n8n)" : "AI Automation Specialist (n8n)"}</li>
              <li>• {locale === "de" ? "UI/UX-Designer" : "UI/UX Designer"}</li>
              <li>• {locale === "de" ? "Content Writer" : "Content Writer"}</li>
              <li>• {locale === "de" ? "SEO-Spezialist" : "SEO Specialist"}</li>
              <li>• {locale === "de" ? "Digital Marketing Consultant" : "Digital Marketing Consultant"}</li>
              <li>• {locale === "de" ? "Grafikdesigner" : "Graphic Designer"}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{role.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">{locale === "de" ? "So wirst du Teil unseres Netzwerks" : "How to join"}</h3>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            {locale === "de"
              ? "Bitte sende deinen Lebenslauf oder dein Portfolio, deinen LinkedIn-Profile, relevante Projektbeispiele, deine Hauptkompetenzen, Standort und Zeitzone, Verfügbarkeit und deine stündlichen oder projektbasierten Tarife an "
              : "Please send your resume or portfolio, LinkedIn profile, relevant project examples, primary skills, location and time zone, availability, and your hourly or project-based rates to "}
            <a href="mailto:scbaala@gmail.com" className="font-semibold text-blue-600">scbaala@gmail.com</a>.
          </p>
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
            <p className="mt-4 text-lg text-blue-50">{locale === "de" ? "Lassen Sie Ihr Unternehmen mit modernen Systemen, hochwertigen Erfahrungen und messbarem Wachstum automatisieren." : "Let’s automate your business with modern systems, polished experiences, and measurable growth."}</p>
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
            description={locale === "de" ? "Wir sind bereit, über Workflows, Systeme und digitale Erfahrungen zu sprechen, die echten Schwung erzeugen." : "We’re ready to talk through the workflows, systems, and digital experiences that can unlock momentum."}
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
              <textarea name="message" rows={5} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" placeholder="Tell us about the process you want to improve." />
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
          <Link href="#services" className="transition hover:text-blue-600">{locale === "de" ? "Leistungen" : "Services"}</Link>
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
