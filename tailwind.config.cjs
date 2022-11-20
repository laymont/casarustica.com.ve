/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.{html,js}",
      "./pages/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '454px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
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
        'header': "url('assets/header.png')",
        'historia': "url('assets/bg_historia.jpg')"
      }
    },
  },
  plugins: [],
}
