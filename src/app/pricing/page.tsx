import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "Engagement Models and Collaboration Paths | The Digital Move",
  description:
    "Explore collaboration options designed for long-term digital growth, from focused strategy to full website and automation execution.",
  alternates: { canonical: "https://thedigitalmove.com/pricing" },
};

const models = [
  {
    title: "Strategy Sprint",
    detail: "A focused engagement to map website, SEO and automation priorities with a concrete execution roadmap.",
  },
  {
    title: "Build and Launch",
    detail: "End-to-end delivery of conversion-ready website architecture, service clusters and measurement setup.",
  },
  {
    title: "Growth Partnership",
    detail: "Ongoing optimization for SEO expansion, content authority and digital performance maturity.",
  },
];

export default function PricingPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Pricing</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Collaboration Paths Built Around Quality, Clarity and Outcomes</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We structure engagements to match your business stage, growth goals and internal capacity, with transparent scope and measurable milestones.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/website-plans" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">View Founder Initiative</Link>
            <Link href="/business-health-check" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Business Health Check</Link>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {models.map((model) => (
            <article key={model.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{model.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{model.detail}</p>
            </article>
          ))}
        </section>
      </main>
    </PageWithHeader>
  );
}
