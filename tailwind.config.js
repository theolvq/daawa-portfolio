module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      colors: {
        cyan: 'hsl(191, 99%, 68%)',
        pink: 'hsl(330, 100%, 70%)',
        purple: 'hsl(264, 84%, 51%)',
        white: 'hsl(330, 60%, 98%)',
        'white-trans': 'hsla(330, 60%, 98%, 0.5)',
        black: 'hsl(240, 21%, 12%)',
      },
    },

    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      flexDirection: ['even'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
