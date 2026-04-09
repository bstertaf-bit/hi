"use client";

import { useMemo, useState } from "react";
import { experiences, experienceTags } from "@/data/experiences";

export function ExperienceGrid() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("all");

  const filtered = useMemo(() => {
    return experiences.filter((item) => {
      const byTag = activeTag === "all" || item.tags.some((tag) => tag === activeTag);
      const searchable = `${item.firstName} ${item.country} ${item.program} ${item.summary}`.toLowerCase();
      const byQuery = searchable.includes(query.toLowerCase());
      return byTag && byQuery;
    });
  }, [activeTag, query]);

  return (
    <section className="space-y-5">
      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <label className="sr-only" htmlFor="search-experiences">
          Search student experiences
        </label>
        <input
          id="search-experiences"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by country, field, or keyword"
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none ring-brand-500 focus:ring-2"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              activeTag === "all" ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            All
          </button>
          {experienceTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                activeTag === tag ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
          No experiences match this filter. Try another keyword or category.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <article key={item.firstName} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.firstName} <span className="text-sm text-slate-500">({item.country})</span>
                </h3>
                <p className="text-xs font-medium uppercase tracking-wide text-brand-700">{item.program}</p>
              </div>
              <blockquote className="mt-3 border-l-2 border-brand-300 pl-3 text-sm italic text-slate-700">
                “{item.quote}”
              </blockquote>
              <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={`${item.firstName}-${tag}`} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
