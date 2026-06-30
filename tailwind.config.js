/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fffdf9",
        cream: { DEFAULT: "#f6eee1", 2: "#efe4d2" },
        petrol: { DEFAULT: "#10282f", 700: "#1f4654", 600: "#2a5b6b" },
        gold: { DEFAULT: "#d3a44c", light: "#f4d98a", deep: "#9a7033" },
        ink: "#10282f",
        muted: "#52605f",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
      },
      borderRadius: { "3xl": "1.75rem", "4xl": "2.25rem" },
    },
  },
  plugins: [],
};
