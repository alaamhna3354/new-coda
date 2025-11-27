<script setup>
const { locale } = useI18n()
const AcademyWork = ref({})
const route = useRoute()
const slug = route.params.slug
const fetchWork = async () => {
    AcademyWork.value = await queryCollection(`Workshop_${locale.value}`).where('slug', '=', slug).first()
}
await fetchWork()
console.log(AcademyWork.value)
// watch lang to refetch home content
watch(locale, async (newLocale) => {
    await fetchWork()
})
useHead({
    title: AcademyWork.value.title,
    meta: [
        { name: 'description', content:  AcademyWork.value.description }
    ]
})
</script>

<template>
  <UChangelogVersion v-bind="AcademyWork" :ui="{
    root: 'flex items-start',
    container: 'max-w-xl',
    header: 'border-b border-default pb-4',
    title: 'text-3xl text-white',
    description: 'text-base text-slate-200 mt-1',
    date: 'text-xs/9 text-slate-200 font-mono',
    indicator: 'sticky top-0 pt-16 -mt-16 sm:pt-24 sm:-mt-24 lg:pt-32 lg:-mt-32'
  }">
    <template #body>
      <ContentRenderer :value="AcademyWork.meta.body" />
    </template>
  </UChangelogVersion>
</template>
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

article ul li::marker,
article ol li::marker {
  color: var(--primary);
}

article code {
  background-color: oklch(29.3% 0.066 243.157);
  border-color: oklch(29.3% 0.066 243.157);
  color: #fff;
}
</style>