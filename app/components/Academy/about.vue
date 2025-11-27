<template>
    <ClientOnly>
        <OglBounded class="relative z-20 ">
            <div class="mx-auto w-full max-w-6xl flex flex-col items-center relative mb-20">
                <div
                    class="showcase__glow absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-sky-700 mix-blend-screen blur-[120px] filter" />
                <h2 class="showcase__heading text-balance text-center text-2xl font-medium md:text-3xl">
                    {{ $t('What is Academy?') }}
                </h2>
                <div
                    class="relative mt-16 items-center rounded-xl border border-gray-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:py-12">
                    <div class="pattern-background" />
                    <div class="p-4">
                        <h2 class="text-white text-2xl md:text-4xl font-black leading-tight mb-3">
                            {{ AboutAcademy.title }}
                        </h2>
                        <p v-html="AboutAcademy.meta.summaryHtml" class="prose prose-invert"></p>

                    </div>
                </div>
            </div>
        </OglBounded>
    </ClientOnly>
</template>
<style scoped>
.pattern-background {
    background-image: url('/assets/grid-pattern.png');
    position: absolute;
    inset: 0;
    background-repeat: repeat;
    z-index: -1;
    background-position: center;
    opacity: 0.15;
    mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
}
</style>
<script setup>
import { ref, watch } from 'vue'
const { locale, t } = useI18n()
const AboutAcademy = ref({})

const fetchAboutAcademy = async () => {
    AboutAcademy.value = await queryCollection(`Workshop_${locale.value}`).first()
}
await fetchAboutAcademy()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
    await fetchAboutAcademy()
})
useHead({
    title: AboutAcademy.value.title,
    meta: [
        { name: 'description', content: AboutAcademy.value.description }
    ]
})
</script>
