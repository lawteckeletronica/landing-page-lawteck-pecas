import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  
  // Floating WhatsApp Button Component
  const FloatingWhatsApp = () => (
    <a
      href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica."
      className="fixed bottom-6 right-6 bg-whatsapp hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all transform hover:scale-110 flex items-center gap-2 border-4 border-white animate-bounce-slow"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="font-bold hidden sm:inline uppercase text-sm tracking-wider">Orçamento Agora</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-yellow-400 selection:text-brand-blue-900">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Products />
        <Testimonials />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;