import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        yellow: {
          50: "#FFD23F",
          150: "#FFB314",
        },
        purple: {
          50: "#8529BA",
          150: "#5E1675",
          250: "#491772",
        },
        red: {
          50: "#EA5571",
          150: "#CD4258",
          250: "#B22635",
        },
      },
      backgroundImage: {
        "pattern-ungu-kesat":
          "url('/images/background/pattern-ungu-kesat.jpg')",
        "pattern-krem-kesat":
          "url('/images/background/pattern-krem-kesat.jpg')",
        "faq-background": "url('/images/background/faq-base-background.png')",
        "faq-background-1": "url('/images/background/faq-background-1.png')",
        "faq-background-2": "url('/images/background/faq-background-2.png')",
        "faq-background-3": "url('/images/background/faq-background-3.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        legendaire: ["legendaire"],
        "publica-sans": ["publica-sans"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-text-yellow": {
          background: "linear-gradient(90deg, #FFD23F, #FFA514)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".gradient-text-yellow-up-down": {
          background: "linear-gradient(180deg, #FFD23F, #FFA514)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".gradient-text-red-up-down": {
          background: "linear-gradient(180deg, #B22635, #EA5571)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".gradient-bg-yellow": {
          background: "linear-gradient(90deg, #FFD23F, #FFA514)",
        },
        ".gradient-border-yellow": {
          "border-image": "linear-gradient(90deg, #FFD23F, #FFA514) 1",
        },
        ".gradient-text-purple": {
          background:
            "linear-gradient(90deg, #5E1675 0%, #982D66 74%, #CD4258 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-shadow": {
          "text-shadow": "5px 5px 3px rgba(0, 0, 0, 0.2)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
