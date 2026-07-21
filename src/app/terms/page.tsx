import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/" className="text-sm font-medium text-blue-600">← Back home</Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">Terms</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">These terms describe how visitors may use the website and what to expect from our services.</p>
      <div className="mt-10 space-y-6 text-sm leading-8 text-slate-700">
        <p>The content of this website is provided for informational purposes. We may update content or services at any time without notice.</p>
        <p>Any project-related agreements will be governed by a separate written contract where required.</p>
        <p>Visitors should not submit sensitive or confidential information through public forms without prior agreement.</p>
      </div>
    </main>
  );
}
