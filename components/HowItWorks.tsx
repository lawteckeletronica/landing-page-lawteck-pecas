import React from 'react';
import { Search, MessageCircle, Truck, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} />,
    step: '01',
    title: 'Escolha sua Placa',
    description: 'Navegue pelo catálogo ou envie o modelo do seu ar condicionado.',
  },
  {
    icon: <MessageCircle size={32} />,
    step: '02',
    title: 'Fale com o Técnico',
    description: 'Nosso especialista confirma compatibilidade e tira suas dúvidas.',
  },
  {
    icon: <Truck size={32} />,
    step: '03',
    title: 'Receba em Casa',
    description: 'Enviamos testada, embalada e com frete grátis para todo o Brasil.',
  },
  {
    icon: <Wrench size={32} />,
    step: '04',
    title: 'Instale com Suporte',
    description: 'Acompanhamos a instalação por vídeo se você precisar de ajuda.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-5">
        <div className="absolute -right-20 top-20 w-96 h-96 bg-brand-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue-600 font-bold tracking-widest uppercase mb-2">Passo a Passo</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-brand-blue-900 uppercase">
            Como Funciona
          </h3>
          <div className="w-24 h-1 bg-brand-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative text-center group">
              {/* Connector line (hidden on last item and mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-brand-blue-100 z-0"></div>
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-brand-blue-800 rounded-full flex items-center justify-center text-brand-yellow-400 mb-6 group-hover:bg-brand-blue-900 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {item.icon}
                </div>
                <span className="text-brand-yellow-400 font-black text-sm tracking-widest mb-2">{item.step}</span>
                <h4 className="font-black text-brand-blue-900 text-lg uppercase mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-[220px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
