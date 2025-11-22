<template>
  <HeadPageSection :Title="$t('Contact')" :Description="$t('Welcome to the Coda Team') + ' ' + $t('like you love Coda')"
    IconName="streamline-plump:mail-send-solid" />

  <!-- ************ Contact Section ************ -->
  <UContainer class="pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- LEFT: Contact Info -->
      <HomeContactInformation />

      <!-- RIGHT: Map -->
      <div class="w-full">
        <div class="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
          <!-- responsive iframe -->
          <div class="w-full aspect-video">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.999975583692!2d36.57530989364832!3d32.7163936769738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15197f004a8e9129%3A0x5c62b45225c8e431!2z2YXYr9ix2LPYqSDYp9mE2LTYp9mFINin2YTYr9mI2YTZitipINin2YTYp9mB2KrYsdin2LbZitip!5e0!3m2!1sen!2sjp!4v1763812178359!5m2!1sen!2sjp" class="w-full h-full border-0" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div class="p-4 bg-slate-900/50">
            <p class="text-sm text-slate-300">{{ $t('Address') }}: <strong class="text-white">شارع قنوات, As Suwayda, Syria</strong></p>
            <p class="text-xs text-slate-400 mt-1">{{ $t('Need directions?') }} <a href="https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%B1%D8%A7%D8%B6%D9%8A%D8%A9%E2%80%AD/@32.7162256,36.5754757,17z/data=!3m1!4b1!4m6!3m5!1s0x15197f004a8e9129:0x5c62b45225c8e431!8m2!3d32.7162256!4d36.5754757!16s%2Fg%2F11y4vdl6w6!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                class="underline">{{ $t('Open in Google Maps') }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
  <section class="relative mx-auto flex max-w-6xl flex-col p-7 items-center">
    <HomeContact />
  </section>


</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const social = ref({
  whatsapp: '',
  facebook: '',
  email: '',
  address: ''
})

onMounted(async () => {
  try {
    const res = await fetch('/social.json')
    if (!res.ok) throw new Error('Failed to load social.json')
    const data = await res.json()
    social.value = { ...social.value, ...data }
  } catch (error) {
    console.error('❌ Error loading social:', error)
  }
})
</script>
