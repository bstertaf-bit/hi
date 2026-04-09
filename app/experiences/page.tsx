import type { Metadata } from "next";
import { ExperienceGrid } from "@/components/experience-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Student Experiences",
  description:
    "Read student testimonies on academic life, housing, language, and social integration at ENSAM Meknès."
};

export default function ExperiencesPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Student Experiences"
        description="These testimonials highlight everyday realities, adaptation strategies, and advice from African students studying at ENSAM Meknès."
      />
      <ExperienceGrid />
    </div>
  );
}
