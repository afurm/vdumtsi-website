import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["var(--font-brand-display)"],
      serif: ["var(--font-brand-display)"],
      sans: ["var(--font-brand-body)"],
    },
    extend: {
      colors: {
        // Primary Colors
        primary: "#d6d2c4", // Warm beige - Main brand color
        secondary: "#97A59A", // Soft green - Nature element
        "army-green": "#97A59A", // Army green
        "dark-green": "#18332f", // Dark green - Contrast

        // Accent Colors - Group 1
        forest: "#2D3F2F", // Deep forest
        lavender: "#B2BBDA", // Soft lavender
        moss: "#1D2820", // Dark moss
        "light-gray": "#EFEFF4", // Light gray

        // Accent Colors - Group 2
        purple: "#311C3B", // Deep purple
        pink: "#EACEE4", // Soft pink
        orange: "#F15B29", // Vibrant orange
        cream: "#F5F5B8", // Cream yellow

        // Text colors
        "text-primary": "#18332f",
        "text-secondary": "#2D3F2F",
        "text-muted": "#97A59A",
      },
      fontSize: {
        "hero-h1": ["4.5rem", { lineHeight: "0.95" }],
        h1: ["3rem", { lineHeight: "1" }],
        h2: ["2.25rem", { lineHeight: "1.1" }],
        h3: ["1.875rem", { lineHeight: "1.2" }],
        body: ["1rem", { lineHeight: "1.65" }],
      },
      spacing: {
        // Custom spacing scale based on 8px
        "18": "4.5rem", // 72px
        "22": "5.5rem", // 88px
        "26": "6.5rem", // 104px
        "30": "7.5rem", // 120px
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
      },
    },
  },
  plugins: [],
};

export default config;
