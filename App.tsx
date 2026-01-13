import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}