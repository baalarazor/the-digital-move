import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  BenefitsSection,
  BlogPreview,
  Breadcrumb,
  CTASection,
  ChallengeSection,
  ClinicOperationsSection,
  ComparisonTable,
  ContextualLinkPanel,
  FAQSection,
  FeatureGrid,
  HeroSection,
  TestimonialSection,
  Timeline,
} from "@/components/healthcare/sections";
import { PageWithHeader } from "@/components/page-with-header";
import {
  getHealthcareProfile,
  healthcareProfiles,
  type HealthcareSlug,
} from "@/lib/healthcare";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMedicalBusinessSchema,
} from "@/lib/seo";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return healthcareProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getHealthcareProfile(slug);

  if (!profile) {
    return {
      title: "Healthcare Solution Not Found | The Digital Move",
      description: "The requested healthcare solution page could not be found.",
    };
  }

  const pageUrl = `https://thedigitalmove.com/solutions/${profile.slug}`;

  return {
    title: `${profile.name} Website Solutions in Germany | The Digital Move`,
    description: profile.cardDescription,
    keywords: [
      `${profile.name.toLowerCase()} website Germany`,
      `${profile.specialty.toLowerCase()} digital marketing`,
      `${profile.specialty.toLowerCase()} SEO`,
      "healthcare website development Germany",
      "medical lead generation website",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${profile.name} Digital Growth Solution | The Digital Move`,
      description: profile.heroLead,
      url: pageUrl,
      siteName: "The Digital Move",
      type: "website",
      images: ["/og-image.svg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} Website Solution`,
      description: profile.cardDescription,
      images: ["/og-image.svg"],
    },
  };
}

export default async function HealthcareSolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const profile = getHealthcareProfile(slug);

  if (!profile) {
    notFound();
  }

  const pageUrl = `https://thedigitalmove.com/solutions/${profile.slug}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "https://thedigitalmove.com/" },
    { name: "Healthcare Solutions", url: "https://thedigitalmove.com/healthcare" },
    { name: profile.name, url: pageUrl },
  ]);

  const faqSchema = buildFaqSchema(profile.faq);

  const medicalBusinessSchema = buildMedicalBusinessSchema({
    name: `${profile.name} Digital Solution by The Digital Move`,
    description: profile.heroLead,
    url: pageUrl,
    medicalSpecialty: profile.specialty,
    department: profile.name,
  });

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: profile.h1,
    url: pageUrl,
    description: profile.cardDescription,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "The Digital Move",
      url: "https://thedigitalmove.com",
    },
  };

  return (
    <PageWithHeader>
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-20 sm:px-8 lg:px-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Healthcare Solutions", href: "/healthcare" },
            { label: profile.name },
          ]}
        />

        <HeroSection profile={profile} />

        <ChallengeSection
          title={`Challenges ${profile.name.toLowerCase()} face online`}
          challenges={profile.challenges}
          narrative={profile.solutionNarrative}
        />

        <FeatureGrid
          title={`Tailored website features for ${profile.name.toLowerCase()}`}
          intro="These modules are selected to strengthen patient communication, simplify operations, and improve conversion quality for this healthcare segment."
          features={profile.tailoredFeatures}
        />

        <ComparisonTable
          title={`How ${profile.name.toLowerCase()} move from fragmented communication to high-conversion digital journeys`}
          leftLabel="Without a structured healthcare website"
          rightLabel={`With a purpose-built ${profile.specialty.toLowerCase()} website`}
          rows={[
            {
              without: `Patients call ${profile.name.toLowerCase()} repeatedly for basic information and next-step clarity.`,
              with: `Visitors self-educate through structured ${profile.specialty.toLowerCase()} pages and submit higher-quality requests.`,
            },
            {
              without: `Visibility for ${profile.specialty.toLowerCase()} services depends heavily on referrals and word-of-mouth alone.`,
              with: `SEO-focused treatment pages attract qualified local demand for ${profile.name.toLowerCase()} consistently.`,
            },
            {
              without: `Booking requests for ${profile.name.toLowerCase()} capture minimal context, forcing repeated back-and-forth messages.`,
              with: `Guided intake captures treatment intent, urgency, and preparation details upfront for faster triage.`,
            },
            {
              without: `Digital brand perception underrepresents your ${profile.specialty.toLowerCase()} team quality and expertise.`,
              with: `Premium design language reinforces trust before the first ${profile.specialty.toLowerCase()} consultation.`,
            },
          ]}
        />

        <Timeline title={`Example ${profile.specialty.toLowerCase()} patient journey`} steps={profile.patientJourney} />

        <BenefitsSection title={`SEO benefits for ${profile.name.toLowerCase()}`} benefits={profile.seoBenefits} />

        <ClinicOperationsSection profile={profile} />

        <FAQSection title={`${profile.name} website FAQs`} items={profile.faq} />

        <BlogPreview
          title={`Recommended ${profile.name.toLowerCase()} blog topics`}
          profession={profile.name}
          articles={profile.blogArticles}
        />

        <TestimonialSection profession={profile.name} />

        <ContextualLinkPanel
          currentSlug={profile.slug as HealthcareSlug}
          allProfiles={healthcareProfiles}
        />

        <CTASection
          profession={profile.name}
          primary={profile.ctaPrimary}
          secondary={profile.ctaSecondary}
          tertiary={profile.ctaTertiary}
        />
      </main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={medicalBusinessSchema} />
      <JsonLd data={webpageSchema} />
    </PageWithHeader>
  );
}
