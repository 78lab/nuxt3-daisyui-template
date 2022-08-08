import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        // '@nuxtjs/color-mode',
      ],
})
