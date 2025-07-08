/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        creepster: ["Creepster", "cursive"],
        unifraktur: ["UnifrakturMaguntia", "cursive"],
      },
      colors: {
        lum: "#16fe01",
      },
      colors: {
        reds: "#eee",
      },
    },
  },
  plugins: [],
};
