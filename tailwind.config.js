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
      keyframes: {
        'gradient-hover': {
          '0%, 100%': {
            backgroundImage:
              'linear-gradient(-45deg hsl(264, 84%, 51%), hsl(191, 99%, 68%))',
          },
          '25%': {
            backgroundImage:
              'linear-gradient(45deg hsl(264, 84%, 51%), hsl(191, 99%, 68%))',
          },
          '50%': {
            backgroundImage:
              'linear-gradient(135deg hsl(264, 84%, 51%), hsl(191, 99%, 68%))',
          },
          '75%': {
            backgroundImage:
              'linear-gradient(-135deg hsl(264, 84%, 51%), hsl(191, 99%, 68%))',
          },
        },
      },
      animation: {
        'gradient-hover': 'gradient-hover 1s ease infinite',
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
