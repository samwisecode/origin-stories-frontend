<script lang="ts" setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Speakers', to: '/speakers' },
  { label: 'Partners', to: '/partners' }
]

const closeMenu = () => {
  isMenuOpen.value = false
}
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
            class="text-md font-medium hover:text-gray-600 text-black transition-colors"
            exact-active-class="text-black font-semibold"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <UButton to="https://qkt.io/AfricanOriginStories" target="_blank" class="btn btn-sm">
          Get Your Ticket
        </UButton>

        <!-- Mobile menu -->
        <USlideover v-model:open="isMenuOpen" side="right" title="Menu">
          <UButton
            icon="i-lucide-menu"
            aria-label="Open menu"
            color="neutral"
            variant="ghost"
            size="xl"
            class="md:hidden"
          />

          <template #body>
            <nav class="flex flex-col space-y-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.to"
                :to="item.to"
                class="text-lg font-medium text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
                exact-active-class="text-black font-semibold"
                @click="closeMenu"
              >
                {{ item.label }}
              </NuxtLink>

              <div class="pt-4">
                <UButton to="/#contact" class="btn btn-sm w-full" @click="closeMenu">
                  Get In Touch
                </UButton>
              </div>
            </nav>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>
