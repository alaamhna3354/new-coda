<template>
    <OglBounded class="relative z-20 mt-30">
        <div v-if="services" class="mx-auto w-full max-w-6xl flex flex-col items-center relative">
                <div class="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter" />
            <h2 class="text-balance text-center text-5xl font-medium md:text-7xl">
                {{ $t('Services') }}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
                <NuxtLink :to="`/services/${service.slug}`" v-for="(service, index) in services" :key="index"
                    class="service-item relative bg-gradient-to-b from-gray-50/15 to-gray-50/5">
                    <div class="icon">
                        <Icon :name="service.meta.icon" class="text-4xl mx-auto text-primary" />
                    </div>
                    <div class="info">
                        <h3 class="text-white font-bold leading-tight mt-2 mb-1">{{ service.meta.name }}</h3>
                        <p class="truncate">{{ service.meta.description }}</p>
                        <div class="seeMore mt-3 text-sm">{{ $t('See More') }}</div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </OglBounded>
</template>
<style lang="scss" scoped>
.service-item {
    max-height: 200px;
    border-radius: 0.25rem;
    padding: 20px;
    background-attachment: fixed;
    background-size: cover;
    color: #ffffff;
    border-top: 2px solid transparent;
    transition: .5s;
    background: linear-gradient(135deg,
            #192b3b71 7%,
            #6298d65b 34%,
            #5984d360 57%,
            #3862a544 85%,
            #3a4f7e4b 100%);
    @media (max-width:768px) {
        margin-inline-start: 15px;
        margin-inline-end: 15px;
    }
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(2, 15, 30, 0.25);
        pointer-events: none;
        transition: .5s;
    }

    &:hover {
        border-top: 2px solid var(--primary);

        &::before {
            opacity: 0;
        }
    }
}
</style>
<style scoped>
@reference "tailwindcss";

.seeMore {
    @apply relative inline-flex h-fit w-fit rounded-full px-4 py-2 cursor-pointer;
    @apply border border-sky-100/20 bg-sky-200/10 text-sky-200 outline-none ring-sky-300;
    @apply transition-colors hover:border-sky-200/40 hover:text-sky-300 focus:ring-2;
}
.service-item:hover .seeMore{
    color: var(--color-sky-300);
    border-color: color-mix(in oklab, var(--color-sky-200, oklch(90.1% 0.058 230.902)) 40%, transparent);
}
</style>
<script setup>
const props = defineProps({
    services: {
        type: Array,
        default: () => []
    }
})

</script>