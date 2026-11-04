<script lang="ts" setup>
const { consent, isBannerOpen, grant, accept, decline } = useAnalyticsConsent()

onMounted(() => {
  if (consent.value === 'granted') {
    grant()
  } else if (consent.value === null) {
    isBannerOpen.value = true
  }
})
</script>

<template>
  <section
    v-if="isBannerOpen"
    aria-label="Cookie consent"
    class="fixed inset-x-0 bottom-0 z-50 bg-black text-white border-t-4 border-light-brown"
  >
    <div class="page-container py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <p class="text-sm md:text-base flex-1">
        We use analytics cookies to understand how people use this site and improve it. They're
        only set if you accept. See our
        <NuxtLink to="/policy" class="underline">Privacy Policy</NuxtLink>.
      </p>
      <div class="flex gap-4 shrink-0">
        <UButton class="btn btn-sm btn-on-dark" @click="accept">Accept</UButton>
        <UButton class="btn btn-outline btn-sm btn-on-dark" @click="decline">Decline</UButton>
      </div>
    </div>
  </section>
</template>
