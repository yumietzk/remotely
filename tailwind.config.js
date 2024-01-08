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
      // accent: "#dff376",
      accent: "#0baf56",
      "job-card": "#e0edf8",
    },
    extend: {
      // colors: {
      //   white: {
      //     primary: "#fafaf9",
      //     secondary: "#a8a29e",
      //   },
      //   black: "#1c1917",
      //   background: {
      //     primary: "#f5f5f4",
      //     secondary: "#09090b",
      //     white: "#fff",
      //   },
      //   accent: {
      //     1: "#e3dbfa",
      //     2: "#fbe2f4",
      //     3: "#ffe1cc",
      //     4: "#d4f6ed",
      // #91d5ec
      // #fd9f9f
      // #aee7a0
      // #a3a0e8
      //   },
      // },
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Playfair Display"],
        // primary: ["Quicksand"],
      },
      gridTemplateColumns: {
        "job-list": "repeat(3, 300px)",
        "kanban-board": "repeat(6, 260px)",
        // "job-list": "repeat(auto-fit, minmax(310px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// Colors:
// #e0e8da
// #dff376
// #bfc54e
// #0cbf5e
// #273b33

// #778e82

// #dee7e2
// #f0f4f3

// #b1bfbc
// #888f8c
