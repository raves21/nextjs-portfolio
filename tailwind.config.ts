import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainAccent: "#61DAFB",
        mainWhite: "#FFF5EA"
      },
      screens: {
        "mobile-m": "375px",
        "mobile-l": "425px"
      }
    },
  },
  plugins: [],
};
export default config;
