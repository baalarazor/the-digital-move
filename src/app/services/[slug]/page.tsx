import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";
import { serviceNodeBySlug, serviceNodes } from "@/lib/seo-ecosystem";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const dynamicServiceSlugs = [
  "website-redesign",
  "website-maintenance",
  "ai-chatbots",
  "seo-optimisation",
  "automation",
  "performance-optimisation",
  "hosting",
  "analytics",
  "maintenance",
];

export function generateStaticParams() {
  return dynamicServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const node = serviceNodeBySlug[slug];

  if (!node) {
    return {
      title: "Service Not Found | The Digital Move",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${node.name} in Germany | The Digital Move`,
    description: node.summary,
    keywords: node.keywords,
    alternates: { canonical: node.canonical },
    openGraph: {
      title: `${node.name} | The Digital Move`,
      description: node.summary,
      url: node.canonical,
      siteName: "The Digital Move",
      type: "website",
      images: ["/og-image.svg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${node.name} | The Digital Move`,
      description: node.summary,
      images: ["/og-image.svg"],
    },
  };
}

export default async function DynamicServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const node = serviceNodeBySlug[slug];

  if (!node) {
    notFound();
  }

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://thedigitalmove.com/" },
    { name: "Services", url: "https://thedigitalmove.com/services" },
    { name: node.name, url: node.canonical },
  ]);

  const faq = buildFaqSchema(node.faq);

  const serviceSchema = buildServiceSchema({
    name: node.name,
    description: node.summary,
    url: node.canonical,
    serviceType: node.name,
  });

  const related = serviceNodes.filter((service) => service.slug !== node.slug).slice(0, 6);

  const prioritySignals = [
    `You are attracting visitors but not converting enough qualified enquiries for ${node.name.toLowerCase()}.`,
    `Your current pages do not clearly map user intent to a focused next step.`,
    `You need a repeatable digital system instead of one-off tactical fixes.`,
    `You want measurable outcomes tied to growth, not just design deliverables.`,
  ];

  const executionBlueprint = [
    {
      title: "Discovery and baseline audit",
      detail: `We map search intent, conversion friction, and technical constraints specific to ${node.name.toLowerCase()} initiatives.`,
    },
    {
      title: "Architecture and messaging design",
      detail: "We define page structure, offer hierarchy, and decision-support messaging that aligns with buyer evaluation behavior.",
    },
    {
      title: "Build, QA, and launch readiness",
      detail: "We implement, test, and harden performance, metadata, and conversion pathways before rollout.",
    },
    {
      title: "Optimization and scale loop",
      detail: "We monitor user behavior and iterate on high-impact sections to improve lead quality over time.",
    },
  ];

  const supportingLinks = [
    { label: "Industry pages", href: "/industries" },
    { label: "Location pages", href: "/locations" },
    { label: "SEO resources", href: "/resources" },
    { label: "Healthcare solutions", href: "/healthcare" },
  ];

  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="font-medium text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{node.name}</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{node.headline}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{node.summary}</p>
          <p className="mt-5 text-sm text-slate-700"><span className="font-semibold">Search intent:</span> {node.intent}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/website-plans#lead-form" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Book a Consultation</Link>
            <Link href="/business-health-check" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Business Health Check</Link>
            <Link href="/#contact" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Request Quote</Link>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What is included</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {node.capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Business outcomes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {node.outcomes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">When to prioritize this service</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Teams usually see the strongest impact from this service when these signals are already present.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {prioritySignals.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Execution blueprint for {node.name.toLowerCase()}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {executionBlueprint.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Phase {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Keyword opportunities this page targets</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {node.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">{keyword}</span>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {node.faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((service) => (
              <Link key={service.slug} href={service.href} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                {service.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Supporting pages that strengthen ranking performance</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Strong service-page performance improves when linked with industry, location, and educational pages that reinforce topical depth.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportingLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faq} />
      <JsonLd data={serviceSchema} />
    </PageWithHeader>
  );
}
