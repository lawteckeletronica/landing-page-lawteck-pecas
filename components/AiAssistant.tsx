import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const message = `Olá! Preciso de um diagnóstico para meu ar condicionado:\n\n🔧 *Problema relatado:*\n${input.trim()}\n\nPodem me ajudar?`;
    const url = `https://wa.me/5585996513548?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white p-4 h-auto">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <label htmlFor="problem" className="block text-sm font-bold text-gray-600 mb-2 uppercase">
          Descreva o defeito:
        </label>
        <textarea
          id="problem"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-40 p-3 bg-gray-100 border-2 border-transparent focus:border-brand-blue-500 rounded-lg focus:outline-none resize-none text-gray-800 text-sm mb-4"
          placeholder="Ex: Ar Midea 12000 não liga o compressor e mostra erro E3..."
        />

        <button
          type="submit"
          disabled={!input.trim()}
          className="w-full bg-whatsapp hover:bg-green-600 text-white p-4 rounded-lg font-bold uppercase tracking-wide shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <MessageCircle size={18} fill="currentColor" />
          Enviar para o Técnico
          <Send size={18} />
        </button>

        <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
          Nosso técnico responde em minutos pelo WhatsApp
        </p>
      </form>
    </div>
  );
};
