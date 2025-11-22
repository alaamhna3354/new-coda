<template>
  <HeadPageSection :Title="$t('Projects')" :Description="$t('ProjectsDescription')"
  IconName="carbon:ibm-cloud-projects" />
  <section class="mx-auto flex max-w-6xl flex-col p-7">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <!-- Project item -->
      <GlobalProjectCard :project="project"
       v-for="project in projects" :key="project.meta.name" />
    </div>
  </section>
</template>
<script setup>
const { locale, t } = useI18n()
const projects = ref([])

// fetch projects
const fetchProjects = async () => {
  projects.value = await queryCollection(`projects_${locale.value}`).all()
}
await fetchProjects()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
  await fetchProjects()
})
useHead({
  title: t('Projects'),
  meta: [
    { name: 'description', content: t('ProjectsDescription') }
  ]
})
</script>