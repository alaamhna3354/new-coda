

<template>
    <UButton
      class="fixed bottom-8 left-8 z-50 shadow-lg cursor-pointer"
      color="primary"
      @click="openModal = true"
    >
      {{ $t('Verify Certificate') }}
    </UButton>
  
    <!-- Verify Modal -->
    <UModal v-model:open="openModal" :title="$t('Verify Certificate')" 
    :ui="{ content: 'bg-[#020712] text-white',overlay:'bg-slate-900/60', title: 'text-white',close:'text-white hover:text-slate-900 cursor-pointer' }" size="lg">
      <template #body>
        <form @submit.prevent="onSubmit" class="w-full">
          <label class="block mb-2 text-sm text-slate-100">{{ $t('Certificate Serial') }}</label>
          <input
            v-model="serial"
            placeholder="e.g. CODA-2025-0001"
            class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent"
          />
  
          <div class="flex items-center gap-3 mt-3">
            <UButton :loading="loading" type="submit">{{ $t('Verify') }}</UButton>
            <UButton variant="outline" type="button" class="link" @click="clear">{{ $t('Clear') }}</UButton>
          </div>
  
          <div v-if="error" class="mt-4 text-sm text-rose-400">
            {{ error }}
          </div>
  
          <div v-if="result" class="mt-4 p-4 rounded-md bg-slate-800/50 border border-slate-700">
            <p class="text-md text-sky-300 flex items-center mb-2">
              <Icon name="icon-park-solid:success" class="text-xl me-2 text-primary " />
              <strong>{{ result.name }}</strong>
            </p>
            <p class="text-md text-sky-400 mb-2">
              <span class="text-slate-200">{{ $t('Workshop') }}:</span> {{ result.workshop }}
            </p>
            <p class="text-md text-sky-400 mb-2">
              <span class="text-slate-200">{{ $t('Date') }}:</span> {{ formattedDate }}
            </p>
            <p class="text-md text-sky-400 mb-2">
              <span class="text-slate-200">{{ $t('Serial') }}: </span>
              <code class="text-lg">{{ result.serial }}</code>
            </p>
          </div>
        </form>
      </template>
    </UModal>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  const serial = ref('')
  const loading = ref(false)
  const error = ref('')
  const result = ref(null as null | Record<string, any>)
  const { t } = useI18n()
  const openModal = ref(false)
  
  const clear = () => {
    serial.value = ''
    result.value = null
    error.value = ''
  }
  
  //  formatted Date
  const formattedDate = computed(() => {
    if (!result.value?.date) return ''
    const d = new Date(result.value.date)
    return d.toLocaleDateString()
  })
  
  const onSubmit = async () => {
    error.value = ''
    result.value = null
  
    if (!serial.value.trim()) {
      error.value = t('Please enter a certificate serial.')
      return
    }
  
    loading.value = true
    // مثال اختبار
    if (serial.value === 'alaa-mhna') {
      result.value = {
        name: "Alaa Mhna",
        workshop: 'Frontend Training',
        date: new Date(),
        serial: 'alaa-mhna'
      }
      loading.value = false
    } else {
      error.value = t('Serial not found.')
      loading.value = false
    }
     // try {
    //     const res = await $fetch('/api/certificates/verify', {
    //         method: 'POST',
    //         body: { serial: serial.value.trim() }
    //     })

    //     if (res.ok) {
    //         result.value = res.data
    //     } else {
    //         error.value = res.message || 'Serial not found.'
    //     }
    // } catch (e: any) {
    //     error.value = e?.data?.message || e?.message || 'Server error'
    // } finally {
    //     loading.value = false
    // }
  }
  </script>
  
