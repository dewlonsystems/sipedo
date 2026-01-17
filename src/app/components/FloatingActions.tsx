// src/app/components/FloatingActions.tsx
'use client';

import { useState } from 'react';
import { MessageCircle, Mail, Plus, X } from 'lucide-react';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 md:bottom-8 md:right-8">
      {/* WhatsApp Button */}
      {isOpen && (
        <a
          href="https://wa.me/254725398764"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all transform translate-y-0 opacity-100 animate-fade-in-up"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      )}

      {/* SMS Button */}
      {isOpen && (
        <a
          href="sms:+254725398764"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all transform translate-y-0 opacity-100 animate-fade-in-up"
          aria-label="Send SMS"
        >
          <Mail size={20} />
        </a>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label={isOpen ? "Close actions" : "Open actions"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </button>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}