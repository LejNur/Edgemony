/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warmSpice: "#D87A22",
        herbGreen: "#4A773C",
        creamyWhite: "#F5F5F5",
        rusticBrown: "#6F4F28",
        tomatoRed: "#E94F4F",
        goldenYellow: "#F5C847",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
