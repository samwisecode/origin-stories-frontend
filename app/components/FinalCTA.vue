<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <!-- Base gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />

      <!-- Overlay pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="
            background-image: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.1) 2px,
              rgba(255, 255, 255, 0.1) 4px
            );
          "
        />
      </div>

      <!-- Animated light beams -->
      <div class="absolute inset-0">
        <div
          class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-400/50 via-transparent to-transparent animate-pulse"
        />
        <div
          class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-blue-400/30 via-transparent to-transparent animate-pulse"
          style="animation-delay: 1s"
        />
        <div
          class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-400/40 via-transparent to-transparent animate-pulse"
          style="animation-delay: 2s"
        />
      </div>

      <!-- Floating orbs -->
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-float"
      />
      <div
        class="absolute bottom-32 right-32 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-float-delayed"
      />
      <div
        class="absolute top-1/2 left-16 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float-slow"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium mb-8"
        >
          <UIcon name="i-lucide-rocket" class="w-4 h-4" />
          Ready to Begin Your Journey?
        </div>

        <!-- Main Title -->
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span class="block">The Future of</span>
          <span
            class="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Innovation Starts Here
          </span>
        </h2>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
          Join thousands of curious minds exploring the fascinating origins of the technologies and
          ideas that shape our daily lives. Every breakthrough has a beginning.
        </p>

        <!-- Action Cards -->
        <div class="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <!-- Primary Action -->
          <div class="relative group">
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"
            />

            <div
              class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform group-hover:scale-105"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <UIcon name="i-lucide-compass" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Start Exploring</h3>
                <p class="text-white/70 mb-6">
                  Discover the untold stories behind the world's most groundbreaking innovations
                </p>

                <UButton
                  size="lg"
                  class="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 border-0 w-full"
                  to="/about"
                >
                  <div class="flex items-center justify-center gap-2">
                    <span>Begin Journey</span>
                    <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
                  </div>
                </UButton>
              </div>
            </div>
          </div>

          <!-- Secondary Action -->
          <div class="relative group">
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"
            />

            <div
              class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform group-hover:scale-105"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <UIcon name="i-lucide-users" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Meet Our Sponsors</h3>
                <p class="text-white/70 mb-6">
                  Connect with the partners and sponsors who make these stories possible
                </p>

                <UButton
                  size="lg"
                  class="bg-white/10 text-white font-semibold px-8 py-3 rounded-xl border border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 w-full backdrop-blur-sm"
                  to="/sponsors"
                  variant="outline"
                >
                  <div class="flex items-center justify-center gap-2">
                    <span>View Sponsors</span>
                    <UIcon name="i-lucide-external-link" class="w-5 h-5" />
                  </div>
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Statistics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div class="text-white/60 text-sm">Stories Told</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div class="text-white/60 text-sm">Entrepreneurs</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div class="text-white/60 text-sm">Countries</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">1M+</div>
            <div class="text-white/60 text-sm">Lives Inspired</div>
          </div>
        </div>

        <!-- Footer Message -->
        <div class="mt-16 pt-8 border-t border-white/10">
          <p class="text-white/50 text-sm">
            Every great innovation started with a single idea. What's yours?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Floating animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes floatDelayed {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes floatSlow {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatDelayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-slow {
  animation: floatSlow 10s ease-in-out infinite;
  animation-delay: 4s;
}

/* Enhanced shadows */
.shadow-green-500\/25 {
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>
