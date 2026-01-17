// src/app/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // Validation
  if (!name || !phone || !service) {
    return { message: 'Please fill in all required fields.' };
  }

  try {
    // Send email to yourself
    await resend.emails.send({
      from: 'Sipedo Contact Form <info@sipedo.co.ke>', // or verify your domain
      to: 'ontitadmose@gmail.com',
      subject: `New Contact Request: ${service}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || '—'}</p>
        <hr>
        <p><em>Sent from Sipedo Services website</em></p>
      `,
    });

    // Optional: Send auto-reply to customer (if you collect email later)
    // For now, just redirect

  } catch (error) {
    console.error('📧 Resend error:', error);
    return { message: 'Failed to send message. Please try again.' };
  }

  // Redirect on success
  redirect('/contact?success=true');
}