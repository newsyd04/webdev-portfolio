import React from "react";
import Container from "./Container";

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Subtle radial glow only on the hero — single signature treatment */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-accent-400 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-snow-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          )}
        </div>
      </Container>
    </header>
  );
}
