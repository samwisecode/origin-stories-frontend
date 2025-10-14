// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/fonts', 'nuxt-gtag'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  gtag: {
    id: 'G-BX04VF3EPE'
  }

  // fonts: {
  //   families: [{ name: 'Poppins', provider: 'google' }]
  // }
})
