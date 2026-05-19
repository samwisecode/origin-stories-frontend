import { Resend } from 'resend'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required')
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, contactFormSchema.parse)

  const resend = new Resend(process.env.VITE_RESEND_API_KEY)
  const adminEmail = process.env.VITE_ADMIN_EMAIL

  if (!adminEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Admin email not configured'
    })
  }

  try {
    await resend.emails.send({
      from: 'Origin Stories Website <onboarding@resend.dev>',
      to: adminEmail,
      subject: `Contact form enquiry from ${body.name}`,
      html: `
        <p>Hi Will,</p>
        <p>You have a new enquiry from the website contact form. Please find their information below:</p>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    })

    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})
