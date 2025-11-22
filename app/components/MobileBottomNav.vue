<script setup lang="ts">
const links = [
  { label: 'Coda', to: '/about', icon: 'mdi:about' },
  { label: 'Services', to: '/services', icon: 'i-lucide:sparkles' },
  { label: 'Projects', to: '/projects', icon: 'i-lucide:laptop' },
  { label: 'Blogs', to: '/blogs', icon: 'ri:blogger-fill' },
  { label: 'Academy', to: '/academy', icon: 'streamline-sharp:global-learning-solid' }
]

const route = useRoute()
</script>

<template>
  <nav
    class="m-2 rounded-md fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-zinc-900/95 backdrop-blur-sm sm:hidden"
  >
    <div class="mx-auto flex max-w-md items-center justify-between px-3 py-2">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-xs transition-colors"
        :class="
          route.path === link.to
            ? 'text-sky-400'
            : 'text-zinc-400 hover:text-zinc-100'
        "
      >
        <Icon
          :name="link.icon"
          class="text-lg"
          :class="route.path === link.to ? 'scale-110' : ''"
        />
        <span class="leading-none">
          {{ link.label }}
        </span>
      </NuxtLink>
    </div>
  </nav>
</template>
