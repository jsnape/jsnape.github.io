/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
      }
    },
  },

//  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  plugins: [require('@tailwindcss/typography')],

  // config docs: https://daisyui.com/docs/config/
  // daisyui: {
  //   themes: ['light', 'dark'],
  // },
}
