import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            ENSAM Meknès African Network
          </h2>
          <p className="text-sm text-slate-600">
            Student-led platform created for an English class project to promote
            unity, guidance, and inclusion for African students in Meknès.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Navigation
          </h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Social (placeholders)
          </h3>
          <div className="mt-3 flex gap-3 text-slate-600">
            <span className="rounded-full border border-slate-300 p-2" aria-label="Facebook placeholder">
              <Facebook size={16} />
            </span>
            <span className="rounded-full border border-slate-300 p-2" aria-label="Instagram placeholder">
              <Instagram size={16} />
            </span>
            <span className="rounded-full border border-slate-300 p-2" aria-label="LinkedIn placeholder">
              <Linkedin size={16} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
