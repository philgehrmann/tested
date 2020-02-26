const config = require('./.contentful.json')
module.exports = {
  mode: 'spa',
  debug: 'false',
  /*
   ** Headers of the page
   */
  head: {
    title: 'The Hub | by Kapten & Son', // process.env.npm_package_name ||
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },{
        name: 'theme-color', content: '#303030'
      }, 
      {
        name: 'apple-mobile-web-app-capable', content: 'yes'
      }, 
      {
        name: 'apple-mobile-web-app-status-bar-style', content: '#303030'
      }, 
      {
        name: 'msapplication-navbutton-color', content: '#303030'
      }, 
      
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  script: [
    {
      src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      type: 'text/javascript'
    }
  ],
  // where to output built files
  outputDir: 'dist',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-parallax',
    '~/plugins/vue-maps',
    '~/plugins/vue-instagram'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    publicPath: process.env.PUBLIC_PATH,
    /*  You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  }
}
