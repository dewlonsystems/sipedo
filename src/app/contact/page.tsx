// src/app/contact/page.tsx
'use client';

import { useActionState } from 'react'; // Fixed: renamed from useFormState
import { submitContactForm, FormState } from '@/app/actions';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

// ✅ Accept state as FormState | null
function SuccessMessage({ state }: { state: FormState | null }) {
  if (state?.success) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8 text-center">
        Thank you! We'll call you within 1 hour.
      </div>
    );
  }
  if (state?.message) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8">
        {state.message}
      </div>
    );
  }
  return null;
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get a free quote or ask us anything. We respond within 1 hour during business hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SuccessMessage state={state} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Call Us:</strong> +254 725 398 764</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Email:</strong> info@sipedo.co.ke</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Hours:</strong> Monday–Saturday, 7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Service Area:</strong> Kilimani, Kileleshwa, Lavington, Rongai, Eastleigh, South B, South C, Katani, Athi River, Kitengela & more</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-3">Emergency Pest Control?</h4>
                <p className="text-gray-700">
                  Call directly for same-day bedbug, rat, or cockroach emergencies.
                </p>
              </div>
            </div>

            {/* Contact Form — WITH LOCATION FIELD */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
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
                  <label htmlFor="location" className="block text-gray-700 mb-1">Location (Optional)</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="e.g., Kilimani, Rongai, Kitengela..."
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
                  className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition transform hover:scale-[1.02]"
                >
                  Request a Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}