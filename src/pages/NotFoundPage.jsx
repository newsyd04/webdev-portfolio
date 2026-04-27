"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Button from "../components/Button";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" description="That page couldn't be found." />

      <PageHeader
        eyebrow="404"
        title="Page not found."
        description="The page you're looking for has moved, been renamed, or never existed."
      >
        <Button to="/" variant="primary" size="md">
          <i className="fa-solid fa-house" aria-hidden /> Home
        </Button>
        <Button to="/samples" variant="ghost" size="md">
          See sample work
        </Button>
        <Button to="/contact" variant="outline" size="md">
          Get in touch
        </Button>
      </PageHeader>

      <Section spacing="tight" />
    </>
  );
}
