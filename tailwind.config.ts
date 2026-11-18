import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071B3D",
        navy: "#0B2148",
        blue: "#17447F",
        gold: "#F4B400",
        mist: "#F5F7FB",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(9, 31, 68, .08)",
        card: "0 8px 28px rgba(9, 31, 68, .06)",
      },
    },
  },
  plugins: [],
};
export default config;
