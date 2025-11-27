<script setup>
const props = defineProps({
    AcademyWorks: {
    type: Array,
    default: () => ({})
  }
})
const blogsUi = ref({
    root: 'transition border border-sky-50/30 hover:bg-slate-900/60 mb-5',
    body: ' !pb-2',
    date: 'text-gray-400',
    title: 'text-primary',
    description: 'text-white',
    image: 'transform transition-transform duration-200 group-hover/blog-post:scale-110',
    avatar: 'transform transition-transform duration-200 hover:scale-115',
  })
</script>

<template>
    <h2 class="text-2xl md:text-3xl font-bold text-[#33c7e0] mb-15">{{ $t('Our Workshops') }}</h2>
    <UBlogPost orientation="horizontal" variant="ghost" v-for="work in AcademyWorks" :key="work.slug"
              :to="`/academy/${work.slug}`" :ui="blogsUi"
              :title="work.title" :description="work.description" :image="work.image" :date="work.date" />
              
</template>
