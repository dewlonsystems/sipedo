// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ContactBar from '@/app/components/ContactBar';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Sipedo Services | Professional Cleaning & Pest Control in Nairobi',
  description: 'Top-rated cleaning services company in Nairobi offering sofa, carpet, office cleaning and bedbug, cockroach, termite pest control near you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContactBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}