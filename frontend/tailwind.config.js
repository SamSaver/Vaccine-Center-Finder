module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'yellow-bg': "url('yellow.jpeg')",
      })
    }
  },
  variants: {
    extend: {
      'poppins': 'Poppins, sans-serif',
    },
  },
  plugins: [],
}
