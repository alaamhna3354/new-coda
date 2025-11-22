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
    <section class="mx-auto mt-4 mb-30 flex max-w-6xl flex-col p-7 sm:mt-20 items-center">
        <h2 class="text-balance text-center text-5xl font-medium md:text-7xl mb-2">
            {{ $t('Blogs') }}
        </h2>
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
