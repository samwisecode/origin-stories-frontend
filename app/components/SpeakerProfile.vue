<script lang="ts" setup>
defineProps<{
  profilePicUrl?: string
  name: string
  title?: string
  company?: string
  linkedInUrl?: string
  bio?: string
}>()
</script>

<template>
  <div class="pb-4">
    <div class="p-0 lg:px-4 xl:px-8">
      <div>
        <img :src="profilePicUrl" :alt="name" loading="lazy" class="w-full h-auto" />
      </div>
      <div class="flex flex-col items-center justify-center py-2 px-4">
        <h3 class="text-accent font-bold mt-4 text-center text-lg md:text-xl">
          {{ name }}
        </h3>
        <p class="text-center text-sm md:text-base opacity-90">{{ title }}</p>
        <p class="text-xs md:text-sm text-center opacity-70">{{ company }}</p>
      </div>
    </div>
    <UModal
      :title="name"
      :close="{
        color: 'neutral',
        variant: 'ghost'
      }"
    >
      <UButton
        label="Read Bio"
        variant="link"
        class="w-full justify-center text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-white hover:underline underline-offset-4 cursor-pointer"
      />

      <template #description>
        <p class="font-semibold">{{ title }}</p>
        <p class="opacity-90">{{ company }}</p>
        <UButton
          v-if="linkedInUrl"
          :to="linkedInUrl"
          target="_blank"
          icon="i-simple-icons-linkedin"
          label="LinkedIn"
          variant="ghost"
          class="mt-1 px-0"
        />
      </template>

      <template #body>
        {{ bio }}
      </template>
    </UModal>
  </div>
</template>
