const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        gray: colors.gray,
        slate: colors.slate,
        white: colors.white,
        black: colors.black,
        emerald: colors.emerald,
        transparent: 'transparent',
        current: 'currentColor'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}