/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "system-white": "#C7C7C7",
        "system-black": "#282828",
        "system-orange": "#FF6543",
        "system-orange-light": "#E76F51",
        "system-blue": "#264653"
      },
      fontFamily: {
        "system": ["Inter", "sans-serif"],
        "title": ['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}

