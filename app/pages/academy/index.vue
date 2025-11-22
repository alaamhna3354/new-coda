<template>
    <div class="min-h-screen xl:grid xl:grid-cols-2">
        <UPageSection :title="$t('Verify Certificate')"
            :description="$t('Enter the certificate serial to verify if it was issued by CODA.')" orientation="vertical"
            :ui="{
                root: 'border-b border-default xl:border-b-0 xl:sticky xl:inset-y-0 xl:h-screen overflow-hidden',
                container: 'h-full items-center justify-center mt-20 md:mt-10 gap-[20px] sm:gap-[20px]',
                wrapper: 'flex flex-col',
                headline: 'mb-6',
                title: 'text-left text-4xl text-white',
                description: 'text-left max-w-lg text-slate-200',
                links: 'gap-1 justify-start -ms-2.5'
            }">
            <template #top>
                <GlobalSkyBg />
                <div
                    class="absolute -right-1/2 z-[-1] rounded-full bg-primary blur-[300px] size-60 sm:size-100 transform -translate-y-1/2 top-1/2" />
            </template>

            <template #default>
                <form @submit.prevent="onSubmit" class="w-full max-w-md">
                    <label class="block mb-2 text-sm text-slate-100">{{ $t('Certificate Serial') }}</label>
                    <input v-model="serial" placeholder="e.g. CODA-2025-0001"
                        class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent" />
                    <div class="flex items-center gap-3 mt-3">
                        <UButton class="cursor-pointer" :loading="loading" type="submit">{{ $t('Verify') }}</UButton>
                        <UButton variant="outline" type="button" class="link cursor-pointer" @click="clear">{{
                            $t('Clear') }}</UButton>
                    </div>

                    <div v-if="error" class="mt-4 text-sm text-rose-400">
                        {{ error }}
                    </div>

                    <div v-if="result" class="mt-4 p-4 rounded-md bg-slate-800/50 border border-slate-700">
                        <p class="text-md text-sky-300 flex items-center mb-2">
                            <Icon name="icon-park-solid:success" class="text-xl me-2 text-primary " /> <strong>{{ result.name }}</strong>
                        </p>
                        <p class="text-md text-sky-400 mb-2">
                            <span class="text-slate-200">{{ $t('Workshop') }}:</span> {{ result.workshop }}
                        </p>
                        <p class="text-md text-sky-400 mb-2">
                            <span class="text-slate-200">{{ $t('Date') }}:</span> {{ formattedDate }}
                        </p>
                        <p class="text-md text-sky-400 mb-2">
                            <span class="text-slate-200">{{ $t('Serial') }}: </span> <code class="text-lg">{{ result.serial }}</code>
                            </p>
                    </div>
                </form>
            </template>
        </UPageSection>

        <section class="px-4 sm:px-6 xl:px-0 xl:-ms-30 xl:flex-1">
            <AcademyWorks />
        </section>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const serial = ref('')
const loading = ref(false)
const error = ref('')
const result = ref(null as null | Record<string, any>)
const { t } = useI18n()
const clear = () => {
    serial.value = ''
    result.value = null
    error.value = ''
}

// تنسيق التاريخ لو موجود
const formattedDate = computed(() => {
    if (!result.value?.date) return ''
    const d = new Date(result.value.date)
    return d.toLocaleDateString()
})

const onSubmit = async () => {
    error.value = ''
    result.value = null

    if (!serial.value.trim()) {
        error.value = 'Please enter a certificate serial.'
        return
    }

    loading.value = true
    if (serial.value == 'alaa-mhna') {
        result.value = {
            name: "Alaa Mhna",
            workshop: 'Frontend Training',
            date: new Date(),
            serial: 'alaa-mhna'
        }
        loading.value = false;
    }
    else {
        error.value = t('Serial not found.');
        loading.value = false;
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
useHead({
  title:  'Our Coda Academy',
  meta: [
    { name: 'description', content: 'Free Training Workshops' }
  ]
})
</script>