// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Auto-rotating testimonials hook
function useAutoRotateTestimonials(testimonials: any[], interval = 6000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return { currentIndex };
}

export default function HomePage() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "James M.",
      location: "Westlands, Nairobi",
      text: "Sipedo transformed our office after a messy renovation. Their post-construction cleaning was thorough and fast. Highly recommend!"
    },
    {
      id: 2,
      name: "Amina K.",
      location: "Karen, Nairobi",
      text: "Had a terrible bedbug infestation. Sipedo responded within hours and completely eradicated them. Professional and discreet service."
    },
    {
      id: 3,
      name: "David O.",
      location: "Thika",
      text: "Their sofa and carpet cleaning brought our living room back to life! Friendly team and fair pricing."
    }
  ];

  const { currentIndex } = useAutoRotateTestimonials(testimonials);

  // FAQ data
  const faqs = [
    {
      question: "Do you serve areas outside Nairobi?",
      answer: "Yes! We cover Nairobi County and surrounding areas including Kiambu, Kajiado, Machakos, and Thika."
    },
    {
      question: "How quickly can you respond to a pest emergency?",
      answer: "For urgent pest control issues like bedbugs or rodents, we offer same-day service in most parts of Nairobi."
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer: "Absolutely. We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets."
    },
    {
      question: "Do you provide invoices and receipts?",
      answer: "Yes, we provide official receipts and can issue tax-compliant invoices upon request."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Blog preview data
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Need Professional Pest Control",
      excerpt: "Don’t ignore these early warning signs of a pest infestation in your home or business.",
      slug: "signs-you-need-pest-control"
    },
    {
      id: 2,
      title: "Why Post-Construction Cleaning Is Essential",
      excerpt: "Dust and debris after building can harm your health. Here’s why professional cleanup matters.",
      slug: "post-construction-cleaning-essential"
    }
  ];

  return (
    <>
      {/* Hero Section — FIXED TO SHOW IMAGE CLEARLY */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/b14dc739328e0746a45ea4850b99000103b7e428/pexels-matilda-wormwood-4098786.jpg"
            alt="Sipedo Services - Professional Cleaning & Pest Control in Nairobi"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Light grey overlay — subtle and professional */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Cleaning & Pest Control in Nairobi
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Trusted by hundreds of homes and businesses across Nairobi for deep cleaning, sofa care, bedbug removal, and more.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              Sipedo Services is Nairobi’s leading provider of professional cleaning and pest control solutions. 
              Since our founding, we’ve built a reputation for reliability, attention to detail, and customer-first service.
            </p>
            <p className="text-lg text-gray-700">
              Whether you need deep cleaning after construction, regular office maintenance, or emergency pest control, 
              our certified technicians deliver exceptional results every time. We proudly serve residential and commercial clients 
              across Nairobi, Kiambu, Kajiado, and beyond.
            </p>
          </div>
          <div>
            <img 
              src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/b14dc739328e0746a45ea4850b99000103b7e428/pexels-matilda-wormwood-4098786.jpg" 
              alt="Sipedo cleaning team at work" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/75ebdc334f6f5683d3df4c16e0eaede76fa09a17/images.jpg" 
              alt="Professional pest control service" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-primary mb-6">What We Do</h2>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in two core areas: comprehensive cleaning services and effective pest control. 
              Our teams are trained, insured, and equipped with industry-leading tools and eco-friendly products.
            </p>
            <p className="text-lg text-gray-700">
              From removing stubborn stains on carpets to eliminating termites and rodents, 
              we handle it all with precision and care. Every job comes with a satisfaction guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-bg p-6 rounded-lg shadow-sm">
              <img 
                src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/5f3edb8ec24efe3c9d540a713b2ea335e8e63b91/pexels-tima-miroshnichenko-6195104.jpg" 
                alt="Carpet cleaning" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Carpet & Upholstery Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">
                Deep cleaning for carpets, sofas, and mattresses using steam and eco-friendly solutions.
              </p>
              <Link href="/cleaning/carpet-cleaning" className="text-primary font-medium hover:underline">
                See More →
              </Link>
            </div>

            <div className="bg-gray-bg p-6 rounded-lg shadow-sm">
              <img 
                src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg" 
                alt="Office cleaning" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Office Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">
                Daily, weekly, or one-time cleaning for offices of all sizes in Nairobi.
              </p>
              <Link href="/cleaning/office-cleaning" className="text-primary font-medium hover:underline">
                See More →
              </Link>
            </div>

            <div className="bg-gray-bg p-6 rounded-lg shadow-sm">
              <img 
                src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/fumigation.jpg" 
                alt="Pest control" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Bedbug & Pest Control</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast, effective treatment for bedbugs, cockroaches, termites, and more.
              </p>
              <Link href="/pest-control/bedbugs" className="text-primary font-medium hover:underline">
                See More →
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Where We Offer Services</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We proudly serve Nairobi and surrounding counties with reliable, affordable cleaning and pest control.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Nairobi', 'Kiambu', 'Kajiado', 'Machakos', 'Thika', 'Ruiru', 'Kitengela'].map((area) => (
              <span 
                key={area} 
                className="bg-primary px-4 py-2 rounded-full font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Past Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/our%20wo.jpg',
              'https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/fumi.jpg',
              'https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/our%205.jpg',
              'https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/our%204.jpg',
              'https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/our%203.jpg',
              'https://raw.githubusercontent.com/dewlonsystems/sipedopics/526dac887b573e38a17b7c03620eff41ca1d330c/mattress.jpg'
            ].map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <p className="text-lg italic text-gray-700 mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-bold text-primary">
              — {testimonials[currentIndex].name}, {testimonials[currentIndex].location}
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-primary ml-4">{openFaq === index ? '▲' : '▼'}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Tips & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-primary font-medium hover:underline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Spotless Cleanliness?</h2>
          <p className="text-xl mb-8">
            Get a free, no-obligation quote today. Serving Nairobi and surrounding areas.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}