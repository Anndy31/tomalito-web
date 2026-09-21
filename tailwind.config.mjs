/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta v2, extraída del logo Tomalito
        cream: '#FFFFFF',
        carbon: '#4A4A4A',
        'carbon-dark': '#3A3A3A',
        gold: '#C9A227',
        line: '#E8E8E8',
      },
      fontFamily: {
        // Serif editorial para titulares, sans limpia para cuerpo de texto.
        display: ['"Fraunces"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
