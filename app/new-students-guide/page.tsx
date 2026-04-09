import type { Metadata } from "next";
import { JoinCTA } from "@/components/join-cta";
import { PageHero } from "@/components/page-hero";
import { guideSections, topTenTips } from "@/data/guide";

export const metadata: Metadata = {
  title: "New Students Guide",
  description:
    "A practical guide for new African students arriving in Meknès to study at ENSAM, including housing, transport, and academic adaptation advice."
};

export default function NewStudentsGuidePage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="New Students Guide"
        description="Practical recommendations to help new African students settle confidently in Meknès and succeed in their first academic year at ENSAM."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {guideSections.map((section) => (
          <article key={section.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{section.content}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-accent-100 bg-accent-100/40 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Top 10 tips for a smoother transition</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {topTenTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ol>
      </section>

      <JoinCTA />
    </div>
  );
}
