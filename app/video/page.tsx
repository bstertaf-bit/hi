import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Project Video",
  description:
    "Watch the English class project video about African students at ENSAM Meknès and its connection to this digital hub."
};

export default function VideoPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Class Project Video"
        description="This dedicated page presents the media component of our English class project and how it complements the website's educational mission."
      />

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="aspect-video w-full bg-slate-900 p-6 text-white">
          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-white/40">
            <p className="text-lg font-semibold">Video Placeholder</p>
            <p className="mt-2 max-w-md text-center text-sm text-slate-200">
              Embed the final class project video here (YouTube, Drive, or local media link)
              once approved for presentation.
            </p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-slate-900">Project summary</h2>
          <p className="mt-3 text-sm text-slate-600">
            The video documents the everyday experiences of African students in Morocco,
            focusing on adaptation, academic challenges, cultural exchange, and community support.
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">Key themes covered</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Arrival and first impressions in Meknès</li>
            <li>Academic adaptation at ENSAM Meknès</li>
            <li>Social and cultural integration strategies</li>
            <li>Comparative reflections on education systems</li>
            <li>Collective vision for inclusion and student success</li>
          </ul>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">Relation to the website</h3>
          <p className="mt-3 text-sm text-slate-600">
            The video provides narrative context, while this website offers structured resources,
            practical guidance, and community access points for continued student support.
          </p>
        </div>
      </section>
    </div>
  );
}
