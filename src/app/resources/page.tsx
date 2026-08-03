import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";
import { blogIdeaBank, keywordOpportunityClusters } from "@/lib/seo-ecosystem";

export const metadata: Metadata = {
  title: "SEO Resources and Growth Playbooks | The Digital Move",
  description:
    "Keyword strategy, topic clusters and SEO content planning resources for German businesses focused on website development, AI automation and digital growth.",
  alternates: { canonical: "https://thedigitalmove.com/resources" },
  openGraph: {
    title: "SEO Resources | The Digital Move",
    description: "Explore keyword opportunities, topic clusters and over 100 SEO-focused blog ideas.",
    url: "https://thedigitalmove.com/resources",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
};

export default function ResourcesPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Resources</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">SEO Resources, Keyword Strategy and Topic Authority System</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            This resource hub maps commercial-intent opportunities across website development, SEO and AI automation for long-term organic growth in Germany.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          {keywordOpportunityClusters.map((cluster) => (
            <article key={cluster.cluster} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{cluster.cluster}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {cluster.terms.map((term) => (
                  <span key={term} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                    {term}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Blog strategy bank: 100+ SEO article ideas</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Each article should internally link to relevant service, industry and location pages to improve topical depth and lead intent mapping.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {blogIdeaBank.map((idea) => (
              <div key={idea} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {idea}
              </div>
            ))}
          </div>
          <Link href="/blog" className="mt-7 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Open Blog Hub
          </Link>
        </section>
      </main>
    </PageWithHeader>
  );
}
