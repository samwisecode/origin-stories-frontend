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
  <div>
    <div class="p-0 lg:p-8 xl:p-12">
      <div>
        <img :src="profilePicUrl" :alt="name" />
      </div>
      <div class="flex flex-col items-center justify-center py-2 px-4">
        <h4 class="text-accent font-bold mt-4 text-center text-lg md:text-xl">
          {{ name }}
        </h4>
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
        class="block cursor-pointer hover:text-white/50 w-full text-center"
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
