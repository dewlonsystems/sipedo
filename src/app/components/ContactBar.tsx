// src/app/components/ContactBar.tsx
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactBar() {
  return (
    <div className="bg-primary text-white text-sm py-2.5 px-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: all in one line */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white" />
              <span>+254 725 398 764</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white" />
              <span>info@sipedo.co.ke</span>
            </div>
          </div>
          <Link 
            href="https://wa.me/254725398764" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full transition"
          >
            <MessageCircle size={16} className="text-white" />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>

        {/* Mobile: stack contact info, then WhatsApp below */}
        <div className="md:hidden space-y-2">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white" />
              <span>+254 725 398 764</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white" />
              <span>info@sipedo.co.ke</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Link 
              href="https://wa.me/254725398764" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-full transition text-white"
            >
              <MessageCircle size={18} className="text-white" />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}