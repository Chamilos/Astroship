/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/pricing.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens:{
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
      },

      container: {
        center: true,
        padding: "16px",
      },

      colors: {
        
        'dark': 'rgb(17, 25 ,40, 1)',
        'light': 'rgb(255, 255, 255, 1)',
        'light-80': 'rgb(255, 255, 255, 0.8)',
        

        'primary': {
          DEFAULT:'rgb(255, 255, 255, 1)',
          dark:'#d1d5db',
          light:'#e5e7eb',
        },

        'secondary': {
          DEFAULT:'#111827',
          // dark:'rgb(27, 86, 200)',
          light:'#4b5563',
        },

        'success': 'rgb(19, 194, 150)',

      },

      boxShadow: {
        'primFocus': '0 0 0 0.25rem rgba(49, 132, 253, 0.5)',
      },
      
      fontFamily: {
        'Bricolage': ['"Bricolage Grotesque"','sans-serif'],
      }

    },
  },
  plugins: [],
}