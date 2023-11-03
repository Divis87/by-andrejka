// tailwind.config.js
module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          900: '#F7F8F6',
          DEFAULT: 'white'
        },
        black: {
          DEFAULT: 'black'
        },
        green: {
          DEFAULT: '#276361'
        },
        blue: {
          DEFAULT: '#3B83EC'
        },
        orange: {
          DEFAULT: '#F58931'
        },
        pink: {
          DEFAULT: '#E39A92'
        },
        gold: {
          DEFAULT: '#F3BC3B'
        },
        beige: {
          DEFAULT: '#C8C1B5'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
