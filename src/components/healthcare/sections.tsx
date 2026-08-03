"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Building2,
  CalendarClock,
  Check,
  CircleHelp,
  Clock3,
  Eye,
  FileText,
  Hospital,
  MapPin,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { HealthcareArticle, HealthcareProfile } from "@/lib/healthcare";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroSectionProps = {
  profile: HealthcareProfile;
};

type FeatureGridProps = {
  title: string;
  intro: string;
  features: string[];
};

type BenefitsSectionProps = {
  title: string;
  benefits: string[];
};

type ComparisonTableProps = {
  title: string;
  leftLabel: string;
  rightLabel: string;
  rows: Array<{ without: string; with: string }>;
};

type TimelineProps = {
  title: string;
  steps: HealthcareProfile["patientJourney"];
};

type FAQSectionProps = {
  title: string;
  items: HealthcareProfile["faq"];
};

type BlogPreviewProps = {
  title: string;
  profession: string;
  articles: HealthcareArticle[];
};

type CTASectionProps = {
  profession: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

type IndustryCardProps = {
  profile: HealthcareProfile;
};

type TestimonialSectionProps = {
  profession: string;
};

type ClinicOperationsProps = {
  profile: HealthcareProfile;
};

const iconMap: Record<HealthcareProfile["icon"], LucideIcon> = {
  tooth: Smile,
  activity: Activity,
  sparkles: Sparkles,
  baby: Baby,
  stethoscope: Stethoscope,
  bone: Bone,
  eye: Eye,
  brain: Brain,
  hospital: Hospital,
};

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35 },
};

