<!-- eslint-disable @stylistic/quotes -->
<script setup lang="ts">
import type { Partner } from '~/types'

const partners = Object.values(
  import.meta.glob<Partner>('~~/content/partners/*.json', { eager: true, import: 'default' })
).sort((a, b) => a.order - b.order)

useSeoMeta({
  title: 'Partners - Origin Stories',
  description:
    "Meet the organizations and individuals who support Origin Stories' mission to uncover the stories behind innovation."
})
</script>

<template>
  <div>
    <section class="section-massive bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center">
          <h1 class="display-xl mb-16">
            Our
            <br />
            <span class="text-accent">Partners</span>
          </h1>
          <p class="text-hero mx-auto mb-8">
            Origin Stories is made possible through the generous support of African organizations
            and individuals who believe in the power of storytelling to inspire future innovation.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white container mx-auto px-4">
      <template v-for="(partner, index) in partners" :key="partner.name">
        <div v-if="index > 0">
          <USeparator class="my-10 md:my-20" />
        </div>
        <div class="sponsor">
          <div>
            <img
              :src="partner.logo"
              :alt="`${partner.name} Logo`"
              class="w-full max-w-48 md:max-w-64 h-full object-contain"
            />
          </div>
          <div class="space-y-4 pb-8 mb-8">
            <h2 class="text-2xl font-bold mt-8 mb-2">{{ partner.name }}</h2>
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
    </section>

    <JoinCommunity />
  </div>
</template>
