// src/app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

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
  const [cleaningOpen, setCleaningOpen] = useState(false);
  const [pestOpen, setPestOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setCleaningOpen(false);
    setPestOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={closeMenu}
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
            <Link href="/" onClick={closeMenu} className="inline-block">
              <img
                src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/8ea9c6d15b62f2a8f1e16d600bdf8181654d1818/sipedoNew.png"
                alt="Sipedo Services"
                className="h-8 w-auto"
              />
            </Link>
            <button onClick={closeMenu} className="text-gray-600">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="py-3 px-2 font-medium text-gray-800 hover:text-primary rounded"
              onClick={closeMenu}
            >
              Home
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-2 font-medium text-gray-800 hover:text-primary rounded"
                onClick={() => setCleaningOpen(!cleaningOpen)}
              >
                <span>Cleaning Services</span>
                {cleaningOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {cleaningOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {cleaningServices.map((service) => (
                    <Link
                      key={service}
                      href={`/cleaning/${service}`}
                      className="block py-2 px-2 text-gray-600 hover:text-primary rounded"
                      onClick={closeMenu}
                    >
                      {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex justify-between items-center py-3 px-2 font-medium text-gray-800 hover:text-primary rounded"
                onClick={() => setPestOpen(!pestOpen)}
              >
                <span>Pest Control</span>
                {pestOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {pestOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {pestControlServices.map((service) => (
                    <Link
                      key={service}
                      href={`/pest-control/${service}`}
                      className="block py-2 px-2 text-gray-600 hover:text-primary rounded"
                      onClick={closeMenu}
                    >
                      {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="py-3 px-2 font-medium text-gray-800 hover:text-primary rounded"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="py-3 px-2 font-medium text-gray-800 hover:text-primary rounded"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header 
        className="bg-white shadow-sm sticky z-40"
        style={{ top: 'var(--contact-bar-height)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Desktop */}
            <Link href="/" className="inline-block">
              <img
                src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/8ea9c6d15b62f2a8f1e16d600bdf8181654d1818/sipedoNew.png"
                alt="Sipedo Services"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="font-medium hover:text-primary transition">Home</Link>

              <div className="relative group">
                <button className="font-medium hover:text-primary transition flex items-center gap-1">
                  Cleaning Services
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block z-50">
                  {cleaningServices.map((service) => (
                    <Link
                      key={service}
                      href={`/cleaning/${service}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="font-medium hover:text-primary transition flex items-center gap-1">
                  Pest Control
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block z-50">
                  {pestControlServices.map((service) => (
                    <Link
                      key={service}
                      href={`/pest-control/${service}`}
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