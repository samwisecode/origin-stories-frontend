<script setup>
useSeoMeta({
  title: 'Sponsors - Origin Stories',
  description: 'Meet the organizations and individuals who support Origin Stories\' mission to uncover the stories behind innovation.'
})

const sponsors = {
  platinum: [
    {
      name: 'TechForward Foundation',
      logo: 'i-lucide-building-2',
      description: 'Supporting digital innovation storytelling',
      website: '#'
    },
    {
      name: 'Innovation Institute',
      logo: 'i-lucide-lightbulb',
      description: 'Advancing research in innovation history',
      website: '#'
    }
  ],
  gold: [
    {
      name: 'Future Labs',
      logo: 'i-lucide-rocket',
      description: 'Pioneering tomorrow\'s technologies',
      website: '#'
    },
    {
      name: 'Discovery Media Group',
      logo: 'i-lucide-tv',
      description: 'Bringing stories to global audiences',
      website: '#'
    },
    {
      name: 'Heritage Research Center',
      logo: 'i-lucide-book',
      description: 'Preserving innovation heritage',
      website: '#'
    }
  ],
  silver: [
    {
      name: 'StartupStory Co.',
      logo: 'i-lucide-trending-up',
      description: 'Documenting entrepreneurial journeys',
      website: '#'
    },
    {
      name: 'Digital Archives Inc.',
      logo: 'i-lucide-database',
      description: 'Digitizing historical records',
      website: '#'
    },
    {
      name: 'Creative Minds Network',
      logo: 'i-lucide-users',
      description: 'Connecting innovators worldwide',
      website: '#'
    },
    {
      name: 'Research Partners LLC',
      logo: 'i-lucide-microscope',
      description: 'Supporting investigative research',
      website: '#'
    }
  ]
}
</script>

<template>
  <div>
    <UPageHero
      title="Our Sponsors"
      description="Origin Stories is made possible through the generous support of organizations and individuals who believe in the power of storytelling to inspire innovation."
    />

    <UPageSection
      title="Why Sponsor Origin Stories?"
      description="By supporting our mission, sponsors help ensure that the fascinating stories behind world-changing innovations remain accessible to curious minds everywhere."
    >
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-4 text-center">
          <div class="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon
              name="i-lucide-globe"
              class="h-8 w-8 text-primary"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              Global Reach
            </h3>
            <p class="text-sm text-muted-foreground">
              Our stories reach millions of readers worldwide, inspiring the next generation of innovators.
            </p>
          </div>
        </div>

        <div class="space-y-4 text-center">
          <div class="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon
              name="i-lucide-target"
              class="h-8 w-8 text-primary"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              Quality Content
            </h3>
            <p class="text-sm text-muted-foreground">
              Meticulously researched and beautifully crafted stories that educate and inspire.
            </p>
          </div>
        </div>

        <div class="space-y-4 text-center">
          <div class="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon
              name="i-lucide-heart"
              class="h-8 w-8 text-primary"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              Meaningful Impact
            </h3>
            <p class="text-sm text-muted-foreground">
              Supporting education, innovation, and the preservation of important historical narratives.
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Platinum Sponsors -->
    <UPageSection
      title="Platinum Sponsors"
      description="Our premier partners who provide substantial support for our research and storytelling efforts."
    >
      <div class="grid gap-8 md:grid-cols-2">
        <div
          v-for="sponsor in sponsors.platinum"
          :key="sponsor.name"
          class="group rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start gap-4">
            <div class="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <UIcon
                :name="sponsor.logo"
                class="h-8 w-8 text-primary"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
                {{ sponsor.name }}
              </h3>
              <p class="text-muted-foreground mt-1">
                {{ sponsor.description }}
              </p>
              <UButton
                :to="sponsor.website"
                variant="ghost"
                size="sm"
                class="mt-3 -ml-3"
                trailing-icon="i-lucide-external-link"
              >
                Visit Website
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Gold Sponsors -->
    <UPageSection
      title="Gold Sponsors"
      description="Valued partners who contribute significantly to our mission of uncovering innovation stories."
    >
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="sponsor in sponsors.gold"
          :key="sponsor.name"
          class="group rounded-lg border bg-card p-4 hover:shadow-sm transition-shadow"
        >
          <div class="flex items-start gap-3">
            <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <UIcon
                :name="sponsor.logo"
                class="h-6 w-6 text-primary"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold group-hover:text-primary transition-colors">
                {{ sponsor.name }}
              </h3>
              <p class="text-sm text-muted-foreground mt-1">
                {{ sponsor.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Silver Sponsors -->
    <UPageSection
      title="Silver Sponsors"
      description="Supporting organizations that help make our content freely accessible to everyone."
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="sponsor in sponsors.silver"
          :key="sponsor.name"
          class="group rounded-lg border bg-card p-4 hover:shadow-sm transition-shadow"
        >
          <div class="text-center space-y-3">
            <div class="mx-auto h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon
                :name="sponsor.logo"
                class="h-5 w-5 text-primary"
              />
            </div>
            <div>
              <h3 class="font-medium group-hover:text-primary transition-colors">
                {{ sponsor.name }}
              </h3>
              <p class="text-xs text-muted-foreground mt-1">
                {{ sponsor.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Sponsorship Opportunities -->
    <UPageSection
      title="Become a Sponsor"
      description="Join our community of supporters and help us continue telling the stories that inspire innovation."
    >
      <div class="max-w-4xl mx-auto">
        <div class="grid gap-8 lg:grid-cols-3">
          <div class="lg:col-span-2 space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-3">
                Sponsorship Benefits
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-muted-foreground">Brand visibility across our digital platforms</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-muted-foreground">Recognition in our quarterly impact reports</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-muted-foreground">Early access to new content and research findings</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-muted-foreground">Opportunities for co-branded content partnerships</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-3">
                Partnership Opportunities
              </h3>
              <p class="text-muted-foreground">
                We offer flexible sponsorship packages tailored to your organization's goals and budget.
                From content partnerships to event sponsorships, we'll work with you to create a
                meaningful collaboration that aligns with your values and reaches your target audience.
              </p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="rounded-lg border bg-card p-6">
              <h3 class="font-semibold mb-4">
                Get Started
              </h3>
              <p class="text-sm text-muted-foreground mb-4">
                Ready to support the future of innovation storytelling?
              </p>
              <UButton
                to="#"
                size="sm"
                block
                trailing-icon="i-lucide-arrow-right"
              >
                Contact Us
              </UButton>
            </div>

            <div class="rounded-lg border bg-card p-6">
              <h3 class="font-semibold mb-4">
                Media Kit
              </h3>
              <p class="text-sm text-muted-foreground mb-4">
                Download our sponsorship information packet.
              </p>
              <UButton
                to="#"
                variant="outline"
                size="sm"
                block
                trailing-icon="i-lucide-download"
              >
                Download PDF
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Support Innovation Storytelling"
        description="Join our mission to preserve and share the stories that inspire the next generation of innovators."
        variant="subtle"
        :links="[{
          label: 'Become a Sponsor',
          to: '#',
          trailingIcon: 'i-lucide-arrow-right'
        }, {
          label: 'Learn More',
          to: '/about',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
