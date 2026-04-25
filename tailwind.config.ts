import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
      },
      fontSize: {
        display: [
          "clamp(3rem, 6.5vw, 5.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "300" },
        ],
        heading: [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "400" },
        ],
        subheading: [
          "clamp(1.25rem, 2vw, 1.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "400" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "-0.005em" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.14em", fontWeight: "500" },
        ],
      },
      spacing: {
        // 4px base rhythm — semantic tokens on top of Tailwind's default scale
        "section-x": "1.5rem",
        "section-x-lg": "2.5rem",
        "section-y": "6rem",
        "section-y-lg": "9rem",
        gutter: "1.5rem",
      },
      colors: {
        // Brand palette (authoritative hex documented here; HSL vars below)
        // ink:       #0A0A0B  charcoal background
        // bone:      #F2EDE6  warm off-white foreground
        // sage:      #A3BCA7  single premium accent
        ink: "hsl(var(--ink))",
        bone: "hsl(var(--bone))",
        sage: {
          DEFAULT: "hsl(var(--sage))",
          muted: "hsl(var(--sage-muted))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
