/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'josefin':['Josefin Sans']
      },
      colors:{
        'lilac':'#bca3ce',
        'purple-mag':'#82368C',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

