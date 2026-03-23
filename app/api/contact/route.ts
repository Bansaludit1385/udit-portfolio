// import { NextRequest, NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// // Configure nodemailer with your email service
// const emailUser = process.env.EMAIL_USER || process.env.EMAIL_USERNAME;
// const emailPass = process.env.EMAIL_PASSWORD;

// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE || 'gmail',
//   auth: {
//     user: emailUser,
//     pass: emailPass
//   }
// });

// async function sendEmail(data: any) {
//   const mailOptions = {
//     from: data.email,
//     to: emailUser,
//     subject: data.subject,
//     text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
//     html: `
//       <h3>New Contact Message</h3>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Subject:</strong> ${data.subject}</p>
//       <p><strong>Message:</strong> ${data.message}</p>
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return false;
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { name, email, subject, message } = body

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json({
//         success: false,
//         error: 'Name, email, and message are required'
//       }, { status: 400 })
//     }

//     // Send email (real implementation)
//     const emailSent = await sendEmail({
//       name,
//       email,
//       subject: subject || 'New contact from portfolio',
//       message
//     })

//     if (emailSent) {
//       return NextResponse.json({
//         success: true,
//         message: 'Your message has been sent successfully!'
//       })
//     } else {
//       throw new Error('Failed to send email')
//     }
//   } catch (error) {
//     console.error('Error in contact API route:', error)
//     return NextResponse.json({
//       success: false,
//       error: 'Failed to send message. Please try again later.'
//     }, { status: 500 })
//   }
// }

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const emailUser = process.env.EMAIL_USER || process.env.EMAIL_USERNAME
const emailPass = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
})

type ContactFormData = {
  name: string
  email: string
  subject?: string
  message: string
}

async function sendEmail(data: ContactFormData) {
  const mailOptions = {
    // IMPORTANT: use your own gmail as sender for better delivery
    from: `"Portfolio Contact Form" <${emailUser}>`,
    to: emailUser,
    replyTo: data.email, // so you can directly reply to the sender
    subject: data.subject || 'New contact from portfolio',
    text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject || 'New contact from portfolio'}\nMessage: ${data.message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Message from Portfolio</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || 'New contact from portfolio'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${data.message}</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured properly.',
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, email, and message are required',
        },
        { status: 400 }
      )
    }

    // Optional email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a valid email address',
        },
        { status: 400 }
      )
    }

    const emailSent = await sendEmail({
      name,
      email,
      subject: subject || 'New contact from portfolio',
      message,
    })

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully!',
      })
    }

    throw new Error('Failed to send email')
  } catch (error) {
    console.error('Error in contact API route:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    )
  }
}