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

  nitro: {
    experimental: {
      wasm: true
    }
  },

  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }]
  },

  gtag: {
    id: 'G-BX04VF3EPE',
    // Loaded by useAnalyticsConsent once the visitor accepts the cookie banner
    initMode: 'manual',
    initCommands: [
      [
        'consent',
        'default',
        {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied'
        }
      ]
    ]
  },

  // Icons first rendered client-side (e.g. inside a UModal) inject their CSS at the top of <head>.
  // Naming the `components` layer there would place it before `base`, letting Tailwind's
  // preflight override component styles like .page-container's auto margins.
  icon: {
    cssLayer: 'base'
  }
})
