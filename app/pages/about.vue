<script setup>
useSeoMeta({
  title: 'About - Origin Stories',
  description: 'Learn about Origin Stories\' mission to uncover the human stories behind world-changing innovations and discoveries.'
})
</script>

<template>
  <div>
    <UPageHero
      title="About Origin Stories"
      description="Every breakthrough has a beginning. We're dedicated to uncovering the human stories, unexpected moments, and persistent vision behind the innovations that shape our world."
    />

    <UPageSection
      title="Our Mission"
      description="We believe that understanding the past is key to shaping the future. By exploring the origin stories of groundbreaking innovations, we illuminate the human elements that drive progress."
    >
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-foreground">
              Why Stories Matter
            </h3>
            <p class="text-muted-foreground">
              Behind every revolutionary technology, scientific breakthrough, or cultural shift are real people with dreams, failures, and moments of inspiration. These stories teach us that innovation isn't just about the final product—it's about the journey, the persistence, and the human spirit that makes the impossible possible.
            </p>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-foreground">
              Our Approach
            </h3>
            <p class="text-muted-foreground">
              We don't just tell you what happened—we show you how it happened. Through meticulous research, interviews with key players, and access to primary sources, we craft narratives that are both engaging and authentic. Every story is fact-checked and verified to ensure historical accuracy.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-foreground">
              What We Cover
            </h3>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="h-4 w-4 text-primary"
                />
                Technology breakthroughs and their creators
              </li>
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="h-4 w-4 text-primary"
                />
                Scientific discoveries that changed everything
              </li>
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="h-4 w-4 text-primary"
                />
                Cultural movements and their origins
              </li>
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="h-4 w-4 text-primary"
                />
                Business innovations and entrepreneurship
              </li>
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="h-4 w-4 text-primary"
                />
                Social innovations and their impact
              </li>
            </ul>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-foreground">
              Our Values
            </h3>
            <p class="text-muted-foreground">
              Authenticity, accuracy, and accessibility guide everything we do. We believe complex stories should be told simply, historical facts should be respected, and every reader should be able to connect with the human elements that drive innovation.
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      title="Meet the Team"
      description="Our diverse team of researchers, writers, and storytellers brings together decades of experience in journalism, history, and innovation studies."
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="text-center space-y-4">
          <div class="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon
              name="i-lucide-user"
              class="h-12 w-12 text-primary"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              Research Team
            </h3>
            <p class="text-sm text-muted-foreground">
              Historians and investigative journalists who dig deep to uncover the real stories behind the headlines.
            </p>
          </div>
        </div>

        <div class="text-center space-y-4">
          <div class="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon
              name="i-lucide-pen-tool"
              class="h-12 w-12 text-primary"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              Writing Team
            </h3>
            <p class="text-sm text-muted-foreground">
              Skilled storytellers who transform complex research into engaging narratives that captivate and inform.
            </p>
          </div>
        </div>

        <div class="text-center space-y-4">
          <div class="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <UIcon
              name="i-lucide-search"
              class="h-12 w-12 text-primary"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              Fact-Checking Team
            </h3>
            <p class="text-sm text-muted-foreground">
              Meticulous verifiers who ensure every detail is accurate and every source is credible.
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Join Our Community"
        description="Be part of a growing community of curious minds exploring the stories that shaped our world."
        variant="subtle"
        :links="[{
          label: 'Subscribe to Updates',
          to: '#',
          trailingIcon: 'i-lucide-arrow-right'
        }, {
          label: 'Follow Us',
          to: '#',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
