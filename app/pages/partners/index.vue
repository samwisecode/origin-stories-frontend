<!-- eslint-disable @stylistic/quotes -->
<script setup lang="ts">
// Partners saved before the status field existed count as current
const groups = [
  { heading: '', items: partners.filter(partner => partner.status !== 'Past') },
  { heading: 'Past Partners', items: partners.filter(partner => partner.status === 'Past') }
].filter(group => group.items.length)

useSeoMeta({
  title: 'Partners - Origin Stories',
  description:
    "Meet the organisations who back Origin Stories and believe in the power of African founders' stories."
})
</script>

<template>
  <div>
    <section class="section-massive bg-white">
      <div class="page-container">
        <div class="text-center">
          <NuxtLink
            to="/learnmore"
            class="inline-block mb-8 border-b-2 border-black pb-1 text-sm font-semibold"
          >
            &larr; Learn more
          </NuxtLink>
          <h1 class="display-lg font-extrabold uppercase mb-10">
            Our
            <br />
            <span class="text-accent-light-bg">Partners</span>
          </h1>
          <p class="text-hero mx-auto mb-8">
            The organisations who back Origin Stories and believe in the power of African founders'
            stories. Meet them below.
          </p>
        </div>
      </div>
    </section>

    <section
      v-for="group in groups"
      :key="group.heading"
      class="bg-white page-container pb-20 md:pb-32"
      :class="{ 'border-t border-gray-200': group.heading }"
    >
      <h2 v-if="group.heading" class="display-md uppercase text-center mt-20 md:mt-32 mb-16">
        Our <span class="text-accent-light-bg">{{ group.heading }}</span>
      </h2>
      <h2 v-else class="sr-only">Current Partners</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li v-for="partner in group.items" :key="partner.slug">
          <NuxtLink :to="`/partners/${partner.slug}`" class="block">
            <div
              class="aspect-video bg-white border-2 border-black flex items-center justify-center p-10"
            >
              <img
                :src="partner.logo"
                :alt="`${partner.name} Logo`"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </NuxtLink>
          <h3 class="mt-4 mb-3 text-lg font-bold">{{ partner.name }}</h3>
          <UButton :to="`/partners/${partner.slug}`" class="btn btn-sm">Find out more</UButton>
        </li>
      </ul>
    </section>
  </div>
</template>
