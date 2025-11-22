<template>
  <footer>
    <nav class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row border-t border-gray-600"
      aria-label="Footer">
      <NuxtLink to="/">
        <GlobalLogo class="w-[50px]" :text="$t('Coda')" color="#33c7e0" />
      </NuxtLink>
      <div>
        <span class="text-center text-sm text-light">
          © {{ new Date().getFullYear() }},
          <a class="text-primary hover:text-sky-300 transition  duration-300" href="https://alaa-mhna.com/"
            target="_blank">Alaa Mhna</a> - All rights reserved.
        </span>
      </div>
      <ul class="flex gap-6">
        <li>
          <a class="hover:text-sky-300 transition  duration-300" :href="`https://wa.me/${social.whatsapp}`"
            target="_blank">
            <Icon name="ri:whatsapp-fill" class="text-3xl" />
          </a>
        </li>
        <li>
          <a class="hover:text-sky-300 transition duration-300" :href="social.facebook" target="_blank">
            <Icon name="formkit:facebook" class="text-3xl" />
          </a>
        </li>
        <li>
          <a class="hover:text-sky-300 transition  duration-300" :href="`mailto:${social.email}`" target="_blank">
            <Icon name="ic:baseline-email" class="text-3xl" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<script setup>
const social = ref({})
onMounted(async () => {
  try {
    const res = await fetch('/social.json')
    if (!res.ok) throw new Error('Failed to load social.json')
    social.value = await res.json()
  } catch (error) {
    console.error('❌ Error loading social:', error)
  }
})
</script>
<style scoped>
.trans footer a {
  padding: 0 5px;
}
@media (max-width:768px) {
  footer{
    padding-bottom: 50px;
  }
}
</style>