<script setup lang="ts">
const companies = madePossibleByCompanies
const NuxtLink = resolveComponent('NuxtLink')

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
          <NuxtLink
            to="/learnmore"
            class="inline-block mb-8 border-b-2 border-black pb-1 text-sm font-semibold"
          >
            &larr; Learn more
          </NuxtLink>
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

    <section v-if="companies.length" class="section-large bg-gray-50">
      <h2 class="sr-only">Companies</h2>
      <ul class="page-container grid grid-cols-2 md:grid-cols-4 gap-6">
        <li v-for="company in companies" :key="company.slug">
          <component
            :is="company.about ? NuxtLink : 'div'"
            :to="company.about ? `/made-possible-by/${company.slug}` : undefined"
            class="group block"
          >
            <div
              class="aspect-square bg-white border-2 border-black flex items-center justify-center p-6"
            >
              <img
                :src="company.logo"
                :alt="`${company.name} Logo`"
                class="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 class="mt-4 font-bold group-hover:underline">{{ company.name }}</h3>
          </component>
        </li>
      </ul>
    </section>
  </div>
</template>
