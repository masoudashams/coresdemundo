/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '18': '55px',
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
