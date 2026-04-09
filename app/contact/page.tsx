import type { Metadata } from "next";
import { Mail, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the ENSAM Meknès African Network team, student representatives, and explore common questions."
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Contact and FAQ"
        description="Use the form to send suggestions, share your experience, or request guidance. This is a front-end demonstration form for the class project."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <Users size={20} className="text-brand-700" />
          <h2 className="mt-3 text-lg font-semibold text-slate-900">Project Team</h2>
          <p className="mt-2 text-sm text-slate-600">English class student group coordinating research, interviews, and website content.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <Users size={20} className="text-brand-700" />
          <h2 className="mt-3 text-lg font-semibold text-slate-900">Student Representatives</h2>
          <p className="mt-2 text-sm text-slate-600">Volunteer students supporting orientation and peer guidance for new arrivals.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <Mail size={20} className="text-brand-700" />
          <h2 className="mt-3 text-lg font-semibold text-slate-900">Email Placeholder</h2>
          <p className="mt-2 text-sm text-slate-600">ensam.african.network@student-placeholder.ma</p>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
        <form className="mt-4 grid gap-4 md:grid-cols-2" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Full name
            </label>
            <input id="name" type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input id="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
              Subject
            </label>
            <input id="subject" type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea id="message" rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" required />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-900">
              Send (UI only)
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer list-none font-medium text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
