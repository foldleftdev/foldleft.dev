module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mono': ['Fira Code', 'monospace'],
      'serif': ['Playfair Display', 'serif'],
    },
    extend: {
      textColor: {
        'yellow': '#f5dd45',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
