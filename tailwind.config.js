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
        speed1: 'speed1 10s  infinite linear',
        speed2: 'speed2 10s  infinite linear',
        bl: 'bl 2s linear'
       
     },
     keyframes: {
      speed1: {
        '0%': {transform: 'translateX(0%)'},
        
        '100%' :{transform: 'translateX(calc(-350px* 4))'}
      },
      speed2: {
        '0%': {transform:  'translateX( calc(-350px * 4))'},

        '100%': { transform: 'translateX(0%)' }
      },
      bl: {
        '0%': {'filter': 'blur(10px)',
          'opacity': '0'
        },
        '50%': {'filter': 'blur(5px)',
          'opacity': '0.5'
        },
        '100%': {'filter': 'blur(0)',
          'opacity' : '1'
        }
      }
      
     },
     boxShadow: {
      'item': 'inset 0px 0px  100px 5px ',
      'sb': '1px -1px 1px  white'
     },
    borderWidth: {
      '8': '4px'
    },

    screens: {

      'res': {'max': '900px'},

      'minR': {'max': '600px'}
    }
      
    },
  },
  plugins: [],
};
