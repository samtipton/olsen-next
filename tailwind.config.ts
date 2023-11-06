import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        olsenTheme: {
          primary: "#ec8620",
          // "primary-focus": "#ec8620",
          "primary-content": "#ffffff",
          secondary: "#ec8620",
          "secondary-focus": "#f5c28f",
          // "secondary-content": "#ffffff",
          accent: "#ec8620",
          // "accent-focus": "#2aa79b",
          // "accent-content": "#bd0091",
          neutral: "#c86d11",
          // "neutral-focus": "#2a2e37",
          "neutral-content": "#ccc",
          "base-100": "#8d8779",
          "base-200": "#696969",
          "base-300": "#2e3b44",
          // "base-content": "#ccc",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
export default config;
