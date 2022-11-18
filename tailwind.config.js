/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: 'require./tailwind.config.js',
  content: {
    relative: true,
    files: [
      "./dist/index.html",
      "./src/**/*.{html,js}"
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
        'whatsapp': '#25d366'
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
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-debug-screens'),
  ],
}
