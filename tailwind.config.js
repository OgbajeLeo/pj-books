/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown1: '#6C4C35', 
        brown2:'#23170f',
        
      },
    },
  },
  plugins: [],
}

