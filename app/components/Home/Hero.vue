<template>
  <div class="w-full h-[550px] relative z-10">
    <GlobalGrid />
    <ClientOnly>
      <OglLightRays rays-origin="top-center" rays-color="#4bfefc" :rays-speed="1.5" :light-spread="0.8"
        :ray-length="rayLength" :follow-mouse="true" :mouse-influence="0.5" :noise-amount="0.1" :distortion="0.05"
        class-name="custom-rays" />
    </ClientOnly>
    <div v-if="HeroContet" class="absolute z-[4] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full p-1">
      <h1 class="mx-auto max-w-3xl text-4xl font-medium md:text-6xl hero-title-cyber" @mousemove="handleGlow"
        ref="heroTitle">
        {{ HeroContet.title}}
        <span class="font-bold hero-coda">{{ $t('Coda') }}</span>
      </h1>
      <p class=" mx-auto mt-6 max-w-md text-xl text-gray-300">
        {{ HeroContet.description }}
      </p>
      <NuxtLink class="buttonLink mt-6">
        {{ HeroContet.button }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const rayLength = ref(1.2)
defineProps<{
  HeroContet?: {
    title?: string
    description?: string
    button?: string
  }
}>()

const updateRayLength = () => {
  if (window.innerWidth <= 768) {
    // Mobile Screen
    rayLength.value = 8
  } else {
    // Desktop Screen
    rayLength.value = 1.2
  }
}

onMounted(() => {
  updateRayLength()
  window.addEventListener('resize', updateRayLength)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateRayLength)
})

const heroTitle = ref(null)

const handleGlowWithMouse = (e) => {
  if (!heroTitle.value) return

  const rect = heroTitle.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width  // من 0 إلى 1 حسب موقع الماوس

  // نحسب السطوع حسب الموقع
  const brightness = 1 + x * 1.8   // 1 → 2.8 تقريباً
  const saturation = 1 + x * 0.6

  heroTitle.value.style.filter = `brightness(${brightness}) saturate(${saturation})`
}

onMounted(() => {
  window.addEventListener("mousemove", handleGlowWithMouse)
})

onUnmounted(() => {
  window.removeEventListener("mousemove", handleGlowWithMouse)
})
</script>
<style scoped>
.hero-title-cyber {
  position: relative;
  display: inline-block;
  color: #dffaff;
  font-weight: 500;
  text-shadow:
    0 0 12px rgba(51, 199, 224, 0.35),
    0 0 25px rgba(51, 199, 224, 0.25),
    0 0 40px rgba(51, 199, 224, 0.15);
  transition: filter 0.25s ease-out, transform 0.25s ease-out;
  mix-blend-mode: screen;
}

/* كلمة Coda فقط */
.hero-coda {
  color: #33c7e0;
  font-weight: 600;
  text-shadow:
    0 0 18px #33c7e0,
    0 0 35px rgba(51, 199, 224, 0.9),
    0 0 60px rgba(51, 199, 224, 0.7),
    0 0 90px rgba(51, 199, 224, 0.4);
}

/* لما الضوء يمر (mouse hover area) */
.hero-title-cyber:hover {
  filter: brightness(2.4) saturate(1.4);
}

/* Pulse subtle */
@keyframes neonPulse {
  0% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.35);
  }

  100% {
    filter: brightness(1);
  }
}

.hero-title-cyber {
  animation: neonPulse 3s infinite ease-in-out;
}

/* Glitch micro flicker */
@keyframes flicker {

  0%,
  98%,
  100% {
    opacity: 1;
  }

  99% {
    opacity: 0.6;
  }
}

.hero-coda {
  animation: flicker 4s infinite steps(1);
}
</style>