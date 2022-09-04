/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      height: {
        '128': '32rem',
      },
=======

      gradientColorStops: theme => ({
        'primary': '#FF8C00',
        'secondary': '#FFA500',
        'danger': '#FFD700',
    }),

      
>>>>>>> 267ab922935f1aa5a73726ca4db1647e3d8731cc
  margin: {
        '50': '120px',
      },
      colors:{
         'slate-400':' #D9D9D9'

      },

      fontFamily: {
        'roboto': ['Roboto'],
        'raleway': ['Raleway',],
        'utopia': ['UtopiaStd-Bold', 'sans']
      },
      backgroundImage: {
        'card' : "url('/images/card1.png')",
     
    },


    },
  },
  plugins: [],
}
