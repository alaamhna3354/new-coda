<template>
	<div class="auth-signIN-body mb-20">
		<div class="auth-signIN-body-item">
			<div class="shine"></div>
			<div class="background">
				<div class="tiles">
					<div class="tile tile-1"></div>
					<div class="tile tile-2"></div>
					<div class="tile tile-3"></div>
					<div class="tile tile-4"></div>

					<div class="tile tile-5"></div>
					<div class="tile tile-6"></div>
					<div class="tile tile-7"></div>
					<div class="tile tile-8"></div>

					<div class="tile tile-9"></div>
					<div class="tile tile-10"></div>
				</div>

				<div class="line line-1"></div>
				<div class="line line-2"></div>
				<div class="line line-3"></div>
			</div>
		</div>
		<div class="auth-card">
			<div class="main">
				<div class="signin">
					<Form class="auth-form" @submit="HandelLogin" :validation-schema="schema">
						<div class="relative">
							<label for="chk" aria-hidden="true">
                                <span class="text-[#33c7e0]">{{ $t('Coda') }}</span>
                                &nbsp;
                                {{ $t('Log in') }}
                            </label>
							<Field class="border border-gray-50/20 backdrop-blur-sm bg-transparent" name="email" type="email" :placeholder="$t('Email')" />
							<ErrorMessage name="email" class="error-message" />
						</div>
						<div class="relative">
                            <Icon v-if="type_password == 'text'" @click="showPassword" name="famicons:eye"
                            class="svg-eye"
                            :class="[isArabic ? 'ar' : 'en']" />
                            <Icon v-else @click="showPassword" name="famicons:eye-off"
                            class="svg-eye"
                            :class="[isArabic ? 'ar' : 'en']" />
							<Field class="border border-gray-50/20 backdrop-blur-sm bg-transparent" name="password" :type="type_password" id="password" :placeholder="$t('Password')" />
							<ErrorMessage name="password" class="error-message" />
						</div>
						<div class="flex justify-center mt-5">
							<button class="buttonLink text-xl">
								{{ $t('Log In') }}
							</button>
							
						</div>
						<!-- <div class="d-flex justify-content-center mt-3">
            <router-link class="auth-link" to="/sign-up">
              Don't have an account yet ?  
            </router-link>
          </div> -->
					</Form>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Form, Field, ErrorMessage, configure } from 'vee-validate'
import * as yup from 'yup'
// i18n
const { locale, t } = useI18n()

// Password visibility toggle
const type_password = ref('password')
const showPassword = () => {
  type_password.value = type_password.value === 'password' ? 'text' : 'password'
}

// Dynamic validation messages based on locale
const isArabic = computed(() => locale.value === 'ar')

configure({
  validateOnInput: true,
})

// Validation schema
const schema = yup.object({
  email: yup
    .string()
    .required(t('Email is required'))
    .email(t('Email must be valid')),
  password: yup
    .string()
    .required(t('Password is required'))
    .min(8, t('assword must be at least 8 characters')),
})

// Submit handler
const HandelLogin = (values) => {
  console.log('Login Data:', values)
}
</script>
<style lang="scss" scoped src="../assets/css/sign-in.scss"></style>
<style lang="scss" scoped>
.auth-card {
	margin: 100px 0 0 0;
	padding: 0;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 80px;
	transform: translate(-50%, 0);
	left: 50%;
	z-index: 5;

	.main {
		position: relative;
		width: 600px;
		border: 1px solid var(--primary);
		background-color: #0000004f;
		box-shadow: 0 0 .2rem #fff,
			0 0 .2rem #fff,
			0 0 2rem var(--primary),
			0 0 0.8rem var(--primary),
			0 0 2.8rem var(--primary),
			inset 0 0 1.3rem var(--primary);
		height: 425px;
		overflow: hidden;
		border-radius: 10px;
	}


	.auth-link {
		color: #fff;
		display: block;
		text-align: center;
		position: relative;

		&::after {
			position: absolute;
			content: '';
			width: 0;
			height: 3px;
			border-radius: 50px;
			background-color: #fff;
			transition: .5s;
			bottom: -10px;
			left: 0;
		}

		&:hover {
			&::after {
				width: 100%;
			}
		}
	}

	.signin {
		position: relative;
		width: 100%;
		height: 100%;
	}

	label {
		color: #fff;
		font-size: 2.3em;
		justify-content: center;
		display: flex;
		margin: 50px;
		font-weight: bold;
		cursor: pointer;
		transition: .5s ease-in-out;
	}

	input {
		width: 80%;
		height: 40px;
		justify-content: center;
		display: flex;
		margin: 20px auto 10px;
		padding: 12px;
		border: none;
		outline: none;
		border-radius: 5px;
		border: 1px solid #eeeeee25;
		&:focus{
			background-color: transparent
		}
	}



	input[type=number] {
		-moz-appearance: textfield;
		-webkit-appearance: textfield;
		appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input:focus,
	textarea:focus {
		outline: none;
		box-shadow: 0 0 7px var(--primary), 0 0 10px var(--primary);
	}
	.svg-eye{
		position: absolute;
		left: 80px;
		top: 13px;
		cursor: pointer;
        z-index: 2;
		&.en{
			left: auto;
			right: 80px
		}
	}
	.error-message{
		margin-inline-start: 60px;
	}
}
</style>