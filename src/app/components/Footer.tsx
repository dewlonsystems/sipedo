// src/app/components/Footer.tsx
import Link from 'next/link';

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
            <p className="text-gray-300">
              📞 +254 700 000 000<br />
              ✉️ info@sipedo.co.ke
            </p>
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

          {/* Cleaning Services */}
          <div>
            <h4 className="font-semibold mb-4">Cleaning Services</h4>
            <ul className="space-y-2 text-gray-300">
              {['sofa', 'office', 'carpet', 'mattress', 'car interior', 'post construction', 'laundry'].map((s) => (
                <li key={s}>
                  <Link 
                    href={`/cleaning/${s.replace(/\s+/g, '-')}-cleaning`} 
                    className="hover:text-primary transition capitalize"
                  >
                    {s} cleaning
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pest Control Services */}
          <div>
            <h4 className="font-semibold mb-4">Pest Control</h4>
            <ul className="space-y-2 text-gray-300">
              {['bedbugs', 'cockroaches', 'mosquitoes', 'fleas', 'termites', 'rats'].map((p) => (
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