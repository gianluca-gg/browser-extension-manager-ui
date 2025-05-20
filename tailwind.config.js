/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom-soft': '0px 2px 3px #D9E5F4',
      },
      backgroundImage: {
        'light-blue': 'linear-gradient(180deg, #EBF2FC 0%, #EEFBF9 100%)',
        'dark-blue': 'linear-gradient(180deg, #04091B 0%, #091540 100%)'
      },
      colors: {
        neutral: {
          900: '#091540',
          800: '#202535',
          700: '#2F364B',
          600: '#535868',
          300: '#C6C6C6',
          200: '#D6E2F5',
          100: '#EEEEEE',
          0: '#FBFDFE',
        },
        red: {
          400: '#F25C54',
          500: '#DE4840',
          700: '#C7231A',
        },
        dark: {
          background: '#121212',
          text: '#E0E0E0',
          button: '#0066CC',
        }
      }
    },
   
  },
  plugins: [],
}

