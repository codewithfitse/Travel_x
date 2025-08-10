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
        reds: "#eee",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      keyframes: {
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-slow": "gradient-move 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
