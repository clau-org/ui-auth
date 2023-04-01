// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@clau-org/ui-core'
  ],
  srcDir: 'src/',
  nitro: {
    preset:'deno'
  }
})
