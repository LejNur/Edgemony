/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      softBlue: "#8bacda",
      cyan: "#00fff7",
      mainBg: " #0d192b",
      cardBg: "#14253d",
      line: "#2f415b",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        mainBgShadow: "0px 30px 10px 20px  rgba(13, 25, 38)",
      },
    },
  },
  plugins: [],
};
