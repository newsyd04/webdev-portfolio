import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/samples", label: "Samples" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-white/5">
      <div className="mx-auto max-w-page px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-snow-50 font-bold text-lg"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400 font-bold">
                N
              </span>
              Dara Newsome
            </Link>
            <p className="mt-4 text-snow-300 text-sm leading-relaxed max-w-sm">
              Freelance web developer based in Dublin, Ireland. Building modern,
              responsive websites for small businesses across the country.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-snow-200 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-snow-300 hover:text-snow-50 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-snow-200 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              Get in touch
            </h4>
            <ul className="space-y-2 text-sm text-snow-300">
              <li>
                <a
                  href="mailto:daranewsome01@gmail.com"
                  className="hover:text-snow-50 transition"
                >
                  daranewsome01@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+353834546712"
                  className="hover:text-snow-50 transition"
                >
                  +353 83 454 6712
                </a>
              </li>
              <li>Dublin, Ireland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-snow-400">
          <p>© {new Date().getFullYear()} Dara Newsome. All rights reserved.</p>
          <p>
            <a
              href="https://daranewso.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-snow-50 transition"
            >
              View full portfolio →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
