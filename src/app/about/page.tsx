// src/app/about/page.tsx
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578021424-3f1d6020b775?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sipedo Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Nairobi’s trusted partner for professional cleaning and pest control since day one.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Sipedo Services was founded with a simple mission: to deliver exceptional cleaning and pest control solutions that make homes and businesses healthier, cleaner, and more comfortable.
              </p>
              <p className="text-lg text-gray-700">
                Today, we serve hundreds of satisfied clients across Nairobi, Kiambu, Kajiado, and Thika — from busy families and Airbnb hosts to corporate offices and restaurants.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600879995428-7e8a8c6b5a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sipedo team at work" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Service Areas</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
              We proudly provide reliable, affordable services across Nairobi County and surrounding regions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Nairobi', 'Westlands', 'Karen', 'Lang’ata', 'Kiambu', 'Thika', 'Ruiru', 'Kajiado', 'Machakos'].map((area) => (
                <span key={area} className="bg-primary text-white px-4 py-2 rounded-full font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">How We Work</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>Free Quote:</strong> Tell us your needs, get a transparent price.</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>Trained Team:</strong> Certified, insured, and uniformed professionals.</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>Eco-Friendly:</strong> Safe products for your family and pets.</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span><strong>100% Satisfaction:</strong> We don’t leave until you’re happy.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Phone:</strong> +254 700 000 000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Email:</strong> info@sipedo.co.ke</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Hours:</strong> Mon–Sat, 7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gray-700 flex-shrink-0" />
                  <span><strong>Based in:</strong> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-bg p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <p className="text-gray-600 mb-4">We serve your area! Here’s a general location map.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.803720305341!2d36.82221227493811!3d-1.2833333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f115e1d1e1e1d%3A0x1e1d1e1d1e1d1e1d!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sipedo Services Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}