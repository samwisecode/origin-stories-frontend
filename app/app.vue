<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Origin Stories'
const description = 'Inspiring Stories of African Entrepreneurs'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <SiteHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Origin Stories © {{ new Date().getFullYear() }}
          <NuxtLink to="/terms" class="underline">Terms & Conditions</NuxtLink>
        </p>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            to="https://www.youtube.com/@africanoriginstories"
            target="_blank"
            icon="i-simple-icons-youtube"
            aria-label="Twitter"
            color="neutral"
            variant="ghost"
            size="sm"
          />
          <UButton
            to="https://www.instagram.com/willsgreenwalk"
            target="_blank"
            icon="i-simple-icons-instagram"
            aria-label="Twitter"
            color="neutral"
            variant="ghost"
            size="sm"
          />
          <UButton
            to="https://www.linkedin.com/company/origin-stories-africa/"
            icon="i-simple-icons-linkedin"
            aria-label="LinkedIn"
            color="neutral"
            variant="ghost"
            size="sm"
          />
          <UButton
            to="mailto:will@colab.marketing?subject=ORIGIN STORIES ENQUIRY"
            icon="i-lucide-mail"
            aria-label="Contact"
            color="neutral"
            variant="ghost"
            size="sm"
          />
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
