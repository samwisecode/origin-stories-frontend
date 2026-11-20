<script lang="ts" setup>
withDefaults(
  defineProps<{
    src?: string
    alt: string
    loading?: 'lazy' | 'eager'
  }>(),
  { loading: 'lazy' }
)
</script>

<template>
  <!-- For black sections: a soft gold spotlight sits behind the photo and the photo fades into
       black at the sides and bottom, so cutouts don't sit hard against the background.
       The glow brightens on hover when inside a .group (the speaker cards). -->
  <div
    class="aspect-4/5 overflow-hidden transition duration-500 bg-[radial-gradient(closest-side_at_50%_45%,rgb(197_150_64/0.22),transparent)] group-hover:bg-[radial-gradient(closest-side_at_50%_45%,rgb(197_150_64/0.38),transparent)]"
  >
    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      class="size-full object-cover object-top mask-b-from-70% mask-x-from-85%"
    />
  </div>
</template>
