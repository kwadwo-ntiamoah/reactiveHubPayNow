/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "line-pattern": "url('./src/assets/images/line.jpg')"
      },
      colors: {
        black: "#28282B",
        primary: {
          "100": "#3bb75e",
          "200": "#269746"
        },
        secondary: {
          "100": "#354067",
          "200": "#2b537e"
        },
        danger: {
          "100": "#b73b3b",
          "200": "#822727"
        }
      }
    },
  },
  plugins: [],
}

