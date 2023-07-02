/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      'smoke-white': 'rgba(255, 255, 255, 1)',
      'open-yellow': 'rgba(248, 212, 66, 1)',
      'muted': 'rgba(108, 108, 108, 1)',
      'dark-yellow': 'rgba(254, 175, 0, 1)',
      'open-gray': 'rgba(229, 229, 229, 1)',
      'dashboard': 'rgba(242, 234, 225, 1)',
      'open-orange': 'rgba(254, 251, 236, 1)',
      'white-yellow': 'rgba(254, 251, 236, 1)',
      'smoke': 'rgba(248, 248, 248, 1)',
      'open-muted':'rgba(172, 172, 172, 1)',
      'dark-grey': 'rgba(75, 80, 109, 1)',
      'white-grey': 'rgb(127 127 127 / 70%)',

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minWidth: {
        '475px': '475px',
      },
      emerald: colors.emerald

    },
  },
  plugins: [],
}
