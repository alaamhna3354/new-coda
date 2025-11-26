// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt'
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
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Noto+Sans+Arabic:wght@400;500;700&display=swap'
        },
      ],
      
    }
  },
  content: {
    renderer: {
      anchorLinks: false,
    }
  },
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ar', name: 'Arabic', file: 'ar.json' }
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,        
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',      
      alwaysRedirect: false
    }
  },
  // 📱 PWA config
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Coda Tech Solutions',
      short_name: 'Coda',
      description: 'Custom web & mobile development, software consulting and digital solutions.',
      theme_color: '#020617',
      background_color: '#020617',
      start_url: '/',
      display: 'standalone',
      lang: 'en',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      // شو الملفات اللي نخليها تنكاشي للأوفلاين/سرعة التحميل
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
    },
    devOptions: {
      enabled: true, // خليها true لو بدك تشوف PWA حتى بوضع dev
      suppressWarnings: true,
      type: 'module'
    }
  }
})