module.exports = {
  darkMode: 'class',
  purge: {
    content: ['assets/**/*.svg', 'components/**/*.ts', 'mixins/**/*.ts'],
  },
  plugins: [require('@tailwindcss/typography')],
}
