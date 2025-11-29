/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: {
    files: [
      "./apps/**/*.{js,ts,jsx,tsx}",
      "./packages/**/*.{js,ts,jsx,tsx}",
    ],
    relative: true,
  },
  theme: {
    extend: {
      colors: {
        backgroundDefault: "#ffffff",
        backgroundAlt: "#f5f6fa",
        componentDark: "#23272e",
        backgroundModal: "#acacae",

        input: "#ffb27f",
        inputHover: "#f3f4f6",
        inputPlaceholder: "#aaa",

        text100: "#3E3E3E",

        primary: "#000000",
        secondary300: "#333333",
        secondary400: "#222222",
        secondary600: "#1a1a1a",

        checked: "#ff8700",
        checked300: "#fff7e0",

        label100: "#f9fafb",
        label200: "#f3f4f6",
        label500: "#9ca3af",
        label700: "#7F7F82",
        label800: "#3E3E3E",
        label900: "#0d0e0e",

        statusDisable: "#cbd5e1",
      },
      borderRadius: {
        xs: "calc(1rem - 12px)",
        sm: "4px",
        md: "calc(1rem - 8px)",
        lg: "calc(1rem - 6px)",
        xl: "calc(1rem - 4px)",
        "2xl": "calc(1rem - 2px)",
      },
      fontSize: {
        display1: "3rem",
        display2: "2.5rem",
        body1: "1rem",
        body2: ".9375rem",
        body3: ".875rem",
        body4: ".8rem",
        title1: "2rem",
        title2: "1.625rem",
        title3: "1.25rem",
        title4: "1.125rem",
        caption1: "0.75rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};