/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      ...require('./src/plugins/prime/tailwindConfig').tailwindConfigTheme,
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
