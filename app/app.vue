<script setup>
const { locale,setLocale } = useI18n()
// Loading page
const nuxtApp = useNuxtApp()

const isLoading = ref(true) 

// Nuxt hook for Loading page when change routes page
nuxtApp.hook('page:start', () => {
  isLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <Html :dir="locale === 'ar' ? 'rtl' : 'ltr'" :lang="locale">
  <UApp>

    <Body>
      <AppLoader v-if="isLoading" />
      <NuxtLayout>
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </UApp>

  </Html>
</template>