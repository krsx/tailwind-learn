/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "11rem",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
