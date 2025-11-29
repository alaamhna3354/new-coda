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
                <!-- First Name -->
                <input @input="validateStep1" name="first_name" type="text" v-model="data.firstName"
                    class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent"
                    :placeholder="$t('First Name')" />
                <p v-if="errors.firstName" class="error-message">{{ errors.firstName }}</p>
                <!-- Last Name -->
                <input @input="validateStep1" name="last_name" type="text" v-model="data.lastName"
                    class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent"
                    :placeholder="$t('Last Name')" />
                <p v-if="errors.lastName" class="error-message">{{ errors.lastName }}</p>
                <!-- Mobile Number -->
                <input @input="validateStep1" name="mobile" type="text" v-model="data.mobile"
                    class="mb-1 w-full px-3 py-2 rounded-xl border border-gray-50/20 backdrop-blur-sm bg-transparent"
                    :placeholder="$t('Mobile Number')" />
                <p v-if="errors.mobile" class="error-message">{{ errors.mobile }}</p>
                <!-- Email -->
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
                <div class="mb-1">
                    <strong class="text-primary-400">{{ $t('First Name') }}:</strong>
                    <span class="ms-2">{{ data.firstName }}</span>
                </div>
                <div class="mb-1">
                    <strong class="text-primary-400">{{ $t('Last Name') }}:</strong>
                    <span class="ms-2">{{ data.lastName }}</span>
                </div>
                <div class="mb-1">
                    <strong class="text-primary-400">{{ $t('Mobile Number') }}:</strong>
                    <span class="ms-2">{{ data.mobile }}</span>
                </div>
                <div class="mb-1">
                    <strong class="text-primary-400">{{ $t('Email') }}:</strong>
                    <span class="ms-2">{{ data.email }}</span>
                </div>
            </div>
        </OglStepper>
        <h3 v-if="ContactSuccess"
            class="flex justify-center items-center text-center text-2xl font-extralight text-light mt-5 mb-5">
            <Icon name="hugeicons:mail-love-01" class="me-2 text-3xl" />
            {{ $t('Thank you for contact') }}
        </h3>
        <h3 v-if="Pending"
            class="flex justify-center items-center text-center text-2xl font-extralight text-light mt-5 mb-5">
            <div v-if="ContactError">{{ ContactError }}</div>
            <Icon v-else name="svg-spinners:pulse-multiple" class="me-2 text-3xl" />
        </h3>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const data = ref({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    messege: '',
})
// error states
const errors = ref({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    messege: ''
})
// validation
const validateStep1 = () => {
    errors.value.firstName = data.value.firstName.trim().length < 3 ? t('First Name must be at least 3 characters') : ''
    errors.value.lastName = data.value.lastName.trim().length < 3 ? t('Last Name must be at least 3 characters') : ''
    errors.value.email = !/^\S+@\S+\.\S+$/.test(data.value.email) ? t('Email must be valid') : ''
    errors.value.mobile = !/^\+?\d{7,15}$/.test(data.value.mobile) ? t('Mobile number must be valid') : ''

    return !errors.value.firstName && !errors.value.lastName && !errors.value.email && !errors.value.mobile
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
const Pending = ref(false)
const ContactError = ref(false)
const ENDPOINT = 'https://coda-backend.t-coda.com/api/contact-us';

const runtimeConfig = useRuntimeConfig()
const handleFinalStepCompleted = async () => {
    Pending.value = true
    try {
        const res = await $fetch(ENDPOINT, {
            method: 'POST',
            body: data.value,
            headers: {
                'X-API-Key': runtimeConfig.apiSecret,
                'Content-Type': 'application/json'
            }
        })

        if (res?.success) {
            Pending.value = false
            ContactSuccess.value = true
        }
    } catch (err) {
        console.error(err)
        ContactError.value = err
    }
}

</script>
