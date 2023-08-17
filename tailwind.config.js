/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          primary: "#fafaf9",
          secondary: "#a8a29e",
        },
        black: "#1c1917",
        background: {
          primary: "#f5f5f4",
          secondary: "#09090b",
          white: "#fff",
        },
        accent: {
          1: "#e3dbfa",
          2: "#fbe2f4",
          3: "#ffe1cc",
          4: "#d4f6ed",
        },
      },
      fontFamily: {
        primary: ["Quicksand"],
      },
      gridTemplateColumns: {
        "job-list": "repeat(3, 300px)",
        // "job-list": "repeat(auto-fit, minmax(310px, 1fr))",
      },
    },
  },
  plugins: [],
};
