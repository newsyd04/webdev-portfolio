"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

const CONTACTS = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "daranewsome01@gmail.com",
    href: "mailto:daranewsome01@gmail.com",
    note: "Best for project enquiries",
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+353 83 454 6712",
    href: "tel:+353834546712",
    note: "Mon–Fri evenings, weekends",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Based in",
    value: "Dublin, Ireland",
    href: "https://maps.google.com/?q=Dublin,Ireland",
    note: "Available for projects across Ireland",
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch about your project. Email, phone, or send a quick brief — quotes typically within a working day."
      />

      <PageHeader
        eyebrow="Get in touch"
        title="Let's build something."
        description="The fastest way to a quote is a quick email with a few details about your project. Or call directly if you'd rather chat first."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {CONTACTS.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.label === "Based in" ? "_blank" : undefined}
                rel={c.label === "Based in" ? "noopener noreferrer" : undefined}
                className="group block bg-ink-850 rounded-soft border border-white/5 hover:border-white/15 p-7 transition h-full"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 mb-5">
                  <i className={`${c.icon} text-xl`} aria-hidden />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-snow-400 font-semibold">
                  {c.label}
                </p>
                <p className="mt-1 text-snow-50 font-semibold text-lg break-words">
                  {c.value}
                </p>
                <p className="mt-3 text-snow-300 text-sm">{c.note}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What to include in your email */}
      <Section tone="elevated" spacing="tight">
        <FadeIn className="max-w-2xl mx-auto bg-ink-900 rounded-soft border border-white/5 p-8 md:p-10">
          <p className="text-accent-400 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            Save us both some back-and-forth
          </p>
          <h2 className="text-xl md:text-2xl font-bold">
            What to include when you reach out
          </h2>
          <ul className="mt-5 space-y-3 text-snow-200 text-sm">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-accent-400 mt-1" aria-hidden />
              <span>
                <strong className="text-snow-50">Your business / project</strong>
                {" "}— a couple of sentences about what you do.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-accent-400 mt-1" aria-hidden />
              <span>
                <strong className="text-snow-50">What you need</strong>
                {" "}— a brand new site, a redesign, an e-commerce add-on, etc.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-accent-400 mt-1" aria-hidden />
              <span>
                <strong className="text-snow-50">Rough timeline</strong>
                {" "}— "ASAP", "next month", "before summer" — anything helps.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-check text-accent-400 mt-1" aria-hidden />
              <span>
                <strong className="text-snow-50">Examples you like</strong>
                {" "}— links to sites you'd want yours to feel like.
              </span>
            </li>
          </ul>
          <p className="mt-7 text-snow-300 text-sm">
            That's enough for me to send a fixed quote. Don't worry if you
            don't have all of it — we can figure it out together.
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
