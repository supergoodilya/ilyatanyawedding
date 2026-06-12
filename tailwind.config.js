/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF6EF',
          100: '#F5EFE3',
          200: '#EDE8DC',
          300: '#D9CCBA',
          400: '#C8B89E',
        },
        sage: {
          50:  '#EAF0E6',
          100: '#D4E0CC',
          200: '#B5C9A8',
          300: '#8AA87A',
          400: '#6B8A5E',
          500: '#4A6B3D',
          600: '#3A5230',
          700: '#2A3E22',
        },
        choco: {
          100: '#E8D5BE',
          200: '#D4A574',
          300: '#A67C52',
          400: '#7A5230',
          500: '#5C3D1E',
          600: '#3D2410',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
        lora: ['Lora', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
