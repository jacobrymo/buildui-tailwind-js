/** @type {import('tailwindcss').Config} */

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      ginto: ['var(--font-ginto)'],
    },
    colors: {
      brand: '#5865F2',
      gray: {
        50: '#ECEDEE',
        100: '#DCDDDE',
        200: '#B9BBBE',
        300: '#8E9297',
        400: '#72767D',
        500: '#5C6067',
        600: '#464950',
        700: '#36393F',
        800: '#2F3136',
        900: '#202225',
        950: '#111111',
      },
    },
  },
  plugins: [],
};
