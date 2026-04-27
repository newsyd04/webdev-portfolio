"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

import kerryber from "../assets/kerryber.png";
import school from "../assets/school-site.png";
import abe from "../assets/abe-picture.png";
import sof from "../assets/sof-pic.png";
import mindseye from "../assets/mindseye.png";
import scoilMhaolcheadair from "../assets/scoil-mhaolcheadair.png";

const SAMPLES = [
  {
    title: "Scoil Bhreac Chluain",
    location: "Co. Kerry",
    description:
      "Primary school website · events, announcements, parent resources, staff bios.",
    tags: ["Static", "Responsive"],
    image: school,
    link: "https://www.scoilbhreacchluain.ie",
  },
  {
    title: "Abe's Art Studio",
    location: "Dublin",
    description:
      "Local artist's portfolio site showcasing pieces with contact + lesson booking details.",
    tags: ["React", "Vite", "Tailwind"],
    image: abe,
    link: "https://abeboland.art",
  },
  {
    title: "Kerry BER",
    location: "Annascaul, Co. Kerry",
    description:
      "BER assessor business site · services, sample certificate, contact funnel.",
    tags: ["Eleventy", "Static", "SEO"],
    image: kerryber,
    link: "https://kerryber.ie",
  },
  {
    title: "Secrets of Flowers",
    location: "Tralee, Co. Kerry",
    description:
      "Botanical photography portfolio + e-commerce with PayPal checkout, booking calendar, and Cloudinary uploads.",
    tags: ["React", "Vite", "PayPal", "MongoDB"],
    image: sof,
    link: "https://www.secrets-of-flowers.daranewso.me/",
  },
  {
    title: "Mind's Eye Resilience & Wellbeing",
    location: "Ireland",
    description:
      "Website for a mental health and wellness service · service info, practitioner bio, contact.",
    tags: ["React", "Vite", "Tailwind"],
    image: mindseye,
    link: "https://mindseyeresilience.com/",
  },
  {
    title: "Scoil Mhaolcheadair",
    location: "Co. Kerry",
    description:
      "Primary school site · school information, news, parent resources.",
    tags: ["React", "Vite", "Tailwind"],
    image: scoilMhaolcheadair,
    link: "https://scoil-mhaolcheadair-website.vercel.app/",
  },
];

export default function SamplesPage() {
  return (
    <>
      <SEO
        title="Samples"
        description="A selection of recent client websites · local trades, photographers, schools, and small businesses across Ireland."
      />

      <PageHeader
        eyebrow="Recent work"
        title="Samples."
        description="Real client builds. Every one is a custom React or static site · no templates, no Wix, no Squarespace."
      >
        <Button to="/contact" variant="primary" size="md">
          Start your own
        </Button>
      </PageHeader>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLES.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 2) * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-ink-850 rounded-soft border border-white/5 hover:border-white/15 overflow-hidden transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-ink-800">
                  <img
                    src={p.image}
                    alt={`${p.title} site screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold text-snow-50">
                      {p.title}
                    </h3>
                    <span className="text-xs text-snow-400 shrink-0">
                      {p.location}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-snow-300 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-snow-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-accent-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Visit live site
                    <i className="fa-solid fa-arrow-up-right-from-square text-[11px]" aria-hidden />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="tight" tone="elevated">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Don't see your kind of business?
          </h2>
          <p className="mt-3 text-snow-300">
            Most projects start with a quick chat. Tell me what you need.
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
