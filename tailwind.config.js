/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page1/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': 'white',
        'button': '#f59221',
        'nav-color': 'rgb(248 250 252 / 0.45)'
      },
      minWidth: {
        "min-screen": "100vh"
      },
      backgroundColor: {
        "btn": "#f59221"
      },
     animation: {
        speed1: 'speed1 6.2s ease infinite',
        speed2: 'speed1 6.2s ease infinite'
     },
     keyframes: {
      speed1: {
        '0%': {transform: 'translateX(100%)'},
        
        '100%' :{transform: 'translateX(-100%)'}
      },
      speed2: {
        '0%': {transform: 'translateX(100%)'},

        '100%': {transform: 'translateX(-100%)'}
      }
     }
      
    },
  },
  plugins: [],
};
