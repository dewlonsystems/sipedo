// src/app/components/ContactBar.tsx
export default function ContactBar() {
  return (
    <div className="bg-primary text-white text-sm py-1.5 px-4 sticky top-0 z-50 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span>📞 +254 700 000 000</span>
          <span>✉️ info@sipedo.co.ke</span>
        </div>
        <div className="hidden md:block">
          <span>Serving Nairobi & Surrounding Counties</span>
        </div>
      </div>
    </div>
  );
}