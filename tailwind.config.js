const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        divRobot: "rgba(25, 25, 230, 0.2)",
        botonesIniciar:"rgb(30 64 175)",
        azulb:"#525AF7",
        verdeb:"#80ED99",
        azulVerdeB:"#00B4D8",

      },
      animation:{
        "loop-scroll":"loop-scroll 15s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-50%)"}
        },
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.7) 111.58%)",
        "gradient-custom":
          "linear-gradient(to right, #15803d, #3b82f6, #15803d)", // Gradiente personalizado
      },
    },
  },
  plugins: [],
};