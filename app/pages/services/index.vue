<template>
    <HeadPageSection :Title="$t('Services')"
        :Description="$t('ServicesDescription')"
        IconName="medical-icon:interpreter-services" />
    <section class="mx-auto flex max-w-6xl flex-col p-7">
        <div class="grid p-2 md:p-0 w-full">
            <NuxtLink :to="`/services/${service.slug}`" v-for="(service, index) in services" :key="index"
            class="flex flex-1 gap-4 rounded-xl p-4 flex-col glassmorphic glow-border-hover">
                <div class="text-sky-600 text-3xl">
                    <Icon :name="service.meta.icon" class="text-[#33c7e0]" />
                </div>
                <div class="flex flex-col gap-1">
                    <h3 class="text-white text-base font-bold leading-tight">{{ service.meta.name }}</h3>
                    <p class="text-white/60 text-sm font-normal leading-normal">
                        {{ service.meta.description }}
                    </p>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>
<style scoped>
.grid{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem; 
}
</style>
<script setup>
const { locale,t } = useI18n()
const services = ref([])
// fetch services
// fetch services
const fetchServices = async () => {
  services.value = await queryCollection(`services_${locale.value}`).all()
}
await fetchServices()
console.log(services.value)
// watch lang to refetch home content
watch(locale, async (newLocale) => {
  await fetchServices()
})
useHead({
  title: t('Services'),
  meta: [
    { name: 'description', content: t('ServicesDescription') }
  ]
})
</script>