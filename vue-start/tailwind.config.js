// tailwind.config.js
module.exports = {
  darkMode: 'media',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: 'white'
      },
      black: {
        DEFAULT: 'black'
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
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}