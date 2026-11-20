<script setup lang="ts">
const years = [...new Set(speakers.flatMap(speaker => speaker.years))].sort((a, b) => b - a)
const latestYear = years[0]

const yearTabs = years.map(year => ({ label: String(year), value: String(year) }))

// Kept in the URL so links can point at a year and going back from a speaker page returns to it
const route = useRoute()
const router = useRouter()
const selectedYear = computed({
  get: () => {
    const year = Number(route.query.year)
    return String(years.includes(year) ? year : latestYear)
  },
  set: year => router.replace({ query: { ...route.query, year } })
})

// A speaker with several years appears under each of them
const selectedSpeakers = computed(() =>
  speakers.filter(speaker => speaker.years.includes(Number(selectedYear.value)))
)

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
          <h1 class="display-lg font-extrabold uppercase mb-10">
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

    <section v-if="years.length" class="section-large bg-black">
      <div class="page-container">
        <UTabs
          v-if="years.length > 1"
          v-model="selectedYear"
          :items="yearTabs"
          :content="false"
          variant="link"
          color="neutral"
          aria-label="Speakers by year"
          :ui="{
            list: 'gap-8 md:gap-14 p-0 border-white/20',
            indicator: 'h-1 -bottom-0.5 rounded-none bg-light-brown',
            trigger:
              'px-0 pb-3 md:pb-4 rounded-none text-5xl md:text-7xl font-extrabold tracking-tighter cursor-pointer data-[state=active]:text-white data-[state=inactive]:text-white/30 hover:data-[state=inactive]:not-disabled:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light-brown',
            label: 'overflow-visible'
          }"
        />
        <h2 v-else class="display-md text-white border-b border-white/20 pb-4">
          {{ latestYear }}
        </h2>

        <p class="mt-6 text-sm uppercase tracking-widest text-white/60">
          <span class="text-accent">
            {{ selectedYear === String(latestYear) ? 'Latest lineup' : 'Past lineup' }}
          </span>
          &middot; {{ selectedSpeakers.length }} speakers
        </p>

        <Transition
          mode="out-in"
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-150"
          leave-to-class="opacity-0"
        >
          <div
            :key="selectedYear"
            class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-16 py-10 md:py-14"
          >
            <SpeakerProfile
              v-for="speaker in selectedSpeakers"
              :key="speaker.slug"
              :name="speaker.name"
              :title="speaker.title"
              :profile-pic-url="speaker.photo"
              :company="speaker.company"
              :slug="speaker.slug"
              class="text-white/90 bg-black"
            />
          </div>
        </Transition>
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
