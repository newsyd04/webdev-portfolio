/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Refined dark palette — warm-leaning neutral grays so the theme
        // doesn't read as sterile / template-default.
        ink: {
          950: "#0a0a0a",
          900: "#121212",
          850: "#181818",
          800: "#1f1f1f",
          700: "#2a2a2a",
          600: "#3a3a3a",
        },
        // Off-white text for the dark surfaces
        snow: {
          50: "#fafafa",
          100: "#e5e5e5",
          200: "#c7c7c7",
          300: "#a3a3a3",
          400: "#737373",
        },
        // Single accent for CTAs and highlights — bright but disciplined
        accent: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "72rem",
        narrow: "44rem",
      },
      spacing: {
        "section-y": "5rem",
        "section-y-lg": "7rem",
      },
      borderRadius: {
        soft: "14px",
      },
      boxShadow: {
        elevate: "0 8px 32px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(96, 165, 250, 0.25), 0 0 30px rgba(59, 130, 246, 0.15)",
      },
    },
  },
  plugins: [],
};
