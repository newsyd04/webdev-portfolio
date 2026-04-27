import React from "react";
import Container from "./Container";

const TONES = {
  default: "bg-ink-950",
  elevated: "bg-ink-900",
  card: "bg-ink-850",
};

export default function Section({
  tone = "default",
  spacing = "default",
  contained = true,
  className = "",
  innerClassName = "",
  id,
  children,
}) {
  const toneClass = TONES[tone] ?? TONES.default;
  const spacingClass =
    spacing === "tight"
      ? "py-12 md:py-16"
      : spacing === "loose"
      ? "py-24 md:py-32"
      : "py-section-y md:py-section-y-lg";

  return (
    <section id={id} className={`${toneClass} ${spacingClass} ${className}`}>
      {contained ? (
        <Container className={innerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
