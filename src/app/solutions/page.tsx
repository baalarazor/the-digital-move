import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";

export const metadata: Metadata = {
  title: "Solutions Architecture | The Digital Move",
  description:
    "Explore solution ecosystems for healthcare, service businesses and local growth use cases designed for SEO authority and conversion.",
  alternates: { canonical: "https://thedigitalmove.com/solutions" },
};

const cards = [
  {
    title: "Healthcare Solutions",
    description: "Profession-specific digital architecture for clinics and healthcare practices.",
    href: "/healthcare",
  },
  {
    title: "Industry Solutions",
    description: "Dedicated landing systems for verticals such as legal, hospitality, retail and education.",
    href: "/industries",
  },
  {
    title: "Location SEO Solutions",
    description: "City-focused pages and local intent mapping for lead generation across Germany.",
    href: "/locations",
  },
];

export default function SolutionsHubPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Solutions</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Solution Ecosystems Built for Commercial Search Intent</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            This section groups strategic solution clusters to help businesses find the most relevant path based on industry, location and digital maturity.
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                Explore
              </Link>
            </article>
          ))}
        </section>
      </main>
    </PageWithHeader>
  );
}
