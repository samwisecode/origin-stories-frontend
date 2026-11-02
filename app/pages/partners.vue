<!-- eslint-disable @stylistic/quotes -->
<script setup lang="ts">
import type { Partner } from '~/types'

const partners = Object.values(
  import.meta.glob<Partner>('~~/content/partners/*.json', { eager: true, import: 'default' })
).sort((a, b) => a.order - b.order)

// Partners saved before the status field existed count as current
const currentPartners = partners.filter(partner => partner.status !== 'Past')
const pastPartners = partners.filter(partner => partner.status === 'Past')

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

    <section v-if="currentPartners.length" class="bg-white container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <PartnerCard v-for="partner in currentPartners" :key="partner.name" :partner="partner" />
      </div>
    </section>

    <section
      v-if="pastPartners.length"
      class="bg-white container mx-auto px-4 border-t border-gray-200"
    >
      <h3 class="text-4xl md:text-6xl text-center mt-20 md:mt-32 mb-16 uppercase">
        Our <span class="text-accent">Past Partners</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <PartnerCard v-for="partner in pastPartners" :key="partner.name" :partner="partner" />
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
