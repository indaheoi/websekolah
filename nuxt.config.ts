// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // modules: ['@nuxtjs'],
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      // autoprefixer: {},
    },
  },
})


