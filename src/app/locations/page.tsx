import type { Metadata } from "next";
import Link from "next/link";
import { PageWithHeader } from "@/components/page-with-header";
import { cityNodes } from "@/lib/seo-ecosystem";

export const metadata: Metadata = {
  title: "Location SEO Pages Across Germany | The Digital Move",
  description:
    "City-specific website development, SEO and digital transformation landing pages for businesses in Germany.",
  alternates: { canonical: "https://thedigitalmove.com/locations" },
};

export default function LocationsHubPage() {
  return (
    <PageWithHeader>
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-medium text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Locations</span>
        </nav>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Local Growth Solutions for Businesses Across Germany</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Explore city-focused pages designed for local intent queries and commercial lead generation.
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cityNodes.map((city) => (
            <article key={city.slug} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{city.city}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{city.summary}</p>
              <Link href={`/locations/${city.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                View city page
              </Link>
            </article>
          ))}
        </section>
      </main>
    </PageWithHeader>
  );
}
