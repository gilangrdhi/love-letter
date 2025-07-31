/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        greatvibes: ['"Great Vibes"', "cursive"],
        lora: ["Lora", "serif"],
        dancingscript: ['"Dancing Script"', "cursive"],
        cursive: ['"Dancing Script"', "cursive"],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
