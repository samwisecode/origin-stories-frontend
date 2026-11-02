<script setup lang="ts">
import type { Speaker } from '~/types'

const speakers = Object.values(
  import.meta.glob<Speaker>('~~/content/speakers/*.json', { eager: true, import: 'default' })
).sort((a, b) => a.order - b.order)

const currentYear = new Date().getFullYear()

const currentSpeakers = speakers.filter(speaker => speaker.years.includes(currentYear))

// A speaker with several past years appears under each of them
const pastSpeakerYears = [...new Set(speakers.flatMap(speaker => speaker.years))]
  .filter(year => year < currentYear)
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
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center">
          <h1 class="display-xl mb-16">
            Our
            <br />
            <span class="text-accent">Speakers</span>
          </h1>
          <p class="text-hero mx-auto mb-8">
            Handpicked African entrepreneurs, seven minutes each, sharing the raw and honest stories
            behind their journeys.
          </p>
        </div>
      </div>
    </section>

    <section v-if="currentSpeakers.length" class="pt-5 md:pt-20 pb-5 md:pb-20 bg-black">
      <h2 class="display-md text-white text-center my-8">
        {{ currentYear }} <span class="text-accent">Speakers</span>
      </h2>
      <div class="container mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-12 p-12">
          <SpeakerProfile
            v-for="speaker in currentSpeakers"
            :key="speaker.name"
            :name="speaker.name"
            :title="speaker.title"
            :profile-pic-url="speaker.photo"
            :company="speaker.company"
            :linked-in-url="speaker.linkedInUrl"
            :bio="speaker.bio"
            class="text-white/90 bg-black cursor-pointer"
          />
        </div>
      </div>
    </section>

    <section v-if="pastSpeakerYears.length" class="pt-5 md:pt-20 pb-5 md:pb-20 bg-black border-t">
      <h2 class="text-4xl md:text-5xl uppercase text-white text-center mt-8 mb-16">
        Past <span class="text-accent">Speakers</span>
      </h2>
      <template v-for="group in pastSpeakerYears" :key="group.year">
        <h3 class="font-semibold text-3xl text-white text-center my-8">
          {{ group.year }}
        </h3>
        <div class="container mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-12">
            <SpeakerProfile
              v-for="speaker in group.speakers"
              :key="speaker.name"
              :name="speaker.name"
              :title="speaker.title"
              :profile-pic-url="speaker.photo"
              :company="speaker.company"
              :linked-in-url="speaker.linkedInUrl"
              :bio="speaker.bio"
              class="text-white/90 bg-black cursor-pointer"
            />
          </div>
        </div>
      </template>
    </section>

    <JoinCommunity />
  </div>
</template>
