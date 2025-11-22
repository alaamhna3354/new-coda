<template>
  <HeadPageSection :Title="Projects.meta.title" IconName="material-symbols:conversion-path" />
  <UContainer>
    <UPageBody v-if="versions && versions.length != 0">
      <UChangelogVersions>
        <UChangelogVersion v-for="(version, index) in versions" :key="index" v-bind="version" :ui="{
          title: 'relative text-xl font-semibold text-white',
          description: 'text-base text-slate-200 mt-1',
          date: 'text-sm text-slate-400 truncate',
          meta: 'flex items-center gap-3 mb-2 text-slate-300',
          footer: 'border-t border-white/10 pt-5 flex items-center justify-between text-slate-300'
        }">
          <template #body>
            <ContentRenderer :value="version" />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </UPageBody>
    <div v-else class="relative text-2xl font-semibold text-white mb-5 flex items-center justify-center">
      <Icon name="ep:warning-filled" class="text-3xl me-2" />
      {{ $t('There is not any details for this project yet') }}
    </div>
  </UContainer>
</template>
<script setup>
const route = useRoute()
const slug = route.params.slug
const { locale } = useI18n()
const Projects = ref()
const versions = ref([])
// fetch Home Content
const fetchContent = async () => {
  Projects.value = await queryCollection(`projects_${locale.value}`).where('stem', '=', `en/projects/${slug}`).first()
}

const fetchVersions = async () => {
  versions.value = await queryCollection(`projectLogs_${locale.value}`).where('slug', '=', slug).order('date', 'DESC').all()
}
await fetchContent()
await fetchVersions()
// watch lang to refetch home content
watch(locale, async (newLocale) => {
  await fetchContent()
  // await fetchVersions()
})
useHead({
  title: Projects.value?.meta.title || 'Coda Tech Solutions',
  meta: [
    { name: 'description', content: Projects.value?.meta.description || '' }
  ]
})
</script>