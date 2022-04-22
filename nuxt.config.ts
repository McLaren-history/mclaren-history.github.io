import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/public/css/main.css'],
  // ssr: true,
  target: 'static',
  router: {
    base: '/',
  },
})
