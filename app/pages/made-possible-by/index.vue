<script setup lang="ts">
const companies = madePossibleByCompanies

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

    <section v-if="companies.length" class="bg-white page-container">
      <h2 class="sr-only">Companies</h2>
      <div class="flex flex-wrap justify-start gap-x-12">
        <PartnerCard
          v-for="company in companies"
          :key="company.slug"
          :partner="company"
          :details-to="company.about ? `/made-possible-by/${company.slug}` : undefined"
          class="w-full md:w-[calc((100%-3rem)/2)]"
        />
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
