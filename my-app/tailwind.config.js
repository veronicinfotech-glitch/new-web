/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Black Ops One"', 'system-ui'],
        outfit: ['"Black Ops One"', 'system-ui'],
        space: ['"Black Ops One"', 'system-ui'],
        jakarta: ['"Black Ops One"', 'system-ui'],
        mono: ['"Black Ops One"', 'system-ui'], 
        marker: ['"Permanent Marker"', 'cursive'],
      }
    },
  },
  plugins: [],
}