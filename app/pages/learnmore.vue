<script setup lang="ts">
import type { LearnMorePage } from '~/types'
import learnMore from '~~/content/pages/learnmore.json'

const page: LearnMorePage = learnMore

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription
})
</script>

<template>
  <div>
    <section class="section-large bg-white">
      <div class="page-container max-w-5xl text-center">
        <img
          src="/Origin_Stories_Swirl_yellow.svg"
          alt=""
          class="mx-auto mb-10 w-20 md:w-28"
        />
        <h1 class="display-lg font-extrabold uppercase mb-10">
          {{ page.heroHeading }}
          <span v-if="page.heroHeadingAccent" class="text-accent-light-bg">{{
            page.heroHeadingAccent
          }}</span>
        </h1>
        <p v-if="page.heroIntro" class="text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
          {{ page.heroIntro }}
        </p>
      </div>
    </section>

    <section class="section-large bg-black">
      <div class="page-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:my-8">
          <NuxtLink
            v-for="card in page.cards"
            :key="card.title"
            :to="card.link"
            class="group flex flex-col border-2 border-light-brown p-8 text-white transition-colors hover:bg-light-brown/10"
          >
            <h2 class="text-accent text-xl md:text-2xl uppercase mb-3">
              {{ card.title }}
            </h2>
            <p v-if="card.description" class="text-base md:text-lg mb-6">{{ card.description }}</p>
            <UIcon
              name="i-lucide-arrow-right"
              class="mt-auto self-end size-6 text-light-brown transition-transform group-hover:translate-x-1"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-large bg-gray-50">
      <div class="page-container text-center">
        <h2 class="display-md uppercase font-bold mb-6">
          {{ page.watchHeading }}
          <span v-if="page.watchHeadingAccent" class="text-accent-light-bg">{{
            page.watchHeadingAccent
          }}</span>
        </h2>
        <p v-if="page.watchIntro" class="text-lg md:text-xl mb-10">{{ page.watchIntro }}</p>
        <UButton :to="page.watchButtonUrl" target="_blank" class="btn btn-outline">
          {{ page.watchButtonLabel }}
        </UButton>
      </div>
    </section>
  </div>
</template>
