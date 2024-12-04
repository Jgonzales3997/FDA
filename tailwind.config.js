/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui", "tw-elements/plugin.cjs")],
  darkMode: "class",
};
