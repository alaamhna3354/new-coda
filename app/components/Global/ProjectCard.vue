<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <a
    :href="`${project.meta.demo}`"
    target="_blank"
  >
    <div
      class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
      role="link"
      tabindex="0"
      :aria-label="project.meta.name + ' project link'"
    >
      <div class="flex gap-1 px-1 py-[2px]">
        <div
          class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"
        />
        <div
          class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"
        />
        <div
          class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10"
        />
      </div>

      <div class="flex h-56 justify-center overflow-hidden rounded-lg">
        <NuxtImg
          width="1536"
          :alt="project.meta.name + ' project image'"
          class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
          :src="project.meta.img"
        />
      </div>

      <div class="absolute bottom-0 flex w-full justify-center">
        <div
          class="rounded-t-lg border-x border-t border-white/10 bg-zinc-900 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-3/4"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="whitespace-nowrap text-sm font-semibold text-white/90">
              {{ project.meta.name }}
            </span>

            <div class="flex items-center">
              <UTooltip :text="$t('Demo')">
                <a
                  :href="project.meta.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:border-white/10 me-2"
                >
                  <Icon name="i-lucide:laptop" class="text-md text-white" />
                </a>
              </UTooltip>

              <!-- <UTooltip :text="$t('Details')">
                <button
                  type="button"
                  @click.stop="navigate"
                  class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
                >
                  <Icon name="heroicons:arrow-right" class="text-md text-white" />
                </button>
              </UTooltip> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
