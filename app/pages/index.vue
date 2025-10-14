<script lang="ts" setup>
const speakers = [
  {
    name: 'Zanele Abraham Matome',
    profilePicUrl: '/Zanele-Abraham-Matome.jpg',
    title: 'Founder',
    company: 'Welo Health'
  },
  {
    name: 'Honesty Ndou',
    profilePicUrl: '/Honesty-Ndou.jpg',
    title: 'Founder',
    company: 'HTN Architectural Design Lab',
    linkedInUrl: 'https://www.linkedin.com/in/zanele-abraham-matome-68447518/'
  },
  {
    name: 'Nkosinathi Temba',
    profilePicUrl: '/Nkosinathi-Temba.jpg',
    title: 'CEO & Co-founder',
    company: 'thuto.io'
  },
  {
    name: 'Samantha Skyring',
    profilePicUrl: '/Samantha-Skyring.jpg',
    title: 'CEO and Founder',
    company: 'Oryx Desert Salt'
  },
  {
    name: 'Thapelo Nthite',
    profilePicUrl: '/Thapelo-Nthite.jpg',
    title: 'Co-founder',
    company: 'Botlhale AI'
  },
  {
    name: 'Imtiyaaz Riley',
    profilePicUrl: '/Imtiyaaz-Riley.jpg',
    title: 'CEO',
    company: 'Imtiyaaz'
  },
  {
    name: 'Kimlynn Temple',
    profilePicUrl: '/Kimlynn-Temple.jpg',
    title: 'CEO',
    company: 'Tipped'
  },
  {
    name: 'Saleem Jaffer',
    profilePicUrl: '/Saleem-Jaffer.jpg',
    title: 'Founder',
    company: 'Alpha Crest Finance'
  },
  {
    name: 'Serisha Barrat',
    profilePicUrl: '/Serisha-Barrat.jpg',
    title: 'CEO',
    company: 'Lawyerd Up'
  }
]
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
                  Inspiring Journey's of African Entrepreneurs
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
            "Early one Friday morning while talking with an African entrepreneur and walking down
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
            Join us in supporting and celebrating these inspiring Humans."
          </p>
          <p class="text-black text-3xl my-8 mx-auto leading-[120%]">
            <strong>Will Green</strong> <br />
            Curator <br />
            <span class="text-sm">a WGW Community and Africa Tech Ecosystem initiative.</span>
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
          <li class="my-8"><strong>10 handpicked</strong> curated <strong>speakers</strong>.</li>
          <li class="my-8">
            Each speaker has <strong>7 minutes</strong> to share the real story behind their
            <strong>entrepreneurial journey</strong>.
          </li>
          <li class="my-8">
            Think <strong>'TED talk' meets 'PechaKucha'</strong> with a healthy dose of humour,
            emotions, celebrations and support.
          </li>
          <li class="my-8">
            The event is <strong>NOT</strong> an investor, product, business, sales or marketing
            pitch.
          </li>
          <li class="my-8">
            An informal networking and <strong>entertaining evening</strong> with other curious and
            supportive Humans.
          </li>
          <li class="my-8">
            A <strong>global community</strong> supporting African entrepreneurs.
          </li>
        </ul>
      </div>
    </section>

    <section class="container mx-auto py-20 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center">
        <div class="text-center col-span-1 md:col-span-2 md:text-left">
          <h2 class="text-black text-3xl my-8 font-bold mx-auto leading-[120%]">Our Vision</h2>
          <p class="text-black text-xl my-8 mx-auto">
            To inspire, connect and positively shape the global narrative of African
            entrepreneurship.
            <br />
            To reach <strong>1 million African Entrepreneurs by 2050</strong>.
          </p>
          <p class="text-black text-xl my-8 mx-auto">
            This isn’t just a platform, it’s a stage for stories that resonate, ideas that linger
            and unheard voices to make a lasting impact.
          </p>
          <p class="text-black text-xl my-8 mx-auto">
            Are you ready to experience real human and inspiring African Origin Stories?
          </p>
          <p class="text-black text-xl my-8 mx-auto">
            We look forward to welcoming you on the
            <strong>12th of November 2025 at 18:30 for 19:00 (doors open 18:00)</strong>.
          </p>
          <p class="text-black text-xl my-8 mx-auto">
            Thanks to all our founding partners for your support especially Silicon Overdrive, Von
            Seidels, Sealand. Thanks to our volunteer team.
          </p>
          <p class="text-black text-xl my-8 mx-auto">
            *All profits will be reinvested to host future events to create and distribute more
            stories and help support High School entrepreneur programmes in Africa.
          </p>
        </div>
        <div class="col-span-1 p-20 md:p-4">
          <img src="/arms-linked.png" />
        </div>
      </div>
    </section>

    <section id="speakers" class="py-20 bg-black">
      <h2 class="font-semibold text-4xl text-white text-center my-8">Speakers</h2>
      <div class="container mx-auto">
        <div class="grid grid-cols-5 gap-12 p-12">
          <SpeakerProfile
            v-for="(speaker, index) in speakers"
            :key="index"
            :name="speaker.name"
            :title="speaker.title"
            :profile-pic-url="speaker.profilePicUrl"
            :company="speaker.company"
            :linked-in-url="speaker.linkedInUrl"
            class="text-white/90 bg-black"
          />
        </div>
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
