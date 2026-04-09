import Link from "next/link";

export function JoinCTA() {
  return (
    <section className="rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50 to-accent-100 p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Join the Network</h2>
          <p className="mt-2 max-w-2xl text-slate-700">
            Share your experience, support new students, and help strengthen an
            inclusive African student community at ENSAM Meknès.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
        >
          Contact the Team
        </Link>
      </div>
    </section>
  );
}
