/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.html', 'public/*.js'],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1168px"
      },
      fontFamily: {
        poppins: ['Poppins', 'san-serif']
      },
      colors: {
        "pry-clr-0": "rgb(248,250,252)",
        "pry-clr-1": "rgb(226, 232, 240)",
        "pry-clr-2": "rgb(100, 116, 139)",
        "pry-clr-3": "rgb(51, 65, 85)",
        "pry-clr-4": "rgb(15, 23, 42)",
      }
    },
  },
  plugins: [],
}