/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      height: {
        '80p': '80%',
      },
      backgroundColor: {
        'background-black': '#1a1919'
      }
    },
  },
  plugins: [],
}

