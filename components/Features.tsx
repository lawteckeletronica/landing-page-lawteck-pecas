import React from 'react';
import { ClipboardCheck, Truck, Banknote, Shield, Award, Wrench } from 'lucide-react';

const features = [
  {
    icon: <ClipboardCheck size={36} />,
    title: "100% TESTADAS",
    description: "Única empresa que testa eletronicamente cada placa antes de embalar."
  },
  {
    icon: <Truck size={36} />,
    title: "FRETE GRÁTIS",
    description: "Enviamos para todo o Brasil sem custo adicional. Rapidez e segurança."
  },
  {
    icon: <Banknote size={36} />,
    title: "MELHOR PREÇO",
    description: "Cobrimos ofertas da concorrência com qualidade superior garantida."
  },
  {
    icon: <Shield size={36} />,
    title: "GARANTIA REAL",
    description: "Até 5 meses de garantia com troca imediata em caso de defeito."
  },
  {
    icon: <Wrench size={36} />,
    title: "SUPORTE PÓS-VENDA",
    description: "Ajuda técnica especializada para instalação e configuração."
  },
  {
    icon: <Award size={36} />,
    title: "EXPERTISE TOTAL",
    description: "Anos de experiência focados exclusivamente em placas eletrônicas."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-gray-100 relative">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
         <div className="absolute -left-20 top-40 w-96 h-96 bg-brand-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue-600 font-bold tracking-widest uppercase mb-2">Diferenciais</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-brand-blue-900 uppercase">
            Por que Escolher a Lawteck?
          </h3>
          <div className="w-24 h-1 bg-brand-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-blue-800 rounded-3xl p-8 hover:bg-brand-blue-900 transition-all duration-300 hover:shadow-xl-blue hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-brand-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-brand-blue-50 leading-relaxed text-sm font-medium opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};