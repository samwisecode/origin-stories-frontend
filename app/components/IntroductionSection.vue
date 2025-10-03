<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Subtle gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/20" />

      <!-- Decorative shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-green-100/50 rounded-full blur-2xl" />
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/40 rounded-full blur-2xl" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Header Badge -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50 text-orange-700 text-sm font-medium mb-8">
          <UIcon name="i-lucide-theater" class="w-4 h-4" />
          Live Theatre Experience
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8">
          <!-- What is Origin Stories -->
          <div class="space-y-4">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              What is <span class="text-green-600">Origin Stories</span>?
            </h2>
            <p class="text-lg md:text-xl leading-relaxed text-gray-700">
              Origin Stories is a <span class="relative inline-block text-green-600 font-bold swoosh-underline">live theatre event and media platform</span> where 
              <strong class="text-blue-600">African entrepreneurs share their inspiring journeys</strong>. 
              It's not just a stage, it's a support platform.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Raw Stories</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Honest Journeys</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Deeply Human</span>
            </div>
          </div>

          <!-- The Journey -->
          <div class="space-y-4">
            <h3 class="text-xl md:text-2xl font-semibold text-gray-900">
              The <span class="text-orange-600">Hero's Journey</span>
            </h3>
            <p class="text-lg leading-relaxed text-gray-700">
              Origin Stories goes deeper. We capture the
              <strong class="text-orange-600">unfiltered, human, and inspiring Hero's Journey</strong> of Africa's most brilliant
              innovators. This isn't about traction graphs; it's about the <strong>"Why Me?"</strong> and
              the <strong>"What Did I Sacrifice?"</strong> — the personal truth that forges excellence.
            </p>
          </div>

          <!-- Trust & Connection -->
          <div class="space-y-4">
            <h3 class="text-xl md:text-2xl font-semibold text-gray-900">
              Building <span class="text-purple-600">Trust</span>
            </h3>
            <p class="text-lg leading-relaxed text-gray-700">
              In the African ecosystem, trust is built relationally, not transactionally. We provide the
              essential context you need to connect with customers, attract the right capital, and secure
              top talent.
            </p>
          </div>
        </div>

        <!-- Visual Elements -->
        <div class="relative">
          <!-- Main Visual Card -->
          <div class="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-sparkles" class="w-4 h-4 text-white" />
            </div>

            <!-- Impact Stats -->
            <div class="space-y-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-900 mb-1">African</div>
                <div class="text-sm text-gray-600">Entrepreneurs</div>
              </div>

              <div class="flex justify-between items-center">
                <div class="text-center">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <UIcon name="i-lucide-heart" class="w-6 h-6 text-green-600" />
                  </div>
                  <div class="text-sm text-gray-600">Resilience</div>
                </div>

                <div class="text-center">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <UIcon name="i-lucide-lightbulb" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div class="text-sm text-gray-600">Ingenuity</div>
                </div>

                <div class="text-center">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <UIcon name="i-lucide-award" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div class="text-sm text-gray-600">Legacy</div>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <div class="text-center">
                  <div class="text-sm text-gray-600 mb-2">Amplifying to</div>
                  <div class="flex items-center justify-center gap-2">
                    <UIcon name="i-lucide-globe" class="w-4 h-4 text-gray-400" />
                    <span class="text-lg font-semibold text-gray-900">The World</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-6 -left-6 w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-bounce" />
          <div class="absolute -bottom-4 -right-8 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-pulse" />

          <!-- Quote Decoration -->
          <div class="absolute top-4 left-4 text-4xl text-green-200 font-serif">"</div>
        </div>
      </div>

      <!-- Bottom Section - Call to deeper understanding -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <span>Discover the Stories Behind the Success</span>
          <UIcon name="i-lucide-arrow-down" class="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease-out;
}

/* Curved swoosh underline */
.swoosh-underline {
  position: relative;
  z-index: 1;
}

.swoosh-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 5px;
  background: white;
  border-radius: 3px;
  transform: scaleY(1) skew(-15deg, 0deg);
  transform-origin: bottom left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: swooshDraw 1.2s ease-out 0.2s forwards;
}

/* Remove the before pseudo-element for simpler, cleaner look */

@keyframes swooshDraw {
  0% {
    width: 0%;
    opacity: 0;
    transform: scaleY(1) skew(-15deg, 0deg);
  }
  50% {
    width: 60%;
    opacity: 0.9;
    transform: scaleY(1.1) skew(-20deg, 0deg);
  }
  100% {
    width: 100%;
    opacity: 1;
    transform: scaleY(1) skew(-15deg, 0deg);
  }
}

/* Hover effect for the swoosh */
.swoosh-underline:hover::after {
  animation: swooshPulse 0.6s ease-in-out;
}

@keyframes swooshPulse {
  0%, 100% {
    transform: scaleY(1) skew(-15deg, 0deg);
    opacity: 1;
    height: 5px;
  }
  50% {
    transform: scaleY(1.2) skew(-18deg, 0deg);
    opacity: 0.9;
    height: 6px;
  }
}
</style>
