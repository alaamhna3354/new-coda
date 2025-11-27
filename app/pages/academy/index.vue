<template>
    <HeadPageSection :Title="$t('Our Coda Academy')" :Description="$t('Free Training Workshops')" IconName="streamline-sharp:global-learning-solid" />
    <GlobalSkyBg />
            <AcademyAbout />
            <section class="mx-auto w-full max-w-6xl flex flex-col items-center relative mb-20">
            <AcademyWorkList :AcademyWorks="AcademyWorks" />
            <AcademyVerifySerial />
        </section>
</template>
<script setup>
const { locale ,t } = useI18n()
const AcademyWorks = ref([])

const fetchWorks = async () => {
    AcademyWorks.value = await queryCollection(`Workshop_${locale.value}`).where('date','!=',null).order('date', 'DESC').all()
}
await fetchWorks()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
    await fetchWorks()
})
useHead({
    title: t('Our Coda Academy'),
    meta: [
        { name: 'description', content: t('Free Training Workshops') }
    ]
})
</script>