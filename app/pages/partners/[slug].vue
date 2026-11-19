<script setup lang="ts">
const route = useRoute()
const partner = partners.find(p => p.slug === route.params.slug)

if (!partner) {
  throw createError({ statusCode: 404, statusMessage: 'Partner not found', fatal: true })
}

// First word in black, the rest in gold, e.g. "Silicon" + "Overdrive"
const [firstWord, ...otherWords] = partner.name.split(' ')
const nameAccent = otherWords.join(' ')

// Partners without an About entry yet show their description instead
const aboutHtml = partner.about || partner.description

useSeoMeta({
  title: `${partner.name} - Partners - Origin Stories`,
  description: partner.description.replace(/<[^>]+>/g, '').slice(0, 160)
})
</script>

<template>
  <div v-if="partner">
    <section class="section-large bg-white">
      <div class="page-container">
        <NuxtLink
          to="/partners"
          class="inline-block mb-6 border-b-2 border-black pb-1 text-sm font-semibold"
        >
          &larr; All partners
        </NuxtLink>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            class="aspect-[4/3] bg-white border-2 border-black flex items-center justify-center p-10"
          >
            <img
              :src="partner.logo"
              :alt="`${partner.name} Logo`"
              class="max-w-full max-h-full object-contain"
            />
          </div>

          <div>
            <h1 class="display-md uppercase mb-6">
              {{ firstWord }}
              <span v-if="nameAccent" class="text-accent-light-bg">{{ nameAccent }}</span>
            </h1>
            <UButton
              v-if="partner.url"
              :to="partner.url"
              target="_blank"
              rel="noopener"
              class="btn"
            >
              Visit Website
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section class="section-large bg-gray-50">
      <div class="page-container">
        <h2 class="display-md uppercase mb-6">
          About <span class="text-accent-light-bg">{{ partner.name }}</span>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="max-w-3xl text-lg md:text-xl [&_p]:mb-4" v-html="aboutHtml" />
      </div>
    </section>

    <section v-if="partner.podcastUrl" class="section-large bg-white text-center">
      <div class="page-container">
        <h2 class="display-md uppercase mb-8">
          Listen to the full <span class="text-accent-light-bg">conversation</span>
        </h2>
        <UButton
          :to="partner.podcastUrl"
          target="_blank"
          rel="noopener"
          class="btn btn-outline"
        >
          Listen now
        </UButton>
      </div>
    </section>

    <CompanyContactForm :company-name="partner.name" />
  </div>
</template>
