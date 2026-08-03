import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  Breadcrumb,
  ContextualLinkPanel,
  CTASection,
  IndustryCard,
} from "@/components/healthcare/sections";
import { PageWithHeader } from "@/components/page-with-header";
import { healthcareProfiles } from "@/lib/healthcare";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Healthcare Website Solutions in Germany | The Digital Move",
  description:
    "Explore premium healthcare website solutions for dentists, physiotherapists, dermatologists, pediatricians, and medical clinics across Germany.",
  keywords: [
    "healthcare website development Germany",
    "medical clinic web design",
    "dentist website Germany",
    "physiotherapy website solutions",
    "healthcare SEO agency Berlin",
  ],
  alternates: {
    canonical: "https://thedigitalmove.com/healthcare",
  },
  openGraph: {
    title: "Healthcare Solutions | The Digital Move",
    description:
      "Scalable, conversion-focused healthcare website solutions for modern clinics and medical professionals in Germany.",
    url: "https://thedigitalmove.com/healthcare",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Website Solutions | The Digital Move",
    description:
      "Discover premium web architectures for healthcare practices that improve trust, patient experience, and growth.",
    images: ["/og-image.svg"],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Healthcare Solutions", url: "https://thedigitalmove.com/healthcare" },
]);

const healthcareServiceSchema = buildServiceSchema({
  name: "Healthcare Website Solutions in Germany",
  description:
    "Profession-specific website architecture, SEO, and digital patient experience systems for healthcare providers in Germany.",
  url: "https://thedigitalmove.com/healthcare",
  serviceType: "Healthcare Digital Solutions",
});

const healthcareCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Healthcare Solutions",
  url: "https://thedigitalmove.com/healthcare",
  hasPart: healthcareProfiles.map((profile) => ({
    "@type": "WebPage",
    name: profile.name,
    url: `https://thedigitalmove.com/solutions/${profile.slug}`,
  })),
};

export default function HealthcareOverviewPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Healthcare Solutions" },
          ]}
        />

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-sm sm:p-10">
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-700">
            Premium Healthcare Architecture
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Healthcare Solutions Built for Trust, Efficiency, and Long-Term Digital Growth
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            The Digital Move helps healthcare professionals across Germany build modern websites that educate patients, improve appointment conversion,
            and simplify operations. Explore profession-specific solutions tailored to real patient journeys and local SEO behavior.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/website-plans#lead-form" className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Book a Consultation
            </Link>
            <Link href="/business-health-check" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              Request a Website Audit
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Choose your healthcare profession</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Each solution includes profession-specific messaging, SEO architecture, booking strategy, and reusable components for scalable growth.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthcareProfiles.map((profile) => (
              <IndustryCard key={profile.slug} profile={profile} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <ContextualLinkPanel allProfiles={healthcareProfiles} />
        </section>

        <section className="mt-10">
          <CTASection
            profession="healthcare organization"
            primary="Book a Consultation"
            secondary="Get a Homepage Mockup"
            tertiary="Improve My Practice Online"
          />
        </section>
      </main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={healthcareServiceSchema} />
      <JsonLd data={healthcareCollectionSchema} />
    </PageWithHeader>
  );
}
