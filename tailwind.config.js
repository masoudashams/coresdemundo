/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      gradientColorStops: theme => ({
        'primary': '#FF8C00',
        'secondary': '#FFA500',
        'danger': '#FFD700',
    }),

      
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

    },
  },
  plugins: [],
}
