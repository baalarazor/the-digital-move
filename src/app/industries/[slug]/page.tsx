import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";
import { industryNodeBySlug, industryNodes } from "@/lib/seo-ecosystem";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryNodes.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryNodeBySlug[slug];

  if (!industry) {
    return {
      title: "Industry Page Not Found | The Digital Move",
      description: "The requested industry page does not exist.",
    };
  }

  const canonical = `https://thedigitalmove.com/industries/${industry.slug}`;

  return {
    title: `${industry.name} Website Development in Germany | The Digital Move`,
    description: industry.summary,
    keywords: industry.keywords,
    alternates: { canonical },
    openGraph: {
      title: `${industry.name} Digital Solutions | The Digital Move`,
      description: industry.summary,
      url: canonical,
      siteName: "The Digital Move",
      type: "website",
      images: ["/og-image.svg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Digital Solutions | The Digital Move`,
      description: industry.summary,
      images: ["/og-image.svg"],
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryNodeBySlug[slug];

  if (!industry) {
    notFound();
  }

  const canonical = `https://thedigitalmove.com/industries/${industry.slug}`;

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://thedigitalmove.com/" },
    { name: "Industries", url: "https://thedigitalmove.com/industries" },
    { name: industry.name, url: canonical },
  ]);

  const faq = buildFaqSchema(industry.faq);

  const related = industryNodes.filter((item) => item.slug !== industry.slug).slice(0, 6);

  const serviceMapLink =
    industry.slug === "healthcare" || industry.slug === "dentists" || industry.slug === "doctors" || industry.slug === "physiotherapists"
      ? "/healthcare"
      : "/services";

  const positioningPillars = [
    {
      title: "Trust architecture",
      detail: "Show proof, credentials, and clear service boundaries so users understand why your business is the safe choice.",
    },
    {
      title: "Intent-led visibility",
      detail: "Align page structure with the way your target audience actually searches and evaluates providers.",
    },
    {
      title: "Conversion clarity",
      detail: "Reduce hesitation with explicit next steps, context-rich forms, and better pre-qualification pathways.",
    },
  ];

  const ninetyDayPriorities = [
    `Rebuild ${industry.name.toLowerCase()} service messaging around user intent clusters and commercial qualifiers.`,
    "Strengthen on-page trust blocks with role-specific proof, FAQs, and operational transparency.",
    "Publish supporting resource content and interlink it to money pages for topical authority growth.",
    "Track lead quality by landing page and iterate on the sections with highest conversion friction.",
  ];

  const strategicLinks = [
    { label: "Core services", href: "/services" },
    { label: "City SEO pages", href: "/locations" },
    { label: "SEO resource hub", href: "/resources" },
    { label: "Founder initiative", href: "/website-plans" },
  ];

  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/industries" className="font-medium text-blue-600">Industries</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{industry.name}</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{industry.headline}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{industry.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/website-plans#lead-form" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Book a Consultation</Link>
            <Link href="/business-health-check" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Business Health Check</Link>
            <Link href={serviceMapLink} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Related Solutions</Link>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Common digital challenges in {industry.name.toLowerCase()}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {industry.painPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">How the right website solves those issues</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              {industry.websiteSolutions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Keyword opportunities for {industry.name.toLowerCase()}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {industry.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">{keyword}</span>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Positioning framework for {industry.name.toLowerCase()}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {positioningPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">First 90-day execution priorities</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {ninetyDayPriorities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {industry.faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Explore other industries</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/industries/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                {item.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Strategic pages to support this industry cluster</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            These pages strengthen internal link equity and help search engines connect industry intent to your service and local authority architecture.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strategicLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faq} />
    </PageWithHeader>
  );
}
