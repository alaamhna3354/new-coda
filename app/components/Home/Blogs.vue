<script setup>
const props = defineProps({
    blogs: {
        type: Array,
        default: () => []
    }
})
const blogsUi = ref({
    root: 'transition border border-sky-50/30 hover:bg-slate-900/60',
    date: 'text-gray-400',
    title: 'text-primary',
    description: 'text-white',
    image: 'transform transition-transform duration-200 group-hover/blog-post:scale-110',
    avatar: 'transform transition-transform duration-200 hover:scale-115',
})
</script>

<template>
    <section class="mx-auto w-full max-w-7xl flex flex-col items-center relative px-4 md:px-15 mt-30 mb-40">
        <h2 class="text-balance text-center text-5xl font-medium md:text-7xl mb-2">
            {{ $t('Blogs') }}
        </h2>
        <div class="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter" />
        <!-- Blogs list -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            <!-- Blog item -->
            <UBlogPost variant="ghost" :to="`/blogs/${blog.slug}`" :ui="blogsUi" v-for="blog in blogs.slice(0, 6)" :key="blogs.slug"
                :title="blog.title"
                :description="blog.description"
                :image="blog.image"
                :date="blog.date"
                :authors="blog.authors" />
        </div>
        <NuxtLink v-if="blogs.length > 6" to="/blogs" class="buttonLink mt-10 ">
            <span class="truncate">{{ $t('See More') }}</span>
        </NuxtLink>

    </section>
</template>
