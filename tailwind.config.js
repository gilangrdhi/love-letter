/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        lora: ['"Lora"', "serif"],
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
