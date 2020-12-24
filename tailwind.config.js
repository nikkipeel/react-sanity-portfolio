module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // removes unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      brown: '#341611',
      white: {
        DEFAULT:'#f8f5f2',
        darken: '#eadfd7',
        active: '#fff'
      },
      pink: '#EC4899'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
