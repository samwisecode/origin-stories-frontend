<script setup lang="ts">
import home from '~~/content/pages/home.json'

// Contact form on company detail pages. Messages go to the admin, who passes them on.
const props = defineProps<{ companyName: string }>()

const emptyForm = () => ({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  consent: false
})
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
      body: { ...fields, forCompany: props.companyName }
    })
    submitStatus.value = 'success'
    form.value = emptyForm()
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const inputClass =
  'w-full px-4 py-3 bg-white text-black border border-black/20 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-light-brown'
</script>

<template>
  <section class="section-large bg-gray-100">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <h2 class="display-md uppercase text-black text-center mb-4">
        Get in <span class="text-accent-light-bg">Touch</span>
      </h2>
      <p class="text-black/80 text-center mb-12 text-lg">
        Send {{ companyName }} a message. Origin Stories will make sure it reaches them.
      </p>

      <form class="space-y-5" @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label>
            <span class="sr-only">Name</span>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Name*"
              :class="inputClass"
            />
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

        <label class="flex items-start gap-3 text-black text-sm">
          <input v-model="form.consent" type="checkbox" required class="mt-0.5 size-5 shrink-0" />
          I agree that Origin Stories may share my details with {{ companyName }} so they can reply
          to me.
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

        <div class="text-left">
          <UButton type="submit" :disabled="isSubmitting" class="btn w-full">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </UButton>
        </div>
      </form>
    </div>
  </section>
</template>
