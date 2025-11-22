<template>
    <HeadPageSection :Title="about.meta.title"
        :Description="about.meta.description"
        :IconName="`arcticons:goabout`" />
    <about-vision-section :Content="about.meta.sections[0]"></about-vision-section>
    <about-goals-section :Content="about.meta.sections[1]"></about-goals-section>
</template>
<script setup>
const { locale } = useI18n()
const about = ref()
// fetch Home Content
const fetchContent = async () => {
    about.value = await queryCollection(`about_${locale.value}`)
        .first()
}
await fetchContent()
console.log('about:',about.value)
watch(locale, async (newLocale) => {
  await fetchContent()
})
useHead({
  title: about.value?.meta.title || 'About Coda',
  meta: [
    { name: 'description', content: about.value?.meta.description || '' }
  ]
})
</script>
