/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    // All html files in the root directory
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        intelblue: "rgba(0, 8, 100, 1)",
        intellight: "rgba(164, 170, 220, 1)",
        // important
        intelblueF: "rgba(0, 8, 100, 1) !important",
        intellightF: "rgba(164, 170, 220, 1) !important",
      },
      fontFamily: {
        intelregular: ["INTEL_REGULAR"],
        intelbold: ["INTEL_BOLD"],
        intellight: ["INTEL_LIGHT"],
        intelmedium: ["INTEL_MEDIUM"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
