// src/app/components/ContactBar.tsx
import { Phone, Mail } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-primary text-white text-sm py-1.5 px-4 sticky top-0 z-50 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-white" />
          <span>+254 725 398 764</span>
          <Mail size={16} className="text-white" />
          <span>info@sipedo.co.ke</span>
        </div>
        <div className="hidden md:block">
          <span>Serving Nairobi & Surrounding Counties</span>
        </div>
      </div>
    </div>
  );
}