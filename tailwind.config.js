/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        custom: "rgba(145, 158, 171, 0.2) 0px 0px 2px, rgba(145, 158, 171, 0.05) 0px 10px 20px -3px",
      },
    },
  },
  plugins: [
    require('daisyui','tailwind-scrollbar-hide'),
  ],

}

