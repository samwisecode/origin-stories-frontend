<script lang="ts" setup>
defineProps<{
  profilePicUrl?: string
  name: string
  title?: string
  company?: string
  slug: string
}>()
</script>

<template>
  <NuxtLink :to="`/speakers/${slug}`" class="group block pb-4">
    <div class="p-0 lg:px-4 xl:px-8">
      <div>
        <img :src="profilePicUrl" :alt="name" loading="lazy" class="w-full h-auto" />
      </div>
      <div class="flex flex-col items-center justify-center py-2 px-4">
        <h3 class="text-accent font-bold mt-4 text-center text-lg md:text-xl group-hover:underline">
          {{ name }}
        </h3>
        <p class="text-center text-sm md:text-base opacity-90">{{ title }}</p>
        <p class="text-xs md:text-sm text-center opacity-70">{{ company }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
