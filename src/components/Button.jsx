import React from "react";
import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const VARIANTS = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30",
  secondary: "bg-snow-50 text-ink-950 hover:bg-snow-200",
  ghost:
    "bg-white/5 text-snow-100 border border-white/10 hover:bg-white/10 hover:border-white/20",
  outline:
    "bg-transparent text-snow-100 border border-snow-300/30 hover:bg-snow-50/5",
};

export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  external = false,
  className = "",
  children,
  ...rest
}) {
  const cls = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
