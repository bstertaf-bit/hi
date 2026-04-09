import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { educationComparisons, keyNotices } from "@/data/education";

export const metadata: Metadata = {
  title: "Education Comparison",
  description:
    "Compare selected African education contexts with Morocco and understand what students notice most at ENSAM Meknès."
};

export default function EducationComparisonPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Education System Comparison"
        description="A respectful overview of how selected home-country learning contexts compare with the ENSAM Meknès environment in Morocco."
      />

      <section className="space-y-4">
        {educationComparisons.map((item) => (
          <article key={item.country} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.country} and Morocco</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <tbody>
                  {[
                    ["Teaching methods", item.teachingMethods],
                    ["Student-teacher relationship", item.relationship],
                    ["Exams and grading", item.exams],
                    ["Academic structure", item.structure],
                    ["Opportunities", item.opportunities],
                    ["Challenges", item.challenges]
                  ].map(([key, value]) => (
                    <tr key={key} className="border-t border-slate-200 first:border-t-0">
                      <th className="w-56 py-3 pr-3 font-semibold text-slate-900">{key}</th>
                      <td className="py-3 text-slate-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-brand-100 bg-brand-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">What students notice most</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {keyNotices.map((notice) => (
            <li key={notice}>{notice}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
