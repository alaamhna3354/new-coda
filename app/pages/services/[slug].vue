<template>
  <HeadPageSection :Title="Service.meta.name" :Description="Service.meta.description" :IconName="Service.meta.icon" />
  <!-- Content Markdown -->
  <UContainer class="text-[#fff]">
    <article>
      <ContentRenderer :value="Service?.meta?.body" />
    </article>
      <h3 class="mt-24 mb-5 max-w-md text-xl text-sky-300 text-start">{{ $t('More') + " " }} {{ $t('Services') }} :</h3>
      <section class="mx-auto w-full max-w-7xl flex flex-col items-center relative mb-24">
        <div class="grid p-2 md:p-0 w-full">
            <NuxtLink :to="`/services/${ser.slug}`" v-for="(ser, index) in services" :key="index"
            class="flex flex-1 gap-4 rounded-xl p-4 flex-col glassmorphic glow-border-hover">
                <div class="text-sky-600 text-3xl">
                    <Icon :name="ser.meta.icon" class="text-[#33c7e0]" />
                </div>
                <div class="flex flex-col gap-1">
                    <h3 class="text-white text-base font-bold leading-tight">{{ ser.meta.name }}</h3>
                    <p class="text-white/60 text-sm font-normal leading-normal">
                        {{ ser.meta.description }}
                    </p>
                </div>
            </NuxtLink>
        </div>
    </section>
  </UContainer>
</template>
<script setup>
const route = useRoute()
const slug = route.params.slug
const { locale} = useI18n()
const Service = ref()
const services = ref([])

// fetch Home Content
const fetchContent = async () => {
  Service.value = await queryCollection(`services_${locale.value}`).where('slug', '=', slug).first()
}
// fetch other services
const fetchServices = async () => {
  services.value = await queryCollection(`services_${locale.value}`).where('slug', '!=', slug).all()
}
await fetchServices()
await fetchContent()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
  await fetchContent()
  await fetchServices()
})
useHead({
  title: Service.value?.meta.name || 'Coda Tech Solutions',
  meta: [
    { name: 'description', content: Service.value?.meta.description || '' }
  ]
})
</script>
<style scoped>
.grid{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem; 
}
</style>
<style>
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
</style>