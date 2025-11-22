<template>
  <!-- ************ Hero Section <HomeHero /> ************ -->
  <HomeHero :HeroContet="home.meta.hero" />
  <!-- ************ About Section ************ -->
  <HomeAbout :AboutContet="home.meta.about" />
  <!-- ************ Services Section ************ -->
  <HomeServices :services="services" />
  <!-- ************ Projects Section ************ -->
  <HomeProjects :projects="projects" />
  <!-- ************ Blogs Section ************ -->
  <HomeBlogs :blogs="blogs" />
  <!-- ************ Contact Section ************ -->
  <UContainer class="pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- LEFT: Contact Info -->
      <HomeContactInformation />

      <!-- RIGHT: Map -->
      <HomeContact />
    </div>
  </UContainer>
</template>
<script setup>
// Data Content
const { locale } = useI18n()
const home = ref()
const services = ref([])
const projects = ref([])
const blogs = ref([])
// fetch Home Content
const fetchContent = async () => {
  home.value = await queryCollection(`home_${locale.value}`)
    .first()
  }
// fetch services
const fetchServices = async () => {
  services.value = await queryCollection(`services_${locale.value}`).all()
}
// fetch Projects
const fetchProjects = async () => {
  projects.value = await queryCollection(`projects_${locale.value}`).all()
}
// fetch Blogs
const fetchBlogs = async () => {
  blogs.value = await queryCollection(`blogs_${locale.value}`).all()
}

await fetchContent()
await fetchServices()
await fetchProjects()
await fetchBlogs()

  // watch lang to refetch home content
watch(locale, async (newLocale) => {
  await fetchContent()
  await fetchServices()
  await fetchProjects()
  await fetchBlogs()
})
useHead({
  title: home.value?.meta.hero.title || 'Coda Tech Solutions',
  meta: [
    { name: 'description', content: home.value?.meta.hero.description || '' }
  ]
})


</script>
