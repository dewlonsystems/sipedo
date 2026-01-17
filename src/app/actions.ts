// src/app/actions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  message?: string;
  success?: boolean;
};

// ✅ Use _prevState to suppress "unused" warning
export async function submitContactForm(
  _prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;
  const location = formData.get('location') as string; // ✅ Added location

  if (!name || !phone || !service) {
    return { message: 'Please fill in all required fields.' };
  }

  try {
    await resend.emails.send({
      from: 'Sipedo Contact <info@sipedo.co.ke>',
      to: 'ontitadmose@gmail.com',
      subject: `New Service Request: ${service}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location || '—'}</p> <!-- ✅ Included in email -->
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || '—'}</p>
      `,
    });
  } catch (error) {
    console.error('📧 Resend error:', error);
    return { message: 'Failed to send. Please try again.' };
  }

  return { success: true };
}