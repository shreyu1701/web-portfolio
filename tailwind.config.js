/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geo: ["Geo", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        allan: ["Allan", "sans"],
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
