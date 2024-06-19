/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B22222',
        secondary: '#FFD700',
        background: '#1A1A1A',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
}