/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "system-white": "#C7C7C7",
        "system-white-light": "#D9D9D9",
        "system-black": "#282828",
        "system-orange": "#FF6543",
        "system-orange-light": "#E76F51",
        "system-blue": "#264653",
        "system-orange-gradient": "linear-gradient(90deg, #E76F51 0%, #9D351B 99.99%, #E76F51 100%)"
      },
      fontFamily: {
        "system": ["Inter", "sans-serif"],
        "title": ['Poppins', "sans-serif"]
      },
      padding: {
        "page-container": "0 176px",
      }
    },
  },
  plugins: [],
}

