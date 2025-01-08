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
      }
      
    },
  },
  plugins: [],
};
