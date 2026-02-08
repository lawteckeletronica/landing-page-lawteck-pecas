import React from 'react';
import { ShieldCheck, RefreshCw, Clock, MessageCircle } from 'lucide-react';

const guarantees = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Garantia Real',
    description: 'Até 5 meses de garantia com troca imediata.',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Troca sem Custo',
    description: 'Defeito no prazo? Trocamos e pagamos o frete.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Teste Antes do Envio',
    description: 'Cada placa passa por teste eletrônico completo.',
  },
];

export const Warranty: React.FC = () => {
  return (
    <section id="warranty" className="py-20 bg-brand-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Seal + Text */}
          <div>
            <h2 className="text-brand-yellow-400 font-bold tracking-widest uppercase mb-2">Compromisso</h2>
            <h3 className="text-3xl sm:text-4xl font-black uppercase mb-6">
              Compre com Segurança Total
            </h3>
            <p className="text-brand-blue-50 leading-relaxed font-medium mb-8 max-w-lg">
              Somos a única empresa do Brasil que testa 100% das placas eletronicamente antes do envio. Se não funcionar, trocamos sem custo — incluindo o frete de retorno.
            </p>
            <a
              href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa com garantia."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900 px-8 py-4 rounded-tr-xl rounded-bl-xl font-black uppercase tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Compre com Segurança
            </a>
          </div>

          {/* Right: Guarantee cards */}
          <div className="space-y-4">
            {guarantees.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-brand-yellow-400 rounded-full flex items-center justify-center text-brand-blue-900 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-white uppercase text-sm mb-1">{item.title}</h4>
                  <p className="text-brand-blue-100 text-sm font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
