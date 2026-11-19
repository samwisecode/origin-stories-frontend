<script setup lang="ts">
const route = useRoute()
const speaker = speakers.find(s => s.slug === route.params.slug)

if (!speaker) {
  throw createError({ statusCode: 404, statusMessage: 'Speaker not found', fatal: true })
}

// First word in black, the rest in gold, e.g. "Patrick" + "Schofield"
const [firstWord, ...otherWords] = speaker.name.split(' ')
const nameAccent = otherWords.join(' ')

// Button names the first company, e.g. "BackaBuddy, Thundafund & Tip4Change" -> "Visit BackaBuddy"
const companyButtonLabel = speaker.company
  ? `Visit ${speaker.company.split(/,|&/)[0]!.trim()}`
  : 'Visit website'

useSeoMeta({
  title: `${speaker.name} - Speakers - Origin Stories`,
  description: [speaker.title, speaker.company].filter(Boolean).join(', ')
})
</script>

<template>
  <div v-if="speaker">
    <section class="section-large bg-white">
      <div class="page-container">
        <NuxtLink
          to="/speakers"
          class="inline-block mb-6 border-b-2 border-black pb-1 text-sm font-semibold"
        >
          &larr; All speakers
        </NuxtLink>

        <div class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
          <img
            :src="speaker.photo"
            :alt="speaker.name"
            class="w-full max-w-md aspect-[4/5] object-cover"
          />

          <div>
            <h1 class="display-md uppercase font-bold mb-4 [overflow-wrap:anywhere]">
              {{ firstWord }}
              <span v-if="nameAccent" class="text-accent-light-bg">{{ nameAccent }}</span>
            </h1>
            <p v-if="speaker.title" class="text-lg md:text-xl">{{ speaker.title }}</p>
            <p v-if="speaker.company" class="text-lg md:text-xl font-semibold text-accent-light-bg">
              {{ speaker.company }}
            </p>
            <div v-if="speaker.companyUrl || speaker.linkedInUrl" class="flex flex-wrap gap-4 mt-8">
              <UButton
                v-if="speaker.companyUrl"
                :to="speaker.companyUrl"
                target="_blank"
                rel="noopener"
                class="btn"
              >
                {{ companyButtonLabel }}
              </UButton>
              <UButton
                v-if="speaker.linkedInUrl"
                :to="speaker.linkedInUrl"
                target="_blank"
                rel="noopener"
                class="btn btn-outline"
              >
                LinkedIn
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="speaker.theStory" class="section-large bg-gray-50">
      <div class="page-container">
        <h2 class="display-md uppercase mb-6">
          The <span class="text-accent-light-bg">Story</span>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="max-w-4xl text-lg md:text-xl [&_p]:mb-4" v-html="speaker.theStory" />
      </div>
    </section>

    <section v-if="speaker.podcastUrl" class="section-large bg-white text-center">
      <div class="page-container">
        <h2 class="display-md uppercase mb-8">
          Listen to the full <span class="text-accent-light-bg">conversation</span>
        </h2>
        <UButton :to="speaker.podcastUrl" target="_blank" rel="noopener" class="btn btn-outline">
          Listen now
        </UButton>
      </div>
    </section>

    <CompanyContactForm :company-name="speaker.name" />
  </div>
</template>
