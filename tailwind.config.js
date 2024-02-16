/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#293D51',
        secondary: '#F34D23',
        terciary: '#09141f'
      },
    },
  },
  plugins: [],
}

