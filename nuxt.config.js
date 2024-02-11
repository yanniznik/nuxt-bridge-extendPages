import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    nitro: true,
  },
  modules: [
    '@/modules/addLocale.ts'
  ]
})
