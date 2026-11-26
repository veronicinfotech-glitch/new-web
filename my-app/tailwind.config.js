/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        h1: ['"Chevalon"', '"Playfair Display"', 'serif'],
        h2: ['"React"', '"Playfair Display"', 'serif'],
        h3: ['"Figerona"', '"Figtree"', '"Plus Jakarta Sans"', 'sans-serif'],
        chevalon: ['"Chevalon"', '"Playfair Display"', 'serif'],
        react: ['"React"', '"Playfair Display"', 'serif'],
        figerona: ['"Figerona"', '"Figtree"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['monospace'],
        marker: ['"Permanent Marker"', 'cursive'],
      }
    },
  },
  plugins: [],
}
