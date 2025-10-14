<script lang="ts" setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Speakers', to: '/#speakers' },
  { label: 'Partners', to: '/partners' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

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
            class="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
            active-class="text-foreground"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <!-- Ticket Button (visible on all screens) -->
        <UButton
          to="https://www.quicket.co.za/events/339332-origin-stories/#/"
          target="_blank"
          class="btn-menu bg-light-brown text-black border-2 border-black hover:bg-black hover:text-white hidden sm:flex"
        >
          Get Your Ticket
        </UButton>

        <!-- Mobile Ticket Button (text only, visible on mobile) -->
        <UButton
          to="https://www.quicket.co.za/events/339332-origin-stories/#/"
          target="_blank"
          class="btn-menu bg-light-brown text-black border-2 border-black hover:bg-black hover:text-white sm:hidden text-xs px-2 py-1"
        >
          Tickets
        </UButton>

        <!-- Hamburger Menu (mobile only) -->
        <button
          aria-label="Toggle menu"
          class="lg:hidden flex items-center justify-center w-8 h-8 relative z-50"
          @click="toggleMenu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span
              class="block w-full h-0.5 bg-black transition-all duration-300"
              :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block w-full h-0.5 bg-black transition-all duration-300"
              :class="isMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="block w-full h-0.5 bg-black transition-all duration-300"
              :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="closeMenu"
    ></div>

    <!-- Mobile Slide-out Menu -->
    <div
      class="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Close button inside menu -->
      <div class="flex justify-end p-6 border-b border-gray-200">
        <button
          class="w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
          @click="closeMenu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Navigation links -->
      <nav class="flex flex-col p-6 space-y-6">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-lg font-medium text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
          active-class="text-black font-semibold"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>

        <!-- Mobile menu ticket button -->
        <div class="pt-4">
          <UButton
            to="https://www.quicket.co.za/events/339332-origin-stories/#/"
            target="_blank"
            class="btn-menu bg-light-brown text-black border-2 border-black hover:bg-black hover:text-white w-full"
            @click="closeMenu"
          >
            Get Your Ticket
          </UButton>
        </div>
      </nav>
    </div>
  </header>
</template>
