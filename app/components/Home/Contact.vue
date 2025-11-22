<template>
    <div class="relative w-full flex flex-col items-center">
        <div class="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter" />
        <div class="glass-container rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:rounded-xl">
           <GlobalLogo class="w-[90px]" />
        </div>
        <OglStepper :initial-step="1" :on-step-change="handleStepChange"
            :on-final-step-completed="handleFinalStepCompleted" :next-button-props="{ disabled: isNextDisabled }"
            :back-button-text="$t('Previous')" :next-button-text="$t('Next')">
            <div>
                <h3 class="text-center text-2xl font-extralight text-light mb-5">{{ $t('Welcome to the Coda Team') }}
                </h3>
                <p class="text-center text-2xl font-extralight text-light mb-5">{{ $t('Check out the next step!') }}</p>
            </div>

            <div>
                <input @input="validateStep1" name="full_name" type="text" v-model="data.name"
                    class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent"
                    :placeholder="$t('Full Name')" />
                <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
                <input @input="validateStep1" name="email" type="email" v-model="data.email"
                    class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent"
                    :placeholder="$t('Enter your email')" />
                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            </div>
            <div>
                <textarea
                    class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent "
                    name="messege" :placeholder="$t('Enter Your messege')" v-model="data.messege"></textarea>
                <p v-if="errors.messege" class="error-message">{{ errors.messege }}</p>
            </div>
            <div>
                <h3 class="text-center text-2xl font-extralight text-light mb-5">{{ $t('Final Step') }}</h3>
                <p class="flex justify-center items-center text-2xl font-extralight text-light mb-5">
                    {{ $t('You made it') }}
                    <Icon name="icon-park-solid:success" class="ms-2" />
                </p>
            </div>
        </OglStepper>
        <h3 v-if="ContactSuccess"
            class="flex justify-center items-center text-center text-2xl font-extralight text-light mt-5 mb-5">
            <Icon name="hugeicons:mail-love-01" class="me-2 text-3xl" />
            {{ $t('Thank you for contact') }}
        </h3>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const data = ref({
    name: '',
    email: '',
    messege: '',
})
// error states
const errors = ref({
    name: '',
    email: '',
    messege: ''
})
// validation
const validateStep1 = () => {
    errors.value.name = data.value.name.trim().length < 3 ? t('Name must be at least 3 characters') : ''
    errors.value.email = !/^\S+@\S+\.\S+$/.test(data.value.email) ? t('Email must be valid') : ''

    return !errors.value.name && !errors.value.email
}

const validateStep2 = () => {
    errors.value.messege = data.value.messege.trim().length < 8 ? t('Message must be at least 8 characters') : ''
    return !errors.value.messege
}
const isNextDisabled = computed(() => {
    if (currentStep.value == 2) return !validateStep1()
    if (currentStep.value == 3) return !validateStep2()
    return false
})
const currentStep = ref(1)
const handleStepChange = (step) => {
    currentStep.value = step;
    if (step == 2 && !validateStep1()) return false
    if (step == 3 && !validateStep2()) return false
    console.log('Step changed to:', step)
}
const ContactSuccess = ref(false)
const handleFinalStepCompleted = () => {
    ContactSuccess.value = true;
    console.log('Form submitted ✅', { data })
}
</script>
