/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./dist/index.html",
      "./src/**/*.html}",
      "./src/**/*.js"
    ]
  },
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {
      colors: {
        'body': '#201E1E',
        'title': '#E3C770',
        'selected-text': '#A3A3FF',
        'theme': '#5800FF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        'header': "url('img/header.png')"
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
