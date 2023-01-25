/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          lv: "hsl(270, 3%, 87%)",
          dv: "hsl(279, 6%, 55%)",
          vdv: "hsl(278, 68%, 11%)",
        },
      },
    },
  },
  plugins: [],
};
