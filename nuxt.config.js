// eslint-disable-next-line nuxt/no-cjs-in-config
require('./configs/env')

export default {
  server: {
    port: 4700
  },
  ssr: true,
  target: 'static',
  components: true,
  head: require('./configs/head'),
  css: [
    '@/assets/css/app.css',
    '@/assets/css/fontawesome.css',
    '@/assets/fonts/fonts.css'
  ],
  plugins: [
    '@/plugins/utils',
    '@/plugins/lazyload',
    '@/plugins/mask',
    '@/plugins/vue-horizontal',
    '@/plugins/gtags',
    { src: '@/plugins/aos', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: require('./configs/axios'),
  build: require('./configs/build'),
}
