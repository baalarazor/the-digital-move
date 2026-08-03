import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { industryNodes } from "@/lib/seo-ecosystem";

export const metadata: Metadata = {
  title: "Industries We Support in Germany | The Digital Move",
  description:
    "Industry-specific website development, SEO and AI automation solutions for healthcare, legal, hospitality, retail and professional service businesses across Germany.",
  alternates: { canonical: "https://thedigitalmove.com/industries" },
  openGraph: {
    title: "Industry Solutions | The Digital Move",
    description:
      "Explore tailored digital growth solutions by industry, from healthcare and law firms to retail, construction and hospitality.",
    url: "https://thedigitalmove.com/industries",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Solutions | The Digital Move",
    description:
      "Dedicated industry pages for businesses looking for conversion-focused websites and SEO growth in Germany.",
    images: ["/og-image.svg"],
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Industries", url: "https://thedigitalmove.com/industries" },
]);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industry Solutions",
  url: "https://thedigitalmove.com/industries",
  hasPart: industryNodes.map((item) => ({
    "@type": "WebPage",
    name: item.name,
    url: `https://thedigitalmove.com/industries/${item.slug}`,
  })),
};

export default function IndustriesHubPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Industries</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Industry-Specific Digital Solutions for German Businesses</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Every industry has different trust factors, search behavior and conversion friction. We build service architecture and content systems that match how your market actually evaluates providers.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industryNodes.map((industry) => (
            <article key={industry.slug} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-slate-950">{industry.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{industry.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.keywords.slice(0, 2).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">{keyword}</span>
                ))}
              </div>
              <Link href={`/industries/${industry.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                View industry page
              </Link>
            </article>
          ))}
        </section>
      </main>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collectionSchema} />
    </PageWithHeader>
  );
}
