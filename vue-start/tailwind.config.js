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
          500: 'rgba(255, 255, 255, .5)',
          DEFAULT: 'white'
        },
        black: {
          DEFAULT: 'black'
        },
        green: {
          DEFAULT: 'green'
        },
        blue: {
          DEFAULT: 'blue'
        },
        pink: {
          500: 'rgba(249, 168, 212, .5)',
          DEFAULT: '#ec4899'
        },
        darkblue: {
          DEFAULT: '#0f172a'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
