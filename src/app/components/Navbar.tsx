// src/app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const cleaningServices = [
  'sofa-cleaning',
  'office-cleaning',
  'carpet-cleaning',
  'mattress-cleaning',
  'car-interior',
  'post-construction',
  'laundry-dry-cleaning',
];

const pestControlServices = [
  'bedbugs',
  'cockroaches',
  'mosquitoes',
  'fleas',
  'termites',
  'rats',
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
              Sipedo
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-600">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link href="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            {/* Cleaning Services Dropdown */}
            <div>
              <span className="font-medium">Cleaning Services</span>
              <div className="ml-3 mt-2 space-y-2">
                {cleaningServices.map((service) => (
                  <Link
                    key={service}
                    href={`/cleaning/${service.replace(/\s+/g, '-')}`}
                    className="block py-1 text-gray-600 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pest Control Dropdown */}
            <div>
              <span className="font-medium">Pest Control</span>
              <div className="ml-3 mt-2 space-y-2">
                {pestControlServices.map((service) => (
                  <Link
                    key={service}
                    href={`/pest-control/${service.replace(/\s+/g, '-')}`}
                    className="block py-1 text-gray-600 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header className="bg-white shadow-sm sticky top-8 z-40 lg:top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-primary">
              Sipedo
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="font-medium hover:text-primary transition">Home</Link>

              {/* Cleaning Services Dropdown */}
              <div className="relative group">
                <button className="font-medium hover:text-primary transition flex items-center gap-1">
                  Cleaning Services
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block z-50">
                  {cleaningServices.map((service) => (
                    <Link
                      key={service}
                      href={`/cleaning/${service.replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pest Control Dropdown */}
              <div className="relative group">
                <button className="font-medium hover:text-primary transition flex items-center gap-1">
                  Pest Control
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block z-50">
                  {pestControlServices.map((service) => (
                    <Link
                      key={service}
                      href={`/pest-control/${service.replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="font-medium hover:text-primary transition">About</Link>
              <Link href="/contact" className="font-medium hover:text-primary transition">Contact</Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}