// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Samaaj Data',
      meta: [
        { name: 'description', content: 'Data for the people, by the people' }
      ]
    }
  }
})
