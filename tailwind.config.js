/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
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
