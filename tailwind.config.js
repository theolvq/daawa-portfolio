module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-2': '200vw 200vh',
        'size-4': '400%',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': 'bottom ',
          },
          '25%': {
            'background-position': 'left',
          },
          '50%': {
            'background-position': 'top',
          },
          '75%': {
            'background-position': 'right',
          },
        },
      },

      animation: {
        gradient: 'gradient 15s infinite ease-in-out',
        'pulse-slow': 'pulse 20s infinite ease-in-out',
      },
    },
  },
};
