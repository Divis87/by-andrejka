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
          DEFAULT: 'white',
        },
        black: {
          DEFAULT: 'black',
        },
        green: {
          DEFAULT: '#276361',
        },
        blue: {
          DEFAULT: '#3B83EC',
        },
        orange: {
          DEFAULT: '#F58931',
        },
        pink: {
          DEFAULT: '#E39A92',
        },
        gold: {
          DEFAULT: '#F3BC3B',
        },
        beige: {
          DEFAULT: '#C8C1B5',
        },
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      animation: {
        'slide-in': 'slide-in 0.3s cubic-bezier(.8,.2,.48,1)',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
