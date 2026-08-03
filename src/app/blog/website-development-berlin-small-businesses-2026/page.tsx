import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "Website Development in Berlin: What Small Businesses Need in 2026 | The Digital Move",
  description: "A practical guide to website development in Berlin for small businesses that want better Google visibility, stronger trust, and more leads.",
  alternates: { canonical: "https://thedigitalmove.com/blog/website-development-berlin-small-businesses-2026" },
};

export default function BlogPostPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Website Development in Berlin: What Small Businesses Need in 2026",
    description: "A practical guide to website development in Berlin for small businesses that want better Google visibility, stronger trust, and more leads.",
    author: {
      "@type": "Person",
      name: "Baala",
    },
    publisher: {
      "@type": "Organization",
      name: "The Digital Move",
      logo: {
        "@type": "ImageObject",
        url: "https://thedigitalmove.com/og-image.svg",
      },
    },
    mainEntityOfPage: "https://thedigitalmove.com/blog/website-development-berlin-small-businesses-2026",
  };

  return (
    <PageWithHeader>
      <main className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="font-medium text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Website Development in Berlin</span>
        </nav>
        <article className="mt-8 space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development in Berlin: What Small Businesses Need in 2026</h1>
            <p className="text-lg leading-8 text-slate-600">A strong website is no longer optional for small businesses in Berlin. It is a core tool for trust, lead generation, and local visibility.</p>
          </div>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Why a modern website matters</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">A website should help visitors understand what you do quickly, trust your business, and contact you with minimal friction. For Berlin-based businesses, it also needs to support local and organic visibility in Google.</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What to prioritize</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Fast mobile experience</li>
              <li>• Clear conversion paths</li>
              <li>• Strong SEO foundations</li>
              <li>• Clear service pages and trust signals</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Related implementation pages</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/services/website-development" className="text-blue-600 hover:text-blue-700">Website Development Service</Link>
              <Link href="/services/seo-optimisation" className="text-blue-600 hover:text-blue-700">SEO Optimisation Service</Link>
              <Link href="/locations/berlin" className="text-blue-600 hover:text-blue-700">Berlin Location Page</Link>
            </div>
          </section>
        </article>
      </main>
      <JsonLd data={articleSchema} />
    </PageWithHeader>
  );
}
