import Link from "next/link";
import { Globe, GraduationCap, Handshake, Users } from "lucide-react";
import { JoinCTA } from "@/components/join-cta";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experiences";
import { siteConfig, statistics } from "@/data/site";

const highlights = [
  {
    title: "Student community",
    description:
      "Connect African students across departments, levels, and national backgrounds.",
    icon: Users
  },
  {
    title: "Educational comparison",
    description:
      "Understand how teaching, grading, and learning culture differ from home systems.",
    icon: GraduationCap
  },
  {
    title: "Integration support",
    description:
      "Access practical guidance for accommodation, administration, language, and city life.",
    icon: Handshake
  },
  {
    title: "Cultural diversity",
    description:
      "Celebrate the richness of African cultures and build inclusive student belonging.",
    icon: Globe
  }
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">ENSAM Meknès English Project</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{siteConfig.tagline}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/community"
            className="rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
          >
            Explore the Community
          </Link>
          <Link
            href="/new-students-guide"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Read the New Students Guide
          </Link>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Project focus"
          title="A digital hub for African students at ENSAM Meknès"
          description="This platform shares real student perspectives and practical insights to help new arrivals adapt successfully while promoting academic collaboration and intercultural understanding."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <item.icon className="text-brand-700" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="At a glance" title="Featured statistics" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-brand-100 bg-brand-50 p-5 text-center">
              <p className="text-3xl font-bold text-brand-900">{stat.value}</p>
              <p className="mt-2 text-sm text-brand-700">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Student voices"
          title="Testimonials preview"
          description="Short stories from students who adapted to academic life and social integration in Meknès."
          actions={
            <Link href="/experiences" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
              View all experiences →
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {experiences.slice(0, 3).map((item) => (
            <article key={item.firstName} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm italic text-slate-700">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {item.firstName} · {item.country}
              </p>
              <p className="text-xs text-slate-500">{item.program}</p>
            </article>
          ))}
        </div>
      </section>

      <JoinCTA />

      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">One continent, many stories, one shared future.</h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          By learning from each other and supporting every new student, we build an
          academic community where African unity, excellence, and integration grow
          together at ENSAM Meknès.
        </p>
      </section>
    </div>
  );
}
