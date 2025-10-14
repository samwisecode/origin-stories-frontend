<script lang="ts" setup>
defineProps<{
  profilePicUrl?: string
  name: string
  title?: string
  company?: string
  linkedInUrl?: string
}>()
</script>

<template>
  <div class="">
    <div class="profile-card">
      <div>
        <img :src="profilePicUrl" :alt="name" />
      </div>
      <div class="flex flex-col items-center justify-center py-2 px-4">
        <h4 class="font-bold text-center text-lg">
          {{ name }}
        </h4>
        <USeparator class="px-8 py-2 opacity-20" />
        <p class="text-center text-base opacity-90">{{ title }}</p>
        <p class="text-sm text-center opacity-80">{{ company }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
