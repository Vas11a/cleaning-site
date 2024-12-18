/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {
      colors:{
        main: '#4eac99'
      },
      borderWidth: {
        '3': '3px',
      },
      width: {
        '500': '500px',
        '700': '700px',
      },
      height: {
        '600': '600px',
      },
      fontSize: {
        '4.5xl': '40px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}