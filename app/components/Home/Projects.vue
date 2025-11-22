<script setup>
const props = defineProps({
    projects: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <section class="mx-auto mt-4 mb-30 flex max-w-6xl flex-col p-7 sm:mt-20 items-center">
        <h2 class="text-balance text-center text-5xl font-medium md:text-7xl mb-2">
            {{ $t('Projects') }}
        </h2>
        <h3 class="text-center text-2xl font-extralight text-muted ">
            {{ $t('like you love Coda') }}
        </h3>
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
