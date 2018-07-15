module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ワクラバ Worklover',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ワクラバでは、中の人が制作したサービスやアプリケーションを紹介しています。' },
      { hid: 'keyword', name: 'keyword', content: 'ワクラバ,WorkLover,aikawame' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'ワクラバ' },
      { property: 'og:title', content: 'ワクラバ WorkLover' },
      { property: 'og:url', content: 'https://worklover.wor.jp/' },
      { property: 'og:image', content: 'https://worklover.wor.jp/img/ogp.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:description', content: 'ワクラバでは、中の人が制作したサービスやアプリケーションを紹介しています。' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@aikawame' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/css/default.scss',
    '~/assets/css/icon.css'
  ],
  modules: [
    [
      '@nuxtjs/google-analytics', { id: 'UA-1744748-12' },
      '@nuxtjs/sitemap'
    ]
  ]
};

