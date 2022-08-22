/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#899BFE",
        secondary: {
          light: "#fff",
          dark: "#0f172a",
        },
        tertiary: "#1e293b",
        subheading: {
          gray: "#8A8AA0",
        },
        footer: {
          light: "#fff",
          dark: "#1E293B",
        },
      },
      screens: {
        xs: "640px",
        // => @media (min-width: 640px) { ... }

        sm: "768px",
        // => @media (min-width: 768px) { ... }

        md: "1024px",
        // => @media (min-width: 1024px) { ... }

        lg: "1280px",
        // => @media (min-width: 1280px) { ... }

        xl: "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
