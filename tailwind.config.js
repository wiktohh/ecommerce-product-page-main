/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue: "hsl(220, 13%, 13%)", 
        price: "hsl(219, 9%, 45%)",
        buttonColor: "hsl(220, 14%, 75%)",
        primary: "hsl(26, 100%, 55%)",
        secondary: "hsl(25, 100%, 94%)"


      }
    },
  },
  plugins: [],
}