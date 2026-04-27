"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

const SERVICES = [
  {
    icon: "fa-solid fa-code",
    title: "Custom websites",
    description:
      "Hand-built React and Next.js sites · no page builders, no template clones. Fully responsive, fully yours, easy to maintain.",
  },
  {
    icon: "fa-solid fa-pencil-ruler",
    title: "Brand & UI design",
    description:
      "Logo refresh, colour palette, typography, layout. The visual identity that ties the site together. Done in Figma so you can see it before code.",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile-first builds",
    description:
      "Most visitors land on a phone. Every site is designed for that screen first, then scaled up · not the other way round.",
  },
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "SEO & performance",
    description:
      "Real meta tags, structured data, fast page loads, optimised images. Built so people can actually find you on Google.",
  },
  {
    icon: "fa-solid fa-cart-shopping",
    title: "E-commerce",
    description:
      "Stripe or PayPal checkout, product pages, order tracking. Suitable for small catalogues · not Shopify-scale shops.",
  },
  {
    icon: "fa-solid fa-rotate",
    title: "Maintenance & care",
    description:
      "Yearly retainer for content updates, security patches, and small tweaks. Optional, cancelled at any renewal.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Hosting & domain",
    description:
      "Whatever fits your setup: I can host the site and own the domain on your behalf, or set everything up in your own account so you hold it. Renewals, DNS, and SSL handled either way.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Quick chat",
    text: "Tell me about your business and what you need. 20-minute call or email · no commitment.",
  },
  {
    n: "02",
    title: "Fixed quote",
    text: "I send a written quote with timeline, deliverables, and a single fixed price. No hourly billing surprises.",
  },
  {
    n: "03",
    title: "Design & build",
    text: "Figma mockups for sign-off, then I build. You see progress at every stage and have unlimited revisions on copy.",
  },
  {
    n: "04",
    title: "Launch & support",
    text: "Site goes live on your domain. Email or call any time · small tweaks for the first month are on the house.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Custom websites, mobile-first builds, brand & UI design, SEO, e-commerce, and ongoing maintenance · for small businesses across Ireland."
      />

      <PageHeader
        eyebrow="What I do"
        title="Services."
        description="Everything most small businesses need to get a real website online · without an agency markup or a year-long project plan."
      >
        <Button to="/contact" variant="primary" size="md">
          Start a project
        </Button>
        <Button to="/pricing" variant="ghost" size="md">
          See pricing
        </Button>
      </PageHeader>

      {/* Services grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <FadeIn
              key={s.title}
              delay={(i % 3) * 0.08}
              className="bg-ink-850 rounded-soft p-7 border border-white/5 hover:border-white/15 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 mb-5">
                <i className={`${s.icon} text-xl`} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-snow-50">{s.title}</h3>
              <p className="mt-2 text-snow-300 text-sm leading-relaxed">
                {s.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="elevated">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From first email to live site in four steps.
          </h2>
          <p className="mt-4 text-snow-300">
            No surprises, no agency creep, no missed deadlines.
          </p>
        </FadeIn>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
          {PROCESS.map((p, i) => (
            <FadeIn
              as="li"
              key={p.n}
              delay={i * 0.08}
              className="bg-ink-900 rounded-soft p-6 border border-white/5"
            >
              <div className="text-accent-400 text-3xl font-bold tracking-tight mb-3">
                {p.n}
              </div>
              <h3 className="text-base font-semibold text-snow-50">
                {p.title}
              </h3>
              <p className="mt-2 text-snow-300 text-sm leading-relaxed">
                {p.text}
              </p>
            </FadeIn>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Section spacing="tight">
        <div className="bg-ink-850 rounded-soft p-10 md:p-14 border border-white/5 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Got a site you'd like to build?
          </h2>
          <p className="mt-3 text-snow-300 max-w-xl mx-auto">
            Send a few details and I'll get back with a fixed quote within a
            working day.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button to="/contact" variant="primary" size="md">
              Get a quote
            </Button>
            <Button to="/samples" variant="ghost" size="md">
              See sample work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
