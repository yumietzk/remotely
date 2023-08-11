/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafaf9",
        secondary: "#1c1917",
        background: {
          primary: "#f5f5f4",
          secondary: "#09090b",
        },
        accent: {
          1: "#e3dbfa",
          2: "#fbe2f4",
          3: "#ffe1cc",
          4: "#d4f6ed",
        },
      },
    },
  },
  plugins: [],
};
