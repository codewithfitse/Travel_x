/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        creepster: ["Creepster", "cursive"],
      },
      colors: {
        lum: "#16fe01",
      },
    },
  },
  plugins: [],
};
