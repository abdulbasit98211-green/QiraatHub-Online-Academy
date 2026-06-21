import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#EAEEF4",
          100: "#C7D2E2",
          200: "#9FB1CB",
          300: "#6E84A6",
          400: "#4A6080",
          500: "#34496A",
          600: "#26395A",
          700: "#1B2C49",
          800: "#13294B",
          900: "#0B1F3A",
          950: "#071426",
        },
        emerald: {
          DEFAULT: "#0E7C5A",
          50: "#EAF4EE",
          100: "#CDE8DA",
          200: "#9FD3BB",
          400: "#1E9E74",
          500: "#16A07A",
          600: "#0E7C5A",
          700: "#0B6347",
          800: "#094E39",
        },
        gold: {
          DEFAULT: "#C9A227",
          100: "#F3E8C5",
          300: "#E2C766",
          400: "#D4AF37",
          500: "#C9A227",
          600: "#A9851A",
        },
        sage: {
          DEFAULT: "#EAF4EE",
          50: "#F4F9F6",
          100: "#EAF4EE",
        },
        cream: "#FBFBF8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterspacing: {},
      boxShadow: {
        card: "0 1px 2px rgba(11,31,58,0.04), 0 12px 32px -12px rgba(11,31,58,0.12)",
        cardHover:
          "0 2px 4px rgba(11,31,58,0.06), 0 24px 48px -16px rgba(11,31,58,0.20)",
        gold: "0 10px 30px -10px rgba(201,162,39,0.45)",
        emerald: "0 10px 30px -10px rgba(14,124,90,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.8s ease both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
