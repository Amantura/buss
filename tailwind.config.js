const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      green: colors.emerald,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.amber
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Source Sans Pro', 'serif'],
    },
    extend: {
      zIndex: {
        100: '100'
      },
      height: {
        '1px': '1px',
        '2px': '2px',
        17: '4.25rem',
        18: '4.50rem',
        19: '4.75rem',
      },
      padding: {
        '1/3': '33%',
        '3/4': '75%',
        half: '50%',
        full: '100%',
      },
      maxWidth: {
        container: '1280px',
      }
    }
  },
  variants: {
    extend: {}
  },
}
