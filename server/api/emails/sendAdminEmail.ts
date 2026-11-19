import { Resend } from 'resend'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  // Set by Made Possible By detail pages: the company the message is for
  forCompany: z.string().optional()
})

const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
}

// Form values are untrusted, so escape them before putting them in the email HTML
const escapeHtml = (value = '') => value.replace(/[&<>"']/g, char => htmlEntities[char]!)

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, contactFormSchema.parse)
  const safe = {
    name: escapeHtml(body.name),
    email: escapeHtml(body.email),
    phone: escapeHtml(body.phone),
    company: escapeHtml(body.company),
    message: escapeHtml(body.message),
    forCompany: escapeHtml(body.forCompany)
  }

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
      subject: body.forCompany
        ? `Message for ${body.forCompany} from ${body.name}`
        : `Contact form enquiry from ${body.name}`,
      html: `
        <p>Hi Will,</p>
        ${body.forCompany
          ? `<p>You have a new message for <strong>${safe.forCompany}</strong> from their Made Possible By page. The sender agreed to their details being shared with ${safe.forCompany}. Please find their information below:</p>`
          : `<p>You have a new enquiry from the website contact form. Please find their information below:</p>`}
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
        ${body.phone ? `<p><strong>Phone:</strong> ${safe.phone}</p>` : ''}
        ${body.company ? `<p><strong>Company:</strong> ${safe.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safe.message.replace(/\n/g, '<br>')}</p>
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
