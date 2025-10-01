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
interface VideoHeroDemoProps {
  title: string
  description: string
  links?: ButtonLink[]
}

const _props = withDefaults(defineProps<VideoHeroDemoProps>(), {
  links: () => []
})
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Demo Background Animation (CSS-only) -->
    <div class="absolute inset-0 z-0">
      <div class="animated-background">
        <!-- Animated gradient background as video placeholder -->
      </div>
      <!-- Overlay for better text readability -->
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
          <div class="max-w-4xl mx-auto">
            <span class="text-white drop-shadow-lg">{{ title }}</span>
          </div>
        </template>
        <template #dates>
          <div class="max-w-4xl mx-auto">
            <span>
              Test
            </span>
          </div>
        </template>
        <template #description>
          <span class="text-white/90 drop-shadow-md">{{ description }}</span>
        </template>
      </UPageHero>
    </div>

    <!-- Demo Notice -->
    <div class="absolute bottom-4 right-4 z-20">
      <div class="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        Demo Mode - Add your video to replace this animation
      </div>
    </div>
  </div>
</template>

<style scoped>
.animated-background {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    var(--color-green-900),
    var(--color-green-700),
    var(--color-green-500),
    var(--color-green-400)
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Improve text readability with better shadows */
.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.drop-shadow-md {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}

/* Ensure the animated background covers the full area */
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
