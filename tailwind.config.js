/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'bungee': ["Bungee+Spice", "sans-serif"]
      },

      boxShadow: {
        'solid': '10px 10px 0 0 rgb(0 0 0)',
      }
    },
  },
  plugins: [],
}

