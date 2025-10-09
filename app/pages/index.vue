<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="section-massive relative overflow-hidden bg-white">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/desert.jpg"
          alt="African landscape background"
          class="w-full h-full object-cover"
        />
        <!-- Black Opacity Overlay -->
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="">
          <div class="">
            <div class="space-y-8 text-center">
              <div class="flex justify-center">
                <img src="/Origin_Stories_Primary_Flag yellow.svg" class="w-164" />
              </div>
              <div class="space-y-6 text-center">
                <h2 class="display-md font-normal mb-16 text-white">
                  Inspiring Stories of African Entrepreneurs
                </h2>
                <p class="text-4xl text-center mb-2 text-white">12 November 2025 | 6:30pm</p>
                <p class="text-xl text-white/90 text-center">
                  The Homecoming Theatre, District 6, Cape Town
                </p>
              </div>
              <div class="flex flex-col justify-center sm:flex-row gap-4 pt-8">
                <UButton
                  class="btn-primary bg-[#c59640] text-white border-2 border-black hover:bg-black hover:text-white hover:border-white"
                  >Get Your Ticket</UButton
                >
                <UButton
                  class="btn-secondary bg-black text-white hover:bg-white hover:text-black border-2 border-black"
                  >Learn More</UButton
                >
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
          Origin Stories is a
          <span class="text-black bg-white font-bold p-2 border-4 border-black"
            >live theatre event and media platform</span
          >
          where
          <span class="text-black bg-white font-bold p-2 border-4 border-black"
            >African&nbsp;entrepreneurs share their inspiring journeys.</span
          >It’s not just a stage, it’s a support platform. The stories are raw, honest, and deeply
          human. They highlight resilience, ingenuity and legacy, while amplifying African
          entrepreneurship to the world.
        </p>
      </div>
    </UPageSection>

    <UPageSection>
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p class="text-black text-5xl font-black my-8 mx-auto leading-[120%]">
          Our mission is to
          <span class="bg-black text-white px-4 py-2">inspire and empower</span> by broadcasting the
          journeys of Africa’s boldest founders; stories that shape culture, create communities, and
          attract global capital.
        </p>
      </div>
    </UPageSection>

    <UPageSection>
      <div class="container mx-auto bg-white border-6 border-black">
        <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p class="text-black text-3xl font-medium my-8 mx-auto leading-relaxed">
            Origin Stories goes deeper. We capture the unfiltered, human, and inspiring Hero's
            Journey of Africa's most brilliant innovators. This isn't about traction graphs; it's
            about the Why Me? and the What Did I Sacrifice?; the personal truth that forges
            excellence.
          </p>
          <p class="text-black text-3xl font-medium my-8 mx-auto leading-relaxed">
            In the African ecosystem, trust is built relationally, not transactionally. We provide
            the essential context you need to connect with customers, attract the right capital, and
            secure top talent.
          </p>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <UButton class="btn-primary">Get Event Tickets</UButton>
      </div>
    </UPageSection>

    <UPageSection>
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-black text-6xl font-black my-8 mx-auto leading-[120%]">
          Welcome to the home of authentic African innovation.
        </h2>
        <div>
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
                left: 50%;
                transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                width: 100%;
                height: 100%;
              "
            ></iframe>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Featured Speaker Section -->
    <!-- <section class="section-large bg-white">
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
    </section> -->

    <!-- Final CTA -->
    <section class="section-large bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="display-md mb-8">
          Ready to Discover the Stories
          <br />
          Behind Innovation?
        </h2>
        <p class="text-hero mb-12">
          Join the curious minds exploring the fascinating origins of the technologies and ideas
          that shape our daily lives.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <UButton class="btn-primary" to="/about">Start Exploring</UButton>
          <UButton class="btn-secondary" to="/sponsors">View Our Sponsors</UButton>
        </div>
      </div>
    </section>
  </div>
</template>
