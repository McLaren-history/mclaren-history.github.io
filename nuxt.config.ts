import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/public/css/main.css'],
  // ssr: true,
  target: 'static',
  router: {
    base: '/',
  },

  // HEAD Configuration
  meta: {
    titleTemplate: '%s - McLaren Racing: History',
    viewport: 'width=device-width, initial scale=1',
    description: 'Meta description',
  },

  // Will require extra attention, and remember to add vue-plausible to package.json
  // modules: ['vue-plausible'],
  // plausible: {
  //   domain: 'mclaren-history.sthomas.ch',
  //   apiHost: 'https://stats.sthomas.ch/mclaren-history',
  //   enableAutoOutboundTracking: true,
  // },
})
