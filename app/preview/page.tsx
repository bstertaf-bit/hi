import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preview",
  description:
    "Quick visual preview page for all ENSAM Meknès African Network sections."
};

const sections = [
  { href: "/", name: "Home", summary: "Hero, statistics, highlights, testimonials, CTA." },
  { href: "/about", name: "About", summary: "Project purpose, objectives, and class-video context." },
  { href: "/community", name: "Community", summary: "Country cards with region filters and integration notes." },
  { href: "/experiences", name: "Experiences", summary: "Searchable, tag-filtered testimonial cards." },
  { href: "/education-comparison", name: "Education Comparison", summary: "Country-vs-Morocco comparison tables and key notices." },
  { href: "/new-students-guide", name: "New Students Guide", summary: "Practical guidance sections plus top 10 tips." },
  { href: "/video", name: "Video", summary: "Professional video placeholder and thematic summary." },
  { href: "/contact", name: "Contact", summary: "UI-only contact form, contact cards, and FAQ." }
];

export default function PreviewPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Website Preview
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Use this page to quickly preview every section of the ENSAM Meknès African
          Network website before class presentation.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{section.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{section.summary}</p>
            <Link
              href={section.href}
              className="mt-4 inline-flex rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-900"
            >
              Open page
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
