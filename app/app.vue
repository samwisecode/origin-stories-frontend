<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Origin Stories'
const description = 'Discover the untold stories behind the world\'s most influential innovations. Every breakthrough has a beginning—we\'re here to tell those stories.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Sponsors', to: '/sponsors' }
]
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6 ml-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            active-class="text-foreground"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="#"
          icon="i-lucide-mail"
          aria-label="Contact"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Origin Stories • © {{ new Date().getFullYear() }} • Uncovering Innovation
        </p>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            to="#"
            icon="i-simple-icons-twitter"
            aria-label="Twitter"
            color="neutral"
            variant="ghost"
            size="sm"
          />
          <UButton
            to="#"
            icon="i-simple-icons-linkedin"
            aria-label="LinkedIn"
            color="neutral"
            variant="ghost"
            size="sm"
          />
          <UButton
            to="#"
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
