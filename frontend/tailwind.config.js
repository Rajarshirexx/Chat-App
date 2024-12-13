/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '95p': '95%', 
      },
      maxWidth: {
        '1000px': '1000px', 
        '140px' : '140px',
      },
      height: {
        '75vh': '75vh', 
      },
      backgroundColor: {
        'aliceblue': '#F0F8FF', 
      },
      spacing: {
        '70p' : '70%',
      }
    },
  },
  plugins: [],
};
