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

    <!-- Introduction Section -->
    <IntroductionSection />

    <!-- Mission Statement Section (preserved) -->
    <MissionStatement />

    <!-- Video Showcase Section -->
    <VideoShowcase />

    <!-- Ticket CTA Section -->
    <TicketCTA />

    <!-- Final CTA Section -->
    <FinalCTA />
  </div>
</template>
