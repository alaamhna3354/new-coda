<template>
   <section class="mt-10 mb-10 px-6 relative">
      <div class="container mx-auto max-w-6xl">
        <div class="mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-[#33c7e0] mb-6">
            {{ Content.title }}
          </h2>
          <p class="text-xl md:text-2xl text-foreground/90 font-medium">
            {{ Content.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(point, index) in Content.items" :key="index"
              class="group relative bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                <img 
                  src="/assets/about/vision-1.jpg"
                  alt="" 
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="relative">
                <div class="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                <p class="text-foreground font-medium leading-relaxed">
                 {{point}}
                </p>
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
  