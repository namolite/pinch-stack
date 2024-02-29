/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      g: colors.neutral,
      gray: colors.gray,
      blue: colors.sky,
    },
    extend: {
      spacing: {
        '015': '0.15rem',
      },
    },
  },
  plugins: [],
}

