const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      light: {
        lightest: '#e6bb86',
        light: '#da9c47',
        DEFAULT: '#b36f0a',
        dark: '#995304',
        darkest: '#74370a',
        exdarkest: '#331513',
      },
      dark: {
        lightest: '#e6bb86',
        light: '#da9c47',
        DEFAULT: '#b36f0a',
        dark: '#995304',
        darkest: '#74370a',
        exdarkest: '#331513',
      }
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
