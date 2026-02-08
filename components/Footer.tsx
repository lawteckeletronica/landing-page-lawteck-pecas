import React from 'react';
import { MapPin, Phone, Mail, Instagram, Snowflake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t-8 border-brand-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6 text-brand-blue-500">
              <Snowflake size={32} />
              <span className="font-black text-2xl text-white uppercase tracking-tighter">LawTeck</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-medium">
              Especialistas em placas eletrônicas de ar condicionado. A única do Brasil com teste 100% garantido antes do envio.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/lawteckpecas" target="_blank" rel="noreferrer" className="bg-brand-blue-800 p-2 rounded hover:bg-brand-yellow-400 hover:text-brand-blue-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@lawteckpecas" target="_blank" rel="noreferrer" className="bg-brand-blue-800 p-2 rounded hover:bg-brand-yellow-400 hover:text-brand-blue-900 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase text-brand-yellow-400">Fale Conosco</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="flex-shrink-0 text-brand-blue-500" size={20} />
                <a href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica." target="_blank" rel="noreferrer" className="font-bold hover:text-brand-yellow-400 transition-colors">(85) 99651-3548</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="flex-shrink-0 text-brand-blue-500" size={20} />
                <span>contato@lawteck.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-brand-blue-500" size={20} />
                <span>Rua Álvaro Fernandes, N 244, A<br/>Fortaleza - CE<br/><span className="text-xs text-gray-500 uppercase">Enviamos para todo o Brasil</span></span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase text-brand-yellow-400">Navegação</h4>
            <ul className="space-y-3 text-gray-300 font-bold text-sm uppercase">
              <li><a href="#home" className="hover:text-brand-blue-500 transition-colors">Início</a></li>
              <li><a href="#products" className="hover:text-brand-blue-500 transition-colors">Produtos</a></li>
              <li><a href="#diagnosis" className="hover:text-brand-blue-500 transition-colors">Consulte um Técnico</a></li>
              <li><a href="https://wa.me/5585996513548?text=Olá! Quero comprar minha placa eletrônica." target="_blank" rel="noreferrer" className="hover:text-brand-blue-500 transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase text-brand-yellow-400">Compromisso</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Envio em até 24h
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Rastreamento Online
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Pagamento Seguro
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Suporte Técnico Gratuito
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-bold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Lawteck Peças. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Lawteck Peças - Atendimento via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
};