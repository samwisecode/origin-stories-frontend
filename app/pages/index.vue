<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="section-massive relative overflow-hidden bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          <div class="lg:col-span-8">
            <div class="space-y-8">
              <h1 class="display-xl">
                Origin
                <br />
                <span class="text-accent">Stories</span>
              </h1>
              <div class="space-y-6">
                <h2 class="display-md font-normal">
                  Beyond the Pitch Deck.
                  <br />
                  This is the Real Story.
                </h2>
                <p class="text-hero mb-0">12 September 2025 | 6:30pm</p>
                <p class="text-lg text-black">The Homecoming Theatre, District 6, Cape Town</p>
              </div>
              <div class="flex flex-col sm:flex-row gap-4 pt-8">
                <UButton class="btn-primary">Get Your Ticket</UButton>
                <UButton class="btn-secondary">Learn More</UButton>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4">
            <div class="relative">
              <!-- Placeholder for future video/visual element -->
              <div class="aspect-square bg-gray-100 rounded-sm flex items-center justify-center">
                <div class="text-center space-y-4">
                  <img
                    src="../assets/images/speaker.jpg"
                    alt="Origin Stories Speaker"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <UPageSection class="bg-black text-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p class="text-white text-3xl my-8 mx-auto leading-relaxed">
          Origin Stories is a live theatre event and media platform where African entrepreneurs
          share their inspiring journeys. It’s not just a stage, it’s a support platform. The
          stories are raw, honest, and deeply human. They highlight resilience, ingenuity and
          legacy, while amplifying African entrepreneurship to the world.
        </p>
      </div>
    </UPageSection>

    <!-- Featured Speaker Section -->
    <section class="section-large bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="display-md mb-8">Featured Speaker</h2>
        </div>

        <div class="flex justify-center">
          <div class="max-w-md">
            <SpeakerProfileCard
              name="Will Green"
              title="Founder & CEO"
              avatar-url="https://media.licdn.com/dms/image/v2/D4D03AQG_d8huZ9FSLA/profile-displayphoto-shrink_800_800/B4DZUZkWONGcAk-/0/1739890714218?e=1762387200&v=beta&t=l3O0soWj7YlcA2EFgA_zUKvZCOGsbPNsXe_8wof3yT8"
              :show-user-info="true"
              :show-behind-gradient="false"
              :enable-tilt="false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-large bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="display-md mb-8">
          Ready to Discover the Stories
          <br />
          Behind Innovation?
        </h2>
        <p class="text-hero mb-12">
          Join thousands of curious minds exploring the fascinating origins of the technologies and
          ideas that shape our daily lives.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="btn-primary">Start Exploring</button>
          <button class="btn-secondary">View Our Sponsors</button>
        </div>
      </div>
    </section>
  </div>
</template>
