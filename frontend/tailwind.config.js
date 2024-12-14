/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc-full-minus-70': 'calc(100% - 70px)', // Custom height
      },
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
        '1px' : '1px',
      },
      gridTemplateColumns: {
        'custom': '1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
};
