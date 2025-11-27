<template>
    <HeadPageSection :Title="$t('Blogs')" :Description="$t('BlogsDescription')" IconName="ri:blogger-fill" />
  
    <section class="mx-auto w-full max-w-7xl px-4 md:px-6 mb-40">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
        <!-- Sidebar -->
        <aside class="col-span-1">
          <div class="sticky top-20 space-y-6">
            <!-- Search -->
            <div class="p-4 bg-slate-800/40 rounded-md">
              <label class="block text-sm text-gray-300 mb-2">{{ $t('Search') }}</label>
              <input v-model="searchTerm" type="search" :placeholder="$t('Search title or description...')"
                class="w-full bg-transparent border border-slate-700 rounded px-3 py-2 text-white focus:outline-none" />
            </div>
  
            <!-- Categories -->
            <div class="p-4 bg-slate-800/30 rounded-md">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-gray-200">{{ $t('Categories') }}</h4>
                <button @click="selectCategory(null)" class="text-xs text-primary-400 hover:underline">{{ $t('Clear') }}</button>
              </div>
              <ul class="space-y-2">
                <li v-for="cat in categoriesList" :key="cat" class="flex items-center justify-between">
                  <button @click="selectCategory(cat)"
                    :class="['text-sm text-start w-full', selectedCategory === cat ? 'text-primary font-semibold' : 'text-gray-300']">
                    {{ cat }}
                  </button>
                  <span class="text-xs text-primary-400">({{ categoryCounts[cat] || 0 }})</span>
                </li>
              </ul>
            </div>
  
            <!-- Tags -->
            <div class="p-4 bg-slate-800/30 rounded-md">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-gray-200">{{ $t('Tags') }}</h4>
                <button @click="clearTags" class="text-xs text-primary-400 hover:underline">{{ $t('Clear') }}</button>
              </div>
              <div class="flex flex-wrap gap-2">
                <button v-for="tag in tagsList" :key="tag" @click="toggleTag(tag)"
                  :class="['px-2 py-1 rounded text-sm border text-sm', selectedTags.has(tag) ? 'bg-primary text-white' : 'bg-transparent text-gray-300 border-slate-700']">
                  {{ tag }}
                </button>
              </div>
            </div>
  
            <!-- Reset all -->
            <div class="p-4 pt-1">
              <button @click="resetAll"
                class="w-full px-4 py-2 rounded-md border border-sky-600 text-sky-100 hover:bg-sky-600/20">{{ $t('Reset filters') }}</button>
            </div>
          </div>
        </aside>
  
        <!-- Blog grid -->
        <div class="col-span-1 lg:col-span-3">
          <div class="mb-6 flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-white">{{ $t('Blogs') }}</h2>
              <p class="text-sm text-gray-400">{{ filteredBlogs.length }} {{ $t('Results') }}</p>
            </div>
            <!-- optional: sorting or other controls can go here -->
          </div>
  
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- Use visible slice/pagination if needed -->
            <UBlogPost variant="ghost" v-for="blog in filteredBlogs" :key="blog.slug"
              :to="`/blogs/${blog.slug}`" :ui="blogsUi"
              :title="blog.title" :description="blog.description" :image="blog.image" :date="blog.date" :authors="blog.authors">
              <template #footer>
                <div class="flex flex-wrap gap-2 px-4 sm:px-6 pt-3 pb-3">
                  <UBadge v-for="tag in (blog.meta?.tags || [])" :key="tag" :label="tag" color="primary" variant="subtle" />
                </div>
              </template>
            </UBlogPost>
          </div>
  
          <!-- Empty state -->
          <div v-if="filteredBlogs.length === 0" class="mt-8 p-6 bg-slate-800/30 rounded text-center text-gray-300">
            {{ $t('No articles match your filters.') }}
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  const { locale, t } = useI18n()
  
  // state
  const blogs = ref([])
  const blogsUi = ref({
    root: 'transition border border-sky-50/30 hover:bg-slate-900/60 mb-5',
    body: ' !pb-2',
    date: 'text-gray-400',
    title: 'text-primary',
    description: 'text-white',
    image: 'transform transition-transform duration-200 group-hover/blog-post:scale-110',
    avatar: 'transform transition-transform duration-200 hover:scale-115',
  })
  
  // filters
  const searchTerm = ref('')
  const selectedCategory = ref(null)
  const selectedTags = ref(new Set())
  
  // derived lists
  const categoriesList = ref([])
  const tagsList = ref([])
  
  // counts
  const categoryCounts = ref({})
  
  // fetch blogs
  const fetchblogs = async () => {
    // keep your existing collection query — adjust if your project uses @nuxt/content or other API
    blogs.value = await queryCollection(`blogs_${locale.value}`).all() || []
  
    // extract categories and tags
    const catSet = new Set()
    const tagMap = new Map()
    blogs.value.forEach(b => {
      const cat = b.meta?.category || b.category || 'Uncategorized'
      catSet.add(cat)
      categoryCounts.value[cat] = (categoryCounts.value[cat] || 0) + 1
  
      const tags = b.meta?.tags || []
      tags.forEach(t => {
        tagMap.set(t, (tagMap.get(t) || 0) + 1)
      })
    })
  
    categoriesList.value = Array.from(catSet)
    // optional: sort alphabetically or by count
    categoriesList.value.sort((a, b) => (categoryCounts.value[b] || 0) - (categoryCounts.value[a] || 0))
  
    tagsList.value = Array.from(tagMap.keys()).sort((a, b) => (tagMap.get(b) - tagMap.get(a)))
  }
  await fetchblogs()
  
  // refetch on locale change
  watch(locale, async () => {
    // reset counts/lists before fetch
    categoryCounts.value = {}
    categoriesList.value = []
    tagsList.value = []
    selectedCategory.value = null
    selectedTags.value = new Set()
    searchTerm.value = ''
    await fetchblogs()
  })
  
  // computed filtered list
  const filteredBlogs = computed(() => {
    const q = searchTerm.value.trim().toLowerCase()
    return blogs.value.filter(b => {
      // category filter
      const cat = b.meta?.category || b.category || 'Uncategorized'
      if (selectedCategory.value && selectedCategory.value !== cat) return false
  
      // tags filter: all selected tags must be present (change to any-match if you prefer)
      if (selectedTags.value.size > 0) {
        const blogTags = new Set(b.meta?.tags || [])
        for (const t of selectedTags.value) {
          if (!blogTags.has(t)) return false
        }
      }
  
      // search (title or description)
      if (q) {
        const title = (b.title || '').toString().toLowerCase()
        const desc = (b.description || b.excerpt || '').toString().toLowerCase()
        return title.includes(q) || desc.includes(q)
      }
  
      return true
    })
  })
  
  // helpers
  const toggleTag = (tag) => {
    const s = selectedTags.value
    if (s.has(tag)) s.delete(tag)
    else s.add(tag)
    // reassign to trigger reactivity in some edge cases
    selectedTags.value = new Set(s)
  }
  
  const clearTags = () => {
    selectedTags.value = new Set()
  }
  
  const selectCategory = (cat) => {
    selectedCategory.value = cat
  }
  
  const resetAll = () => {
    selectedCategory.value = null
    selectedTags.value = new Set()
    searchTerm.value = ''
  }
  
  // head
  useHead({
    title: t('blogs'),
    meta: [{ name: 'description', content: t('BlogsDescription') }]
  })
  </script>
  
  <style scoped>
  /* small niceties */
  button:focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
  </style>
  