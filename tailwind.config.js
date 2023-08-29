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
        "system-orange-gradient": "linear-gradient(90deg, #E76F51 0%, #9D351B 99.99%, #E76F51 100%)",
        "system-dark-gray": "#8A8A8A",
      },
      fontFamily: {
        "system": ["Inter", "sans-serif"],
        "title": ['Poppins', "sans-serif"],
        "logo": ['Koulen', 'cursive']
      },
      padding: {
        "page-container": "0 176px",
      },
      backgroundImage: {
        'register': 'url("https://images.pexels.com/photos/3709371/pexels-photo-3709371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }
    },
  },
  plugins: [],
}

