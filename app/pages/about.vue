<script setup>
useSeoMeta({
  title: 'About - Origin Stories',
  description: ''
})
</script>

<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto mt-16 px-6 lg:px-8">
        <div class="gap-16 items-center min-h-screen">
          <div>
            <h1 class="display-xl mb-12">We Tell the Stories Africa is Too Humble to Tell.</h1>
            <p class="text-hero mb-8">
              For too long, the incredible achievements and challenges of African founders have been
              whispered among family or hidden behind a polite reserve. We believe this silence is a
              disservice to the world.
            </p>
            <p class="text-hero mb-8">
              We created Origin Stories to give these narratives a high-quality, powerful platform.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Black Section with White Text -->
    <section class="section-large bg-black text-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="text-left text-white mb-20">
          <h2 class="mb-12 text-white text-4xl font-bold">Why This Matters</h2>
          <ul class="text-white space-y-8 text-left">
            <li class="flex items-start gap-4 text-hero text-white">
              <UIcon
                name="i-lucide-chevrons-right"
                class="w-6 h-6 mt-1.5 text-white flex-shrink-0"
              />
              <span>
                We challenge the notion that talking about success, excellence, or overcoming
                challenges is "in bad taste." We celebrate it.
              </span>
            </li>
            <li class="flex items-start gap-4 text-hero text-white">
              <UIcon
                name="i-lucide-chevrons-right"
                class="w-6 h-6 mt-1.5 text-white flex-shrink-0"
              />
              <span>
                Unlike other ecosystems, African founders rarely get credit for their perseverance
                through failure. We showcase the relentless challenges and creative solutions not as
                setbacks, but as the badges of honour that prove character and resilience.
              </span>
            </li>
            <li class="flex items-start gap-4 text-hero text-white">
              <UIcon
                name="i-lucide-chevrons-right"
                class="w-6 h-6 mt-1.5 text-white flex-shrink-0"
              />
              <span>
                In a relational business culture, trust is everything. We give founders a recorded
                asset that tells their personal history, character, and mission. This allows
                partners and investors to move faster and deeper than any transactional pitch could
                allow.
              </span>
            </li>
            <li class="flex items-start gap-4 text-hero text-white">
              <UIcon
                name="i-lucide-chevrons-right"
                class="w-6 h-6 mt-1.5 text-white flex-shrink-0"
              />
              <span>
                The standard Silicon Valley pitch format is useful, but it lacks Heart & Soul. We
                bring back the personal Origin Story; what inspired you, what you gave up, and why
                this problem consumed you.
              </span>
            </li>
          </ul>
          <p class="text-accent text-3xl font-bold mt-8">
            We are building a legacy of inspiration, one incredible journey at a time.
          </p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-large bg-gray-100">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="display-md mb-8">
          Join Our
          <br />
          Community
        </h2>
        <p class="text-hero mb-12">
          Be part of a growing community of curious minds exploring the stories that shaped our
          world.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="btn-primary">Subscribe to Updates</button>
          <button class="btn-secondary">Follow Us</button>
        </div>
      </div>
    </section>
  </div>
</template>
