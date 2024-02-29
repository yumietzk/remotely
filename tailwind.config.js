/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: "#f71208",
      gray: {
        50: "#f3f4f6",
        100: "#b1bfbc",
        200: "#888f8c",
      },
      green: {
        50: "#f2f5ef",
        100: "#e0e8da",
        200: "#abc19b",
        300: "#6f8d58",
        400: "#566e44",
        500: "#1d2417",
      },
      accent: "#0baf56",
      "job-card": "#e0edf8",
    },
    extend: {
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Playfair Display"],
      },
      gridTemplateColumns: {
        "job-grid": "1fr 90% 1fr",
        "job-grid-md": "1fr 85% 1fr",
        "job-grid-lg": "1fr 628px 1fr",
        "job-grid-xl": "1fr 932px 1fr",
        "job-list-lg": "repeat(2, 300px)",
        "job-list-xl": "repeat(3, 300px)",
        "kanban-board": "repeat(6, 200px)",
        "kanban-board-lg": "repeat(6, 260px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
