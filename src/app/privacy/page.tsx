import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/" className="text-sm font-medium text-blue-600">← Back home</Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">Privacy Policy</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">We respect your privacy and only use data needed to provide our services and improve your experience.</p>
      <div className="mt-10 space-y-6 text-sm leading-8 text-slate-700">
        <p>We collect contact details you submit through forms in order to respond to your inquiry. Your information is used only for business communication and service delivery.</p>
        <p>We may use cookies to remember your preferences and improve performance. You can disable cookies in your browser settings if you prefer.</p>
        <p>We do not sell personal information to third parties. We may share limited information with trusted service providers that help us operate the website.</p>
      </div>
    </main>
  );
}
