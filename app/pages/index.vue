<script lang="ts" setup>
// import { ref } from 'vue'
import { UButton } from '#components'

const speakers = [
  {
    name: 'Zanele Abraham Matome',
    profilePicUrl: '/Zanele-Abraham-Matome.jpg',
    title: 'Founder',
    company: 'Welo Health',
    bio: 'Zanele Abraham Matome is the founder of Welo Health, a South African health-tech platform launched in 2020 that brings on-demand care to homes and workplaces through a trusted network of nurses and doctors. Inspired by her own challenges accessing care, Welo blends technology with human touch to deliver affordable, convenient, quality services. The venture has been named among Africa’s Top 50 HealthTech startups and backed by the Bill & Melinda Gates Foundation. Beyond Welo, Zanele runs Innov8, an NGO providing maths support to rural schools across South Africa.'
  },
  {
    name: 'Honesty Ndou',
    profilePicUrl: '/Honesty-Ndou.jpg',
    title: 'Founder',
    company: 'HTN Architectural Design Lab',
    linkedInUrl: 'https://www.linkedin.com/in/zanele-abraham-matome-68447518/',
    bio: 'Born in Zimbabwe, he arrived in South Africa in May 2004 with R10 and no safety net. He took whatever work he could find; construction, painting and gardening. He further upskilled in architectural technology and graduated with distinction. He built experience across firms, specialised in petroleum design, registered with SACAP and secured consent to sign off petrol station and restaurant projects. Today he runs his own practice, trusted for high-stakes commercial work and accredited as a platinum-graded vendor with Sasol and Astron. A journey from survival to specialist; driven by belief and passion…'
  },
  {
    name: 'Nkosinathi Temba',
    profilePicUrl: '/Nkosinathi-Temba.jpg',
    title: 'CEO & Co-founder',
    company: 'thuto.io',
    bio: 'Thuto is a reward-based digital assessment platform that turns effort into recognition. Students compete with their selves, earning real rewards as they build consistent habits; teachers get back precious time for actual teaching. Built in South Africa by Nkosinathi Temba and team, Thuto keeps things simple: clear goals, instant feedback and a flywheel of feedback and rewards. Behind the scenes, they partner with schools to lift outcomes without adding admin. It’s not another app;  it’s a small, smart system that makes learning worth it for all.'
  },
  {
    name: 'Samantha Skyring',
    profilePicUrl: '/Samantha-Skyring.jpg',
    title: 'CEO and Founder',
    company: 'Oryx Desert Salt',
    bio: 'Oryx Desert Salt was founded by Samantha Skyring, inspired by a 120km Namib Desert trek where she observed Oryx gazella relying on salt for survival. She discovered pristine, mineral-rich salt in the Kalahari Desert, naturally harvested from ancient rock formations and sun-dried. What started on her dining table has grown into a national brand supplying major retailers and restaurants. The company prioritises sustainability, working with women-owned suppliers and local artisans for packaging, while promoting natural, unprocessed salt that supports health and wellbeing. Oryx Desert Salt sees itself as part of the greatest feminine power of all: Mother Nature.'
  },
  {
    name: 'Thapelo Nthite',
    profilePicUrl: '/Thapelo-Nthite.jpg',
    title: 'Co-founder',
    company: 'Botlhale AI',
    bio: 'Thapelo Nthite is the CEO and co-founder of Botlhale AI, building tools that let people access digital services in their own languages. Rooted in social justice and practical engineering, he and his team create conversational bots and NLP for seven South African languages so businesses can serve customers on familiar terms. Founded in 2019, Botlhale AI is advancing an inclusive digital future.'
  },
  {
    name: 'Imtiyaaz Riley',
    profilePicUrl: '/Imtiyaaz-Riley.jpg',
    title: 'CEO',
    company: 'Imtiyaaz',
    bio: 'Imtiyaaz Riley is the founder and CEO of Loop, a Cape Town-based mobility and payments company transforming how South Africans commute and transact. Born into a third-generation taxi family in Manenberg, he founded Loop in 2021 to tackle unsafe cash-based transport, unreliable scheduling, and financial exclusion. Today, Loop allows commuters to book via WhatsApp, pay using Chat-to-Pay or Tap-to-Phone, and even insure their belongings in transit. Under Imtiyaaz’s leadership, the company has won national and continental awards - Social Enterprise of the Year (2024) and partnered with Visa to scale its digital payments ecosystem. Imtiyaaz is also a South African delegate to the Y20, the official youth engagement group of the G20, where he contributes to global conversations around innovation and inclusive economic systems.'
  },
  {
    name: 'Kimlynn Temple',
    profilePicUrl: '/Kimlynn-Temple.jpg',
    title: 'CEO',
    company: 'Tipped',
    bio: 'Kimlynn Temple builds tech that feels human. A developer-turned-product thinker with a love for psychology and design, she spots the small frictions most miss—and fixes them. She founded tipped, a digital tipping platform turning moments of gratitude into dignified, reliable income for service workers. In 2024, tipped rolled out nationwide with Sasol, proving simple tools can shift lives at scale. Recognised by Heavy Chef and Woman of Stature, Kimlynn stays grounded: proudly South African, mom of two, and a voice for kind, practical innovation that includes the people technology often overlooks.'
  },
  {
    name: 'Saleem Jaffer',
    profilePicUrl: '/Saleem-Jaffer.jpg',
    title: 'Founder',
    company: 'Alpha Crest Finance',
    bio: 'Alpha Crest is a cryptocurrency firm founded in 2021, specialising in high-frequency trading with a focus on maximising returns while minimising risk. The team, made up of skilled developers, analysts, and quantitative financial experts, has consistently delivered strong performance over three years. Their proprietary algorithm operates across multiple exchanges and markets, leveraging premium technology and rigorous testing to provide safe, scalable, and effective digital asset investments.'
  },
  {
    name: 'Serisha Barrat',
    profilePicUrl: '/Serisha-Barrat.jpg',
    title: 'CEO',
    company: 'Lawyerd Up',
    bio: 'Serisha is the co-founder and CEO of Lawyered Up, a plain-English legal platform that turns contracts, compliance, and e-signing into a few clicks - quick, clear, paperless. With roots in law and a marketer’s bias for execution, she builds tools that remove friction so businesses of any size can move faster with confidence. In 2025, they launched Justice Up, a Lawyered Up initiative expanding access to simple legal education and tools. Beyond legal tech, Serisha cares about sustainability and storytelling, bringing the same make-it-matter energy to every project.'
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
                <h2 class="font-semibold text-2xl md:text-3xl mb-8 text-light-brown">
                  Inspiring Journey's of African Entrepreneurs
                </h2>
                <p class="text-3xl md:text-4xl text-center mb-2 text-black font-semibold">
                  12 November 2025 | 6:30pm
                </p>
                <p class="text-xl text-black text-center">
                  The Homecoming Theatre, District 6, Cape Town
                </p>
              </div>
              <div class="flex flex-col justify-center sm:flex-row gap-4 pt-4">
                <UButton
                  to="https://www.quicket.co.za/events/339332-origin-stories/#/"
                  class="flex justify-center btn-primary bg-[#c59640] text-black border-2 border-black hover:bg-black hover:text-white"
                  target="_blank"
                  >Get Your Ticket</UButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-8 bg-black pt-5 md:pt-20 pb-5 md:pb-20">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p class="text-white text-2xl md:text-3xl my-4 mx-auto leading-relaxed">
          Origin Stories is a
          <span class="text-black bg-white font-bold md:p-2 md:border-4 md:border-black"
            >live theatre event and media platform</span
          >
          where
          <span class="text-black bg-white font-bold md:p-2 md:border-4 md:border-black"
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
          <p class="text-black text-2xl md:text-3xl my-8 font-bold mx-auto leading-[120%]">
            The Origin of ORIGIN STORIES...
          </p>
          <p class="text-black text-2xl md:text-3xl my-8 mx-auto">
            "Early one Friday morning while talking with an African entrepreneur and walking down
            Lion's Head mountain in Cape Town.
          </p>
          <p class="text-black text-2xl md:text-3xl my-8 mx-auto leading-[120%]">
            I realised there was nowhere to listen to or share these inspiring African
            entrepreneur's stories (like Nkosinathi's) and for them to inspire the next generation
            of dreamers, builders and value-creators.
          </p>
          <p class="text-black text-2xl md:text-3xl my-8 mx-auto leading-[120%]">
            After reading the quote "IF NOT NOW, WHEN? IF NOT ME, WHO?" and being encouraged by
            others.
          </p>
          <p class="text-black text-2xl md:text-3xl my-8 mx-auto leading-[120%]">
            We decided to create this platform to showcase the most inspiring African Entrepreneur
            stories and share them with the World.
          </p>
          <p class="text-black text-2xl md:text-3xl my-8 mx-auto leading-[120%]">
            Join us in supporting and celebrating these inspiring Humans."
          </p>
          <p class="text-black text-2xl md:text-3xl mt-8 mx-auto leading-[120%]">
            <strong>Will Green</strong> <br />
            Curator <br />
            <span class="text-sm">a WGW Community and Africa Tech Ecosystem initiative.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="mt-8 bg-black pt-5 md:pt-20 pb-5 md:pb-20">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 text-left">
        <p class="text-white text-center md:text-left text-2xl md:text-3xl my-4 leading-relaxed">
          <span class="font-bold">What is ORIGIN STORIES?</span>
        </p>
        <ul class="text-white/80 text-xl list-disc pl-8">
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

    <section class="container mx-auto pt-5 md:pt-20 pb-5 md:pb-20 px-4">
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
        <div class="col-span-1 px-20 md:p-4">
          <img src="/arms-linked.png" />
        </div>
      </div>
    </section>

    <section id="speakers" class="pt-5 md:pt-20 pb-5 md:pb-20 bg-black">
      <h2 class="font-semibold text-4xl text-white text-center my-8">Speakers</h2>
      <div class="container mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 p-12">
          <SpeakerProfile
            v-for="(speaker, index) in speakers"
            :key="index"
            :name="speaker.name"
            :title="speaker.title"
            :profile-pic-url="speaker.profilePicUrl"
            :company="speaker.company"
            :linked-in-url="speaker.linkedInUrl"
            :bio="speaker.bio"
            class="text-white/90 bg-black cursor-pointer"
          />
        </div>
      </div>
    </section>

    <JoinCommunity />
  </div>
</template>
