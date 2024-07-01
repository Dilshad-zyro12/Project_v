/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#add8e6", 
        primary:"#3C50E0",
        boxdark: '#24303F',
        white: '#FFFFFF',
        stroke: '#E2E8F0',
        strokedark: '#2E3A47',
       
        
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
    },
      
  },
  plugins: [],
  }}

