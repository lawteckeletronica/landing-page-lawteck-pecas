import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Placa Universal Split",
    condition: "Nova",
    price: "R$ 189,90",
    oldPrice: "R$ 250,00",
    warranty: "3 Meses",
    features: ["Compatível 7k-30k", "Display Digital", "Com Controle"],
    img: "https://picsum.photos/id/1/400/300"
  },
  {
    id: 2,
    title: "Springer Midea 12k",
    condition: "Seminova",
    price: "R$ 299,00",
    oldPrice: "R$ 580,00",
    warranty: "5 Meses",
    features: ["Original", "Revisada", "Plug & Play"],
    img: "https://picsum.photos/id/60/400/300",
    popular: true
  },
  {
    id: 3,
    title: "Inverter LG Dual Voice",
    condition: "Seminova",
    price: "R$ 450,00",
    oldPrice: "R$ 900,00",
    warranty: "5 Meses",
    features: ["Inverter", "Testada", "Econômica"],
    img: "https://picsum.photos/id/20/400/300"
  },
  {
    id: 4,
    title: "Samsung Vírus Doctor",
    condition: "Seminova",
    price: "R$ 380,00",
    oldPrice: "R$ 850,00",
    warranty: "5 Meses",
    features: ["Original", "Smart", "Envio Imediato"],
    img: "https://picsum.photos/id/119/400/300"
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-brand-blue-600 font-bold tracking-widest uppercase mb-2">Loja Virtual</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-blue-900 uppercase">
              Placas em Destaque
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group">
              <div className="relative overflow-hidden h-56 rounded-t-xl bg-gray-100">
                {product.popular && (
                  <div className="absolute top-4 right-0 bg-brand-yellow-400 text-brand-blue-900 text-xs font-black px-3 py-1 z-10 uppercase shadow-md skew-x-[-10deg]">
                    Mais Vendida
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                   <span className={`text-xs font-black px-3 py-1 rounded uppercase shadow-sm ${product.condition === 'Nova' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                     {product.condition}
                   </span>
                </div>
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-black text-brand-blue-900 text-lg mb-3 uppercase leading-tight min-h-[3rem]">
                  {product.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feat, idx) => (
                    <span key={idx} className="text-[10px] font-bold bg-brand-blue-50 text-brand-blue-600 px-2 py-1 rounded uppercase border border-brand-blue-100">
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-xs text-gray-400 font-bold line-through">{product.oldPrice}</span>
                     <span className="text-xs text-green-600 font-bold bg-green-50 px-1 rounded">-{Math.round((1 - parseInt(product.price.replace(/\D/g,''))/parseInt(product.oldPrice.replace(/\D/g,''))) * 100)}%</span>
                  </div>
                  <div className="text-3xl font-black text-brand-blue-800 tracking-tight mb-4">{product.price}</div>
                  
                  <a
                    href={`https://wa.me/5585996513548?text=${encodeURIComponent(`Olá! Tenho interesse na placa:\n\n📋 *${product.title}*\n📦 Condição: ${product.condition}\n💰 Valor: ${product.price}\n🛡️ Garantia: ${product.warranty}\n\nGostaria de comprar!`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block bg-brand-blue-600 hover:bg-brand-blue-800 text-white text-center font-bold py-3 rounded-lg uppercase text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};