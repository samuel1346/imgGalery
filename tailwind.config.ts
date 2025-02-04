/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primaryColor: 'rgb(62, 50, 50)',
          secundaryColor:'rgb(80, 60, 60)',
          terciaryColor:'rgb(126, 99, 99)',
          quarterColor:'rgb(168, 124, 124)',
          white : 'rgb(226, 226, 226)'
        },
      },
    },
    plugins: [],
  }