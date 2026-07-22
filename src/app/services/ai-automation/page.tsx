import Link from "next/link";

export const metadata = {
  title: "AI Automation | The Digital Move",
  description: "AI automation services to reduce manual work, improve decision-making, and create intelligent business workflows.",
};

export default function AIAutomationPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/services" className="text-sm font-medium text-blue-600">← Back to services</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">AI Automation</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          We build AI-powered systems that automate routine decisions, extract insights from data, and enable smarter business operations.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• AI copilots for sales, customer service, or internal process guidance</li>
            <li>• Intelligent data capture, classification, and decision support</li>
            <li>• Automated document handling, approvals, and customer responses</li>
            <li>• Custom AI workflows that integrate with your existing tools</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            AI automation is ideal for teams that rely on repeatable decisions, customer outreach, knowledge search, or document review. We help businesses move from manual effort to smart digital assistance.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>1. We map your current process and identify AI-enabled opportunities.</li>
            <li>2. We design the automation workflow and data flow across systems.</li>
            <li>3. We build, test, and deploy a production-ready AI workflow.</li>
            <li>4. We review results, refine outcomes, and scale the solution.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
