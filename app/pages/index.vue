<template>
  <div>
    <!-- Demo Component with CSS Animation - Replace with VideoHero when you add your video -->
    <VideoHeroDemo
      title="Beyond the Pitch Deck. This is the Real Story."
      date="12 November 2025"
      venue="The Homecoming Theatre, District 6, Cape Town"
      :ui="{
        title: 'text-white',
        description: 'text-white/90',
        section: { base: 'py-24 sm:py-32' }
      }"
    />
    <!-- Uncomment below and add your video file to use actual video background -->
    <!-- <VideoHero
      title="Beyond the Pitch Deck. This is the Real Story."
      description="Discover the untold stories behind the world's most influential innovations. Every breakthrough has a beginning—we're here to tell those stories."
      video-src="/videos/hero-background.mp4"
      fallback-image="/images/hero-fallback.jpg"
      fallback-alt="Innovation stories background"
      :links="[{
        label: 'Explore Stories',
        to: '/about',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Learn More',
        to: '/about',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    /> -->

    <UPageSection
      id="introduction"
      class="max-w-6xl mx-auto"
    >
      <p class="text-lg md:text-xl lg:text-2xl md:leading-[140%] text-center text-muted-foreground mb-4">
        Origin Stories is a <strong>live theatre event and media platform</strong> where <strong>African entrepreneurs share their inspiring journeys</strong>. It’s not just a stage, it’s a support platform. The stories are raw, honest, and deeply human. They highlight resilience, ingenuity and legacy, while amplifying African entrepreneurship to the world.
      </p>
      <p class="text-2xl md:text-3xl lg:text-4xl md:leading-[140%] text-center text-muted-foreground mb-4">
        Our mission is to <strong>inspire and empower</strong> by broadcasting the journeys of Africa’s boldest founders; stories that shape culture, create communities, and attract global capital.
      </p>
      <p class="text-lg md:text-xl lg:text-2xl md:leading-[140%] text-center text-muted-foreground mb-4">
        Origin Stories goes deeper. We capture the <strong>unfiltered, human, and inspiring Hero's Journey</strong> of Africa's most brilliant innovators. This isn't about traction graphs; it's about the <strong>Why Me?</strong> and the <strong>What Did I Sacrifice?</strong>; the personal truth that forges excellence.
      </p>
      <p class="text-lg md:text-xl lg:text-2xl md:leading-[140%] text-center text-muted-foreground mb-4">
        In the African ecosystem, trust is built relationally, not transactionally. We provide the essential context you need to connect with customers, attract the right capital, and secure top talent.
      </p>
    </UPageSection>

    <UPageSection>
      <h3 class="text-2xl md:text-3xl lg:text-4xl md:leading-[140%] text-center text-muted-foreground mb-4 font-bold">
        Welcome to the home of authentic African innovation.
      </h3>
      <div style="position: relative; padding-bottom: 68.25%; padding-top: 35px; height: 0; overflow: hidden;">
        <iframe
          src="https://app.airtimetools.com/embed/z_0TaBL4Irrx4SyVj8FymM?embedSlides=true"
          frameborder="0"
          allow="autoplay; encrypted-media; allowfullscreen"
          style="display: block; position: absolute; top:0; left: 50%; transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%); width: 100%; height: 100%;"
        />
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Ready to Discover the Stories Behind Innovation?"
        description="Join thousands of curious minds exploring the fascinating origins of the technologies and ideas that shape our daily lives."
        variant="subtle"
        :links="[{
          label: 'Start Exploring',
          to: '/about',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        }, {
          label: 'View Our Sponsors',
          to: '/sponsors',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
