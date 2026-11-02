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
    <div class="profile-card">
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
    <!-- <UModal
      :title="name"
      :description="title"
      :close="{
        color: 'neutral',
        variant: 'ghost'
      }"
    >
      <UButton
        label="Read Bio"
        class="block cursor-pointer hover:text-white/50 w-full text-center"
      />

      <template #body>
        {{ bio }}
      </template>
    </UModal> -->
  </div>
</template>
