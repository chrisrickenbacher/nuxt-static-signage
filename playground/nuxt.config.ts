export default defineNuxtConfig({
  compatibilityDate: '2025-05-16',
  modules: ['../src/module'],
  signage: {},
  devtools: { enabled: true },
  target: 'static',
  ssr: false
})
