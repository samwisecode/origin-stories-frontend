<template>
  <section class="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0); background-size: 20px 20px;" />
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse" />
    <div class="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce" />
    <div class="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-ping" />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50/50 text-purple-700 text-sm font-medium mb-6">
          <UIcon name="i-lucide-play-circle" class="w-4 h-4" />
          Experience the Magic
        </div>

        <!-- Title -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Welcome to the home of
          <br>
          <span class="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            authentic African innovation
          </span>
        </h2>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Watch how we transform entrepreneurial journeys into powerful stories that resonate across cultures and continents
        </p>
      </div>

      <!-- Video Container with Modern Frame -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Decorative Frame Elements -->
        <div class="absolute -top-6 -left-6 w-12 h-12 border-4 border-green-400 rounded-tl-2xl" />
        <div class="absolute -top-6 -right-6 w-12 h-12 border-4 border-blue-400 rounded-tr-2xl" />
        <div class="absolute -bottom-6 -left-6 w-12 h-12 border-4 border-purple-400 rounded-bl-2xl" />
        <div class="absolute -bottom-6 -right-6 w-12 h-12 border-4 border-orange-400 rounded-br-2xl" />

        <!-- Video Frame -->
        <div class="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <!-- Top Bar (Browser-style) -->
          <div class="flex items-center gap-2 px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div class="flex gap-2">
              <div class="w-3 h-3 bg-red-400 rounded-full" />
              <div class="w-3 h-3 bg-yellow-400 rounded-full" />
              <div class="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <div class="flex-1 flex justify-center">
              <div class="px-4 py-1 bg-white rounded-lg text-xs text-gray-500 border border-gray-200">
                originstories.live
              </div>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-volume-2" class="w-4 h-4 text-gray-400" />
              <UIcon name="i-lucide-maximize" class="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <!-- Video Content -->
          <div class="relative">
            <!-- Loading Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="text-center">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <UIcon name="i-lucide-play" class="w-8 h-8 text-green-600" />
                </div>
                <p class="text-gray-700 font-medium">Click to experience the story</p>
              </div>
            </div>

            <!-- Embedded Video -->
            <div
              style="
                position: relative;
                padding-bottom: 68.25%;
                padding-top: 35px;
                height: 0;
                overflow: hidden;
              "
            >
              <iframe
                src="https://app.airtimetools.com/embed/z_0TaBL4Irrx4SyVj8FymM?embedSlides=true"
                frameborder="0"
                allow="autoplay; encrypted-media; allowfullscreen"
                style="
                  display: block;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
              />
            </div>
          </div>
        </div>

        <!-- Bottom Decorative Elements -->
        <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div class="flex items-center gap-4">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.2s;" />
            <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 0.4s;" />
          </div>
        </div>
      </div>

      <!-- Bottom Content -->
      <div class="mt-20 grid md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
            <UIcon name="i-lucide-users" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Real Entrepreneurs</h3>
          <p class="text-gray-600">Authentic stories from Africa's most inspiring founders and innovators</p>
        </div>

        <!-- Feature 2 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
            <UIcon name="i-lucide-theater" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Live Experience</h3>
          <p class="text-gray-600">Immersive theatre that brings entrepreneurial journeys to life</p>
        </div>

        <!-- Feature 3 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
            <UIcon name="i-lucide-globe" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
          <p class="text-gray-600">Stories that resonate across continents and cultures</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom hover animations */
.hover\:scale-\[1\.01\]:hover {
  transform: scale(1.01);
}

/* Enhanced shadow for video container */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient border animation */
@keyframes borderGlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.animate-border-glow {
  animation: borderGlow 2s ease-in-out infinite;
}
</style>
