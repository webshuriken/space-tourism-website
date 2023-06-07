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
        'h5': ['Barlow Condensed'],
        'sub-head-1': ['Bellefair'],
        'sub-head-2': ['Barlow Condensed'],
        'nav': ['Barlow Condensed'],
      },
      fontSize: {
        'h1-sm': '5.333rem',
        'h1-lg': '10rem',
        'h2-sm': '3.733rem',
        'h2-lg': '6.666rem',
        'h3-sm': '1.6rem',
        'h3-lg': '3.733rem',
        'h4-sm': '1.1666rem',
        'h4-lg': '2.133rem',
        'h5-sm': '1.07rem',
        'h5-md': '1.34rem',
        'h5-lg': '1.87rem',
        'sub-head-1': '1.866rem',
        'sub-head-2': '1.933rem',
        'nav': '1.07rem',
        'p-md': '1.07rem',
        'p-lg': '1.2rem'
      },
      letterSpacing: {
        'h5-sm': '2.7px',
        'h5-md': '3.38px',
        'h5-lg': '4.72px',
        'sub-head-2': '2.36px',
        'nav': '2.7px'
      },
      lineHeight: {
        'p-sm': '25px'
      }
    }
  },
  plugins: [],
}

