import type { Metadata } from "next";
import { JoinCTA } from "@/components/join-cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why the ENSAM Meknès African Network was created and how it supports African students through community, guidance, and education-system comparison."
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="About the Project"
        description="ENSAM Meknès African Network is a student-centered platform created to support African students academically, socially, and culturally during their studies in Morocco."
      />

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Why this platform was created</h2>
          <p className="mt-3 text-sm text-slate-600">
            Many students arrive in Meknès with ambition but limited practical
            information about housing, daily life, and academic expectations. This
            platform centralizes student knowledge to reduce uncertainty and support
            smoother transitions.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Project objectives</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Build stronger connections between African students at ENSAM Meknès.</li>
            <li>Share practical integration advice from real student experiences.</li>
            <li>Present respectful educational comparisons for learning and reflection.</li>
            <li>Promote diversity, mutual support, and academic confidence.</li>
          </ul>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">African students at ENSAM Meknès</h2>
        <p className="mt-3 text-sm text-slate-600">
          African students contribute significantly to the intellectual and cultural
          life of ENSAM Meknès. Their perspectives strengthen collaborative projects,
          broaden classroom dialogue, and enrich campus diversity. This network honors
          those contributions while creating practical pathways for future cohorts.
        </p>
      </section>

      <section className="rounded-xl border border-brand-100 bg-brand-50 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">English class project and video connection</h2>
        <p className="mt-3 text-sm text-slate-700">
          This website extends an English class project that includes a video focused
          on African student life in Morocco, integration challenges, and comparisons
          between educational systems in home countries and Morocco. Together, the
          video and website create a complete academic presentation: visual storytelling
          plus practical digital resources.
        </p>
      </section>

      <JoinCTA />
    </div>
  );
}
