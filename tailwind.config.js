/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "cursive"],
        lora: ["Lora", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light"],
    base: true,
    utils: true,
  },
};
