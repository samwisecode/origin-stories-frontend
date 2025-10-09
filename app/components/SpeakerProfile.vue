<script lang="ts" setup>
defineProps<{
  profilePicUrl?: string
  name: string
  title?: string
  company?: string
}>()
</script>

<template>
  <UCard>
    <div>
      <img :src="profilePicUrl" :alt="name" />
    </div>
    <div class="flex flex-col items-center justify-center">
      <h4>{{ name }}</h4>
      <p>{{ title }}</p>
      <p>{{ company }}</p>
    </div>
  </UCard>
</template>

<style></style>
