// import { Resend } from 'resend'

// export default defineEventHandler(async (event) => {
//   const body = await readValidatedBody(event, contactFormUserSchema.parse)

//   console.log(body)

//   const resend = new Resend(process.env.SAM_RESEND_API_KEY)
//   const adminEmail = process.env.ADMIN_EMAIL

//   await resend.emails.send({
//     from: 'BK Capital Website <onboarding@resend.dev>',
//     to: `${adminEmail}`,
//     subject: `Sponsorship enquiry from ${body.name}`,
//     html: `
//       <p>Hi Will,</p>
//       <p>A prospective sponsor has entered their details in the website contact form. Please find their information below:</p>
//       <p>Name: ${body.name}</p>
//       <p>Email: <a href="mailto:${body.email}">${body.email}</a></p>
//       <p>Phone: ${body.phone}</p>
//       <p>Company: ${body.company}</p>
//     `
//   })
// })
