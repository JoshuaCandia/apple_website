import { DEFAULT } from "@react-three/fiber/dist/declarations/src/core/utils";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: {
          DEFAULT: "#101010",
          100: "#1a1a1a",
          200: "#9A9A9A",
          300: "#3c3c3c",
        },
      },
    },
  },
  plugins: [],
};
