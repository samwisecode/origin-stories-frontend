<template>
  <section ref="sectionRef" class="relative py-24 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating geometric shapes -->
      <div class="floating-shape shape-1" />
      <div class="floating-shape shape-2" />
      <div class="floating-shape shape-3" />
      <div class="floating-shape shape-4" />

      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-pattern" />
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center">
        <!-- Mission Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200 bg-green-50/50 text-green-700 text-sm font-medium mb-8 animate-fade-in-up">
          <UIcon name="i-lucide-compass" class="w-4 h-4" />
          Our Mission
        </div>

        <!-- Main Mission Statement -->
        <div class="relative">
          <!-- Decorative quotes -->
          <div class="absolute -top-8 -left-4 text-6xl text-green-200/30 font-serif">"</div>
          <div class="absolute -bottom-8 -right-4 text-6xl text-green-200/30 font-serif rotate-180">"</div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <!-- Animated text with staggered appearance -->
            <span class="inline-block animate-slide-in-1">Our mission is to</span>
            <br>
            <span class="inline-block bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent animate-slide-in-2">
              inspire and empower
            </span>
            <br>
            <span class="inline-block animate-slide-in-3">by broadcasting the journeys of</span>
            <br>
            <span class="inline-block relative animate-slide-in-4">
              Africa's boldest founders;
              <!-- Underline decoration -->
              <svg class="absolute -bottom-2 left-0 w-full h-3 text-green-400" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C150 -2 150 14 298 2" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="animate-draw-line" />
              </svg>
            </span>
            <br>
            <span class="inline-block animate-slide-in-5 text-gray-700">
              stories that
              <span class="highlight-box">shape culture</span>,
              <span class="highlight-box">create communities</span>, and
              <span class="highlight-box">attract global capital</span>.
            </span>
          </h2>
        </div>

        <!-- Supporting visual elements -->
        <div class="flex justify-center items-center gap-8 mt-16">
          <!-- Impact metrics with animated counters -->
          <div class="impact-metric">
            <div class="metric-icon bg-green-100 text-green-600">
              <UIcon name="i-lucide-users" class="w-6 h-6" />
            </div>
            <div class="metric-label">Communities</div>
          </div>

          <div class="connecting-line" />

          <div class="impact-metric">
            <div class="metric-icon bg-blue-100 text-blue-600">
              <UIcon name="i-lucide-globe" class="w-6 h-6" />
            </div>
            <div class="metric-label">Global Reach</div>
          </div>

          <div class="connecting-line" />

          <div class="impact-metric">
            <div class="metric-icon bg-purple-100 text-purple-600">
              <UIcon name="i-lucide-trending-up" class="w-6 h-6" />
            </div>
            <div class="metric-label">Capital Flow</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

// Intersection Observer to trigger animations on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.3
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
/* Floating shapes animations */
.floating-shape {
  position: absolute;
  border-radius: 50%;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-green-200), var(--color-green-300));
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--color-green-100), var(--color-green-200));
  top: 20%;
  right: 15%;
  animation-delay: -5s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-green-300), var(--color-green-400));
  bottom: 15%;
  left: 20%;
  animation-delay: -10s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--color-green-200), var(--color-green-300));
  bottom: 25%;
  right: 10%;
  animation-delay: -15s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  75% { transform: translateY(-30px) rotate(270deg); }
}

/* Grid pattern */
.grid-pattern {
  background-image:
    linear-gradient(var(--color-green-200) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-green-200) 1px, transparent 1px);
  background-size: 50px 50px;
  height: 100%;
  width: 100%;
}

/* Text animations */
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes drawLine {
  from {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  to {
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-in-1 {
  animation: slideIn 0.8s ease-out 0.2s both;
}

.animate-slide-in-2 {
  animation: slideIn 0.8s ease-out 0.4s both;
}

.animate-slide-in-3 {
  animation: slideIn 0.8s ease-out 0.6s both;
}

.animate-slide-in-4 {
  animation: slideIn 0.8s ease-out 0.8s both;
}

.animate-slide-in-5 {
  animation: slideIn 0.8s ease-out 1s both;
}

.animate-draw-line {
  animation: drawLine 2s ease-out 2s both;
}

/* Highlight boxes for key terms */
.highlight-box {
  position: relative;
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 6px;
  background: linear-gradient(120deg, var(--color-green-100), var(--color-green-200));
  color: var(--color-green-800);
  font-weight: 600;
  transition: all 0.3s ease;
}

.highlight-box:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Impact metrics */
.impact-metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.5s both;
}

.metric-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.metric-icon:hover {
  transform: scale(1.1);
}

.metric-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray-600);
  text-align: center;
}

.connecting-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-green-300), transparent);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.7s both;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-shape {
    opacity: 0.3;
  }

  .shape-1, .shape-2, .shape-3, .shape-4 {
    width: 40px;
    height: 40px;
  }

  .impact-metric {
    display: none;
  }

  .connecting-line {
    display: none;
  }
}
</style>
