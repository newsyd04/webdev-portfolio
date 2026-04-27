"use client";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

import kerryber from "../assets/kerryber.png";
import sof from "../assets/sof-pic.png";
import abe from "../assets/abe-picture.png";

const SERVICES_PREVIEW = [
  {
    icon: "fa-solid fa-code",
    title: "Custom websites",
    description:
      "Built from scratch in React or Next.js. Fast, responsive, and easy to maintain.",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile-first",
    description:
      "Most of your visitors are on a phone. Every site I build is designed for that screen first.",
  },
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "Found on Google",
    description:
      "SEO meta, structured markup, fast page loads. Built so people can actually find you.",
  },
];

const SAMPLES_PREVIEW = [
  {
    title: "Kerry BER",
    image: kerryber,
    link: "https://kerryber.ie",
    blurb: "BER assessment business",
  },
  {
    title: "Secrets of Flowers",
    image: sof,
    link: "https://newsyd04.github.io/secrets-of-flowers-site",
    blurb: "Botanical photography & prints",
  },
  {
    title: "Abe's Art Studio",
    image: abe,
    link: "https://newsyd04.github.io/abes-art-site/",
    blurb: "Local artist portfolio",
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Freelance Web Developer in Dublin"
        description="I build modern, responsive websites for small businesses across Ireland. From local trades to creative portfolios — honest pricing, fast turnaround."
      />

      {/* —— HERO —— */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <Container className="relative pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="max-w-3xl">
            <p className="text-accent-400 text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Freelance · Dublin, Ireland
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Modern websites for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
                small businesses.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-snow-300 leading-relaxed max-w-2xl">
              I'm Dara Newsome. I build fast, mobile-first sites for local
              trades, creative portfolios, and small businesses across Ireland.
              Honest pricing, no jargon, no upsells.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" size="lg">
                <i className="fa-solid fa-envelope" aria-hidden /> Get a quote
              </Button>
              <Button to="/samples" variant="ghost" size="lg">
                See sample work
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-snow-300">
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-accent-400" aria-hidden />
                Built &amp; launched in 2–4 weeks
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-accent-400" aria-hidden />
                Mobile-first
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-accent-400" aria-hidden />
                Honest fixed pricing
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* —— SERVICES PREVIEW —— */}
      <Section tone="elevated">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            What I do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built for the people you want to hear from.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES_PREVIEW.map((s, i) => (
            <FadeIn
              key={s.title}
              delay={i * 0.08}
              className="bg-ink-850 rounded-soft p-7 border border-white/5 hover:border-white/10 transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 mb-4">
                <i className={`${s.icon} text-lg`} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-snow-50">{s.title}</h3>
              <p className="mt-2 text-snow-300 text-sm leading-relaxed">
                {s.description}
              </p>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-500 font-semibold text-sm"
          >
            See all services <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
          </Link>
        </div>
      </Section>

      {/* —— SAMPLES PREVIEW —— */}
      <Section>
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            Recent work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Real businesses, real websites.
          </h2>
          <p className="mt-4 text-snow-300">
            A small selection of recent client builds. Every site is custom —
            no templates, no page builders.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SAMPLES_PREVIEW.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-ink-850 rounded-soft border border-white/5 hover:border-white/15 overflow-hidden transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-ink-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-snow-50">
                    {p.title}
                  </h3>
                  <p className="text-sm text-snow-300 mt-0.5">{p.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-accent-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Visit site <i className="fa-solid fa-arrow-up-right-from-square text-[11px]" aria-hidden />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/samples" variant="ghost" size="md">
            See all samples <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* —— MINI BIO (replaces unused About page) —— */}
      <Section tone="elevated" spacing="tight">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            Who's behind it
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Hi, I'm Dara.
          </h2>
          <p className="mt-4 text-snow-300 leading-relaxed">
            I'm a Dublin-based software engineer who builds websites for
            small businesses on the side. Fast turnarounds, fixed prices, and
            no agency overhead. I work directly with you from the first
            conversation through to launch and beyond.
          </p>
          <div className="mt-6">
            <a
              href="https://daranewso.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-500 text-sm font-semibold"
            >
              View full portfolio at daranewso.me
              <i className="fa-solid fa-arrow-up-right-from-square text-[11px]" aria-hidden />
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* —— CTA STRIP —— */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-600 to-accent-500">
        <Container className="py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Got a website that needs building?
          </h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Tell me about your project. Quotes are free and usually back within
            a working day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button to="/contact" variant="secondary" size="lg">
              Start a project
            </Button>
            <Button to="/pricing" variant="outline" size="lg" className="!text-white !border-white/40 hover:!bg-white/10">
              See pricing
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
