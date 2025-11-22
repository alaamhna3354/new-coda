<template>
  <header class="p-4 md:p-6 absolute w-full top-[0px] z-20">
    <nav class="mx-auto flex max-w-6xl flex-col justify-between py-2 md:flex-row md:items-center font-medium text-white"
      aria-label="Main">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="z-50" @click="isOpen = false">
          <div class="logo">
            <GlobalLogo class="w-[45px]" />
            <strong class="uppercase">{{ $t('Coda') }}</strong>
          </div>
        </NuxtLink>
        <div class="flex md:hidden items-center">
          <NuxtLink to="/contact" class="buttonLink me-3">
            {{ $t('Contact') }}
          </NuxtLink>
          <div class="languages flex cursor-pointer" @click="toggleLocale">
            <Icon name="fluent-mdl2:locale-language" class="text-3xl" />
          </div>
        </div>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden gap-6 md:flex items-center">
        <li class="link" v-for="link in Links" :key="link">
          <NuxtLink :to="link.url">
            {{ $t(link.name) }}
          </NuxtLink>
        </li>
      </ul>
      <div class="hidden md:flex items-center">
        <NuxtLink to="/contact" class="buttonLink me-3">
          {{ $t('Contact') }}
        </NuxtLink>
        <div class="languages flex cursor-pointer" @click="toggleLocale">
          <Icon name="fluent-mdl2:locale-language" class="text-3xl" />
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.logo {
  text-align: center;
}

.languages span,
.link {
  transition: .3s;
}

.languages:hover span {
  color: #33c7e0;
}

.link:hover {
  color: #33c7e0;
}
</style>
<script setup>
const Links = ref([
  { name: 'Coda', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Projects', url: '/projects' },
  { name: 'Blogs', url: '/blogs' },
  { name: 'Academy', url: '/academy' },
])
const { locale, locales, setLocale } = useI18n()
// Change lang
const toggleLocale = () => {
  // لنبدل للغة الثانية مباشرة
  const currentIndex = locales.value.findIndex(l => l.code === locale.value)
  const nextIndex = (currentIndex + 1) % locales.value.length
  setLocale(locales.value[nextIndex].code);
}
</script>
