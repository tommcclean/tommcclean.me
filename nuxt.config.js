
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

  mode: 'client',
  target: 'static',

  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],

  plugins: [
    '~/plugins/fontawesome.plugin.js'
  ],

  pwa: {
    manifest: {
      name: 'Thomas William McClean',
      short_name: 'Thomas William McClean',
      description: 'The digital portfolio of software engineer Thomas William McClean',
      lang: 'en',
      display: 'standalone',
      orientation: 'portrait-primary',
      start_url: 'https://www.tommcclean.me',
      background_color: '#000000',
      theme_color: '#000000'
    }
  },

  webfontloader: {
    google: {
      families: ['Comfortaa:400,400&display=swap']
    }
  }
}
