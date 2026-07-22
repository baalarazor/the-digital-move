import Link from "next/link";

export const metadata = {
  title: "Website Development | The Digital Move",
  description: "Website development services for modern, high-converting, SEO-friendly business websites and landing pages.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/services" className="text-sm font-medium text-blue-600">← Back to services</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Website Development</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          We build modern websites and landing pages designed to convert visitors, improve SEO, and support your business growth goals.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• Responsive websites built for performance and accessibility</li>
            <li>• Landing pages optimized for lead generation and conversion</li>
            <li>• SEO-friendly content structure, metadata, and page speed</li>
            <li>• Ongoing site support, analytics, and growth recommendations</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This service is for businesses that want a professional online presence that attracts prospects, communicates value clearly, and converts visitors into leads.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>1. We define your website goals, audience, and conversion targets.</li>
            <li>2. We design the customer experience, page layout, and content flow.</li>
            <li>3. We build the site with modern web technology and SEO best practices.</li>
            <li>4. We launch, monitor performance, and iterate based on visitor data.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
