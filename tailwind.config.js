// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
         'md': '670px'
      }
    },
    fontFamily:{
      'main': ['Inter']
    }
  },
  plugins: [],
}
