// src/app/components/Footer.tsx
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sipedo Services</h3>
            <p className="text-gray-300 mb-4">
              Professional cleaning & pest control services across Nairobi and surrounding counties.
            </p>
            <div className="flex flex-col gap-1 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+254 725 398 764</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@sipedo.co.ke</span>
              </div>
            </div>               
          </div>                 

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">All Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Cleaning Services — UPDATED */}
          <div>
            <h4 className="font-semibold mb-4">Cleaning Services</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: 'Sofa', slug: 'sofa-cleaning' },
                { name: 'Office', slug: 'office-cleaning' },
                { name: 'Carpet', slug: 'carpet-cleaning' },
                { name: 'Mattress', slug: 'mattress-cleaning' },
                { name: 'Car Interior', slug: 'car-interior' },
                { name: 'Post Construction', slug: 'post-construction' },
                { name: 'Laundry & Dry Cleaning', slug: 'laundry-dry-cleaning' },
                { name: 'Curtains Cleaning', slug: 'curtains-cleaning' },
                { name: 'Cabros Cleaning', slug: 'cabros-cleaning' },
                { name: 'Move In/Out Cleaning', slug: 'move-in-out-cleaning' },
                { name: 'Wooden Floor Polishing', slug: 'wooden-floor-polishing' }
              ].map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/cleaning/${service.slug}`} 
                    className="hover:text-primary transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pest Control Services — UPDATED */}
          <div>
            <h4 className="font-semibold mb-4">Pest Control</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                'bedbugs',
                'cockroaches',
                'mosquitoes',
                'fleas',
                'termites',
                'rats',
                'snakes',
                'bats',
                'bees'
              ].map((p) => (
                <li key={p}>
                  <Link 
                    href={`/pest-control/${p}`} 
                    className="hover:text-primary transition capitalize"
                  >
                    {p} control
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sipedo Services. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}