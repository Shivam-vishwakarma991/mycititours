/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#1e3a8a', // mapped to blue for backward compat temporarily, but we'll use actual names later
        'terracotta': '#ea580c', // mapped to orange
        'sand': '#ffffff', // changed to white for clean look
        'softgold': '#f97316', // bright orange
        'charcoal': '#1f2937', // dark gray
        'primary': '#1e40af', // Blue 800
        'primary-light': '#3b82f6', // Blue 500
        'accent': '#f97316', // Orange 500
        'accent-dark': '#c2410c', // Orange 700
      },
      fontFamily: {
        heading: ['Nunito', 'serif'],
        body: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
