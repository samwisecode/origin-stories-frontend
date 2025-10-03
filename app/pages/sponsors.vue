<!-- eslint-disable @stylistic/quotes -->
<script setup>
useSeoMeta({
  title: 'Sponsors - Origin Stories',
  description:
    "Meet the organizations and individuals who support Origin Stories' mission to uncover the stories behind innovation."
})

// const sponsors = {
//   platinum: [
//     {
//       name: 'TechForward Foundation',
//       logo: 'i-lucide-building-2',
//       description: 'Supporting digital innovation storytelling',
//       website: '#'
//     },
//     {
//       name: 'Innovation Institute',
//       logo: 'i-lucide-lightbulb',
//       description: 'Advancing research in innovation history',
//       website: '#'
//     }
//   ],
//   gold: [
//     {
//       name: 'Future Labs',
//       logo: 'i-lucide-rocket',
//       description: "Pioneering tomorrow's technologies",
//       website: '#'
//     },
//     {
//       name: 'Discovery Media Group',
//       logo: 'i-lucide-tv',
//       description: 'Bringing stories to global audiences',
//       website: '#'
//     },
//     {
//       name: 'Heritage Research Center',
//       logo: 'i-lucide-book',
//       description: 'Preserving innovation heritage',
//       website: '#'
//     }
//   ],
//   silver: [
//     {
//       name: 'StartupStory Co.',
//       logo: 'i-lucide-trending-up',
//       description: 'Documenting entrepreneurial journeys',
//       website: '#'
//     },
//     {
//       name: 'Digital Archives Inc.',
//       logo: 'i-lucide-database',
//       description: 'Digitizing historical records',
//       website: '#'
//     },
//     {
//       name: 'Creative Minds Network',
//       logo: 'i-lucide-users',
//       description: 'Connecting innovators worldwide',
//       website: '#'
//     },
//     {
//       name: 'Research Partners LLC',
//       logo: 'i-lucide-microscope',
//       description: 'Supporting investigative research',
//       website: '#'
//     }
//   ]
// }
</script>

<template>
  <div>
    <!-- Dramatic Hero Section -->
    <section class="section-massive bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center">
          <h1 class="display-xl mb-16">
            Our
            <br />
            <span class="text-accent">Sponsors</span>
          </h1>
          <p class="text-hero mx-auto mb-12">
            Origin Stories is made possible through the generous support of African organizations
            and individuals who believe in the power of storytelling to inspire innovation.
          </p>
        </div>
      </div>
    </section>

    <section class="section-large bg-white container mx-auto">
      <div class="sponsor">
        <div>
          <img
            src="../assets/images/silicon-overdrive.png"
            alt="Silicon Overdrive Logo"
            class="w-full max-w-64 h-full object-contain"
          />
        </div>
        <div class="space-y-4 border-b-1 border-slate-200 pb-8 mb-16">
          <h2 class="text-2xl font-bold mt-8 mb-2">Silicon Overdrive</h2>
          <p class="text-xl mb-4">
            Founded in 1995 by a team driven by innovation, Silicon Overdrive has built a
            three-decade-long journey out of transforming how businesses experience technology. They
            understand the importance of longevity and relentless growth. Headquartered in Cape
            Town, with reach across Nairobi, Dublin, and London, they mirror the globally ambitious
            spirit of the founders we feature.
          </p>
          <p class="text-xl mb-4">
            As a premier partner for AWS and Microsoft, they are deeply embedded in the tech
            infrastructure that scales innovation. They partner with us because they believe in
            celebrating the people behind the successful solutions; the entrepreneurs who overcome
            the complex challenges of scaling an African business. They are the essential foundation
            that propels our content to the world.
          </p>
        </div>
      </div>
      <div class="sponsor">
        <div>
          <img
            src="../assets/images/Von-Seidels.png"
            alt="Von Seidels Logo"
            class="w-full max-w-64 h-full object-contain"
          />
        </div>
        <div class="space-y-4 pb-8 mb-8">
          <h2 class="text-2xl font-bold mt-8 mb-2">Von Seidels</h2>
          <p class="text-xl mb-4">
            Von Seidels is a specialist Intellectual Property law firm committed to protecting and
            enforcing IP rights <strong>throughout Africa</strong>. With a head office in Cape Town
            and a wide network including dedicated offices for filing directly in regional bodies
            like ARIPO and OAPI, they bring decades of technical expertise and experience in complex
            IP law. They are ISO 9001 certified for service quality, embodying a commitment to
            excellence.
          </p>
          <p class="text-xl mb-4">
            In an ecosystem where a founder's unique idea is their most valuable asset, Von Seidels
            advocates the
            <strong>security and integrity of that initial, sacrificial moment of innovation</strong
            >. They understand that a founder's story begins with an original insight. By developing
            and implementing tailored IP strategies, they provide the crucial legal backbone that
            allows African ventures to grow with confidence and protect their origin.
          </p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-large bg-gray-100">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="display-md mb-8">
          Support Innovation
          <br />
          Storytelling
        </h2>
        <p class="text-hero mb-12">
          Join our mission to preserve and share the stories that inspire the next generation of
          innovators.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="btn-primary">Become a Sponsor</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  </div>
</template>
