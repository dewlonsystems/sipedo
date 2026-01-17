// src/app/contact/page.tsx
'use client';

import { useFormState } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Optional: show success message
function SuccessMessage() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  
  useEffect(() => {
    if (success) {
      window.scrollTo(0, 0);
    }
  }, [success]);

  if (success) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
        Thank you! We'll call you within 1 hour.
      </div>
    );
  }
  return null;
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get a free quote or ask us anything. We respond within 1 hour during business hours.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SuccessMessage />
          {state?.message && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
              {state.message}
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-700">
              <p>📞 <strong>Call Us:</strong> +254 700 000 000</p>
              <p>✉️ <strong>Email:</strong> info@sipedo.co.ke</p>
              <p>🕒 <strong>Hours:</strong> Monday–Saturday, 7:00 AM – 6:00 PM</p>
              <p>📍 <strong>Service Area:</strong> Nairobi, Kiambu, Kajiado, Thika</p>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-3">Emergency Pest Control?</h4>
              <p className="text-gray-700">
                Call directly for same-day bedbug, rat, or cockroach emergencies.
              </p>
            </div>
          </div>

          {/* Working Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form action={formAction} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="+254 7XX XXX XXX"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-1">Service Needed *</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                >
                  <option value="">Select a service</option>
                  <optgroup label="Cleaning Services">
                    <option value="sofa cleaning">Sofa Cleaning</option>
                    <option value="carpet cleaning">Carpet Cleaning</option>
                    <option value="office cleaning">Office Cleaning</option>
                    <option value="mattress cleaning">Mattress Cleaning</option>
                    <option value="car interior">Car Interior</option>
                    <option value="post construction">Post-Construction</option>
                    <option value="laundry">Laundry & Dry Cleaning</option>
                  </optgroup>
                  <optgroup label="Pest Control">
                    <option value="bedbugs">Bedbugs</option>
                    <option value="cockroaches">Cockroaches</option>
                    <option value="mosquitoes">Mosquitoes</option>
                    <option value="fleas">Fleas</option>
                    <option value="termites">Termites</option>
                    <option value="rats">Rats</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message (Optional)</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={3} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
              >
                Request a Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}