<template>
  <HeadPageSection IconName="ri:blogger-fill" />
  <UContainer>
    <UChangelogVersion class="mb-5" :ui="{
      title: 'relative text-xl font-semibold text-white',
      description: 'text-base text-slate-200 mt-1',
      date: 'text-sm text-slate-400 truncate',
      meta: 'flex items-center gap-3 mb-2 text-slate-300',
      footer: 'border-t border-white/10 pt-5 flex items-center justify-between text-slate-300'
    }"  :date="blog.date" :image="blog.image"
      :authors="blog.authors">
      <template #body>
        <ContentRenderer :value="blog.meta.body" />
      </template>
    </UChangelogVersion>
  </UContainer>
</template>
<script setup>
const route = useRoute()
const slug = route.params.slug
const { locale } = useI18n()
const blog = ref()
// fetch Home Content
const fetchContent = async () => {
  blog.value = await queryCollection(`blogs_${locale.value}`).where('slug', '=', slug).first()
}
await fetchContent()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
  await fetchContent()
})
useHead({
  title: blog.value?.title || 'Coda Tech Solutions',
  meta: [
    { name: 'description', content: blog.value?.description || '' }
  ]
})
</script>
<style>
article h1 {
  color: var(--primary);
  margin-top: 20px;
}

article h2 {
  color: var(--primary);
}

article h3 {
  color: #fff;

}

article p {
  color: #dadfe7;
}

article ul li::marker,article ol li::marker {
  color: var(--primary);
}
article code  {
  background-color: oklch(29.3% 0.066 243.157);
  border-color: oklch(29.3% 0.066 243.157);
  color: #fff;
}
</style>