// src/app/cleaning/page.tsx
import Link from 'next/link';

// Define cleaning services data
const cleaningServices = [
  {
    id: 'sofa-cleaning',
    title: 'Sofa Cleaning',
    description: 'Deep cleaning for fabric and leather sofas using eco-friendly solutions that remove stains, odors, and allergens.',
    image: 'https://images.unsplash.com/photo-1600879995428-7e8a8c6b5a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Daily, weekly, or one-time professional cleaning for offices of all sizes across Nairobi.',
    image: 'https://images.unsplash.com/photo-1581578021424-3f1d6020b775?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description: 'Steam and dry cleaning methods to restore carpets to like-new condition, removing dirt, bacteria, and odors.',
    image: 'https://images.unsplash.com/photo-1611080626721-8ec568568fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mattress-cleaning',
    title: 'Mattress Cleaning',
    description: 'Hygienic deep cleaning to eliminate dust mites, sweat, and allergens from your mattress for better sleep health.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'car-interior',
    title: 'Car Interior Cleaning',
    description: 'Professional detailing of car seats, mats, dashboards, and upholstery to restore freshness and cleanliness.',
    image: 'https://images.unsplash.com/photo-1553928980-2e043e5e9d0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    description: 'Thorough cleanup after building or renovation — removing dust, debris, paint splatters, and more.',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laundry-dry-cleaning',
    title: 'Laundry & Dry Cleaning',
    description: 'Convenient pickup and delivery of laundry and dry cleaning services for homes and businesses in Nairobi.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function CleaningServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611080626721-8ec568568fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cleaning Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional, reliable, and affordable cleaning solutions for homes and businesses in Nairobi.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            At Sipedo Services, we understand that a clean space is a healthy, productive, and welcoming space. 
            That’s why we offer a full range of cleaning services tailored to your needs — from routine office maintenance 
            to deep post-renovation cleanup. All our technicians are trained, insured, and use eco-friendly products 
            safe for your family, pets, and environment.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServices.map((service) => (
              <div key={service.id} className="bg-gray-bg rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <Link 
                    href={`/cleaning/${service.id}`} 
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    See More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need Cleaning Services in Nairobi?</h2>
          <p className="text-xl mb-8">
            Get a free, no-obligation quote within minutes. Serving all Nairobi counties and beyond.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}