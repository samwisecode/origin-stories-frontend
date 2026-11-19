<!-- eslint-disable @stylistic/quotes -->
<script setup lang="ts">
import type { Partner } from '~/types'

const partners = Object.values(
  import.meta.glob<Partner>('~~/content/ecosystem-partners/*.json', {
    eager: true,
    import: 'default'
  })
).sort((a, b) => a.order - b.order)

const currentPartners = partners.filter(partner => partner.status !== 'Past')
const pastPartners = partners.filter(partner => partner.status === 'Past')

useSeoMeta({
  title: 'Ecosystem Partners - Origin Stories',
  description:
    "Meet the organizations in Africa's entrepreneurial ecosystem who work alongside Origin Stories."
})
</script>

<template>
  <div>
    <section class="section-massive bg-white">
      <div class="page-container">
        <div class="text-center">
          <h1 class="display-xl mb-16">
            Our
            <br />
            <span class="text-accent-light-bg">Ecosystem Partners</span>
          </h1>
          <p class="text-hero mx-auto mb-8">
            The organizations across Africa's entrepreneurial ecosystem who work alongside Origin
            Stories to support founders and share their stories.
          </p>
        </div>
      </div>
    </section>

    <section v-if="currentPartners.length" class="bg-white page-container">
      <h2 class="sr-only">Current Ecosystem Partners</h2>
      <div class="flex flex-wrap justify-start gap-x-12">
        <PartnerCard
          v-for="partner in currentPartners"
          :key="partner.name"
          :partner="partner"
          class="w-full md:w-[calc((100%-3rem)/2)]"
        />
      </div>
    </section>

    <section v-if="pastPartners.length" class="bg-white page-container border-t border-gray-200">
      <h2 class="display-md uppercase text-center mt-20 md:mt-32 mb-16">
        Our <span class="text-accent-light-bg">Past Ecosystem Partners</span>
      </h2>
      <div class="flex flex-wrap justify-center gap-x-12">
        <PartnerCard
          v-for="partner in pastPartners"
          :key="partner.name"
          :partner="partner"
          class="w-full md:w-[calc((100%-3rem)/2)]"
        />
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
