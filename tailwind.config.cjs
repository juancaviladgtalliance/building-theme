/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/scss/*.scss",
    "*.php",
    "./template-parts/*.php",
    "./**/*.php",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
