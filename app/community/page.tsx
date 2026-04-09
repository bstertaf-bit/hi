import type { Metadata } from "next";
import { CommunityGrid } from "@/components/community-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Community & Countries",
  description:
    "Explore African student representation by country at ENSAM Meknès, with integration insights and community highlights."
};

export default function CommunityPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Community and Countries"
        description="African students from different countries contribute to a dynamic, supportive learning environment at ENSAM Meknès."
      />
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          The cards below illustrate sample country representation and common integration
          notes gathered from student discussions. Use the region chips to explore patterns.
        </p>
      </section>
      <CommunityGrid />
    </div>
  );
}
