<script lang="ts" setup>
defineProps<{
  profilePicUrl?: string
  name: string
  title?: string
  company?: string
  slug: string
}>()
</script>

<template>
  <!-- Cards in a row stretch to the same height, so the button pins to the bottom -->
  <NuxtLink :to="`/speakers/${slug}`" class="group flex flex-col pb-4">
    <div class="flex flex-1 flex-col p-0 lg:px-4 xl:px-8">
      <!-- Soft gold spotlight behind the photo, and the photo fades into black at the bottom,
           so cutouts don't sit hard against the black section -->
      <div
        class="aspect-4/5 overflow-hidden bg-[radial-gradient(closest-side_at_50%_45%,rgb(197_150_64/0.22),transparent)] transition-[background] duration-500 group-hover:bg-[radial-gradient(closest-side_at_50%_45%,rgb(197_150_64/0.38),transparent)]"
      >
        <img
          :src="profilePicUrl"
          :alt="name"
          loading="lazy"
          class="size-full object-cover object-top mask-b-from-70% mask-x-from-85% brightness-90 saturate-[.85] transition duration-500 group-hover:brightness-100 group-hover:saturate-100"
        />
      </div>
      <div class="flex flex-1 flex-col items-center py-2 px-4">
        <h3 class="text-accent font-bold mt-4 text-center text-lg md:text-xl">
          {{ name }}
        </h3>
        <p class="text-center text-sm md:text-base opacity-90">{{ title }}</p>
        <p class="text-xs md:text-sm text-center opacity-70">{{ company }}</p>
        <!-- Styled as a button; the whole card is already the link -->
        <span class="mt-auto pt-4 inline-flex">
          <span
            class="inline-flex items-center justify-center text-center border-2 border-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors group-hover:bg-white group-hover:text-black"
          >
            Meet {{ name }}
          </span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
