/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sage: '#7BA196',
          'sage-dark': '#5C8377',
          'sage-light': '#A8C5BB',
          rose: '#D4A5A5',
          'rose-dark': '#B88888',
          'rose-light': '#E8C8C8',
          navy: '#2C3E50',
          'navy-light': '#34495E',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F7F4F0',
          warm: '#FDFBF9',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
