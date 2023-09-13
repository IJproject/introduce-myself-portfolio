// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@nuxtjs/google-fonts',
    ],
    headlessui: {
        prefix: 'Headless'
    },
    googleFonts: {
        families: {
            'Abril+Fatface': true,
        },
    },
    tailwindcss: {
        config: {
            variants: {
                extend: {
                    backgroundColor: ['hover'],
                    textColor: ['hover'],
                },
              },
        }
    }
    
})
