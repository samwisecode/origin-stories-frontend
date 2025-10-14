<script setup>
useSeoMeta({
  title: 'About - Origin Stories',
  description: 'We Tell the Stories Africa is Too Humble to Tell.'
})
</script>

<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto mt-5 md:mt-20 mb-5 md:mb-20 px-6 lg:px-8">
        <div class="gap-16 items-center">
          <div>
            <h1 class="display-xl mb-12">We Tell the Stories Africa is Too Humble to Tell.</h1>
            <p class="mb-8 text-2xl md:text-3xl">
              For too long, the incredible achievements and challenges of African founders have been
              whispered among family or hidden behind a polite reserve. We believe this silence is a
              disservice to the world.
            </p>
            <p class="text-2xl md:text-3xl mb-8">
              We created Origin Stories to give these narratives a voice.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Black Section with White Text -->
    <section class="section-large bg-black text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-left text-white">
          <h2 class="mb-8 text-white text-2xl md:text-3xl font-bold">Why This Matters</h2>
          <ul class="text-white space-y-8 text-left list-disc text-2xl md:text-3xl">
            <li class="flex items-start gap-4 text-white">
              <span>
                We challenge the belief that talking about success, or overcoming challenges is
                taboo. Instead we celebrate it.
              </span>
            </li>
            <li class="flex items-start gap-4 text-white">
              <span>
                Unlike other ecosystems, African founders rarely get credit for their perseverance.
                We showcase the relentless challenges and solutions our founders endure and create.
              </span>
            </li>
            <li class="flex items-start gap-4 text-white">
              <span>
                Africa operates a business culture anchored in relationships. Trust is built first
                and sometimes slowly. We help founders tell their stories and connect them to an
                audience that cares. This builds trust with future partners that helps them thrive.
              </span>
            </li>
          </ul>
          <p class="text-accent text-3xl font-bold mt-8">
            We are building a legacy of inspiration, one incredible journey at a time.
          </p>
        </div>
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
