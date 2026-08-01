import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "SEO Blog & Digital Growth Insights | The Digital Move",
  description: "Practical blog content for German businesses covering SEO, AI automation, local digital marketing, website development, and business automation.",
  alternates: { canonical: "https://thedigitalmove.com/blog" },
};

const posts = [
  {
    title: "Website Development in Berlin: What Small Businesses Need in 2026",
    slug: "website-development-berlin-small-businesses-2026",
    summary: "A practical guide to building a lead-focused website that supports Google visibility and better conversions.",
  },
  {
    title: "AI Automation for German SMEs: Where to Start",
    slug: "ai-automation-german-smes-where-to-start",
    summary: "How small and medium businesses can adopt AI automation in a realistic and cost-effective way.",
  },
  {
    title: "Local SEO for Dentists and Clinics in Berlin",
    slug: "local-seo-dentists-clinics-berlin",
    summary: "A guide to improving search visibility and trust for local healthcare businesses.",
  },
  {
    title: "How to Improve Your Google Business Profile for More Calls and Leads",
    slug: "google-business-profile-optimization-leads",
    summary: "A practical checklist for increasing leads and visibility with Google Business Profile optimization.",
  },
];

export default function BlogPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Blog</span>
        </nav>
        <div className="mt-6 space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">SEO and Digital Growth Articles for German Businesses</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Our blog content focuses on practical advice for website development, AI automation, SEO, local visibility, and digital growth.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{post.summary}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-600">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </PageWithHeader>
  );
}
