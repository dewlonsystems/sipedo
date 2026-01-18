// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ContactBar from '@/app/components/ContactBar';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FloatingActions from '@/app/components/FloatingActions';

// 👇 Add this
export const metadata: Metadata = {
  title: 'Sipedo Services | Professional Cleaning & Pest Control in Nairobi',
  description: 'Top-rated cleaning services company in Nairobi offering sofa, carpet, office cleaning and bedbug, cockroach, termite pest control near you.',
  
  // Favicon (optional but recommended)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Open Graph (for social sharing & Google rich previews)
  openGraph: {
    title: 'Sipedo Services | Cleaning & Pest Control in Nairobi',
    description: 'Professional, affordable cleaning and pest control services across Nairobi, Kiambu, and Thika. Same-day service available!',
    url: 'https://www.sipedo.co.ke', // 👈 Update after deployment
    siteName: 'Sipedo Services',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/8ea9c6d15b62f2a8f1e16d600bdf8181654d1818/sipedoNew.png',
        width: 1200,
        height: 630,
        alt: 'Sipedo Services Logo',
      },
    ],
  },

  // Twitter Card (for X/Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Sipedo Services | Cleaning & Pest Control in Nairobi',
    description: 'Professional, affordable cleaning and pest control services across Nairobi, Kiambu, and Thika.',
    images: ['https://raw.githubusercontent.com/dewlonsystems/sipedopics/8ea9c6d15b62f2a8f1e16d600bdf8181654d1818/sipedoNew.png'],
  },
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
        <FloatingActions />
      </body>
    </html>
  );
}