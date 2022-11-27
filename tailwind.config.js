module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-radial-elipse-right': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-2': '200vw 200vh',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': 'bottom',
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
        gradient: 'gradient 30s infinite ease-in-out',
      },
      gridTemplateRows: {
        '2-push-bottom': '1fr min-content',
      },
    },
  },
};
