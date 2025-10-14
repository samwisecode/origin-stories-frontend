<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('')
const email = ref<string>('')
const phone = ref<string>('')
const company = ref<string>('')

async function submitForm() {
  await fetch('/api/emails/sendAdminEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value
    })
  })
}
</script>

<template>
  <div>
    <UCard class="shadow-lg">
      <h3 class="text-lg font-bold font-proxima">Become a Sponsor</h3>
      <UFormField label="Full Name" required class="my-4">
        <UInput v-model="name" placeholder="Full Name" class="w-full" />
      </UFormField>
      <UFormField label="Email" required class="my-4">
        <UInput v-model="email" placeholder="name@example.com" type="email" class="w-full" />
      </UFormField>
      <UFormField label="Company" required class="my-4">
        <UInput v-model="phone" placeholder="081 123 4567" class="w-full" />
      </UFormField>
      <UFormField label="Company" required class="my-4">
        <UInput v-model="company" placeholder="Full Name" class="w-full" />
      </UFormField>
      <div class="flex gap-2 justify-start">
        <UButton class="cursor-pointer" @click="submitForm"> Send Message </UButton>
      </div>
    </UCard>
  </div>
</template>
