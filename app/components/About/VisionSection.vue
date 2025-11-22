<template>
  <section class="pb-10 px-6 relative">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#33c7e0] mb-6">
          {{ Content.title }}
        </h2>
        <p class="text-xl md:text-2xl text-gray-300 font-medium">
          {{ Content.description }}
        </p>
      </div>

      <div class="space-y-8">
        <div v-for="(point, index) in Content.items" :key="index"
          class="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#33c7e0]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] overflow-hidden"
          :style="{ animationDelay: index * 100 + 'ms' }">

          <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            <img src="/assets/about/vision-1.jpg" alt="" class="w-full h-full object-cover" />
          </div>

          <div class="relative flex items-center gap-6">
            <div class="w-2 h-2 bg-[#33c7e0] rounded-full animate-pulse"></div>
            <p class="text-lg md:text-xl text-gray-200 font-medium">{{ point }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  Content: {
    type: Object,
    default: () => []
  }
})
</script>