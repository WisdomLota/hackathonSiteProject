/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pixelBlue" : "#22293F",
        "pixelYellow": "#FFCC00",
        "pixelGreen": "#66FFFF"
      }
    },
  },
  plugins: [],
}

