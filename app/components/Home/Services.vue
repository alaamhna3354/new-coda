<template>
    <section class="mx-auto w-full max-w-7xl flex flex-col items-center relative mt-24 mb-24">
        <h2 class="text-balance text-center text-5xl font-medium md:text-7xl ">
            {{ $t('Services') }}
        </h2>
      
        <div class="relative">
            <div class="mt-10 flex flex-col items-center md:flex-row" v-if="services">
                <template v-for="(service, index) in services" :key="index">
                    <template v-if="index === Math.floor(services.length / 2)">
                        <GlobalLogo
                            class="pulsing-logo shrink-0 opacity-70 brightness-100 w-[125px] ms-[3px] md:ms-[0] md:mb-[-4px]" />
                        <div class="signal-line rotate-180" />
                    </template>
                    <NuxtLink :to="`/services/${service.slug}`"
                        class="service-item pulsing-icon grid aspect-square shrink-0 place-content-center rounded-full border border-sky-50/30 bg-sky-50/25 p-3 text-sky-100 opacity-40 ">
                        <Icon :name="service.meta.icon" class="text-4xl mx-auto" />
                        <h3 class="text-white text-base font-bold leading-tight mt-1">{{ service.meta.name }}</h3>
                    </NuxtLink>
                    <div v-if="index !== services.length - 1" class="signal-line"
                        :class="index >= Math.floor(services.length / 2) ? 'rotate-180' : 'rotate-0'" />
                </template>
            </div>
        </div>
    </section>
</template>
<style scoped>
@reference "tailwindcss";
.service-item{
    transition: .3s;
}
.service-item:hover{
    background-color: #33c6e0a6;
    opacity: 1 !important;
}
.signal-line {
    --rotation: 90deg;
    @apply h-[20px] w-[1.5px] bg-gradient-to-t md:h-[1.5px] md:w-[30px] lg:w-[40px] xl:w-[50px];
    background-color: hsla(0, 0%, 100%, 0.1);
    background-image: linear-gradient(var(--rotation),
            rgba(255, 255, 255, 0) 50%,
            #33c7e0 50%,
            rgba(255, 255, 255, 0) 70%);
    background-size: 500% 500%;
}
@media (max-width: 767px) {
    .signal-line {
        --rotation: 0deg;
    }
}
</style>
<script setup>
const props = defineProps({
  services: {
    type: Array,
    default: () => []
  }
})
import gsap from "gsap";
onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'power2.inOut' }
    });

    tl.to('.pulsing-logo', {
        keyframes: [
            {
                filter: 'brightness(2)',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.in'
            },
            { filter: 'brightness(1)', opacity: 0.7, duration: 0.9 }
        ]
    });

    tl.to(
        '.signal-line',
        {
            keyframes: [
                { backgroundPosition: '0% 0%' },
                {
                    backgroundPosition: '100% 100%',
                    stagger: { from: 'center', each: 0.3 },
                    duration: 1
                }
            ]
        },
        '-=1.4'
    );

    tl.to(
        '.pulsing-icon',
        {
            keyframes: [
                {
                    opacity: 1,
                    duration: 1,
                    stagger: {
                        from: 'center',
                        each: 0.3
                    }
                },
                {
                    opacity: 0.4,
                    duration: 1,
                    stagger: {
                        from: 'center',
                        each: 0.3
                    }
                }
            ]
        },
        '-=2'
    );
});
</script>