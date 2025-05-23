/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        notoSansItalic: ['notoSansItalic', 'sans-serif'],
        notoSans: ['notoSans', 'sans-serif'],
      },
      boxShadow: {
        'custom-soft': '0px 2px 3px #D9E5F4',
        'check': '0px 1px 3px 0px rgba(10, 13, 18, 0.15)',
        'custom-light': '0 2px 2px 0 rgba(194, 206, 225, 0.2)'
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

