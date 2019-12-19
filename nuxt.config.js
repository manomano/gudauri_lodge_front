require('dotenv').config();

module.exports = {
  //mode: 'spa',
  /*
  ** Headers of the page
  */
  env: {
    apiBaseUrl: process.env.apiBaseUrl || 'http://localhost:3000',
    imageLinkPrefix: process.env.imageLinkPrefix
  },


  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~assets/css/styles.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n.js',
    {
      ssr: false,
      src: '~/plugins/vue_carousel.js'
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    /* 'bootstrap-vue/nuxt',*/
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    "@nuxtjs/dotenv"
  ],
  axios:{},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    /*extend (config, ctx) {
    }*/
    filenames: {
      chunk: '[name].js'
    },
    extend (config, ctx) {
      const path = require('path');
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (ctx.isDev && ctx.isClient) {
          config.devtool = '#source-map'
        }
      }
    }
  },
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/about', '/rooms', '/ka', '/ka/rooms', '/ka/about']
  }
}
