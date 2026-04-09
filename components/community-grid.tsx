"use client";

import { useMemo, useState } from "react";
import { countries } from "@/data/community";

const regions = ["All", "West Africa", "Central Africa"] as const;

export function CommunityGrid() {
  const [region, setRegion] = useState<(typeof regions)[number]>("All");

  const filtered = useMemo(
    () => countries.filter((country) => region === "All" || country.region === region),
    [region]
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter countries by region">
        {regions.map((option) => {
          const isActive = option === region;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setRegion(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-brand-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              aria-pressed={isActive}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((country) => (
          <article
            key={country.name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{country.name}</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {country.students} students
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{country.description}</p>
            <p className="mt-3 text-sm text-slate-700">
              <span className="font-medium text-slate-900">Integration notes:</span>{" "}
              {country.integrationNotes}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
