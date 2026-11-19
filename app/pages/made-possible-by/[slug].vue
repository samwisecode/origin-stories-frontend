<script setup lang="ts">
import home from '~~/content/pages/home.json'

const route = useRoute()
const company = madePossibleByCompanies.find(c => c.slug === route.params.slug)

if (!company) {
  throw createError({ statusCode: 404, statusMessage: 'Company not found', fatal: true })
}

useSeoMeta({
  title: `${company.name} - Made Possible By - Origin Stories`,
  description: company.description.replace(/<[^>]+>/g, '')
})

const emptyForm = () => ({ name: '', email: '', phone: '', company: '', message: '', consent: false })
const form = ref(emptyForm())
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

async function submitForm() {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const { consent: _consent, ...fields } = form.value
    await $fetch('/api/emails/sendAdminEmail', {
      method: 'POST',
      body: { ...fields, forCompany: company!.name }
    })
    submitStatus.value = 'success'
    form.value = emptyForm()
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const inputClass
  = 'w-full px-4 py-3 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-light-brown'
</script>

<template>
  <div v-if="company">
    <section class="section-large bg-white">
      <div class="page-container">
        <NuxtLink
          to="/made-possible-by"
          class="inline-block mb-6 border-b-2 border-black pb-1 text-sm font-semibold"
        >
          &larr; Back to Made Possible By
        </NuxtLink>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            class="aspect-[4/3] bg-white border-2 border-black flex items-center justify-center p-10"
          >
            <img
              :src="company.logo"
              :alt="`${company.name} Logo`"
              class="max-w-full max-h-full object-contain"
            />
          </div>

          <div>
            <h1 class="display-lg uppercase text-accent-light-bg mb-6">{{ company.name }}</h1>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="text-lg md:text-xl [&_p]:mb-4" v-html="company.description" />
            <UButton
              v-if="company.url"
              :to="company.url"
              target="_blank"
              rel="noopener"
              class="btn mt-4"
            >
              Visit Website
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section v-if="company.about" class="section-large bg-gray-50">
      <div class="page-container">
        <h2 class="display-md uppercase mb-6">
          About <span class="text-accent-light-bg">{{ company.name }}</span>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="max-w-3xl text-lg md:text-xl [&_p]:mb-4" v-html="company.about" />
      </div>
    </section>

    <section class="section-large bg-black">
      <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 class="display-md uppercase text-white text-center mb-4">
          Get in <span class="text-accent">Touch</span>
        </h2>
        <p class="text-white/80 text-center mb-12 text-lg">
          Send {{ company.name }} a message. Origin Stories will make sure it reaches them.
        </p>

        <form class="space-y-5" @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label>
              <span class="sr-only">Name</span>
              <input v-model="form.name" type="text" required placeholder="Name*" :class="inputClass" />
            </label>
            <label>
              <span class="sr-only">Email</span>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Email*"
                :class="inputClass"
              />
            </label>
            <label>
              <span class="sr-only">Phone</span>
              <input v-model="form.phone" type="tel" placeholder="Phone" :class="inputClass" />
            </label>
            <label>
              <span class="sr-only">Company</span>
              <input v-model="form.company" type="text" placeholder="Company" :class="inputClass" />
            </label>
          </div>

          <label class="block">
            <span class="sr-only">Message</span>
            <textarea
              v-model="form.message"
              required
              rows="5"
              placeholder="Message*"
              :class="inputClass"
            />
          </label>

          <label class="flex items-start gap-3 text-white text-sm">
            <input v-model="form.consent" type="checkbox" required class="mt-0.5 size-5 shrink-0" />
            I agree that Origin Stories may share my details with {{ company.name }} so they can
            reply to me.
          </label>

          <div
            v-if="submitStatus === 'success'"
            role="status"
            class="bg-green-100 border-2 border-green-800 text-green-900 px-4 py-3"
          >
            {{ home.contact.successMessage }}
          </div>

          <div
            v-if="submitStatus === 'error'"
            role="alert"
            class="bg-red-100 border-2 border-red-800 text-red-900 px-4 py-3"
          >
            {{ home.contact.errorMessage }}
          </div>

          <div class="text-center">
            <UButton type="submit" :disabled="isSubmitting" class="btn btn-on-dark">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </UButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
