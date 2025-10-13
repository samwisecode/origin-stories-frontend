<script lang="ts" setup>
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Speakers', to: '/#speakers' },
  { label: 'Partners', to: '/partners' }
]
</script>

<template>
  <header class="bg-white border-b-2 border-black p-4 sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex">
        <NuxtLink to="/" class="text-2xl font-bold">
          <img
            src="/Origin_Stories_Horizontal stack_Black.svg"
            width="200"
            height="92"
            class="block w-36"
            alt="Origin Stories Logo"
          />
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6 ml-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
            active-class="text-foreground"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div>
        <UButton
          to="https://www.quicket.co.za/events/339332-origin-stories/#/"
          target="_blank"
          class="btn-menu bg-light-brown text-black border-2 border-black hover:bg-black hover:text-white"
        >
          Get Your Ticket
        </UButton>
      </div>
    </div>
  </header>
</template>
