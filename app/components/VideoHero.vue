<script setup lang="ts">
type ButtonLink = {
  label?: string
  to?: string
  href?: string
  trailingIcon?: string
  leadingIcon?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  variant?: 'solid' | 'soft' | 'subtle' | 'outline' | 'ghost' | 'link'
}
interface VideoHeroProps {
  title: string
  description: string
  videoSrc: string
  fallbackImage?: string
  fallbackAlt?: string
  links?: ButtonLink[]
}

const _props = withDefaults(defineProps<VideoHeroProps>(), {
  fallbackImage: '',
  fallbackAlt: 'Hero background',
  links: () => []
})

const videoRef = ref<HTMLVideoElement>()
const videoLoaded = ref(false)

const onVideoLoaded = () => {
  videoLoaded.value = true
}

// Ensure video plays on mobile devices
onMounted(() => {
  if (videoRef.value) {
    // Try to play the video, handle any autoplay restrictions
    videoRef.value.play().catch(() => {
      // Autoplay failed, video will still be visible but paused
      console.warn('Video autoplay failed - this is normal on some mobile devices')
    })
  }
})
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video
        ref="videoRef"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
        @loadeddata="onVideoLoaded"
      />
      <!-- Video overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <!-- Content Layer -->
    <div class="relative z-10">
      <UPageHero
        :title="title"
        :description="description"
        :links="links"
        :ui="{
          root: 'py-24 sm:py-32',
          title: 'text-white',
          description: 'text-white/90'
        }"
      >
        <template #default>
          <slot />
        </template>
        <template #title>
          <span class="text-white drop-shadow-lg">{{ title }}</span>
        </template>
        <template #description>
          <span class="text-white/90 drop-shadow-md">{{ description }}</span>
        </template>
      </UPageHero>
    </div>

    <!-- Fallback background image when video is loading -->
    <div
      v-if="!videoLoaded && fallbackImage"
      class="absolute inset-0 z-0"
    >
      <NuxtImg
        :src="fallbackImage"
        :alt="fallbackAlt"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40" />
    </div>
  </div>
</template>

<style scoped>
/* Ensure video covers the entire hero area properly */
video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 16/9;
}

/* Improve text readability with better shadows */
.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.drop-shadow-md {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}
</style>
