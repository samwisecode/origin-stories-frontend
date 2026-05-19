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

  const resend = new Resend(process.env.RESEND_API_KEY)
  const adminEmail = process.env.ADMIN_EMAIL

  if (!adminEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Admin email not configured'
    })
  }

  try {
    const result = await resend.emails.send({
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

    console.log('Resend API response:', JSON.stringify(result, null, 2))

    if (result.error) {
      console.error('Resend error:', result.error)
      throw createError({
        statusCode: 500,
        statusMessage: result.error.message || 'Failed to send email'
      })
    }

    return { success: true, message: 'Email sent successfully', data: result.data }
  } catch (error) {
    console.error('Email send error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : 'Failed to send email'
    })
  }
})
