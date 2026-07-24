import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "System Integration Services in Berlin | CRM & API Integration | The Digital Move",
  description: "Professional system integration services in Berlin for CRM, collaboration tools, and API workflows. Keep your business connected and efficient.",
  keywords: ["system integration Berlin", "CRM integration Berlin", "API integration services", "business system integration", "data integration Berlin"],
  alternates: {
    canonical: "https://thedigitalmove.com/services/system-integration",
  },
  openGraph: {
    title: "System Integration Services in Berlin | The Digital Move",
    description: "CRM, API, and business system integration services for connected operations in Berlin.",
    url: "https://thedigitalmove.com/services/system-integration",
    siteName: "The Digital Move",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Integration Services in Berlin | The Digital Move",
    description: "API, CRM, and collaboration tool integrations for Berlin businesses.",
    images: ["/og-image.svg"],
  },
};

const serviceSchema = buildServiceSchema({
  name: "System Integration Services in Berlin",
  description: "CRM, collaboration, and API integration services in Berlin that keep your business systems connected.",
  url: "https://thedigitalmove.com/services/system-integration",
  serviceType: "System Integration",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "https://thedigitalmove.com/" },
  { name: "Services", url: "https://thedigitalmove.com/services" },
  { name: "System Integration", url: "https://thedigitalmove.com/services/system-integration" },
]);

export default function SystemIntegrationPage() {
  return (
    <>
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/services" className="text-sm font-medium text-blue-600">← Back to services</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">System Integration</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          We connect your CRM, email, collaboration tools, and APIs so data flows automatically across your business.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• CRM and customer data synchronization</li>
            <li>• Microsoft 365, Google Workspace, Slack, and Jira integrations</li>
            <li>• API-based automation and cross-system workflows</li>
            <li>• Data quality, monitoring, and error recovery support</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This service helps companies that need reliable data flow across tools, want to eliminate manual handoffs, and need connected customer or operations systems.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>1. We audit your current systems and define integration points.</li>
            <li>2. We map the data flows and design the integration architecture.</li>
            <li>3. We build and test the integration to ensure data moves reliably.</li>
            <li>4. We monitor connected workflows and refine them over time.</li>
          </ol>
        </section>
      </div>
    </main>
    <JsonLd data={serviceSchema} />
    <JsonLd data={breadcrumbSchema} />
    </>
  );
}
