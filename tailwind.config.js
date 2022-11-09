/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgLight: '#f2f2f2',
        bgDark: '#121212',
        textHeading: '#DADADA',
        textPara: '#ABAAAA',
        buttonLeft: '#884F1B',
        buttonRight: '#580974',
        toolBg: '#322B3F',
        darkBG: '#1E1E1E',
        darkBGHover: '#3e3e3e',
        svgHover: '#dedcdc',
      },
      fontSize: {
        22: '1.375rem',
        150: '9.375rem',
        200: '12.5rem',
        275: '17.1875rem',
      },
      width: {
        1100: '1100px',
      },
      height: {
        620: '620px',
      },
    },
    screens: {
      xxs: '360px',
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
