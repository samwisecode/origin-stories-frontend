<script lang="ts" setup>
// const speakers = [

// ]
</script>

<template>
  <div>
    <section class="mt-8 mb-20">
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="">
          <div class="">
            <div class="space-y-8 text-center">
              <div class="flex justify-center">
                <img src="/Origin_Stories_Primary_Flag yellow.svg" class="w-164" />
              </div>
              <div class="space-y-6 text-center">
                <h2 class="font-semibold text-3xl mb-8 text-light-brown">
                  Inspiring Stories of African Entrepreneurs
                </h2>
                <p class="text-4xl text-center mb-2 text-black font-semibold">
                  12 November 2025 | 6:30pm
                </p>
                <p class="text-xl text-black text-center">
                  The Homecoming Theatre, District 6, Cape Town
                </p>
              </div>
              <div class="flex flex-col justify-center sm:flex-row gap-4 pt-4">
                <UButton
                  to="https://www.quicket.co.za/events/339332-origin-stories/#/"
                  class="btn-primary bg-[#c59640] text-black border-2 border-black hover:bg-black hover:text-white"
                  target="_blank"
                  >Get Your Ticket</UButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-8 bg-black py-20">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p class="text-white text-3xl my-4 mx-auto leading-relaxed">
          Origin Stories is a
          <span class="text-black bg-white font-bold p-2 border-4 border-black"
            >live theatre event and media platform</span
          >
          where
          <span class="text-black bg-white font-bold p-2 border-4 border-black"
            >African&nbsp;entrepreneurs share their inspiring journeys.</span
          >It’s not just a stage, it’s a support platform. The stories are raw, honest and deeply
          human. They highlight resilience, ingenuity and legacy while, amplifying African
          entrepreneurship to the world.
        </p>
      </div>
    </section>

    <!-- <section class="pt-4">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p class="text-black text-3xl my-8 mx-auto leading-relaxed">
          Our mission is to
          <span class="bg-black font-bold text-white px-4 py-2">inspire and empower</span> by
          broadcasting the journeys of Africa’s boldest founders; stories that shape culture, create
          communities, and attract global capital.
        </p>
      </div>
    </section> -->

    <section class="w-full p-8">
      <div class="container max-w-260 mx-auto text-center">
        <div>
          <div class="flex justify-center">
            <img src="/table-mountain.png" alt="Table Mountain" />
          </div>
          <p class="text-black text-3xl my-8 font-bold mx-auto leading-[120%]">
            The Origin of ORIGIN STORIES...
          </p>
          <p class="text-black text-3xl my-8 mx-auto">
            Early one Friday morning while talking with an African entrepreneur and walking down
            Lion's Head mountain in Cape Town.
          </p>
          <p class="text-black text-3xl my-8 mx-auto leading-[120%]">
            I realised there was nowhere to listen to or share these inspiring African
            entrepreneur's stories (like Nkosinathi's) and for them to inspire the next generation
            of dreamers, builders and value-creators.
          </p>
          <p class="text-black text-3xl my-8 mx-auto leading-[120%]">
            After reading the quote "IF NOT NOW, WHEN? IF NOT ME, WHO?" and being encouraged by
            others.
          </p>
          <p class="text-black text-3xl my-8 mx-auto leading-[120%]">
            We decided to create this platform to showcase the most inspiring African Entrepreneur
            stories and share them with the World.
          </p>
          <p class="text-black text-3xl my-8 mx-auto leading-[120%]">
            Join us in supporting and celebrating these inspiring Humans.
          </p>
          <p class="text-black text-base my-8 mx-auto leading-[120%]">
            Will Green Curator ORIGIN STORIES a WGW Community and Africa Tech Ecosystem initiative.
          </p>
        </div>
      </div>
    </section>

    <section class="mt-8 bg-black pt-20 pb-20">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-left">
        <p class="text-white text-3xl my-4 mx-auto leading-relaxed">
          <span class="font-bold p-2">What is ORIGIN STORIES?</span>
        </p>
        <ul class="text-white/80 text-3xl list-disc pl-8">
          <li class="my-8">10 handpicked curated speakers</li>
          <li class="my-8">
            Each speaker has 7 minutes to share the real story behind their entrepreneurial journey.
          </li>
          <li class="my-8">
            Think 'TED talk' meets 'PechaKucha' with a healthy dose of humour, emotions,
            celebrations and support.
          </li>
          <li class="my-8">
            The event is NOT an investor, product, business, sales or marketing pitch.
          </li>
          <li class="my-8">
            An informal networking and entertaining evening with other curious and supportive
            Humans.
          </li>
        </ul>
      </div>
    </section>

    <div class="flex flex-col justify-center sm:flex-row gap-4">
      <UButton
        class="btn-primary bg-[#c59640] text-black border-2 border-black hover:bg-black hover:text-white"
        to="https://www.quicket.co.za/events/339332-origin-stories/#/"
        target="_blank"
        >Get Your Ticket</UButton
      >
    </div>

    <!-- <UPageSection>
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
    </UPageSection> -->

    <UPageSection>
      <h2 class="font-semibold text-4xl text-black text-center">Speakers</h2>
      <div class="grid grid-cols-4 gap-4">
        <SpeakerProfile name="Sam" company="Lank Dev" title="Founder" />
        <SpeakerProfile name="Sam" company="Lank Dev" title="Founder" />
        <SpeakerProfile name="Sam" company="Lank Dev" title="Founder" />
        <SpeakerProfile name="Sam" company="Lank Dev" title="Founder" />
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
