module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mono': ['Fira Code', 'monospace'],
      'serif': ['Playfair Display', 'serif'],
    },
    extend: {
      backgroundColor: {
        'yellow': '#f5dd45',
        'yellow-2': '#ffe433',
      },
      backgroundImage: {
        'dither': "url('/dither.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
