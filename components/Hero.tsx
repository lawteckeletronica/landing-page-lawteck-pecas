import React from 'react';
import { AiAssistant } from './AiAssistant';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 lg:pt-48 pb-16 overflow-hidden">
      {/* Background with Gradient/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-600 opacity-90 z-10"></div>
        <img
          src="/images/hero-bg.jpg"
          alt="Placa eletrônica de ar condicionado Lawteck"
          width={1200}
          height={800}
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
        {/* Abstract Curves */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white z-20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-white pt-8">
            <h2 className="text-brand-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm sm:text-base">
              Líder em Eletrônica de Ar Condicionado
            </h2>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none mb-6 text-shadow uppercase">
              Sua Placa <br/>
              <span className="text-brand-yellow-400">Queimou?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl font-light text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Somos a única empresa que <strong>testa 100% das placas</strong>. <span className="text-brand-yellow-400 font-bold">Frete Grátis</span> para todo o Brasil.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="/catalogo-lawteck.pdf" target="_blank" rel="noreferrer" className="bg-white text-brand-blue-900 px-8 py-4 rounded-tr-2xl rounded-bl-2xl font-black text-lg hover:bg-brand-gray-100 transition-all uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Ver Catálogo
              </a>
              <a href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica." target="_blank" rel="noreferrer" className="bg-transparent border-2 border-brand-yellow-400 text-brand-yellow-400 px-8 py-4 rounded-tr-2xl rounded-bl-2xl font-black text-lg hover:bg-brand-yellow-400 hover:text-brand-blue-900 transition-all uppercase">
                Compre sua Placa
              </a>
            </div>
          </div>

          {/* Right Content - The "Form" / AI Assistant Box */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
             <div className="bg-white rounded-xl shadow-2xl p-1 border-b-8 border-brand-yellow-400">
                <div className="bg-brand-blue-50 rounded-t-lg p-6 pb-2">
                   <h3 id="diagnosis" className="text-brand-blue-900 font-black text-2xl uppercase text-center mb-1">
                     Consulte um Técnico
                   </h3>
                   <p className="text-brand-blue-600 text-center text-sm font-bold">
                     Descreva o problema e nosso técnico responde
                   </p>
                </div>
                <div className="p-2">
                  <AiAssistant />
                </div>
             </div>
             
             {/* Decorative Elements behind box */}
             <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-brand-yellow-400 rounded-full opacity-20 blur-xl"></div>
             <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-blue-500 rounded-full opacity-30 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};