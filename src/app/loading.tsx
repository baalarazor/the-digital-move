export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10" aria-busy="true" aria-live="polite">
      <div className="h-6 w-44 animate-pulse rounded-full bg-slate-200" />
      <div className="mt-6 h-14 max-w-3xl animate-pulse rounded-2xl bg-slate-200" />
      <div className="mt-4 h-6 max-w-2xl animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
        <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
        <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
      </div>
    </div>
  );
}
