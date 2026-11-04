<script setup lang="ts">
import type { Speaker } from '~/types'

const speakers = Object.values(
  import.meta.glob<Speaker>('~~/content/speakers/*.json', { eager: true, import: 'default' })
).sort((a, b) => a.order - b.order)

const latestYear = Math.max(...speakers.flatMap(speaker => speaker.years))

const currentSpeakers = speakers.filter(speaker => speaker.years.includes(latestYear))

// A speaker with several past years appears under each of them
const pastSpeakerYears = [...new Set(speakers.flatMap(speaker => speaker.years))]
  .filter(year => year < latestYear)
  .sort((a, b) => b - a)
  .map(year => ({ year, speakers: speakers.filter(speaker => speaker.years.includes(year)) }))

useSeoMeta({
  title: 'Speakers - Origin Stories',
  description:
    'Meet the African entrepreneurs sharing the real stories behind their journeys on the Origin Stories stage.'
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
            <span class="text-accent-light-bg">Speakers</span>
          </h1>
          <p class="text-hero mx-auto mb-8">
            Handpicked African entrepreneurs, seven minutes each, sharing the raw and honest stories
            behind their journeys.
          </p>
        </div>
      </div>
    </section>

    <section v-if="currentSpeakers.length" class="section-large bg-black">
      <h2 class="display-md uppercase text-white text-center mb-8">
        {{ latestYear }} <span class="text-accent">Speakers</span>
      </h2>
      <div class="page-container">
        <div class="flex flex-wrap justify-start gap-6 md:gap-12 py-8 md:py-12">
          <SpeakerProfile
            v-for="speaker in currentSpeakers"
            :key="speaker.name"
            :name="speaker.name"
            :title="speaker.title"
            :profile-pic-url="speaker.photo"
            :company="speaker.company"
            :linked-in-url="speaker.linkedInUrl"
            :bio="speaker.bio"
            class="text-white/90 bg-black w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-6rem)/3)]"
          />
        </div>
      </div>
    </section>

    <section v-if="pastSpeakerYears.length" class="section-large bg-black border-t border-white/20">
      <h2 class="display-md uppercase text-white text-center mb-16">
        Past <span class="text-accent">Speakers</span>
      </h2>
      <template v-for="group in pastSpeakerYears" :key="group.year">
        <h3 class="font-semibold text-3xl text-white text-center my-8">
          {{ group.year }}
        </h3>
        <div class="page-container">
          <div class="flex flex-wrap justify-start gap-6 md:gap-12 py-8 md:py-12">
            <SpeakerProfile
              v-for="speaker in group.speakers"
              :key="speaker.name"
              :name="speaker.name"
              :title="speaker.title"
              :profile-pic-url="speaker.photo"
              :company="speaker.company"
              :linked-in-url="speaker.linkedInUrl"
              :bio="speaker.bio"
              class="text-white/90 bg-black w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-6rem)/3)] lg:w-[calc((100%-9rem)/4)]"
            />
          </div>
        </div>
      </template>
    </section>

    <JoinCommunity />
  </div>
</template>
