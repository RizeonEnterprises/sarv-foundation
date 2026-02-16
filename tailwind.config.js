/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-brown': '#5d4037',
        'dark-brown': '#3e2723',
        'gold-accent': '#d4af37',
        'soft-beige': '#fdfbf7',
        'text-grey': '#666',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

