/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        pink: "#ff90e8",
        purple: "#90a8ed",
        green: "#23a094",
        orange: "#ffc900",
        red: "#dc341e",
        yellow: "#f1f333",
        violet: "#b23386",
        gray: "#f4f4f0",
        "dark-gray": "#242423",
      },
      fontFamily: {
        'primary': ['ABC Favorit', 'Avenir', 'Montserrat', 'Corbel', 'URW Gothic', 'source-sans-pro', 'sans-serif'],
        'sans': ['ABC Favorit', 'Avenir', 'Montserrat', 'Corbel', 'URW Gothic', 'source-sans-pro', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: "0.25rem 0.25rem 0 currentColor",
        lg: "0.5rem 0.5rem 0 currentColor",
      },
    },
  },
  plugins: [],
}