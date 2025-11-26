<script setup>
const props = defineProps({
    projects: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <section class="mx-auto w-full max-w-7xl flex flex-col items-center relative px-4 md:px-15 mt-30">
        <h2 class="text-balance text-center text-5xl font-medium md:text-7xl mb-2">
            {{ $t('Projects') }}
        </h2>
        <h3 class="text-center text-2xl font-extralight text-muted ">
            {{ $t('like you love Coda') }}
        </h3>
        <div class="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter" />
        <!-- Projects list -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            <!-- Project item -->
            <GlobalProjectCard :project="project" v-for="project in projects.slice(0, 6)" :key="project.meta.name" />
        </div>
        <NuxtLink  v-if="projects.length > 6" to="/projects" class="buttonLink mt-10 ">
            <span class="truncate">{{ $t('See More') }}</span>
        </NuxtLink>

    </section>
</template>
