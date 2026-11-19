<script setup lang="ts">
const route = useRoute()
const company = madePossibleByCompanies.find(c => c.slug === route.params.slug)

if (!company) {
  throw createError({ statusCode: 404, statusMessage: 'Company not found', fatal: true })
}

useSeoMeta({
  title: `${company.name} - Made Possible By - Origin Stories`,
  description: company.description.replace(/<[^>]+>/g, '')
})
</script>

<template>
  <div v-if="company">
    <section class="section-large bg-white">
      <div class="page-container">
        <NuxtLink
          to="/made-possible-by"
          class="inline-block mb-6 border-b-2 border-black pb-1 text-sm font-semibold"
        >
          &larr; Back to Made Possible By
        </NuxtLink>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            class="aspect-[4/3] bg-white border-2 border-black flex items-center justify-center p-10"
          >
            <img
              :src="company.logo"
              :alt="`${company.name} Logo`"
              class="max-w-full max-h-full object-contain"
            />
          </div>

          <div>
            <h1 class="display-lg uppercase text-accent-light-bg mb-6">{{ company.name }}</h1>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="text-lg md:text-xl [&_p]:mb-4" v-html="company.description" />
            <UButton
              v-if="company.url"
              :to="company.url"
              target="_blank"
              rel="noopener"
              class="btn mt-4"
            >
              Visit Website
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section v-if="company.about" class="section-large bg-gray-50">
      <div class="page-container">
        <h2 class="display-md uppercase mb-6">
          About <span class="text-accent-light-bg">{{ company.name }}</span>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="max-w-3xl text-lg md:text-xl [&_p]:mb-4" v-html="company.about" />
      </div>
    </section>

    <CompanyContactForm :company-name="company.name" />
  </div>
</template>
