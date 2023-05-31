/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/index.js",
    "./src/components/**/*{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0b0d17',
        'tulip': '#d0d6f9',
        'white': '#ffffff'
      },
      fontFamily: {
        'bellefair': ['Bellefair'],
        'barlow': ['Barlow Condensed']
      }
    }
  },
  plugins: [],
}

