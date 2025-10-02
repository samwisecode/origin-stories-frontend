<script setup>
useSeoMeta({
  title: 'About - Origin Stories',
  description: 'Learn about Origin Stories\' mission to uncover the human stories behind world-changing innovations and discoveries.'
})
</script>

<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="section-massive bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div>
            <h1 class="display-xl mb-12">
              About
              <br>
              <span class="text-accent">Us</span>
            </h1>
            <p class="text-hero mb-8">
              Every breakthrough has a beginning. We're dedicated to uncovering the human stories, unexpected moments, and persistent vision behind the innovations that shape our world.
            </p>
            <div class="space-y-4">
              <div class="text-2xl font-semibold">Our Mission:</div>
              <p class="text-lead">
                Understanding the past is key to shaping the future.
              </p>
            </div>
          </div>
          <div>
            <div class="aspect-square bg-gray-100 rounded-sm flex items-center justify-center">
              <div class="text-center space-y-4">
                <div class="text-6xl font-bold text-gray-300">📖</div>
                <p class="text-gray-500 text-sm">Stories visual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Black Section with White Text -->
    <section class="section-large bg-black text-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="display-lg mb-12 text-white">
            Why Stories
            <br>
            Matter
          </h2>
          <p class="text-hero text-white/90">
            Behind every revolutionary technology, scientific breakthrough, or cultural shift are real people with dreams, failures, and moments of inspiration.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <div class="space-y-12">
            <div>
              <div class="text-4xl font-bold mb-6 text-accent">01</div>
              <h3 class="text-3xl font-semibold mb-6 text-white">Our Approach</h3>
              <p class="text-white/80 text-lg leading-relaxed">
                We don't just tell you what happened—we show you how it happened. Through meticulous research, interviews with key players, and access to primary sources, we craft narratives that are both engaging and authentic.
              </p>
            </div>
          </div>

          <div class="space-y-12">
            <div>
              <div class="text-4xl font-bold mb-6 text-accent">02</div>
              <h3 class="text-3xl font-semibold mb-6 text-white">What We Cover</h3>
              <div class="space-y-4 text-white/80 text-lg">
                <div>Technology breakthroughs and their creators</div>
                <div>Scientific discoveries that changed everything</div>
                <div>Cultural movements and their origins</div>
                <div>Business innovations and entrepreneurship</div>
                <div>Social innovations and their impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-large bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="display-md mb-8">Meet the Team</h2>
        <p class="text-hero mb-20">
          Our diverse team of researchers, writers, and storytellers brings together decades of experience in journalism, history, and innovation studies.
        </p>

        <div class="grid md:grid-cols-3 gap-16">
          <div class="space-y-6">
            <div class="text-6xl font-bold text-accent">01</div>
            <h3 class="text-2xl font-semibold">Research Team</h3>
            <p class="text-lg leading-relaxed text-gray-700">
              Historians and investigative journalists who dig deep to uncover the real stories behind the headlines.
            </p>
          </div>

          <div class="space-y-6">
            <div class="text-6xl font-bold text-accent">02</div>
            <h3 class="text-2xl font-semibold">Writing Team</h3>
            <p class="text-lg leading-relaxed text-gray-700">
              Skilled storytellers who transform complex research into engaging narratives that captivate and inform.
            </p>
          </div>

          <div class="space-y-6">
            <div class="text-6xl font-bold text-accent">03</div>
            <h3 class="text-2xl font-semibold">Fact-Checking Team</h3>
            <p class="text-lg leading-relaxed text-gray-700">
              Meticulous verifiers who ensure every detail is accurate and every source is credible.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-large bg-gray-100">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="display-md mb-8">
          Join Our
          <br>
          Community
        </h2>
        <p class="text-hero mb-12">
          Be part of a growing community of curious minds exploring the stories that shaped our world.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="btn-primary">
            Subscribe to Updates
          </button>
          <button class="btn-secondary">
            Follow Us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
