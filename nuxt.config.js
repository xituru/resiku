import generateIconTags from './utils/generate-icon-tags'
import generateMetaTags from './utils/generate-meta-tags'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'id-ID',
    },
    title: process.env.SITE_TITLE || 'Document',
    meta: [
      ...generateMetaTags(),
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@resiku' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      ...generateIconTags('/assets/', 'favicon', 'apple-touch-icons/Icon'),
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.SITE_URL,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/v1.0',
      extensions: ['vue'],
      prefetch: true,
    },
    {
      prefix: 'comm',
      path: '~/components/v1.0/commons',
      extensions: ['vue'],
      prefetch: true,
      level: 1,
    },
    {
      prefix: 'app',
      path: '~/components/v1.0/features',
      extensions: ['vue'],
      prefetch: true,
      level: 1,
    },
  ],

  generate: {
    exclude: [/\.controller/],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/google-gtag',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 8080,
  },

  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_HTTP_ENDPOINT || 'http://localhost',
      },
    },
  },

  colorMode: {
    classSuffix: '',
  },

  tailwindcss: {
    cssPath: '~/assets/styles/main.scss',
  },

  publicRuntimeConfig: {
    site: {
      title: process.env.SITE_TITLE,
      description: process.env.SITE_DESCRIPTION,
      url: process.env.SITE_URL,
      image: process.env.SITE_IMAGE,
    },
    google: {
      ua: process.env.GOOGLE_ANALYTICS_ID,
      gads: process.env.GOOGLE_ADS_ID,
      ga4: process.env.GOOGLE_GA4_ID,
    },
  },

  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    config: {
      anonymize_ip: true,
      send_page_view: false,
    },
    debug: true,
    disableAutoPageTrack: false,
    additionalAccounts: [
      {
        id: process.env.GOOGLE_ADS_ID,
        config: {
          send_page_view: false,
        },
      },
      {
        id: process.env.GOOGLE_GA4_ID,
        config: {
          send_page_view: true,
        },
      },
    ],
  },
}
