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
      <div class="page-container max-w-4xl">
        <NuxtLink to="/made-possible-by" class="inline-block mb-12 underline font-bold">
          &larr; Made Possible By
        </NuxtLink>
        <img
          :src="company.logo"
          :alt="`${company.name} Logo`"
          class="w-full max-w-48 md:max-w-64 object-contain mb-10"
        />
        <h1 class="display-lg mb-10">{{ company.name }}</h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-lg md:text-xl [&_p]:mb-4" v-html="company.about || company.description" />
        <p v-if="company.url" class="mt-8">
          <a :href="company.url" target="_blank" rel="noopener" class="underline font-bold">{{
            company.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
          }}</a>
        </p>
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
