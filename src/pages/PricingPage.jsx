"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

const TIERS = [
  {
    name: "Starter",
    price: "€500",
    cadence: "one-off",
    blurb: "A polished one-page site for small businesses just getting online.",
    features: [
      "1 page (long-form, scrolling)",
      "Mobile-first responsive design",
      "Contact form + click-to-call",
      "Custom domain setup",
      "Basic SEO meta tags",
      "1 round of revisions",
      "Hosting setup (you own it)",
    ],
    suitedFor: "Tradespeople, single-service businesses",
    cta: { label: "Get a quote", to: "/contact" },
  },
  {
    name: "Standard",
    price: "€900",
    cadence: "one-off",
    blurb: "Multi-page site for established businesses ready for serious traffic.",
    features: [
      "Up to 5 pages (Home, About, Services, etc.)",
      "Mobile-first responsive design",
      "Contact form + Google Maps embed",
      "Custom domain + email setup",
      "Full SEO pass (meta, og:image, sitemap)",
      "2 rounds of revisions",
      "Hosting setup (you own it)",
      "30 days of small-tweak support",
    ],
    suitedFor: "Local businesses, photographers, small shops",
    cta: { label: "Get a quote", to: "/contact" },
    featured: true,
  },
  {
    name: "Custom",
    price: "From €1,500",
    cadence: "scope-dependent",
    blurb:
      "E-commerce, booking flows, custom backends, multi-language · built around your needs.",
    features: [
      "Everything in Standard",
      "E-commerce (Stripe / PayPal)",
      "Bookings or scheduling",
      "Custom backend / database",
      "Admin panel for content updates",
      "Multi-language if needed",
      "Bespoke quote and timeline",
    ],
    suitedFor: "Larger businesses, anyone with bespoke requirements",
    cta: { label: "Discuss your project", to: "/contact" },
  },
];

const ADDONS = [
  { label: "Logo design", price: "€200" },
  { label: "Photography session (Dublin)", price: "from €200" },
  {
    label: "Yearly maintenance retainer",
    price: "€50/yr",
    note: "Cancel at any renewal",
  },
  {
    label: "Hosting & domain (your choice)",
    price: "from €25/yr",
    note: "Managed by me, or set up in your own account",
  },
];

const FAQ = [
  {
    q: "What's included in the price?",
    a: "Design, code, deployment, domain setup, and a written specification. The price you're quoted is the price you pay · no hourly billing surprises.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. You own the code, the domain, and the hosting account. If we ever stop working together, the site stays with you.",
  },
  {
    q: "How long does it take?",
    a: "Starter: about 1 to 2 weeks. Standard: 2 to 4 weeks. Custom: depends on scope, but I'll give you a clear timeline before we start.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Standard tier includes 30 days of small-tweak support. After that, the maintenance retainer covers ongoing updates. One-off tweaks are billed at €40/hour.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Three honest fixed-price tiers for freelance web development · Starter €500, Standard €900, Custom from €1,500. No hourly surprises."
      />

      <PageHeader
        eyebrow="Honest pricing"
        title="Fixed prices, no surprises."
        description="Three tiers that cover most small-business websites. The price you're quoted is the price you pay."
      />

      {/* Tiers */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <FadeIn
              key={tier.name}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-soft border ${
                tier.featured
                  ? "bg-ink-850 border-accent-500/40 shadow-glow"
                  : "bg-ink-850 border-white/5"
              } p-8`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold text-snow-50">{tier.name}</h3>
              <p className="mt-2 text-snow-300 text-sm">{tier.blurb}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-snow-50">
                  {tier.price}
                </span>
                <span className="text-snow-400 text-sm">{tier.cadence}</span>
              </div>
              <ul className="mt-7 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-snow-200">
                    <i
                      className="fa-solid fa-check text-accent-400 mt-0.5"
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs uppercase tracking-[0.18em] text-snow-400 font-semibold">
                Suited for
              </p>
              <p className="mt-1 text-snow-300 text-sm">{tier.suitedFor}</p>
              <div className="mt-8 pt-6 border-t border-white/5">
                <Button
                  to={tier.cta.to}
                  variant={tier.featured ? "primary" : "ghost"}
                  size="md"
                  className="w-full"
                >
                  {tier.cta.label}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section tone="elevated" spacing="tight">
        <FadeIn className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            Optional extras
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">Add-ons.</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto bg-ink-900 rounded-soft border border-white/5 divide-y divide-white/5">
          {ADDONS.map((a) => (
            <div
              key={a.label}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <div>
                <span className="text-snow-100">{a.label}</span>
                {a.note && (
                  <span className="ml-3 text-xs text-snow-400">{a.note}</span>
                )}
              </div>
              <span className="text-snow-200 font-semibold">{a.price}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeIn className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">Common questions.</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ.map((item, i) => (
            <FadeIn
              key={item.q}
              delay={i * 0.05}
              as="details"
              className="bg-ink-850 rounded-soft border border-white/5 px-6"
            >
              <summary className="cursor-pointer py-4 font-semibold text-snow-50 flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <i
                  className="fa-solid fa-plus text-accent-400 transition"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 text-snow-300 text-sm leading-relaxed">
                {item.a}
              </p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="tight" tone="elevated">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Not sure which tier fits?
          </h2>
          <p className="mt-3 text-snow-300">
            Send a couple of details about your project and I'll point you at
            the right one · or build a custom quote.
          </p>
          <div className="mt-6">
            <Button to="/contact" variant="primary" size="md">
              Get in touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
