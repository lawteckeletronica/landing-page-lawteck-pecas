import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Carlos Eduardo",
    role: "Técnico",
    location: "SP",
    text: "O diferencial é que elas realmente vêm testadas. Nunca tive retorno de garantia. Recomendo demais!",
    stars: 5
  },
  {
    name: "Mariana Souza",
    role: "Cliente",
    location: "BA",
    text: "A autorizada cobrou R$ 1.200. Comprei a seminova na Lawteck pela metade do preço e está perfeita.",
    stars: 5
  },
  {
    name: "Roberto Lima",
    role: "Empresário",
    location: "CE",
    text: "Suporte técnico sensacional. Tive dúvida na instalação e me ajudaram por vídeo. Nota 10.",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow-400 font-bold tracking-widest uppercase mb-2">Depoimentos</h2>
          <h3 className="text-3xl sm:text-5xl font-black uppercase mb-6">
            O Que Nossos Clientes Dizem
          </h3>
          <div className="flex justify-center items-center gap-2 bg-white/10 inline-flex px-4 py-2 rounded-full backdrop-blur-sm">
             <div className="flex text-brand-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
             </div>
             <span className="font-bold text-sm">4.9/5 de Satisfação</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-brand-blue-800 p-8 rounded-tr-3xl rounded-bl-3xl border border-brand-blue-700 relative hover:bg-brand-blue-700 transition-colors">
              <Quote className="text-brand-blue-900 absolute top-6 right-6 opacity-50" size={64} />
              
              <div className="flex text-brand-yellow-400 mb-6">
                {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              
              <p className="text-brand-blue-50 mb-8 font-medium italic relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-brand-blue-600 pt-6">
                <div className="w-12 h-12 bg-brand-yellow-400 rounded-full flex items-center justify-center text-brand-blue-900 font-black text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">{review.name}</h4>
                  <p className="text-xs text-brand-blue-300 font-bold uppercase">{review.role} • {review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};