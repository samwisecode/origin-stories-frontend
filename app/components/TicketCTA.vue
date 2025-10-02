<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Dynamic Background -->
    <div class="absolute inset-0">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700" />

      <!-- Animated Overlay Pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse">
          <div class="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div class="absolute top-40 right-32 w-24 h-24 bg-white/15 rounded-full blur-lg animate-bounce" />
          <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div class="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse" />
        </div>
      </div>

      <!-- Geometric Shapes -->
      <div class="absolute inset-0">
        <div class="absolute top-16 left-16 w-4 h-4 bg-yellow-400 rotate-45 opacity-60" />
        <div class="absolute top-32 right-24 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-ping" />
        <div class="absolute bottom-24 left-32 w-3 h-3 bg-cyan-400 rotate-45 opacity-70" />
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <!-- Pre-header -->
      <div class="mb-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
          <UIcon name="i-lucide-calendar" class="w-4 h-4" />
          December 12, 2025 • Cape Town
        </div>
      </div>

      <!-- Main Headline -->
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Be Part of the
        <br>
        <span class="relative">
          <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Origin Story
          </span>
          <!-- Decorative underline -->
          <svg class="absolute -bottom-2 left-0 w-full h-4 text-yellow-300/60" viewBox="0 0 400 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13C150 1 250 15 397 3" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="animate-draw-slow" />
          </svg>
        </span>
      </h2>

      <!-- Description -->
      <p class="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
        Join us for an unforgettable evening where Africa's most inspiring entrepreneurs
        share their raw, unfiltered journeys to success.
      </p>

      <!-- Ticket Cards -->
      <div class="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
        <!-- Early Bird Ticket -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-60" />
          <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white transition-all duration-300 transform group-hover:scale-105">
            <div class="text-center">
              <div class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-3">
                <UIcon name="i-lucide-zap" class="w-3 h-3" />
                Early Bird
              </div>
              <div class="text-2xl font-bold text-gray-900 mb-1">R 350</div>
              <div class="text-sm text-gray-600 mb-4">Limited Time Only</div>
              <div class="text-xs text-gray-500">
                Save R100 • Valid until Nov 30
              </div>
            </div>
          </div>
        </div>

        <!-- Regular Ticket -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-60" />
          <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white transition-all duration-300 transform group-hover:scale-105">
            <div class="text-center">
              <div class="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-3">
                <UIcon name="i-lucide-ticket" class="w-3 h-3" />
                Standard
              </div>
              <div class="text-2xl font-bold text-gray-900 mb-1">R 450</div>
              <div class="text-sm text-gray-600 mb-4">Regular Price</div>
              <div class="text-xs text-gray-500">
                Full Experience Included
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main CTA Button -->
      <div class="relative">
        <!-- Button Glow Effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-60 animate-pulse" />

        <UButton
          size="xl"
          class="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 border-0"
          to="#"
        >
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-ticket" class="w-6 h-6" />
            <span>Get Your Ticket Now</span>
            <UIcon name="i-lucide-arrow-right" class="w-6 h-6 animate-pulse" />
          </div>
        </UButton>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
          <span class="text-sm">The Homecoming Theatre, District 6</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-clock" class="w-4 h-4" />
          <span class="text-sm">6:30 PM - 9:30 PM</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-users" class="w-4 h-4" />
          <span class="text-sm">Limited to 200 seats</span>
        </div>
      </div>

      <!-- Urgency Indicator -->
      <div class="mt-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-red-200 text-sm backdrop-blur-sm">
          <div class="w-2 h-2 bg-red-400 rounded-full animate-ping" />
          <span>Only 47 early bird tickets remaining</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom draw animation for underline */
@keyframes drawSlow {
  from {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }
  to {
    stroke-dasharray: 400;
    stroke-dashoffset: 0;
  }
}

.animate-draw-slow {
  animation: drawSlow 3s ease-out 0.5s both;
}

/* Enhanced button styles */
.shadow-yellow-500\/25 {
  box-shadow: 0 25px 50px -12px rgba(234, 179, 8, 0.25);
}

/* Glowing effect animation */
@keyframes glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
</style>
