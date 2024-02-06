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
        'light-black': 'rgb(26, 25, 25)'
      }
    },
  },
  plugins: [],
}

