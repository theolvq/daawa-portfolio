module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        cyan: "hsl(191, 99%, 68%)",
        purple: "hsl(264, 84%, 51%)",
        white: "hsl(330, 60%, 98%)",
        black: "hsl(240, 21%, 12%)",
      },
    },

    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
