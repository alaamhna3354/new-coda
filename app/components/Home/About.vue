<template>
    <OglBounded class="relative z-20">
        <div v-if="AboutContet" class="mx-auto w-full max-w-6xl flex flex-col items-center relative">
            <div
                class="showcase__glow absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-sky-700 mix-blend-screen blur-[120px] filter" />
            <h2 class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl">
                {{ $t('Who We Are') }}
            </h2>
            <div
                class="relative mt-16 items-center rounded-xl border border-gray-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:py-12">
                <div class="pattern-background" />
                <div class="p-4">
                    <h2 class="text-white text-2xl md:text-4xl font-black leading-tight ">
                        {{ AboutContet.title }}
                    </h2>
                    <h3 class="mt-5 mb-5 text-white/80 text-md font-normal leading-normal">
                        {{ AboutContet.description }}
                    </h3>
                    <NuxtLink to="/about" class="buttonLink">
                        <span class="truncate">{{ AboutContet.button }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </OglBounded>
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
<script setup lang="ts">
defineProps<{
    AboutContet?: {
        title?: string
        description?: string
        button?: string
    }
}>()
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        '.showcase__heading',
        {
            y: 100
        },
        {
            y: 0,
            ease: 'power2.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.showcase__heading',
                start: 'top bottom-=40%',
                toggleActions: 'play pause resume reverse'
            }
        }
    );

    gsap.fromTo(
        '.showcase__glow',
        {
            scale: 0.7,
            opacity: 0.1
        },
        {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.showcase__heading',
                start: 'top bottom-=40%',
                toggleActions: 'play pause resume reverse'
            }
        }
    );
});
</script>