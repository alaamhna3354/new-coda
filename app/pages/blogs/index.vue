<template>
    <HeadPageSection :Title="$t('Blogs')" :Description="$t('BlogsDescription')" IconName="ri:blogger-fill" />
    <section class="mx-auto mt-4 mb-30 flex max-w-6xl flex-col p-7 sm:mt-20 items-center">
        <!-- Blog item -->
        <UBlogPost variant="ghost" orientation="horizontal" :to="`/blogs/${blog.slug}`" :ui="blogsUi"
            v-for="blog in blogs.slice(0, 6)" :key="blogs.slug" :title="blog.title" :description="blog.description"
            :image="blog.image" :date="blog.date" :authors="blog.authors" />
        <NuxtLink v-if="blogs.length > 6" to="/blogs" class="buttonLink mt-10 ">
            <span class="truncate">{{ $t('See More') }}</span>
        </NuxtLink>

    </section>
</template>
<script setup>
const { locale, t } = useI18n()
const blogs = ref([])
const blogsUi = ref({
    root: 'transition border border-sky-50/30 hover:bg-slate-900/60 mb-5',
    date: 'text-gray-400',
    title: 'text-primary',
    description: 'text-white',
    image: 'transform transition-transform duration-200 group-hover/blog-post:scale-110',
    avatar: 'transform transition-transform duration-200 hover:scale-115',
})
// fetch blogs
const fetchblogs = async () => {
    blogs.value = await queryCollection(`blogs_${locale.value}`).all()
}
await fetchblogs()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
    await fetchblogs()
})
useHead({
    title: t('blogs'),
    meta: [
        { name: 'description', content: t('BlogsDescription') }
    ]
})
</script>