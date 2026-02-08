import React, { useState } from 'react';
import { Menu, X, Phone, Snowflake, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'VANTAGENS', href: '#features' },
    { name: 'PRODUTOS', href: '#products' },
    { name: 'GARANTIA', href: '#warranty' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONSULTE UM TÉCNICO', href: '#diagnosis' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Skip Navigation */}
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand-yellow-400 focus:text-brand-blue-900 focus:px-4 focus:py-2 focus:rounded-md focus:font-bold">
        Pular para o conteúdo
      </a>
      {/* Top Bar - Dark Blue */}
      <div className="bg-brand-blue-900 text-white py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-bold tracking-wider">
          <div className="flex gap-4">
            <span>ATENDEMOS TODO O BRASIL</span>
            <span>|</span>
            <span>FRETE GRÁTIS</span>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/lawteckpecas" className="hover:text-brand-yellow-400 transition-colors" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <a href="https://tiktok.com/@lawteckpecas" className="hover:text-brand-yellow-400 transition-colors" target="_blank" rel="noreferrer">TIKTOK</a>
          </div>
        </div>
      </div>

      {/* Main Header - White with Shadow */}
      <div className="bg-white shadow-lg border-b-4 border-brand-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            
            {/* Logo Simulation */}
            <a href="#home" className="flex-shrink-0 flex items-center group">
              <div className="relative flex items-center">
                <Snowflake className="text-brand-blue-800 w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
                <div className="flex flex-col ml-1 leading-none">
                  <div className="flex items-center">
                    <span className="font-black text-2xl sm:text-4xl text-brand-blue-800 tracking-tighter">Law</span>
                    <span className="font-black text-2xl sm:text-4xl text-brand-blue-500 tracking-tighter">Teck</span>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow-400 fill-brand-yellow-400 ml-0.5 -mt-1" />
                  </div>
                  <span className="text-brand-blue-800 font-bold text-xs sm:text-sm tracking-[0.3em] ml-1 uppercase">Peças</span>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-brand-blue-900 hover:text-brand-blue-600 font-bold text-sm transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Call to Action Button */}
              <a
                href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica."
                target="_blank"
                rel="noreferrer"
                className="bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900 px-6 py-3 rounded-tr-xl rounded-bl-xl font-black transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 uppercase tracking-wide skew-x-[-10deg]"
              >
                <span className="skew-x-[10deg] flex items-center gap-2">
                  <Phone size={20} className="fill-brand-blue-900" />
                  (85) 99651-3548
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-blue-900 hover:text-brand-blue-600 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 rounded-md p-1"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-brand-blue-900 border-t border-brand-blue-800 absolute w-full shadow-2xl z-50">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-bold text-white hover:bg-brand-blue-800 hover:text-brand-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                 href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica."
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full text-center mt-6 bg-brand-yellow-400 text-brand-blue-900 px-4 py-4 rounded-lg font-black uppercase"
              >
                Falar com Técnico
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};