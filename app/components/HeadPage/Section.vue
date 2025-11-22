<template>
    <div class="relative overflow-hidden h-[500px]">
        <OglRippleGrid :enable-rainbow="false" :grid-color="`#33c7e0`" :ripple-intensity="0.05" :grid-size="10"
            :grid-thickness="15" :mouse-interaction="true" :mouse-interaction-radius="1.2" :opacity="0.7" />
        <div class="head-info">
            <div v-if="IconName" class="relative">
                <Icon :name="IconName" />
                <img width="200" class="mx-auto" src="/assets/cover-icon.png" />
            </div>
            <img v-else width="200" class="mx-auto" src="/assets/laravel-icon.svg" />
            <h1 class="mx-auto max-w-3xl text-4xl font-medium md:text-6xl">
                {{ Title }}
            </h1>
            <p class="mx-auto mt-6 max-w-md text-xl text-gray-300">
                {{ Description }}
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.head-info {
    position: absolute;
    z-index: 20;
    width: 100%;
    display: grid;
    place-content: center;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    h1 {
        margin-top: -40px;
    }

    span {
        position: absolute;
        font-size: 50px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        color: #46dbfe;
    }

}
</style>
<script setup>
const props = defineProps({
    Title: String,
    Description: String,
    IconName: String
})
</script>