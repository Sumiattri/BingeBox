/** @type {import('tailwindcss').Config} */
const autofill = require("tailwindcss-autofill");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [autofill],
};
