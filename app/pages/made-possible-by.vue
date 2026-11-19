<script setup lang="ts">
import type { Partner } from '~/types'

const companies = Object.values(
  import.meta.glob<Partner>('~~/content/made-possible-by/*.json', {
    eager: true,
    import: 'default'
  })
).sort((a, b) => a.order - b.order)

const currentCompanies = companies.filter(company => company.status !== 'Past')

useSeoMeta({
  title: 'Made Possible By - Origin Stories',
  description: 'Meet the companies whose support makes Origin Stories possible.'
})
</script>

<template>
  <div>
    <section class="section-massive bg-white">
      <div class="page-container">
        <div class="text-center">
          <h1 class="display-xl mb-16">
            Made
            <br />
            <span class="text-accent-light-bg">Possible By</span>
          </h1>
          <p class="text-hero mx-auto mb-8">
            The businesses who give their time and skills to bring Origin Stories to the stage.
          </p>
        </div>
      </div>
    </section>

    <section v-if="currentCompanies.length" class="bg-white page-container">
      <h2 class="sr-only">Current Companies</h2>
      <div class="flex flex-wrap justify-start gap-x-12">
        <PartnerCard
          v-for="company in currentCompanies"
          :key="company.name"
          :partner="company"
          class="w-full md:w-[calc((100%-3rem)/2)]"
        />
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
