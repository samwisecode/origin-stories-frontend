<script lang="ts" setup>
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Sponsors', to: '/sponsors' }
]
</script>

<template>
  <header class="container mx-auto flex items-center justify-between p-4">
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
      <UButton class="btn-menu hover:bg-transparent">Get Your Ticket</UButton>
    </div>
  </header>
</template>
