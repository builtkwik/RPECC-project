'use client';

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Contact Modal Component
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-forest border-4 border-white rounded-brand p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-honey text-2xl font-bold"
        >
          ×
        </button>
        <div className="text-white text-center">
          <p className="mb-4 font-helvetica text-white">
            We're here for you. Reach us at{' '}
            <a href="tel:240-715-2292" className="underline hover:text-honey">
              240-715-2292
            </a>
            {' '}(call or text) or{' '}
            <a href="mailto:hello@rootedlactationed.com" className="underline hover:text-honey">
              hello@rootedlactationed.com
            </a>
            . You'll hear back within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);
    return () => window.removeEventListener('openContactModal', handleOpenModal);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Rooted Perinatal Education Collective</title>
        <meta name="description" content="Providing accessible, inclusive perinatal education, lactation support, and community-based resources that center equity and empowerment for all birthing people." />
        <meta name="theme-color" content="#3B2C23" />
      </head>
      <body>
        <a href="#content" className="skip-link">Skip to content</a>
        <Nav onContactClick={() => setIsContactModalOpen(true)} />
        <main id="content">{children}</main>
        <Footer onContactClick={() => setIsContactModalOpen(true)} />
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        <Analytics />
      </body>
    </html>
  );
}

function Nav({ onContactClick }: { onContactClick: () => void }) {
  return (
    <nav className="sticky top-0 z-40 bg-bark/95 backdrop-blur shadow-card border-b-2 border-forest/20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white text-xl">
          <img src="/images/Untitled design (1).png" alt="Rooted Logo" className="w-12 h-12" />
          Rooted
        </Link>
        <div className="hidden md:flex gap-6 text-white">
          <a href="#services" className="hover:text-honey transition font-helvetica">Services</a>
          <a href="#about" className="hover:text-honey transition font-helvetica">About</a>
          <a href="#community" className="hover:text-honey transition font-helvetica">Community</a>
          <a href="#contact" className="hover:text-honey transition font-helvetica">Contact</a>
        </div>
        <button onClick={onContactClick} className="hidden md:inline-flex btn btn-primary font-helvetica">Contact Us</button>
        <MobileMenu onContactClick={onContactClick} />
      </div>
    </nav>
  );
}

function MobileMenu({ onContactClick }: { onContactClick: () => void }) {
  return (
    <details className="md:hidden relative">
      <summary className="cursor-pointer text-white list-none">Menu</summary>
      <div className="absolute right-0 top-full mt-2 bg-white rounded-brand shadow-card p-4 min-w-[160px] flex flex-col gap-3">
        <a href="#services" className="text-char hover:text-honey transition font-helvetica">Services</a>
        <a href="#about" className="text-char hover:text-honey transition font-helvetica">About</a>
        <a href="#community" className="text-char hover:text-honey transition font-helvetica">Community</a>
        <a href="#contact" className="text-char hover:text-honey transition font-helvetica">Contact</a>
      </div>
    </details>
  );
}

function Footer({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer>
      <div className="bg-gradient-to-b from-moss/30 via-sage/20 to-cream/80">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <img 
              src="/images/Untitled design (1).png" 
              alt="Rooted Lactation & Education Logo" 
              className="w-24 h-24 mb-4"
            />
            <div className="text-cocoa text-lg">Rooted Perinatal Education Collective</div>
            <p className="mt-3 text-char/80 font-helvetica italic">
              "Accessible, inclusive perinatal education and lactation support"
            </p>
          </div>
          <div>
            <div className="text-cocoa mb-3 font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>SITE MENU</div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-honey transition">Services</a></li>
              <li><a href="#about" className="hover:text-honey transition">About</a></li>
              <li><a href="#community" className="hover:text-honey transition">Community</a></li>
              <li><a href="#contact" className="hover:text-honey transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-char/60 py-6">© {new Date().getFullYear()} Rooted Perinatal Education Collective.</div>
      </div>
    </footer>
  );
}