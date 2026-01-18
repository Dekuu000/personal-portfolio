import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f0f4f8",
          100: "#dbe2e8",
          200: "#bdc3c7", // Light Grey Anchor
          300: "#9eaab2",
          400: "#7f8c8d", // Grey Anchor
          500: "#63747d",
          600: "#34495e", // Dark Blue Anchor
          700: "#2c3e50", // Darkest Anchor (Primary Brand)
          800: "#233342",
          900: "#1b2733",
          950: "#121a23",
        },
        secondary: {
          50: "#fdfefe",
          100: "#ecf0f1", // Lightest Anchor
          200: "#cfd8dc",
          300: "#b0bec5",
          400: "#90a4ae",
          500: "#78909c",
          600: "#607d8b",
          700: "#546e7a",
          800: "#455a64",
          900: "#37474f",
          950: "#263238",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #2c3e50, #34495e, #7f8c8d)", // Professional Dark Blue -> Grey
        "gradient-primary-dark": "linear-gradient(to right, #1b2733, #233342, #546e7a)",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
    },
  },
  plugins: [],
};
export default config;

