// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Coda',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        // Favicons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Amiri:ital,wght@400;500;700&display=swap'
        },
      ],
      
    }
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: 'fs_DD9PPlGmvn3aVL7tNgtI12tePzel97pa',
  },
  content: {
    renderer: {
      anchorLinks: false,
    }
  },
  i18n: {
    defaultLocale: 'ar',
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', language: 'en' },
      { code: 'ar', name: 'Arabic',  file: 'ar.json', language: 'ar' }
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: false ,
    // detectBrowserLanguage: {
    // useCookie: true,        
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',      
    //   alwaysRedirect: false
    // }
  },
})