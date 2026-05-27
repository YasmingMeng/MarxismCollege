/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        screen: {
          navy: "#071123",
          panel: "#0a1c3d",
          blue: "#102c5b",
          red: "#c91f2d",
          brightRed: "#e12f3f",
          gold: "#f1c15b",
          muted: "#aebdd1"
        }
      },
      boxShadow: {
        redGlow: "0 0 34px rgba(225, 47, 63, 0.34)",
        blueGlow: "0 0 46px rgba(42, 114, 216, 0.32)"
      }
    }
  },
  plugins: []
};
