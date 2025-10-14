<template>
  <!-- Final CTA -->
  <section class="section-large bg-gray-50">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="display-md mb-8">Amplify African Origin Stories</h2>
      <p class="text-hero mb-12">Submit Your Story. Support Us. Share the Stories.</p>
      <div class="flex flex-col justify-center pb-10 sm:flex-row gap-4">
        <UButton
          class="btn-primary bg-[#c59640] text-black border-2 border-black hover:bg-black hover:text-white"
          to="https://www.quicket.co.za/events/339332-origin-stories/#/"
          target="_blank"
          >Get Your Ticket</UButton
        >
      </div>
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <div>
          <UButton
            to="/partners"
            target="_blank"
            class="flex justify-center btn-menu bg-white text-black border-2 border-black hover:bg-black hover:text-white min-w-44"
          >
            Become a Partner
          </UButton>
        </div>
        <div>
          <UButton
            to="/"
            target="_blank"
            class="flex justify-center btn-menu bg-white text-black border-2 border-black hover:bg-black hover:text-white min-w-44"
          >
            Connect
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
