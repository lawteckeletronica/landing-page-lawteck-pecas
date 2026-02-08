import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Products } from './components/Products';
import { Warranty } from './components/Warranty';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MessageCircle, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-gray-100 p-8">
          <div className="text-center max-w-md">
            <AlertTriangle size={48} className="text-brand-yellow-400 mx-auto mb-4" />
            <h1 className="text-2xl font-black text-brand-blue-900 uppercase mb-2">Algo deu errado</h1>
            <p className="text-gray-600 font-medium mb-6">
              Tente recarregar a página. Se o problema persistir, fale conosco pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5585996513548?text=Olá! O site apresentou um erro."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 active:scale-95 text-white px-6 py-3 rounded-lg font-bold uppercase transition-all"
            >
              <MessageCircle size={18} fill="currentColor" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const FloatingWhatsApp: React.FC = () => (
  <a
    href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica."
    className="fixed bottom-6 right-6 bg-whatsapp hover:bg-green-600 active:scale-95 text-white p-4 rounded-full shadow-2xl z-50 transition-all transform hover:scale-110 flex items-center gap-2 border-4 border-white animate-bounce-slow"
    target="_blank"
    rel="noreferrer"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={28} fill="currentColor" />
    <span className="font-bold hidden sm:inline uppercase text-sm tracking-wider">Orçamento Agora</span>
  </a>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-yellow-400 selection:text-brand-blue-900">
        <Header />

        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Products />
          <Warranty />
          <FAQ />
          <Testimonials />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </ErrorBoundary>
  );
};

export default App;
