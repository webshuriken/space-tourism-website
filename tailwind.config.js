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
        'barlow': ['Barlow Condensed'],
        'h1': ['Bellefair'],
        'h2': ['Bellefair'],
        'h3': ['Bellefair'],
        'h4': ['Bellefair'],
        'h5': ['Barlow'],
        'sub-head-1': ['Bellefair'],
        'sub-head-2': ['Barlow'],
        'nav': ['Barlow'],
      },
      fontSize: {
        'h1-sm': '80px',
        'h1-lg': '150px',
        'h2-sm': '56px',
        'h2-lg': '100px',
        'h3-sm': '24px',
        'h3-lg': '56px',
        'h4-sm': '16px',
        'h4-lg': '32px',
        'h5-sm': '16px',
        'h5-lg': '28px',
        'sub-head-1': '28px',
        'sub-head-2': '14px',
        'nav': '16px',
        'p': '18px'
      },
      letterSpacing: {
        'h5': '4.72px',
        'sub-head-2': '2.36px',
        'nav': '2.7px'
      }
    }
  },
  plugins: [],
}

