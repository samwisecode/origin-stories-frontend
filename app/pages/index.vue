<template>
  <div>
    <!-- Demo Component with CSS Animation - Replace with VideoHero when you add your video -->
    <VideoHeroDemo
      title="Beyond the Pitch Deck. This is the Real Story."
      description="Discover the untold stories behind the world's most influential innovations. Every breakthrough has a beginning—we're here to tell those stories."
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
      id="features"
      title="Uncovering the Stories That Shape Our World"
      description="From garage startups to groundbreaking discoveries, we dive deep into the human stories behind the innovations that changed everything."
      :features="[{
        icon: 'i-lucide-lightbulb',
        title: 'Innovation Chronicles',
        description: 'Deep-dive into the moments of inspiration that sparked world-changing ideas and the people who dared to pursue them.'
      }, {
        icon: 'i-lucide-users',
        title: 'Human Stories',
        description: 'Meet the visionaries, rebels, and dreamers whose passion and perseverance turned impossible ideas into reality.'
      }, {
        icon: 'i-lucide-map',
        title: 'Journey Mapping',
        description: 'Follow the complete journey from concept to breakthrough, including the failures, pivots, and breakthroughs along the way.'
      }, {
        icon: 'i-lucide-globe',
        title: 'Global Impact',
        description: 'Explore how these innovations rippled across industries, cultures, and continents to shape the modern world.'
      }, {
        icon: 'i-lucide-book-open',
        title: 'Research-Driven',
        description: 'Every story is meticulously researched and verified, bringing you authentic insights from primary sources and key players.'
      }, {
        icon: 'i-lucide-trending-up',
        title: 'Future Implications',
        description: 'Understand not just what happened, but what it means for the future of technology, society, and human progress.'
      }]"
    />

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