function IllustrationBadge({ icon }: { icon: HealthcareProfile["icon"] }) {
  const Icon = iconMap[icon];
  return (
    <div className="inline-flex rounded-2xl border border-blue-100 bg-blue-50 p-3 text-blue-600 shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
  );
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`}>
            {item.href && !isLast ? (
              <Link href={item.href} className="font-medium text-blue-600 transition hover:text-blue-700">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-slate-700" : "font-medium text-blue-600"}>{item.label}</span>
            )}
            {!isLast ? <span className="mx-2 text-slate-400">&gt;</span> : null}
          </span>
        );
      })}
    </nav>
  );
}

export function IndustryCard({ profile }: IndustryCardProps) {
  return (
    <motion.article
      {...cardMotion}
      className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <IllustrationBadge icon={profile.icon} />
      <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{profile.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{profile.cardDescription}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
        {profile.seoBenefits.slice(0, 2).map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/solutions/${profile.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </motion.article>
  );
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-sm sm:p-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_45%)]" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-900/80 dark:bg-slate-900 dark:text-blue-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Healthcare Solutions
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">{profile.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.heroLead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/website-plans#lead-form" className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              {profile.ctaPrimary}
            </Link>
            <Link href="/business-health-check" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              {profile.ctaSecondary}
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <IllustrationBadge icon={profile.icon} />
          <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">What this page covers</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-blue-600" />Specific patient communication challenges</li>
            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-blue-600" />Tailored feature blueprint for your specialty</li>
            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-blue-600" />Conversion and SEO structure for long-term growth</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function FeatureGrid({ title, intro, features }: FeatureGridProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{intro}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
          >
            <div className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
              <span>{feature}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 dark:border-blue-900/70 dark:bg-blue-950/25">
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ComparisonTable({ title, leftLabel, rightLabel, rows }: ComparisonTableProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-8 py-6 dark:border-slate-800">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/60">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">{leftLabel}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">{rightLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.with} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-6 py-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{row.without}</td>
                <td className="px-6 py-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{row.with}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Timeline({ title, steps }: TimelineProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <ol className="mt-7 space-y-5">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ClinicOperationsSection({ profile }: ClinicOperationsProps) {
  const mapUrl = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(profile.mapEmbedQuery)}&output=embed`,
    [profile.mapEmbedQuery],
  );

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{profile.name} operational details patients expect</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white"><CalendarClock className="h-5 w-5 text-blue-600" />Appointment booking</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {profile.bookingFlow.map((item) => (
                <li key={item} className="flex gap-2"><Check className="mt-1 h-4 w-4 text-blue-600" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white"><UserRound className="h-5 w-5 text-blue-600" />Doctor and team profiles</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{profile.teamProfileFocus}</p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white"><Building2 className="h-5 w-5 text-blue-600" />Clinic gallery</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {profile.galleryIdeas.map((item) => (
                <li key={item} className="flex gap-2"><Check className="mt-1 h-4 w-4 text-blue-600" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white"><Clock3 className="h-5 w-5 text-blue-600" />Opening hours and insurance</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {profile.openingHoursExample.map((item) => (
                <li key={item} className="flex gap-2"><Check className="mt-1 h-4 w-4 text-blue-600" />{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{profile.insuranceInfo}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Google Maps integration for {profile.name.toLowerCase()}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Make your location immediately actionable with embedded maps, parking instructions, and public transport guidance.
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
          <iframe
            title={`${profile.name} location map`}
            src={mapUrl}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
          <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-white"><MapPin className="h-4 w-4 text-blue-600" />Why map visibility matters</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Strong map signals reduce patient uncertainty, increase navigation starts, and improve local search conversion rates for time-sensitive healthcare intent.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-slate-900 dark:text-white">{item.question}</span>
                <CircleHelp className={`h-5 w-5 shrink-0 text-blue-600 transition ${isOpen ? "rotate-45" : "rotate-0"}`} />
              </button>
              {isOpen ? <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function BlogPreview({ title, profession, articles }: BlogPreviewProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            SEO-focused article recommendations tailored for {profession.toLowerCase()} to strengthen authority and long-tail organic traffic.
          </p>
        </div>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
          View Blog Hub
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{article.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
            <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
              Read SEO article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialSection({ profession }: TestimonialSectionProps) {
  const placeholders = [
    `"Our new ${profession.toLowerCase()} website made patient communication easier from day one."`,
    "\"We now receive clearer appointment requests and spend less time repeating the same onboarding information.\"",
    "\"The digital experience finally reflects the level of care we provide in clinic.\"",
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{profession} testimonials (placeholder)</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
        Add verified patient or clinic-owner quotes after launch. The layout is prepared for structured trust proof.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {placeholders.map((quote, index) => (
          <motion.blockquote
            key={`${quote}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
          >
            {quote}
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export function CTASection({ profession, primary, secondary, tertiary }: CTASectionProps) {
  return (
    <section className="rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 p-8 text-white shadow-[0_24px_60px_-24px_rgba(37,99,235,0.55)] sm:p-10">
      <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">
        <ShieldCheck className="mr-2 h-4 w-4" />
        Built for trust and long-term growth
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to modernize your {profession.toLowerCase()} digital experience?</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-50 sm:text-base">
        Position your practice as the preferred healthcare choice with a premium website architecture focused on patient confidence, operational efficiency, and measurable growth.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/website-plans#lead-form" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
          {primary}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/business-health-check" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
          {secondary}
        </Link>
        <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15">
          {tertiary}
        </Link>
      </div>
    </section>
  );
}

export function ContextualLinkPanel({
  currentSlug,
  allProfiles,
}: {
  currentSlug?: HealthcareProfile["slug"];
  allProfiles: HealthcareProfile[];
}) {
  const profiles = currentSlug
    ? allProfiles.filter((profile) => profile.slug !== currentSlug)
    : allProfiles;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Smart internal linking structure</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        Strengthen healthcare SEO with contextual links across your key conversion pages.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link href="/healthcare" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
          Healthcare Overview
        </Link>
        <Link href="/" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
          Home Page
        </Link>
        <Link href="/services" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
          Services Page
        </Link>
        <Link href="/#contact" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
          Contact Page
        </Link>
        <Link href="/business-health-check" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
          Business Health Check
        </Link>
      </div>
      <h3 className="mt-7 text-lg font-semibold text-slate-900 dark:text-white">Explore other healthcare professions</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {profiles.map((profile) => (
          <Link
            key={profile.slug}
            href={`/solutions/${profile.slug}`}
            className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <span>{profile.name}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ChallengeSection({ title, challenges, narrative }: { title: string; challenges: string[]; narrative: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ul className="space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
          {challenges.map((challenge) => (
            <li key={challenge} className="flex items-start gap-2">
              <FileText className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/70 dark:bg-blue-950/30">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How a tailored website solves this</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{narrative}</p>
        </div>
      </div>
    </section>
  );
}
