<template>
      <div class="flex flex-col gap-6 ">
        <div class="rounded-xl p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700 pb-8">
          <h3 class="text-xl font-semibold text-white mb-2">{{ $t('Contact Information') }}</h3>
          <p class="text-lg text-slate-300 mb-10">{{ $t('Reach out') }}.</p>

          <ul class="space-y-3">
            <!-- WhatsApp -->
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center rounded-md bg-green-600/20 text-green-400 size-10 p-2">
                <!-- whatsapp svg icon -->
                <Icon name="ic:baseline-whatsapp" class="text-xl" />
              </span>
              <div class="flex-1">
                <div class="flex items-center gap-3">
                  <a
                    :href="whatsappLink"
                    target="_blank"
                    rel="noreferrer"
                    class="text-lg font-medium text-white hover:underline"
                  >
                    {{ formattedWhatsapp }}
                  </a>
                  <button @click="copyToClipboard(social.whatsapp)" class="text-md text-slate-400 hover:text-slate-200 ms-auto cursor-pointer flex items-center" >
                    <Icon v-if="Copied" name="lets-icons:check-fill" class="text-green-200 text-xl me-1" />
                    {{ $t('Copy') }}
                  </button>
                </div>
                <p class="text-md text-slate-400">
                  {{ $t('Fast support via WhatsApp') }}
                </p>
              </div>
            </li>
            
            <!-- Email -->
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center rounded-md bg-yellow-700/20 text-yellow-200 size-10 p-2">
                <Icon name="ic:baseline-email" class="text-xl" />
              </span>
              <div class="flex-1">
                <a :href="`mailto:${social.email}`" class="text-lg font-medium text-white hover:underline">{{ social.email || '—' }}</a>
                <p class="text-md text-slate-400">{{ $t('Send us an email') }}</p>
              </div>
            </li>

            <!-- Facebook -->
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center rounded-md bg-primary-700/10 text-primary-400 size-10 p-2">
                <Icon name="ri:facebook-fill" class="text-xl" />
              </span>
              <div class="flex-1">
                <a :href="social.facebook" target="_blank" rel="noreferrer" class="text-lg font-medium text-white hover:underline">
                  Facebook
                </a>
                <p class="text-md text-slate-400 truncate max-w-xs">{{ social.facebook }}</p>
              </div>
            </li>

            <!-- Address -->
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center rounded-md bg-red-700/20 text-red-200 size-10 p-2">
               <Icon name="bxs:map" class="text-xl" />
              </span>
              <div class="flex-1">
                <a href="https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%B1%D8%A7%D8%B6%D9%8A%D8%A9%E2%80%AD/@32.7162256,36.5754757,17z/data=!3m1!4b1!4m6!3m5!1s0x15197f004a8e9129:0x5c62b45225c8e431!8m2!3d32.7162256!4d36.5754757!16s%2Fg%2F11y4vdl6w6!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" class="text-lg font-medium text-white hover:underline">
                  شارع قنوات, As Suwayda, Syria
                </a>
                <p class="text-md text-slate-400">{{ $t('Visit us — location on Google Maps') }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>
<script setup>
// Contact
import { ref, computed } from 'vue'
const social = ref({
  whatsapp: '',
  facebook: '',
  email: '',
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
// formatted WhatsApp (readable) and link for API
const digitsOnly = (s = '') => (s || '').replace(/\D+/g, '')
const formattedWhatsapp = computed(() => {
  const s = social.value.whatsapp || ''
  if (!s) return '—'
  // show with plus if available
  return s.startsWith('+') ? s : (s.startsWith('00') ? '+' + s.slice(2) : '+' + digitsOnly(s))
})
const whatsappLink = computed(() => {
  const num = digitsOnly(social.value.whatsapp || '')
  return num ? `https://wa.me/${num}` : '#'
})
// copy helper
const Copied = ref(false)
const copyToClipboard = async (text = '') => {
  try {
    await navigator.clipboard.writeText(text || '')
    Copied.value = true;
  } catch (e) {
    console.error('Copy failed', e)
  }
}
</script>