const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [],
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {

      },
      fontSize: {

      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({});
    }),
  ],
}
