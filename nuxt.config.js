
export default {
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/components'
  ],

  components: true,

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  head: {
    title: 'Thomas William McClean | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The digital portfolio of Thomas William McClean' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.tommcclean.me/' }
    ]
  },

  loading: {
    color: '#fff'
  },

  mode: 'universal',

  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],

  plugins: [
    '~/plugins/fontawesome.plugin.js'
  ],

  webfontloader: {
    google: {
      families: ['Comfortaa:400,400&display=swap']
    }
  }
}
