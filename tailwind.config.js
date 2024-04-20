/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/dist/esm/**/*.js'
  ],
  theme: {
    extend: {
      opacity: {
        '9': '.09',
      },
      lineHeight:{
        '60':'60px',
        '30':'50px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}