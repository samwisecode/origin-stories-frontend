<script setup lang="ts">
import type { AboutPage } from '~/types'
import about from '~~/content/pages/about.json'

const page: AboutPage = about

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription
})
</script>

<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="bg-white">
      <div class="page-container section-large">
        <div>
          <div>
            <h1 class="display-lg font-extrabold uppercase mb-10">{{ page.heroHeading }}</h1>
            <p
              v-for="(paragraph, index) in page.heroParagraphs"
              :key="index"
              class="mb-8 text-xl md:text-2xl"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Black Section with White Text -->
    <section class="section-large bg-black text-white">
      <div class="page-container">
        <div class="text-left">
          <h2 class="display-md uppercase mb-8">
            {{ page.whyHeading }}
            <span v-if="page.whyHeadingAccent" class="text-accent">{{
              page.whyHeadingAccent
            }}</span>
          </h2>
          <ul class="space-y-8 text-left list-disc pl-8 text-2xl md:text-3xl">
            <li v-for="(point, index) in page.whyPoints" :key="index">
              {{ point }}
            </li>
          </ul>
          <p v-if="page.closingLine" class="text-accent text-3xl font-bold mt-8">
            {{ page.closingLine }}
          </p>
        </div>
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
