<script setup lang="ts">
import type { Partner } from '~/types'

defineProps<{ partner: Partner }>()
</script>

<template>
  <div class="sponsor">
    <div>
      <img
        :src="partner.logo"
        :alt="`${partner.name} Logo`"
        class="w-full max-w-48 md:max-w-64 h-full object-contain"
      />
    </div>
    <div class="space-y-4 pb-8 mb-8">
      <h3 class="text-2xl font-bold mt-8 mb-2">{{ partner.name }}</h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="text-lg md:text-xl [&_p]:mb-4" v-html="partner.description" />
      <p v-if="partner.url">
        <NuxtLink :to="partner.url" class="underline font-bold">{{
          partner.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
        }}</NuxtLink>
      </p>
    </div>
  </div>
</template>
