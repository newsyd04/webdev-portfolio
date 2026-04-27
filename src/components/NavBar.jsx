import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/samples", label: "Samples" },
  { to: "/pricing", label: "Pricing" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll-aware: solid background once scrolled past hero glow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    document.body.classList.toggle("nav-locked", isOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled
            ? "bg-ink-950/85 backdrop-blur border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-page px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-snow-50 font-bold text-lg"
            aria-label="Home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400 font-bold">
              N
            </span>
            <span className="hidden sm:inline">Dara Newsome</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition ${
                      isActive
                        ? "text-snow-50 bg-white/5"
                        : "text-snow-300 hover:text-snow-50 hover:bg-white/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side: contact CTA on desktop, hamburger on mobile */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition shadow-lg shadow-accent-500/20"
            >
              Get a quote
              <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden />
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center gap-2 h-10 px-3 rounded-full border border-white/15 text-snow-100 hover:bg-white/5"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((o) => !o)}
            >
              <span className="relative w-4 h-3 inline-block">
                <span
                  className={`absolute left-0 right-0 h-[2px] bg-current rounded transition ${
                    isOpen ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] bg-current rounded transition top-[5px] ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] bg-current rounded transition ${
                    isOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
              <span className="text-sm font-medium">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-ink-950 md:hidden transition-opacity duration-200 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col pt-24 px-6 pb-10">
          <ul className="flex-1 flex flex-col items-stretch gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block px-4 py-4 rounded-xl text-lg font-semibold transition ${
                      isActive
                        ? "text-snow-50 bg-white/5"
                        : "text-snow-200 hover:bg-white/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 rounded-full text-base font-semibold"
          >
            Get a quote
            <i className="fa-solid fa-arrow-right" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
